import React from 'react';

interface Props {
  children: React.ReactNode;
  label?: string;
  badge?: string;
  className?: string;
  variant?: 'dark' | 'light' | 'crimson';
}

export const RetroIllustrationFrame: React.FC<Props> = ({
  children,
  label,
  badge,
  className = '',
  variant = 'dark',
}) => {
  const borderStyles = {
    dark: 'border-[#3D352E] bg-[#181412] text-[#FDFBF7]',
    light: 'border-[#231F1C] bg-[#F9F6F0] text-[#1C1815]',
    crimson: 'border-[#E05343] bg-[#2A1513] text-[#FDFBF7]',
  };

  return (
    <div className={`relative rounded-xl border-2 p-3 md:p-4 shadow-xl overflow-hidden transition-all duration-500 ${borderStyles[variant]} ${className}`}>
      {/* Header Stamp if label or badge provided */}
      {(label || badge) && (
        <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-current/15 text-xs font-mono tracking-wider">
          {badge && (
            <span className="px-2 py-0.5 rounded bg-current/10 font-bold uppercase tracking-widest text-[10px]">
              {badge}
            </span>
          )}
          {label && <span className="opacity-75 text-[11px] font-medium">{label}</span>}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
