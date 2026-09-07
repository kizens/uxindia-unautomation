import React from 'react';
import { motion } from 'motion/react';
import sujitAvatarImg from '../assets/sujit_avatar.jpg';

export const LegoBlueprintFrame: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] bg-[#070D14] rounded-2xl border-2 border-[#1E3A5F] shadow-2xl p-5 flex flex-col justify-center items-center overflow-hidden">
      {/* 1. Precision Technical Metric Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 139, 253, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 139, 253, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: '16px 16px'
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.4) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.4) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* 2. Crisp Vector Architectural Blueprint Schematic Lines (Zero text, pure geometry) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 500" fill="none">
        <defs>
          <filter id="blueprintSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- Top & Left Metric Ruler Ticks (Drafting border) --- */}
        <g stroke="#264F78" strokeWidth="1" opacity="0.6">
          {Array.from({ length: 39 }).map((_, i) => {
            const x = 10 + (i + 1) * 10;
            const isMajor = (i + 1) % 5 === 0;
            return (
              <line 
                key={`top-${i}`} 
                x1={x} 
                y1={4} 
                x2={x} 
                y2={isMajor ? 13 : 8} 
                stroke={isMajor ? '#388BFD' : '#1E3A5F'}
                strokeWidth={isMajor ? 1.2 : 0.8}
              />
            );
          })}
          {Array.from({ length: 47 }).map((_, i) => {
            const y = 10 + (i + 1) * 10;
            const isMajor = (i + 1) % 5 === 0;
            return (
              <line 
                key={`left-${i}`} 
                x1={4} 
                y1={y} 
                x2={isMajor ? 13 : 8} 
                y2={y} 
                stroke={isMajor ? '#388BFD' : '#1E3A5F'}
                strokeWidth={isMajor ? 1.2 : 0.8}
              />
            );
          })}
        </g>

        {/* --- Corner Registration Targets with Subtle Pulse --- */}
        {[
          { cx: 24, cy: 24 },
          { cx: 376, cy: 24 },
          { cx: 24, cy: 476 },
          { cx: 376, cy: 476 }
        ].map((target, idx) => (
          <g key={`reg-${idx}`}>
            <circle cx={target.cx} cy={target.cy} r="9" stroke="#255D96" strokeWidth="1" strokeDasharray="3 2" />
            <line x1={target.cx - 13} y1={target.cy} x2={target.cx + 13} y2={target.cy} stroke="#388BFD" strokeWidth="1" />
            <line x1={target.cx} y1={target.cy - 13} x2={target.cx} y2={target.cy + 13} stroke="#388BFD" strokeWidth="1" />
            <motion.circle 
              cx={target.cx} 
              cy={target.cy} 
              r="2" 
              fill="#38BDF8"
              animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5, ease: 'easeInOut' }}
            />
          </g>
        ))}

        {/* --- Center Datum & Alignment Lines --- */}
        <line x1="200" y1="16" x2="200" y2="484" stroke="#388BFD" strokeWidth="1" strokeDasharray="10 4 2 4" opacity="0.3" />
        <line x1="16" y1="230" x2="384" y2="230" stroke="#388BFD" strokeWidth="1" strokeDasharray="10 4 2 4" opacity="0.3" />

        {/* --- Automated Dynamic Signal Guides (Flowing dashes on side axes) --- */}
        <motion.line
          x1="52"
          y1="85"
          x2="52"
          y2="415"
          stroke="#38BDF8"
          strokeWidth="1.2"
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: [0, -48] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
          opacity="0.5"
        />
        <motion.line
          x1="348"
          y1="85"
          x2="348"
          y2="415"
          stroke="#38BDF8"
          strokeWidth="1.2"
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: [0, 48] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
          opacity="0.5"
        />

        {/* --- Rotating Technical Caliper Dials (Behind Avatar) --- */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '200px', originY: '220px' }}
        >
          <circle cx="200" cy="220" r="148" stroke="#1E4976" strokeWidth="1" strokeDasharray="6 8" opacity="0.45" />
          <circle cx="200" cy="220" r="158" stroke="#255D96" strokeWidth="0.8" strokeDasharray="2 10" opacity="0.5" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={`dial-tick-${i}`}
              x1="200"
              y1="67"
              x2="200"
              y2="59"
              stroke="#388BFD"
              strokeWidth="1.2"
              opacity="0.55"
              transform={`rotate(${angle} 200 220)`}
            />
          ))}
        </motion.g>

        {/* Inner Counter-Rotating Precision Dial */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '200px', originY: '220px' }}
        >
          <circle cx="200" cy="220" r="136" stroke="#388BFD" strokeWidth="0.8" strokeDasharray="1 7" opacity="0.35" />
        </motion.g>

        {/* --- Lego Minifigure Body Blueprint Contour Guidelines --- */}
        <g stroke="#255D96" strokeWidth="1.2" opacity="0.6">
          {/* Neck Collar Ring */}
          <ellipse cx="200" cy="336" rx="36" ry="8" strokeDasharray="4 2" />

          {/* Torso Blueprint Outline (Classic Trapezoid) */}
          <polygon 
            points="126,344 274,344 294,426 106,426" 
            fill="none" 
            stroke="#388BFD" 
            strokeWidth="1.3" 
            opacity="0.65"
          />

          {/* Torso Center & Rib Guide Lines */}
          <line x1="200" y1="344" x2="200" y2="426" strokeDasharray="4 3" stroke="#255D96" />
          <line x1="117" y1="385" x2="283" y2="385" strokeDasharray="4 3" stroke="#1E4976" />

          {/* Left & Right Arm Articulation Schematics */}
          <path d="M 126,348 C 96,364 88,400 102,426" fill="none" stroke="#255D96" strokeWidth="1.2" strokeDasharray="4 2" />
          <path d="M 274,348 C 304,364 312,400 298,426" fill="none" stroke="#255D96" strokeWidth="1.2" strokeDasharray="4 2" />
          
          {/* Lego C-Claw Hand Pivot Points */}
          <circle cx="98" cy="432" r="7" stroke="#38BDF8" strokeWidth="1.2" />
          <circle cx="302" cy="432" r="7" stroke="#38BDF8" strokeWidth="1.2" />

          {/* Hip Assembly Box */}
          <rect x="114" y="426" width="172" height="16" rx="2" stroke="#388BFD" strokeWidth="1.3" opacity="0.65" />
          
          {/* Pelvis Pivot Pin Crosshairs */}
          <circle cx="200" cy="434" r="3.5" stroke="#38BDF8" strokeWidth="1" />
          <line x1="195" y1="434" x2="205" y2="434" stroke="#38BDF8" strokeWidth="1" />

          {/* Dual Legs Geometry */}
          <rect x="120" y="442" width="74" height="42" stroke="#255D96" strokeWidth="1.2" />
          <rect x="206" y="442" width="74" height="42" stroke="#255D96" strokeWidth="1.2" />
          {/* Feet Toe Extrusions */}
          <path d="M 120,484 L 194,484" stroke="#388BFD" strokeWidth="1.4" />
          <path d="M 206,484 L 280,484" stroke="#388BFD" strokeWidth="1.4" />
        </g>

        {/* --- Dimension Lines with Precision Tick Marks (No text) --- */}
        <g stroke="#38BDF8" strokeWidth="1.2" opacity="0.7">
          {/* Left Main Height Dimension */}
          <line x1="38" y1="110" x2="38" y2="484" />
          <line x1="30" y1="110" x2="46" y2="110" />
          <line x1="30" y1="484" x2="46" y2="484" />
          <polyline points="35,120 38,110 41,120" fill="none" />
          <polyline points="35,474 38,484 41,474" fill="none" />
          <line x1="33" y1="336" x2="43" y2="336" />
          <line x1="33" y1="426" x2="43" y2="426" />

          {/* Right Shoulder-to-Waist Dimension */}
          <line x1="362" y1="344" x2="362" y2="426" />
          <line x1="354" y1="344" x2="370" y2="344" />
          <line x1="354" y1="426" x2="370" y2="426" />
          <polyline points="359,354 362,344 365,354" fill="none" />
          <polyline points="359,416 362,426 365,416" fill="none" />

          {/* Bottom Width Dimension */}
          <line x1="120" y1="494" x2="280" y2="494" />
          <line x1="120" y1="489" x2="120" y2="498" />
          <line x1="280" y1="489" x2="280" y2="498" />
          <polyline points="130,491 120,494 130,497" fill="none" />
          <polyline points="270,491 280,494 270,497" fill="none" />
        </g>
      </svg>

      {/* 4. Central Avatar Photo with Glowing Precision Crosshairs & Corner HUD Brackets */}
      <div className="relative z-20 w-56 h-56 sm:w-60 sm:h-60 flex items-center justify-center">
        {/* Animated Pulsing Blueprint Frame */}
        <motion.div
          animate={{
            borderColor: ['#1E4976', '#38BDF8', '#1E4976'],
            boxShadow: [
              '0 0 15px rgba(56, 189, 248, 0.15)',
              '0 0 28px rgba(56, 189, 248, 0.35)',
              '0 0 15px rgba(56, 189, 248, 0.15)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full h-full rounded-2xl overflow-hidden border-2 bg-[#0E1724]"
        >
          {/* Animated Precision Corner L-Brackets */}
          <motion.div 
            animate={{ scale: [1, 1.06, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 pointer-events-none z-20"
          >
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#E59A2F]" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#E59A2F]" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#E59A2F]" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#E59A2F]" />
          </motion.div>

          {/* Van Gogh Clay Avatar Photo */}
          <img
            src={sujitAvatarImg}
            alt="Sujit Pradhan"
            className="w-full h-full object-cover filter contrast-105"
          />
        </motion.div>
      </div>
    </div>
  );
};
