"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LOGO_FILES = [
  "Frame 2147223087 (1).png", // 0: MongoDB
  "Frame 2147223087 (2).png", // 1: Java
  "Frame 2147223087.png",     // 2: Next.js/Cloud
  "Frame 2147223089 (1).png", // 3: PHP
  "Frame 2147223089.png",     // 4: HTML5
  "Frame 2147223090 (1).png", // 5: n8n
  "Frame 2147223090 (2).png", // 6: React
  "Frame 2147223090 (3).png", // 7: Vue
  "Frame 2147223090 (4).png", // 8: WordPress
  "Frame 2147223090.png",     // 9: Node.js
  "Frame 2147223091 (1).png", // 10: W logo
  "Frame 2147223091 (2).png", // 11: AI Agents (gray)
  "Frame 2147223091 (3).png", // 12: Figma
  "Frame 2147223091.png",     // 13: SQL
  "Frame 2147223092 (1).png", // 14: express
  "Frame 2147223092 (2).png", // 15: React (light blue)
  "Frame 2147223092.png",     // 16: JS
  "Frame 2147223095.png",     // 17: AI Agents (dark)
  "Frame 2147223096.png",     // 18: VS
  "Frame 2147223102.png",     // 19: Next/Docker
  "Frame 2147223103.png",     // 20: Java (white/orange)
  "Frame 2147223104.png",     // 21: CSS3
  "Frame 2147223105.png",     // 22: Zapier
];

// Grid Configurations
const ROWS_DESKTOP = 5;
const COLS_DESKTOP = 11;
const SOLVED_DESKTOP = [
  // Row 0
  -1, -1, -1, -1, -1,  0, -1, -1, -1, -1, -1,
  // Row 1
  -1,  1,  2,  3,  4, -1,  5, 10, -1,  7, -1,
  // Row 2
   8, -1,  9, -1, -1,  6, -1, 11, 12, -1, 13,
  // Row 3
  -1, 14, 15, 16, 17, -1, 18, 19, 20, 21, -1,
  // Row 4
  -1, -1, -1, -1, -1, 22, -1, -1, -1, -1, -1
];

const ROWS_TABLET = 7;
const COLS_TABLET = 6;
const SOLVED_TABLET = [
  // Row 0
  -1, -1,  0, -1, -1, -1,
  // Row 1
  -1,  1,  2,  3,  4, -1,
  // Row 2
   5,  7, -1, -1,  8,  9,
  // Row 3
  -1, 10,  6, 11, 12, -1, // React (6) is in the center
  // Row 4
  13, 14, -1, -1, 15, 16,
  // Row 5
  -1, 17, 18, 19, 20, -1,
  // Row 6
  -1, -1, 21, 22, -1, -1
];

const ROWS_MOBILE = 10;
const COLS_MOBILE = 5;
const SOLVED_MOBILE = [
  // Row 0
  -1, -1,  0, -1, -1,
  // Row 1
  -1,  1,  2,  3, -1,
  // Row 2
   4,  5, -1,  7,  8,
  // Row 3
  -1,  9, 10, 11, -1,
  // Row 4
  -1, -1,  6, -1, -1, // React (6) is in the center
  // Row 5
  -1, 12, 13, 14, -1,
  // Row 6
  15, 16, -1, 17, 18,
  // Row 7
  -1, 19, 20, 21, -1,
  // Row 8
  -1, -1, 22, -1, -1,
  // Row 9
  -1, -1, -1, -1, -1
];

