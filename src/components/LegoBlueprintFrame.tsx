import React from 'react';
import { motion } from 'motion/react';
import sujitAvatarImg from '../assets/sujit_avatar.jpg';
import legoBlueprintImg from '../assets/lego_blueprint.png';

export const LegoBlueprintFrame: React.FC = () => {
  return (
    <div className="relative w-full max-w-md aspect-[4/5] bg-[#0E1520] rounded-xl border-2 border-[#204060] shadow-2xl p-4 flex flex-col justify-between overflow-hidden text-[#A2C4E0] font-mono select-text">
      {/* Blueprint Grid Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(66, 133, 244, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(66, 133, 244, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Blueprint Technical Header Block */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#204060] pb-2 text-[10px] tracking-wider uppercase">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
          <span className="font-bold text-[#E59A2F]">BLUEPRINT SPEC: SP-2026</span>
        </div>
        <div className="text-[#8FB3D5]">
          SCALE: 1:1 • LEGO MINIFIG ARCHITECTURE
        </div>
      </div>

      {/* Centerpiece: The Blueprint Drawing with Sujit's Photo Integrated */}
      <div className="relative z-10 my-auto w-full flex items-center justify-center py-2">
        {/* Background Blueprint Sketch from User Reference (Inverted into technical blueprint lines) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none overflow-hidden">
          <img
            src={legoBlueprintImg}
            alt="Lego Blueprint Sketch"
            className="w-full h-full object-contain filter invert contrast-125 hue-rotate-190"
          />
        </div>

        {/* Central Assembled Photo with Technical Dimension Brackets */}
        <div className="relative flex flex-col items-center">
          {/* Top Stud Indicator */}
          <div className="w-12 h-3.5 rounded-t-md bg-[#204060]/80 border border-[#4285F4]/60 mb-1 flex items-center justify-center text-[8px] text-[#A2C4E0] font-bold">
            STUD • 4.0x
          </div>

          {/* Avatar Photo Frame with Blueprint Crosshairs */}
          <div className="relative w-52 h-52 sm:w-56 sm:h-56 rounded-xl overflow-hidden border-2 border-[#4285F4] shadow-2xl bg-[#141B28]">
            {/* Corner Crosshairs */}
            <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#E59A2F] z-20 pointer-events-none" />
            <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#E59A2F] z-20 pointer-events-none" />
            <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#E59A2F] z-20 pointer-events-none" />
            <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#E59A2F] z-20 pointer-events-none" />

            <img
              src={sujitAvatarImg}
              alt="Sujit Pradhan — Lego Blueprint Spec"
              className="w-full h-full object-cover filter contrast-105"
            />

            {/* Subtle Blueprint Grid overlay inside avatar */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1520]/80 via-transparent to-transparent pointer-events-none" />

            {/* Inner Technical Callout */}
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] text-[#FDFBF7] z-20 font-mono">
              <span className="text-[#34D399] font-bold">CORE UNIT: SUJIT</span>
              <span className="text-[#E59A2F]">HAND-ASSEMBLED</span>
            </div>
          </div>

          {/* Dimension Measurement Callout Lines */}
          <div className="w-full flex items-center justify-between text-[9px] text-[#6A95BC] mt-1.5 px-2">
            <span>|← 1.5x WIDTH →|</span>
            <span>TOLERANCE: ±0.01mm</span>
          </div>
        </div>
      </div>

      {/* Blueprint Title Block (Architectural Stamp) */}
      <div className="relative z-10 border-t border-[#204060] pt-2 grid grid-cols-3 gap-2 text-[9px] leading-tight">
        <div className="border-r border-[#204060] pr-2">
          <div className="text-[#6A95BC]">SYSTEM:</div>
          <div className="text-[#FDFBF7] font-bold">LEGO MINIFIG</div>
        </div>
        <div className="border-r border-[#204060] pr-2">
          <div className="text-[#6A95BC]">MATERIAL:</div>
          <div className="text-[#E59A2F] font-bold">ABS + BRAIN</div>
        </div>
        <div>
          <div className="text-[#6A95BC]">APPROVED:</div>
          <div className="text-[#34D399] font-bold">UN-AUTOMATED</div>
        </div>
      </div>
    </div>
  );
};
