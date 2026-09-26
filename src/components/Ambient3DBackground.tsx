import React from 'react';
import { motion } from 'motion/react';

export type ColorTheme = 'amber' | 'cobalt' | 'terracotta' | 'emerald';

interface Ambient3DBackgroundProps {
  variant: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

const SPHERE_STYLES: Record<ColorTheme, string> = {
  amber: 'radial-gradient(circle at 32% 28%, #FFE0B2 0%, #E59A2F 38%, #8E4B10 78%, #2A1405 100%)',
  cobalt: 'radial-gradient(circle at 30% 28%, #BAE6FD 0%, #388BFD 42%, #1E3A5F 80%, #091326 100%)',
  terracotta: 'radial-gradient(circle at 30% 28%, #FFCCBC 0%, #D95338 40%, #7F1D1D 80%, #280808 100%)',
  emerald: 'radial-gradient(circle at 30% 28%, #D1FAE5 0%, #34D399 40%, #065F46 80%, #022C22 100%)',
};

const CAPSULE_STYLES: Record<ColorTheme, string> = {
  terracotta: 'linear-gradient(135deg, #FF9E80 0%, #D95338 45%, #6E1E14 95%)',
  amber: 'linear-gradient(135deg, #FFE0B2 0%, #E59A2F 45%, #78350F 95%)',
  cobalt: 'linear-gradient(135deg, #BAE6FD 0%, #388BFD 45%, #1E3A8A 95%)',
  emerald: 'linear-gradient(135deg, #A7F3D0 0%, #10B981 45%, #064E3B 95%)',
};

const TORUS_PALETTES: Record<ColorTheme, [string, string, string, string]> = {
  cobalt: ['#7CC4FA', '#2B6CB0', '#153259', '#0A192F'],
  amber: ['#FDE68A', '#D97706', '#78350F', '#2A1205'],
  terracotta: ['#FCA5A5', '#C83E2D', '#7F1D1D', '#2A0808'],
  emerald: ['#A7F3D0', '#10B981', '#065F46', '#022C22'],
};

const CUBE_PALETTES: Record<ColorTheme, { top: [string, string]; left: [string, string]; right: [string, string] }> = {
  amber: {
    top: ['#F9C97C', '#E59A2F'],
    left: ['#C86D2D', '#7C3A12'],
    right: ['#5C280B', '#2B1104'],
  },
  cobalt: {
    top: ['#93C5FD', '#3B82F6'],
    left: ['#2563EB', '#1E3A8A'],
    right: ['#172554', '#091128'],
  },
  terracotta: {
    top: ['#FDA4AF', '#E11D48'],
    left: ['#C83E2D', '#7F1D1D'],
    right: ['#450A0A', '#230505'],
  },
  emerald: {
    top: ['#A7F3D0', '#34D399'],
    left: ['#10B981', '#047857'],
    right: ['#064E3B', '#022C22'],
  },
};

const CYLINDER_PALETTES: Record<
  ColorTheme,
  { body: [string, string, string, string, string]; top: [string, string, string]; hole: [string, string] }
> = {
  emerald: {
    body: ['#064E3B', '#34D399', '#A7F3D0', '#10B981', '#022C22'],
    top: ['#D1FAE5', '#34D399', '#047857'],
    hole: ['#022C22', '#10B981'],
  },
  amber: {
    body: ['#78350F', '#F59E0B', '#FDE68A', '#D97706', '#2A1205'],
    top: ['#FEF3C7', '#F59E0B', '#92400E'],
    hole: ['#2A1205', '#D97706'],
  },
  cobalt: {
    body: ['#1E3A8A', '#388BFD', '#BAE6FD', '#2563EB', '#091326'],
    top: ['#E0F2FE', '#388BFD', '#1E40AF'],
    hole: ['#091326', '#2563EB'],
  },
  terracotta: {
    body: ['#7F1D1D', '#EF4444', '#FECACA', '#C83E2D', '#280808'],
    top: ['#FEE2E2', '#EF4444', '#991B1B'],
    hole: ['#280808', '#C83E2D'],
  },
};

const renderTorusSVG = (uid: string, color: ColorTheme, tilt = -22) => {
  const [c0, c1, c2, c3] = TORUS_PALETTES[color];
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-[0_18px_28px_rgba(0,0,0,0.5)]">
      <defs>
        <linearGradient id={`torusBody-${uid}`} x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor={c0} />
          <stop offset="45%" stopColor={c1} />
          <stop offset="85%" stopColor={c2} />
          <stop offset="100%" stopColor={c3} />
        </linearGradient>
        <radialGradient id={`torusSpec-${uid}`} cx="32%" cy="28%" r="55%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
          <stop offset="45%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <g transform={`rotate(${tilt} 60 60)`}>
        <ellipse cx="60" cy="60" rx="42" ry="26" fill="none" stroke={`url(#torusBody-${uid})`} strokeWidth="16" />
        <ellipse cx="60" cy="60" rx="42" ry="26" fill="none" stroke={`url(#torusSpec-${uid})`} strokeWidth="15" />
      </g>
    </svg>
  );
};