export default function TechPuzzleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const puzzleRef = useRef<HTMLDivElement>(null);

  // Puzzle state variables
  const [rows, setRows] = useState(ROWS_DESKTOP);
  const [cols, setCols] = useState(COLS_DESKTOP);
  const [solvedBoard, setSolvedBoard] = useState<number[]>(SOLVED_DESKTOP);
  const [board, setBoard] = useState<number[]>([]);
  const [isSolved, setIsSolved] = useState(false);

  // Helper to shuffle board keeping center React logo locked
  const shuffleBoardKeepingCenter = (solved: number[], centerIdx: number) => {
    const shuffleIndices: number[] = [];
    const logoValues: number[] = [];

    solved.forEach((val, idx) => {
      if (val !== -1 && idx !== centerIdx) {
        shuffleIndices.push(idx);
        logoValues.push(val);
      }
    });

    for (let i = logoValues.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = logoValues[i];
      logoValues[i] = logoValues[j];
      logoValues[j] = temp;
    }

    const newBoard = [...solved];
    shuffleIndices.forEach((idx, i) => {
      newBoard[idx] = logoValues[i];
    });

    return newBoard;
  };

  // Resize listener to switch grid configurations
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newRows = ROWS_DESKTOP;
      let newCols = COLS_DESKTOP;
      let newSolved = SOLVED_DESKTOP;
      let centerIdx = 27;

      if (width < 640) {
        newRows = ROWS_MOBILE;
        newCols = COLS_MOBILE;
        newSolved = SOLVED_MOBILE;
        centerIdx = 22;
      } else if (width < 1024) {
        newRows = ROWS_TABLET;
        newCols = COLS_TABLET;
        newSolved = SOLVED_TABLET;
        centerIdx = 20;
      }

      setRows(newRows);
      setCols(newCols);
      setSolvedBoard(newSolved);
      
      const shuffled = shuffleBoardKeepingCenter(newSolved, centerIdx);
      setBoard(shuffled);
      setIsSolved(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP scroll trigger entries
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Puzzle board entrance
      gsap.fromTo(
        puzzleRef.current,
        { scale: 0.92, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "back.out(1.1)",
          scrollTrigger: {
            trigger: puzzleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const dragStartRef = useRef<{ x: number; y: number; pos: number } | null>(null);

  const handlePointerDown = (e: React.PointerEvent, pos: number) => {
    if (isSolved) return;
    if (board[pos] === -1) return;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {}

    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      pos: pos,
    };
  };

  const handlePointerMove = (e: React.PointerEvent, pos: number) => {
    if (!dragStartRef.current || dragStartRef.current.pos !== pos) return;

    const start = dragStartRef.current;
    const deltaX = e.clientX - start.x;
    const deltaY = e.clientY - start.y;
    const threshold = 25; // Minimum drag distance to register a slide

    if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
      let dir: "up" | "down" | "left" | "right" | null = null;
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        dir = deltaX > 0 ? "right" : "left";
      } else {
        dir = deltaY > 0 ? "down" : "up";
      }

      const row = Math.floor(pos / cols);
      const col = pos % cols;
      let targetPos = -1;

      if (dir === "up" && row > 0) targetPos = pos - cols;
      if (dir === "down" && row < rows - 1) targetPos = pos + cols;
      if (dir === "left" && col > 0) targetPos = pos - 1;
      if (dir === "right" && col < cols - 1) targetPos = pos + 1;

      if (targetPos !== -1 && board[targetPos] === -1) {
        const nextBoard = [...board];
        nextBoard[targetPos] = board[pos];
        nextBoard[pos] = -1;
        setBoard(nextBoard);

        // Check if solved
        const won = nextBoard.every((val, idx) => val === solvedBoard[idx]);
        if (won) {
          setIsSolved(true);
        }

        // Cancel current drag action so we don't repeat movements in a single swipe
        dragStartRef.current = null;
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent, pos: number) => {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {}
    dragStartRef.current = null;
  };

  // We generate a list of background grid cell indexes
  const bgCells = Array.from({ length: rows * cols }, (_, i) => i);

  return (
    <section
      ref={sectionRef}
      id="puzzle-section"
      style={{
        background: "#ffffff",
        padding: "90px 40px 100px 40px",
        fontFamily: "'Stack Sans Headline', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background radial glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700px", height: "700px",
        background: "radial-gradient(circle, rgba(77,166,255,0.06) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none",
      }} />

      {/* 1. Header Area */}
      <div
        ref={headerRef}
        style={{
          maxWidth: "800px",
          margin: "0 auto 50px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "0.88px solid transparent",
            borderRadius: "9999px",
            padding: "6px 18px 6px 14px",
            background: "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #4BC3FE 0%, #0068F7 40%, #012B8F 70%, #00154A 100%) border-box",
            fontFamily: "'Stack Sans Headline', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            color: "#0f0f0f",
            width: "fit-content",
            marginBottom: "24px",
          }}
        >
          <span style={{ color: "#0068F7", fontSize: "12px", fontWeight: 600 }}>✦</span>
          <span>Technology That Performs</span>
        </div>

        <h2
          style={{
            fontFamily: "'Stack Sans Headline', sans-serif",
            fontSize: "clamp(32px, 3.6vw, 48px)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#0a0a0a",
            letterSpacing: "-0.02em",
            margin: "0 0 20px 0",
          }}
        >
          Technologies We Use For
          <br />
          Website Design
        </h2>

        <p
          style={{
            fontFamily: "'Stack Sans Headline', sans-serif",
            fontSize: "clamp(13px, 0.9vw, 15px)",
            fontWeight: 400,
            color: "#555555",
            lineHeight: 1.6,
            maxWidth: "680px",
            margin: "0 0 16px 0",
          }}
        >
          As The Leading Website Development Company In Coimbatore, We Develop HTML, PHP Websites That Work Efficiently With More Responsiveness. Hold & drag/swipe tiles to move them!
        </p>
      </div>

      {/* 2. Puzzle Game Area */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
        <div style={{ width: "100%", maxWidth: "1100px", overflowX: "auto", display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
          <div
            ref={puzzleRef}
            className="puzzle-grid"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
              gap: "var(--gap)",
              background: "rgba(240, 244, 248, 0.5)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(0, 104, 247, 0.08)",
              borderRadius: "24px",
              padding: "16px",
              boxShadow: "0 20px 50px rgba(0, 60, 180, 0.03), inset 0 2px 4px rgba(255,255,255,0.8)",
              position: "relative",
              width: "calc(var(--cols) * var(--tile-size) + (var(--cols) - 1) * var(--gap) + 32px)",
              height: "calc(var(--rows) * var(--tile-size) + (var(--rows) - 1) * var(--gap) + 32px)",
              userSelect: "none",
            }}
          >
            {/* Background static empty cells */}
            {bgCells.map((idx) => (
              <div
                key={`empty-bg-${idx}`}
                className="puzzle-tile-empty"
                style={{
                  borderRadius: "16px",
                  background: "rgba(255, 255, 255, 0.25)",
                  border: "1.5px dashed rgba(0, 104, 247, 0.08)",
                  width: "var(--tile-size)",
                  height: "var(--tile-size)",
                }}
              />
            ))}

            {/* Foreground absolute-positioned logos */}
            {LOGO_FILES.map((logoFile, logoIndex) => {
              // Find where this logo currently is on the board
              const tilePos = board.indexOf(logoIndex);
              if (tilePos === -1) return null; // Not currently on board (shouldn't happen)

              const row = Math.floor(tilePos / cols);
              const col = tilePos % cols;

              return (
                <div
                  key={`tile-${logoIndex}`}
                  onPointerDown={(e) => handlePointerDown(e, tilePos)}
                  onPointerMove={(e) => handlePointerMove(e, tilePos)}
                  onPointerUp={(e) => handlePointerUp(e, tilePos)}
                  className="puzzle-tile"
                  style={{
                    borderRadius: "16px",
                    background: "#ffffff",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.03)",
                    width: "var(--tile-size)",
                    height: "var(--tile-size)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "grab",
                    position: "absolute",
                    left: `calc(${col} * (var(--tile-size) + var(--gap)) + 16px)`,
                    top: `calc(${row} * (var(--tile-size) + var(--gap)) + 16px)`,
                    touchAction: "none", // Prevent native scrolling when dragging on mobile
                    transition: "left 0.28s cubic-bezier(0.25, 1, 0.5, 1), top 0.28s cubic-bezier(0.25, 1, 0.5, 1), transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 104, 247, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.03)";
                  }}
                >
                  <div style={{ position: "relative", width: "70%", height: "70%", pointerEvents: "none" }}>
                    <Image
                      src={`/landing page/tech logo/${logoFile}`}
                      alt="Technology Logo"
                      fill
                      className="object-contain p-1"
                      priority
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Solver Notification */}
        {isSolved && (
          <div
            style={{
              marginTop: "24px",
              background: "rgba(0, 104, 247, 0.1)",
              border: "1px dashed rgba(0, 104, 247, 0.35)",
              borderRadius: "9999px",
              padding: "8px 24px",
              color: "#0068F7",
              fontWeight: 600,
              fontSize: "14px",
              animation: "pulse 1.5s infinite",
            }}
          >
            ✦ Technology Puzzle Solved!
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --tile-size: 80px;
          --gap: 12px;
          --rows: ${ROWS_DESKTOP};
          --cols: ${COLS_DESKTOP};
        }
        .puzzle-grid {
          transition: width 0.3s ease, height 0.3s ease;
        }
        @media (max-width: 1023px) {
          :root {
            --tile-size: 65px;
            --gap: 8px;
            --rows: ${ROWS_TABLET};
            --cols: ${COLS_TABLET};
          }
          #puzzle-section {
            padding: 60px 20px !important;
          }
          .puzzle-tile, .puzzle-tile-empty {
            border-radius: 12px !important;
          }
          .puzzle-grid {
            border-radius: 20px !important;
          }
        }
        @media (max-width: 639px) {
          :root {
            --tile-size: 50px;
            --gap: 6px;
            --rows: ${ROWS_MOBILE};
            --cols: ${COLS_MOBILE};
          }
          .puzzle-tile, .puzzle-tile-empty {
            border-radius: 8px !important;
          }
          .puzzle-grid {
            border-radius: 16px !important;
          }
        }
      `}} />
    </section>
  );
}
