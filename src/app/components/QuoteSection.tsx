"use client";

import React from "react";
import Image from "next/image";

export default function QuoteSection() {
  return (
    <section
      id="quote"
      className="relative bg-[#000714] text-white flex items-center justify-center py-20 px-6 md:px-10 overflow-hidden font-sans"
    >
      {/* Background Glowing Gradients */}
      <div
        className="absolute w-[600px] h-[600px] top-1/2 -left-[10%] -translate-y-1/2 filter blur-[50px] pointer-events-none z-0 opacity-70"
        style={{
          background: "radial-gradient(circle, rgba(0,104,247,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] top-1/2 -right-[10%] -translate-y-1/2 filter blur-[50px] pointer-events-none z-0 opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(0,104,247,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center z-10">
        {/* LEFT: Text Content */}
        <div className="quote-left-content flex flex-col items-start text-left min-w-0">
          {/* Badge: + Smart. Fast. Scalable. */}
          <div className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 bg-[#0068F7]/10 border border-[#0068F7]/35 mb-8 shadow-[0_0_15px_rgba(0,104,247,0.1)]">
            <span className="text-xs font-semibold text-[#4DA6FF] tracking-wider">
              ✦ Smart. Fast. Scalable.
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-light leading-[1.15] text-white tracking-tight mb-6 font-sans">
            Trusted And Professional
            <br />
            Website Designers In
            <br />
            Coimbatore
          </h2>

          {/* Subtitle / Tagline */}
          <p className="text-base md:text-lg lg:text-xl font-normal text-white mb-6 leading-relaxed opacity-90">
            Providing One Stop Best Web Solutions For All Your Business Needs!
          </p>

          {/* Body Paragraph */}
          <p className="text-sm md:text-base font-light text-[#B0C4DE] leading-relaxed max-w-xl tracking-wide">
            We Are One Of The Most Reputed Website Designers And Digital Marketing Partners In Coimbatore. Our Services Will Equip Small Business Owners And Start-Ups To Reap The Benefits At A Faster Pace. Are You Seeking For A Faithful And Best Web Design Company In Coimbatore, Consider Webnox Technologies.
            <a
              href="#"
              className="text-white font-semibold underline hover:text-[#4DA6FF] ml-1.5 transition-colors duration-200"
            >
              Read More..
            </a>
          </p>
        </div>

        {/* RIGHT: Quote Form with Glow Beam */}
        <div className="quote-form-container w-[540px] max-w-full mx-auto relative">
          {/* Glow beam image — absolute behind card, upper cone shows above card */}
          <div className="quote-glow-beam absolute left-1/2 -translate-x-1/2 pointer-events-none z-10">
            <Image
              src="/quatsectweb.webp"
              alt="Glow Beam"
              fill
              className="object-contain object-top"
              priority
            />
          </div>

          {/* Glassmorphic Form Card — overlays on lower portion of glow image */}
          <div className="quote-form-card w-full bg-[#080f24]/20 backdrop-blur-sm border border-[#1b2b52]/50 rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] relative z-20">
            {/* Header */}
            <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-2 tracking-tight">
              Request a Free Quote
            </h3>
            <p className="text-xs md:text-sm font-light text-[#8c9fc2] text-center mb-8 leading-relaxed md:max-w-none max-w-[260px] mx-auto">
              Enter your details we will connect you with the right person
            </p>

            {/* Form Fields */}
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border border-[#20335c]/70 rounded-full px-6 text-sm text-white placeholder-[#607396] outline-none transition-all duration-200 focus:border-[#2979ff] focus:ring-1 focus:ring-[#2979ff] h-[50px]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border border-[#20335c]/70 rounded-full px-6 text-sm text-white placeholder-[#607396] outline-none transition-all duration-200 focus:border-[#2979ff] focus:ring-1 focus:ring-[#2979ff] h-[50px]"
                />
              </div>

              {/* Row 2: Mobile No */}
              <input
                type="tel"
                placeholder="Mobile No"
                className="bg-transparent border border-[#20335c]/70 rounded-full px-6 text-sm text-white placeholder-[#607396] outline-none transition-all duration-200 focus:border-[#2979ff] focus:ring-1 focus:ring-[#2979ff] h-[50px]"
              />

              {/* Row 3: Your Message */}
              <textarea
                placeholder="Your Message"
                rows={4}
                className="bg-transparent border border-[#20335c]/70 rounded-[24px] px-6 py-4 text-sm text-white placeholder-[#607396] outline-none transition-all duration-200 focus:border-[#2979ff] focus:ring-1 focus:ring-[#2979ff] resize-none"
              />

              {/* Let Talk..! Button */}
              <button
                type="submit"
                className="h-[50px] rounded-full bg-gradient-to-r from-[#2979ff] to-[#1565c0] text-white text-sm font-semibold transition-all duration-300 shadow-[0_4px_16px_rgba(41,121,255,0.3)] hover:shadow-[0_6px_20px_rgba(41,121,255,0.5)] hover:-translate-y-0.5 active:translate-y-0 mt-2 cursor-pointer"
              >
                Let Talk..!
              </button>
            </form>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .quote-form-container {
          padding-top: 260px;
        }
        .quote-glow-beam {
          top: -30px;
          width: 700px;
          height: 660px;
        }
        .quote-form-card {
          padding: 40px;
        }
        .quote-form-card input {
          padding-left: 24px !important;
          padding-right: 24px !important;
        }
        .quote-form-card textarea {
          padding: 16px 24px !important;
        }
        @media (max-width: 1023px) {
          #quote {
            padding: 60px 20px !important;
          }
          .quote-left-content {
            align-items: center !important;
            text-align: center !important;
          }
          .quote-left-content h2 {
            text-align: center !important;
            font-size: 38px !important;
          }
          .quote-left-content p {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .quote-form-container {
            padding-top: 100px;
          }
          .quote-glow-beam {
            top: -20px;
            width: 480px;
            height: 400px;
          }
          .quote-form-card {
            padding: 30px 20px;
            border-radius: 24px;
          }
        }
        @media (max-width: 639px) {
          .quote-left-content h2 {
            font-size: 28px !important;
          }
          .quote-form-container {
            padding-top: 60px;
          }
          .quote-glow-beam {
            top: -15px;
            width: 320px;
            height: 280px;
          }
          .quote-form-card {
            padding: 24px 16px;
            border-radius: 20px;
          }
        }
      `}} />
    </section>
  );
}