const renderCubeSVG = (uid: string, color: ColorTheme) => {
  const pal = CUBE_PALETTES[color];
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_16px_26px_rgba(0,0,0,0.5)]">
      <defs>
        <linearGradient id={`cubeTop-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={pal.top[0]} />
          <stop offset="100%" stopColor={pal.top[1]} />
        </linearGradient>
        <linearGradient id={`cubeLeft-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={pal.left[0]} />
          <stop offset="100%" stopColor={pal.left[1]} />
        </linearGradient>
        <linearGradient id={`cubeRight-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={pal.right[0]} />
          <stop offset="100%" stopColor={pal.right[1]} />
        </linearGradient>
      </defs>
      <g transform="translate(5, 4)">
        <polygon points="45,12 80,30 45,48 10,30" fill={`url(#cubeTop-${uid})`} />
        <polygon points="10,30 45,48 45,84 10,66" fill={`url(#cubeLeft-${uid})`} />
        <polygon points="45,48 80,30 80,66 45,84" fill={`url(#cubeRight-${uid})`} />
      </g>
    </svg>
  );
};

const renderHollowCylinderSVG = (uid: string, color: ColorTheme, tilt = 24) => {
  const pal = CYLINDER_PALETTES[color];
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)]">
      <defs>
        <linearGradient id={`cylBody-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={pal.body[0]} />
          <stop offset="28%" stopColor={pal.body[1]} />
          <stop offset="48%" stopColor={pal.body[2]} />
          <stop offset="72%" stopColor={pal.body[3]} />
          <stop offset="100%" stopColor={pal.body[4]} />
        </linearGradient>
        <linearGradient id={`cylTop-${uid}`} x1="15%" y1="15%" x2="85%" y2="85%">
          <stop offset="0%" stopColor={pal.top[0]} />
          <stop offset="55%" stopColor={pal.top[1]} />
          <stop offset="100%" stopColor={pal.top[2]} />
        </linearGradient>
        <linearGradient id={`cylHole-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={pal.hole[0]} />
          <stop offset="100%" stopColor={pal.hole[1]} />
        </linearGradient>
      </defs>
      <g transform={`rotate(${tilt} 60 60)`}>
        <path d="M 24,42 L 24,76 A 36,16 0 0,0 96,76 L 96,42 Z" fill={`url(#cylBody-${uid})`} />
        <ellipse cx="60" cy="42" rx="36" ry="16" fill={`url(#cylTop-${uid})`} />
        <ellipse cx="60" cy="42" rx="16" ry="7" fill={`url(#cylHole-${uid})`} />
      </g>
    </svg>
  );
};

const renderPyramidSVG = (uid: string, color: ColorTheme, tilt = -8) => {
  const pal = CUBE_PALETTES[color];
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_16px_26px_rgba(0,0,0,0.5)]">
      <defs>
        <linearGradient id={`pyrLeft-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={pal.top[0]} />
          <stop offset="100%" stopColor={pal.left[0]} />
        </linearGradient>
        <linearGradient id={`pyrRight-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={pal.left[1]} />
          <stop offset="100%" stopColor={pal.right[1]} />
        </linearGradient>
      </defs>
      <g transform={`rotate(${tilt} 50 50)`}>
        <polygon points="50,14 14,72 52,86" fill={`url(#pyrLeft-${uid})`} />
        <polygon points="50,14 52,86 86,68" fill={`url(#pyrRight-${uid})`} />
      </g>
    </svg>
  );
};

const renderOctahedronSVG = (uid: string, color: ColorTheme, tilt = 10) => {
  const pal = CUBE_PALETTES[color];
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_16px_26px_rgba(0,0,0,0.5)]">
      <defs>
        <linearGradient id={`octTL-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={pal.top[0]} />
          <stop offset="100%" stopColor={pal.top[1]} />
        </linearGradient>
        <linearGradient id={`octTR-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={pal.left[0]} />
          <stop offset="100%" stopColor={pal.left[1]} />
        </linearGradient>
        <linearGradient id={`octBL-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={pal.left[1]} />
          <stop offset="100%" stopColor={pal.right[0]} />
        </linearGradient>
        <linearGradient id={`octBR-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={pal.right[0]} />
          <stop offset="100%" stopColor={pal.right[1]} />
        </linearGradient>
      </defs>
      <g transform={`rotate(${tilt} 50 50)`}>
        <polygon points="50,10 16,50 50,56" fill={`url(#octTL-${uid})`} />
        <polygon points="50,10 50,56 84,50" fill={`url(#octTR-${uid})`} />
        <polygon points="16,50 50,90 50,56" fill={`url(#octBL-${uid})`} />
        <polygon points="84,50 50,90 50,56" fill={`url(#octBR-${uid})`} />
      </g>
    </svg>
  );
};

