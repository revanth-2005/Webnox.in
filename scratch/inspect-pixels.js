const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function analyzePng(filePath) {
  const buf = fs.readFileSync(filePath);
  
  // Verify signature
  if (buf.readUInt32BE(0) !== 0x89504E47 || buf.readUInt32BE(4) !== 0x0D0A1A0A) {
    throw new Error('Not a PNG file');
  }
  
  let pos = 8;
  let width = 0;
  let height = 0;
  let bitDepth = 0;
  let colorType = 0;
  let idatBuffers = [];
  
  while (pos < buf.length) {
    const length = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    const chunkData = buf.subarray(pos + 8, pos + 8 + length);
    
    if (type === 'IHDR') {
      width = chunkData.readUInt32BE(0);
      height = chunkData.readUInt32BE(4);
      bitDepth = chunkData[8];
      colorType = chunkData[9];
      console.log(`IHDR: ${width}x${height}, bitDepth=${bitDepth}, colorType=${colorType}`);
    } else if (type === 'IDAT') {
      idatBuffers.push(chunkData);
    } else if (type === 'IEND') {
      break;
    }
    
    pos += 12 + length;
  }
  
  if (colorType !== 6 || bitDepth !== 8) {
    console.log('Only 8-bit RGBA PNGs are supported by this analyzer.');
    return;
  }
  
  const idatBuf = Buffer.concat(idatBuffers);
  const inflated = zlib.inflateSync(idatBuf);
  
  // PNG decompressed format:
  // Each scanline is 1 byte filter type + width * 4 bytes (RGBA)
  const bytesPerPixel = 4;
  const scanlineLength = 1 + width * bytesPerPixel;
  
  // We want to find the horizontal columns that have non-transparent pixels (alpha > 0)
  const colHasPixels = new Array(width).fill(false);
  const rowHasPixels = new Array(height).fill(false);
  
  // Unfilter scanlines (for our purpose of just checking alpha, we only need to reconstruct alpha if filter is used. 
  // Wait, alpha is filtered too. We should do proper unfiltering!)
  // Let's implement PNG unfiltering for RGBA
  const reconstructed = Buffer.alloc(width * height * bytesPerPixel);
  
  for (let y = 0; y < height; y++) {
    const scanlineStart = y * scanlineLength;
    const filterType = inflated[scanlineStart];
    
    for (let x = 0; x < width; x++) {
      const rawIdx = scanlineStart + 1 + x * bytesPerPixel;
      const reconIdx = (y * width + x) * bytesPerPixel;
      
      for (let c = 0; c < bytesPerPixel; c++) {
        const rawVal = inflated[rawIdx + c];
        let priorVal = x > 0 ? reconstructed[reconIdx - bytesPerPixel + c] : 0;
        let aboveVal = y > 0 ? reconstructed[reconIdx - width * bytesPerPixel + c] : 0;
        let priorAboveVal = (x > 0 && y > 0) ? reconstructed[reconIdx - (width + 1) * bytesPerPixel + c] : 0;
        
        let reconVal = 0;
        if (filterType === 0) { // None
          reconVal = rawVal;
        } else if (filterType === 1) { // Sub
          reconVal = (rawVal + priorVal) & 0xFF;
        } else if (filterType === 2) { // Up
          reconVal = (rawVal + aboveVal) & 0xFF;
        } else if (filterType === 3) { // Average
          reconVal = (rawVal + Math.floor((priorVal + aboveVal) / 2)) & 0xFF;
        } else if (filterType === 4) { // Paeth
          const p = priorVal + aboveVal - priorAboveVal;
          const pa = Math.abs(p - priorVal);
          const pb = Math.abs(p - aboveVal);
          const pc = Math.abs(p - priorAboveVal);
          let paeth = 0;
          if (pa <= pb && pa <= pc) paeth = priorVal;
          else if (pb <= pc) paeth = aboveVal;
          else paeth = priorAboveVal;
          reconVal = (rawVal + paeth) & 0xFF;
        }
        reconstructed[reconIdx + c] = reconVal;
      }
      
      const alpha = reconstructed[reconIdx + 3];
      if (alpha > 5) { // threshold
        colHasPixels[x] = true;
        rowHasPixels[y] = true;
      }
    }
  }
  
  // Find bounding boxes or segments of pixels
  // We expect a left icon, then a gap, then text
  let segments = [];
  let inSegment = false;
  let start = -1;
  for (let x = 0; x < width; x++) {
    if (colHasPixels[x] && !inSegment) {
      start = x;
      inSegment = true;
    } else if (!colHasPixels[x] && inSegment) {
      segments.push({ start, end: x - 1 });
      inSegment = false;
    }
  }
  if (inSegment) {
    segments.push({ start, end: width - 1 });
  }
  
  console.log('Horizontal segments of non-transparent pixels:', segments);
  
  // Let's also find the vertical range for rows
  let top = -1, bottom = -1;
  for (let y = 0; y < height; y++) {
    if (rowHasPixels[y]) {
      if (top === -1) top = y;
      bottom = y;
    }
  }
  console.log(`Vertical bounds: top=${top}, bottom=${bottom}`);
}

const logoPath = path.join(process.cwd(), 'public', 'webnox-logo.png');
analyzePng(logoPath);