interface ShapeItem {
  id: string;
  kind: 'sphere' | 'torus' | 'cube' | 'cylinder' | 'capsule' | 'pyramid' | 'octahedron';
  color: ColorTheme;
  posClass: string;
  sizeClass: string;
  duration: number;
  dx?: number;
  dy?: number;
  rot?: [number, number];
  tilt?: number;
}

const VARIANT_CONFIGS: Record<
  Ambient3DBackgroundProps['variant'],
  {
    bgCycle: string[];
    orb1Style: string;
    orb2Style: string;
    shapes: ShapeItem[];
  }
> = {
  // SLIDE 01: Opening Title (Warm Crimson, Ochre & Cobalt)
  1: {
    bgCycle: [
      'radial-gradient(circle at 25% 30%, rgba(200, 62, 45, 0.16) 0%, rgba(229, 154, 47, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 72% 35%, rgba(229, 154, 47, 0.15) 0%, rgba(56, 139, 253, 0.07) 48%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 65% 72%, rgba(200, 62, 45, 0.14) 0%, rgba(52, 211, 153, 0.07) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 25% 30%, rgba(200, 62, 45, 0.16) 0%, rgba(229, 154, 47, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
    ],
    orb1Style: 'radial-gradient(circle, rgba(200,62,45,0.35) 0%, rgba(229,154,47,0.15) 55%, transparent 75%)',
    orb2Style: 'radial-gradient(circle, rgba(229,154,47,0.30) 0%, rgba(56,139,253,0.14) 55%, transparent 75%)',
    shapes: [
      { id: 'v1-1', kind: 'torus', color: 'terracotta', posClass: 'top-[9%] left-[7%]', sizeClass: 'w-24 h-24', duration: 20, dy: -9, rot: [-14, -6], tilt: 18 },
      { id: 'v1-2', kind: 'cube', color: 'amber', posClass: 'top-[10%] right-[8%]', sizeClass: 'w-20 h-20', duration: 22, dy: 8, rot: [0, 6] },
      { id: 'v1-3', kind: 'sphere', color: 'amber', posClass: 'bottom-[12%] left-[9%]', sizeClass: 'w-14 h-14', duration: 18, dy: -10, dx: 5 },
      { id: 'v1-4', kind: 'cylinder', color: 'cobalt', posClass: 'bottom-[9%] right-[9%]', sizeClass: 'w-22 h-22', duration: 23, dy: -9, rot: [-10, -3], tilt: -22 },
      { id: 'v1-5', kind: 'capsule', color: 'emerald', posClass: 'top-[46%] left-[4%] hidden md:block', sizeClass: 'w-16 h-8', duration: 19, dy: -8, rot: [-24, -18] },
      { id: 'v1-6', kind: 'pyramid', color: 'amber', posClass: 'top-[7%] left-[42%] hidden lg:block', sizeClass: 'w-16 h-16', duration: 21, dy: 7, rot: [-6, 4] },
    ],
  },

  // SLIDE 02: Speaker Intro (Exact original arrangement)
  2: {
    bgCycle: [
      'radial-gradient(circle at 22% 35%, rgba(229, 154, 47, 0.14) 0%, rgba(56, 139, 253, 0.07) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 68% 28%, rgba(56, 139, 253, 0.14) 0%, rgba(200, 62, 45, 0.08) 48%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 75% 70%, rgba(52, 211, 153, 0.11) 0%, rgba(229, 154, 47, 0.09) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 28% 68%, rgba(200, 62, 45, 0.12) 0%, rgba(56, 189, 248, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 22% 35%, rgba(229, 154, 47, 0.14) 0%, rgba(56, 139, 253, 0.07) 45%, rgba(16, 14, 12, 0.98) 85%)',
    ],
    orb1Style: 'radial-gradient(circle, rgba(229,154,47,0.35) 0%, rgba(200,62,45,0.15) 55%, transparent 75%)',
    orb2Style: 'radial-gradient(circle, rgba(56,139,253,0.35) 0%, rgba(52,211,153,0.14) 55%, transparent 75%)',
    shapes: [
      { id: 'v2-1', kind: 'sphere', color: 'amber', posClass: 'top-[9%] left-[6%]', sizeClass: 'w-16 h-16', duration: 18, dy: -10, dx: 5 },
      { id: 'v2-2', kind: 'torus', color: 'cobalt', posClass: 'top-[7%] right-[36%] hidden md:block', sizeClass: 'w-24 h-24', duration: 20, dy: -8, rot: [-12, -5], tilt: -22 },
      { id: 'v2-3', kind: 'cube', color: 'amber', posClass: 'bottom-[10%] left-[41%] hidden lg:block', sizeClass: 'w-20 h-20', duration: 22, dy: 9, rot: [0, 5] },
      { id: 'v2-4', kind: 'capsule', color: 'terracotta', posClass: 'top-[18%] right-[4%] hidden sm:block', sizeClass: 'w-16 h-8', duration: 19, dy: -9, rot: [28, 34] },
      { id: 'v2-5', kind: 'sphere', color: 'cobalt', posClass: 'bottom-[14%] right-[6%]', sizeClass: 'w-11 h-11', duration: 16, dy: 7, dx: -4 },
      { id: 'v2-6', kind: 'cylinder', color: 'emerald', posClass: 'bottom-[6%] left-[6%]', sizeClass: 'w-20 h-20 sm:w-24 sm:h-24', duration: 22, dy: -10, dx: 6, rot: [-14, -6], tilt: 24 },
    ],
  },

  // SLIDE 03: Autopilot Flow (Prompt -> Ship)
  3: {
    bgCycle: [
      'radial-gradient(circle at 75% 25%, rgba(200, 62, 45, 0.14) 0%, rgba(229, 154, 47, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 25% 65%, rgba(56, 139, 253, 0.12) 0%, rgba(200, 62, 45, 0.08) 48%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 60% 75%, rgba(229, 154, 47, 0.13) 0%, rgba(52, 211, 153, 0.07) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 75% 25%, rgba(200, 62, 45, 0.14) 0%, rgba(229, 154, 47, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
    ],
    orb1Style: 'radial-gradient(circle, rgba(200,62,45,0.32) 0%, rgba(229,154,47,0.14) 55%, transparent 75%)',
    orb2Style: 'radial-gradient(circle, rgba(229,154,47,0.28) 0%, rgba(56,139,253,0.14) 55%, transparent 75%)',
    shapes: [
      { id: 'v3-1', kind: 'octahedron', color: 'amber', posClass: 'top-[7%] left-[28%] hidden md:block', sizeClass: 'w-20 h-20', duration: 21, dy: -8, rot: [-8, 4] },
      { id: 'v3-2', kind: 'cylinder', color: 'terracotta', posClass: 'top-[8%] right-[6%]', sizeClass: 'w-22 h-22', duration: 23, dy: 9, rot: [8, 16], tilt: -18 },
      { id: 'v3-3', kind: 'torus', color: 'emerald', posClass: 'bottom-[8%] left-[5%]', sizeClass: 'w-24 h-24', duration: 20, dy: -9, rot: [10, 18], tilt: 26 },
      { id: 'v3-4', kind: 'sphere', color: 'terracotta', posClass: 'bottom-[8%] left-[45%] hidden lg:block', sizeClass: 'w-14 h-14', duration: 17, dy: -8, dx: 5 },
      { id: 'v3-5', kind: 'cube', color: 'cobalt', posClass: 'bottom-[11%] right-[5%]', sizeClass: 'w-20 h-20', duration: 22, dy: -7, rot: [-5, 3] },
      { id: 'v3-6', kind: 'capsule', color: 'amber', posClass: 'top-[14%] left-[4%] hidden sm:block', sizeClass: 'w-16 h-8', duration: 18, dy: 8, rot: [-26, -18] },
    ],
  },

  // SLIDE 04: Collective Homogenization (The Blur)
  4: {
    bgCycle: [
      'radial-gradient(circle at 65% 35%, rgba(200, 62, 45, 0.14) 0%, rgba(52, 211, 153, 0.07) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 30% 30%, rgba(229, 154, 47, 0.13) 0%, rgba(200, 62, 45, 0.08) 48%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 35% 75%, rgba(52, 211, 153, 0.12) 0%, rgba(56, 139, 253, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 65% 35%, rgba(200, 62, 45, 0.14) 0%, rgba(52, 211, 153, 0.07) 45%, rgba(16, 14, 12, 0.98) 85%)',
    ],
    orb1Style: 'radial-gradient(circle, rgba(200,62,45,0.30) 0%, rgba(52,211,153,0.14) 55%, transparent 75%)',
    orb2Style: 'radial-gradient(circle, rgba(229,154,47,0.30) 0%, rgba(56,139,253,0.12) 55%, transparent 75%)',
    shapes: [
      { id: 'v4-1', kind: 'cube', color: 'terracotta', posClass: 'top-[8%] left-[5%]', sizeClass: 'w-20 h-20', duration: 21, dy: -8, rot: [-4, 4] },
      { id: 'v4-2', kind: 'capsule', color: 'cobalt', posClass: 'top-[6%] left-[42%] hidden md:block', sizeClass: 'w-16 h-8', duration: 19, dy: 7, rot: [16, 24] },
      { id: 'v4-3', kind: 'sphere', color: 'emerald', posClass: 'top-[9%] right-[5%]', sizeClass: 'w-14 h-14', duration: 17, dy: -9, dx: -5 },
      { id: 'v4-4', kind: 'pyramid', color: 'amber', posClass: 'bottom-[9%] left-[7%]', sizeClass: 'w-20 h-20', duration: 22, dy: -8, rot: [-6, 4] },
      { id: 'v4-5', kind: 'torus', color: 'amber', posClass: 'bottom-[7%] left-[37%] hidden lg:block', sizeClass: 'w-22 h-22', duration: 20, dy: 8, rot: [-10, -2], tilt: -16 },
      { id: 'v4-6', kind: 'cylinder', color: 'cobalt', posClass: 'bottom-[8%] right-[4%]', sizeClass: 'w-22 h-22', duration: 24, dy: -9, rot: [6, 14], tilt: 28 },
    ],
  },

  // SLIDE 05: The Forklift at the Gym
  5: {
    bgCycle: [
      'radial-gradient(circle at 30% 65%, rgba(229, 154, 47, 0.14) 0%, rgba(52, 211, 153, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 70% 30%, rgba(52, 211, 153, 0.12) 0%, rgba(200, 62, 45, 0.08) 48%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 65% 70%, rgba(200, 62, 45, 0.13) 0%, rgba(229, 154, 47, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 30% 65%, rgba(229, 154, 47, 0.14) 0%, rgba(52, 211, 153, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
    ],
    orb1Style: 'radial-gradient(circle, rgba(229,154,47,0.34) 0%, rgba(52,211,153,0.14) 55%, transparent 75%)',
    orb2Style: 'radial-gradient(circle, rgba(200,62,45,0.30) 0%, rgba(229,154,47,0.12) 55%, transparent 75%)',
    shapes: [
      { id: 'v5-1', kind: 'cylinder', color: 'amber', posClass: 'top-[8%] left-[6%]', sizeClass: 'w-22 h-22', duration: 22, dy: -9, rot: [-12, -4], tilt: -20 },
      { id: 'v5-2', kind: 'sphere', color: 'emerald', posClass: 'top-[7%] right-[34%] hidden md:block', sizeClass: 'w-14 h-14', duration: 18, dy: 8, dx: 4 },
      { id: 'v5-3', kind: 'pyramid', color: 'terracotta', posClass: 'top-[11%] right-[5%]', sizeClass: 'w-20 h-20', duration: 21, dy: -8, rot: [4, 12] },
      { id: 'v5-4', kind: 'capsule', color: 'cobalt', posClass: 'bottom-[10%] left-[5%]', sizeClass: 'w-16 h-8', duration: 19, dy: -7, rot: [22, 30] },
      { id: 'v5-5', kind: 'octahedron', color: 'emerald', posClass: 'bottom-[8%] left-[44%] hidden lg:block', sizeClass: 'w-20 h-20', duration: 23, dy: 9, rot: [-6, 4] },
      { id: 'v5-6', kind: 'torus', color: 'terracotta', posClass: 'bottom-[9%] right-[6%]', sizeClass: 'w-24 h-24', duration: 20, dy: -9, rot: [-8, 2], tilt: 20 },
    ],
  },

  // SLIDE 06: Execution (E) vs. Decision (D)
  6: {
    bgCycle: [
      'radial-gradient(circle at 55% 45%, rgba(229, 154, 47, 0.14) 0%, rgba(56, 139, 253, 0.09) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 25% 35%, rgba(56, 139, 253, 0.14) 0%, rgba(229, 154, 47, 0.08) 48%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 75% 65%, rgba(229, 154, 47, 0.14) 0%, rgba(52, 211, 153, 0.07) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 55% 45%, rgba(229, 154, 47, 0.14) 0%, rgba(56, 139, 253, 0.09) 45%, rgba(16, 14, 12, 0.98) 85%)',
    ],
    orb1Style: 'radial-gradient(circle, rgba(56,139,253,0.34) 0%, rgba(229,154,47,0.14) 55%, transparent 75%)',
    orb2Style: 'radial-gradient(circle, rgba(229,154,47,0.34) 0%, rgba(200,62,45,0.12) 55%, transparent 75%)',
    shapes: [
      { id: 'v6-1', kind: 'pyramid', color: 'cobalt', posClass: 'top-[8%] left-[6%]', sizeClass: 'w-20 h-20', duration: 21, dy: -8, rot: [-8, 2] },
      { id: 'v6-2', kind: 'sphere', color: 'amber', posClass: 'top-[6%] left-[39%] hidden md:block', sizeClass: 'w-14 h-14', duration: 17, dy: 8, dx: -4 },
      { id: 'v6-3', kind: 'torus', color: 'amber', posClass: 'top-[9%] right-[6%]', sizeClass: 'w-24 h-24', duration: 22, dy: -9, rot: [-14, -4], tilt: -26 },
      { id: 'v6-4', kind: 'cube', color: 'emerald', posClass: 'bottom-[9%] left-[7%]', sizeClass: 'w-20 h-20', duration: 20, dy: -8, rot: [0, 7] },
      { id: 'v6-5', kind: 'capsule', color: 'terracotta', posClass: 'bottom-[8%] right-[36%] hidden lg:block', sizeClass: 'w-16 h-8', duration: 18, dy: 7, rot: [-18, -10] },
      { id: 'v6-6', kind: 'octahedron', color: 'cobalt', posClass: 'bottom-[10%] right-[5%]', sizeClass: 'w-20 h-20', duration: 23, dy: -9, rot: [4, 12] },
    ],
  },

  // SLIDE 07: Automating vs. Driving
  7: {
    bgCycle: [
      'radial-gradient(circle at 70% 55%, rgba(200, 62, 45, 0.14) 0%, rgba(52, 211, 153, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 28% 30%, rgba(52, 211, 153, 0.13) 0%, rgba(229, 154, 47, 0.08) 48%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 40% 70%, rgba(229, 154, 47, 0.13) 0%, rgba(200, 62, 45, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 70% 55%, rgba(200, 62, 45, 0.14) 0%, rgba(52, 211, 153, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
    ],
    orb1Style: 'radial-gradient(circle, rgba(200,62,45,0.32) 0%, rgba(229,154,47,0.14) 55%, transparent 75%)',
    orb2Style: 'radial-gradient(circle, rgba(52,211,153,0.32) 0%, rgba(56,139,253,0.12) 55%, transparent 75%)',
    shapes: [
      { id: 'v7-1', kind: 'torus', color: 'terracotta', posClass: 'top-[8%] left-[5%]', sizeClass: 'w-24 h-24', duration: 21, dy: -9, rot: [8, 16], tilt: 16 },
      { id: 'v7-2', kind: 'cube', color: 'amber', posClass: 'top-[6%] right-[39%] hidden md:block', sizeClass: 'w-20 h-20', duration: 20, dy: 8, rot: [-4, 4] },
      { id: 'v7-3', kind: 'cylinder', color: 'emerald', posClass: 'top-[9%] right-[5%]', sizeClass: 'w-22 h-22', duration: 23, dy: -8, rot: [-10, -2], tilt: -22 },
      { id: 'v7-4', kind: 'octahedron', color: 'cobalt', posClass: 'bottom-[10%] left-[6%]', sizeClass: 'w-20 h-20', duration: 22, dy: -8, rot: [-6, 4] },
      { id: 'v7-5', kind: 'sphere', color: 'emerald', posClass: 'bottom-[7%] left-[42%] hidden lg:block', sizeClass: 'w-13 h-13', duration: 17, dy: 7, dx: 5 },
      { id: 'v7-6', kind: 'pyramid', color: 'amber', posClass: 'bottom-[9%] right-[6%]', sizeClass: 'w-20 h-20', duration: 19, dy: -9, rot: [4, 12] },
    ],
  },

  // SLIDE 08: Calibrated Trust (Google Flights)
  8: {
    bgCycle: [
      'radial-gradient(circle at 25% 70%, rgba(56, 139, 253, 0.15) 0%, rgba(52, 211, 153, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 70% 30%, rgba(52, 211, 153, 0.13) 0%, rgba(229, 154, 47, 0.08) 48%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 60% 75%, rgba(229, 154, 47, 0.13) 0%, rgba(56, 139, 253, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 25% 70%, rgba(56, 139, 253, 0.15) 0%, rgba(52, 211, 153, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
    ],
    orb1Style: 'radial-gradient(circle, rgba(56,139,253,0.35) 0%, rgba(52,211,153,0.15) 55%, transparent 75%)',
    orb2Style: 'radial-gradient(circle, rgba(229,154,47,0.30) 0%, rgba(56,139,253,0.14) 55%, transparent 75%)',
    shapes: [
      { id: 'v8-1', kind: 'sphere', color: 'cobalt', posClass: 'top-[9%] left-[6%]', sizeClass: 'w-15 h-15', duration: 18, dy: -9, dx: 5 },
      { id: 'v8-2', kind: 'cylinder', color: 'cobalt', posClass: 'top-[6%] left-[38%] hidden md:block', sizeClass: 'w-22 h-22', duration: 22, dy: 8, rot: [6, 14], tilt: 18 },
      { id: 'v8-3', kind: 'octahedron', color: 'amber', posClass: 'top-[8%] right-[6%]', sizeClass: 'w-20 h-20', duration: 20, dy: -8, rot: [-8, 2] },
      { id: 'v8-4', kind: 'pyramid', color: 'emerald', posClass: 'bottom-[9%] left-[5%]', sizeClass: 'w-20 h-20', duration: 21, dy: -9, rot: [-5, 5] },
      { id: 'v8-5', kind: 'torus', color: 'emerald', posClass: 'bottom-[7%] right-[37%] hidden lg:block', sizeClass: 'w-24 h-24', duration: 23, dy: 8, rot: [-12, -4], tilt: -20 },
      { id: 'v8-6', kind: 'capsule', color: 'amber', posClass: 'bottom-[11%] right-[5%]', sizeClass: 'w-16 h-8', duration: 19, dy: -8, rot: [26, 34] },
    ],
  },

  // SLIDE 09: The Ultimate Ironic Mirror
  9: {
    bgCycle: [
      'radial-gradient(circle at 30% 75%, rgba(229, 154, 47, 0.15) 0%, rgba(200, 62, 45, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 72% 30%, rgba(200, 62, 45, 0.13) 0%, rgba(56, 139, 253, 0.08) 48%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 60% 65%, rgba(56, 139, 253, 0.12) 0%, rgba(229, 154, 47, 0.09) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 30% 75%, rgba(229, 154, 47, 0.15) 0%, rgba(200, 62, 45, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
    ],
    orb1Style: 'radial-gradient(circle, rgba(229,154,47,0.35) 0%, rgba(200,62,45,0.15) 55%, transparent 75%)',
    orb2Style: 'radial-gradient(circle, rgba(200,62,45,0.30) 0%, rgba(56,139,253,0.14) 55%, transparent 75%)',
    shapes: [
      { id: 'v9-1', kind: 'octahedron', color: 'terracotta', posClass: 'top-[9%] left-[5%]', sizeClass: 'w-20 h-20', duration: 21, dy: -8, rot: [-6, 4] },
      { id: 'v9-2', kind: 'torus', color: 'amber', posClass: 'top-[7%] left-[41%] hidden md:block', sizeClass: 'w-24 h-24', duration: 20, dy: 8, rot: [8, 16], tilt: 22 },
      { id: 'v9-3', kind: 'cube', color: 'cobalt', posClass: 'top-[10%] right-[5%]', sizeClass: 'w-20 h-20', duration: 22, dy: -9, rot: [0, 6] },
      { id: 'v9-4', kind: 'cylinder', color: 'amber', posClass: 'bottom-[8%] left-[6%]', sizeClass: 'w-22 h-22', duration: 23, dy: -9, rot: [-12, -4], tilt: -25 },
      { id: 'v9-5', kind: 'pyramid', color: 'emerald', posClass: 'bottom-[8%] right-[35%] hidden lg:block', sizeClass: 'w-20 h-20', duration: 19, dy: 8, rot: [-4, 6] },
      { id: 'v9-6', kind: 'sphere', color: 'terracotta', posClass: 'bottom-[12%] right-[6%]', sizeClass: 'w-14 h-14', duration: 17, dy: -7, dx: -4 },
    ],
  },

  // SLIDE 10: Three Rules for Tomorrow
  10: {
    bgCycle: [
      'radial-gradient(circle at 50% 45%, rgba(200, 62, 45, 0.15) 0%, rgba(229, 154, 47, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 25% 30%, rgba(229, 154, 47, 0.14) 0%, rgba(56, 139, 253, 0.08) 48%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 75% 70%, rgba(52, 211, 153, 0.12) 0%, rgba(200, 62, 45, 0.09) 45%, rgba(16, 14, 12, 0.98) 85%)',
      'radial-gradient(circle at 50% 45%, rgba(200, 62, 45, 0.15) 0%, rgba(229, 154, 47, 0.08) 45%, rgba(16, 14, 12, 0.98) 85%)',
    ],
    orb1Style: 'radial-gradient(circle, rgba(200,62,45,0.34) 0%, rgba(229,154,47,0.15) 55%, transparent 75%)',
    orb2Style: 'radial-gradient(circle, rgba(56,139,253,0.32) 0%, rgba(52,211,153,0.14) 55%, transparent 75%)',
    shapes: [
      { id: 'v10-1', kind: 'cube', color: 'amber', posClass: 'top-[8%] left-[6%]', sizeClass: 'w-20 h-20', duration: 21, dy: -8, rot: [-4, 4] },
      { id: 'v10-2', kind: 'sphere', color: 'terracotta', posClass: 'top-[6%] left-[38%] hidden md:block', sizeClass: 'w-14 h-14', duration: 18, dy: 8, dx: 5 },
      { id: 'v10-3', kind: 'pyramid', color: 'emerald', posClass: 'top-[8%] right-[6%]', sizeClass: 'w-20 h-20', duration: 22, dy: -9, rot: [4, 12] },
      { id: 'v10-4', kind: 'torus', color: 'cobalt', posClass: 'bottom-[9%] left-[5%]', sizeClass: 'w-24 h-24', duration: 20, dy: -8, rot: [-10, -2], tilt: -18 },
      { id: 'v10-5', kind: 'cylinder', color: 'terracotta', posClass: 'bottom-[7%] left-[44%] hidden lg:block', sizeClass: 'w-22 h-22', duration: 24, dy: 9, rot: [6, 14], tilt: 20 },
      { id: 'v10-6', kind: 'octahedron', color: 'amber', posClass: 'bottom-[9%] right-[5%]', sizeClass: 'w-20 h-20', duration: 19, dy: -8, rot: [-6, 4] },
    ],
  },
};

export const Ambient3DBackground: React.FC<Ambient3DBackgroundProps> = ({ variant }) => {
  const cfg = VARIANT_CONFIGS[variant];

  return (
    <>
      {/* 1. VERY SLOW SHIFTING AMBIENT BACKGROUND GRADIENT */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ background: cfg.bgCycle }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0"
        />

        <motion.div
          animate={{
            x: ['-4%', '6%', '-2%', '-4%'],
            y: ['-3%', '5%', '-4%', '-3%'],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -left-24 w-[38rem] h-[38rem] rounded-full blur-[130px] opacity-30"
          style={{ background: cfg.orb1Style }}
        />

        <motion.div
          animate={{
            x: ['4%', '-6%', '3%', '4%'],
            y: ['4%', '-5%', '2%', '4%'],
            scale: [1, 0.94, 1.06, 1],
          }}
          transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-28 -right-20 w-[40rem] h-[40rem] rounded-full blur-[140px] opacity-30"
          style={{ background: cfg.orb2Style }}
        />
      </div>

      {/* 2. SUBTLE ABSTRACT 3D GEOMETRIC ELEMENTS (Unique per slide) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        {cfg.shapes.map((s) => {
          const animateProps: Record<string, number[]> = {
            y: [0, s.dy ?? -9, 0],
          };
          if (s.dx !== undefined) {
            animateProps.x = [0, s.dx, 0];
          }
          if (s.rot !== undefined) {
            animateProps.rotate = [s.rot[0], s.rot[1], s.rot[0]];
          }

          if (s.kind === 'sphere') {
            return (
              <motion.div
                key={s.id}
                animate={animateProps}
                transition={{ duration: s.duration, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute ${s.posClass} ${s.sizeClass} rounded-full blur-[3px] opacity-55`}
                style={{
                  background: SPHERE_STYLES[s.color],
                  boxShadow: '0 18px 32px rgba(0,0,0,0.48)',
                }}
              />
            );
          }

          if (s.kind === 'capsule') {
            return (
              <motion.div
                key={s.id}
                animate={animateProps}
                transition={{ duration: s.duration, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute ${s.posClass} ${s.sizeClass} rounded-full blur-[3px] opacity-55`}
                style={{
                  background: CAPSULE_STYLES[s.color],
                  boxShadow:
                    'inset 2px 3px 6px rgba(255,255,255,0.35), inset -4px -4px 10px rgba(0,0,0,0.5), 0 14px 24px rgba(0,0,0,0.45)',
                }}
              />
            );
          }

          return (
            <motion.div
              key={s.id}
              animate={animateProps}
              transition={{ duration: s.duration, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute ${s.posClass} ${s.sizeClass} blur-[3px] opacity-55`}
            >
              {s.kind === 'torus' && renderTorusSVG(s.id, s.color, s.tilt)}
              {s.kind === 'cube' && renderCubeSVG(s.id, s.color)}
              {s.kind === 'cylinder' && renderHollowCylinderSVG(s.id, s.color, s.tilt)}
              {s.kind === 'pyramid' && renderPyramidSVG(s.id, s.color, s.tilt)}
              {s.kind === 'octahedron' && renderOctahedronSVG(s.id, s.color, s.tilt)}
            </motion.div>
          );
        })}
      </div>
    </>
  );
};
