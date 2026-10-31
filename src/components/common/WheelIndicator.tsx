import React from 'react';
import { HarmonyMode } from '@/types';
import { getHarmonyWheelNodes } from '@/lib/color/harmony';

interface WheelIndicatorProps {
  baseHex: string;
  harmony: HarmonyMode;
  size?: number;
}

export const WheelIndicator: React.FC<WheelIndicatorProps> = ({
  baseHex,
  harmony,
  size = 140,
}) => {
  const nodes = getHarmonyWheelNodes(baseHex, harmony);
  const center = size / 2;
  const radius = size / 2 - 16;

  // Calculate (x, y) on circle from angle in degrees
  const getCoordinates = (angleDeg: number, r: number) => {
    // 0 deg at top (rotate -90)
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: center + r * Math.cos(rad),
      y: center + r * Math.sin(rad),
    };
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Conic rainbow gradient simulated with segmented sweep or SVG ring */}
          <radialGradient id="wheelCenterGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#16242E" stop-opacity="0.1" />
            <stop offset="100%" stop-color="#16242E" stop-opacity="0.3" />
          </radialGradient>
        </defs>

        {/* Outer hue ring */}
        {Array.from({ length: 36 }).map((_, i) => {
          const startAngle = i * 10;
          const endAngle = (i + 1) * 10;
          const p1 = getCoordinates(startAngle, radius);
          const p2 = getCoordinates(endAngle, radius);
          const strokeColor = `hsl(${startAngle}, 85%, 60%)`;

          return (
            <line
              key={i}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke={strokeColor}
              strokeWidth="5"
              strokeLinecap="round"
            />
          );
        })}

        {/* Center hub */}
        <circle
          cx={center}
          cy={center}
          r={radius - 12}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 3"
          className="text-light-border dark:text-dark-border"
        />

        {/* Connecting spokes / chords between harmony points */}
        {nodes.length > 1 && (
          <polygon
            points={nodes
              .map((n) => {
                const pt = getCoordinates(n.angleDeg, radius - 2);
                return `${pt.x},${pt.y}`;
              })
              .join(' ')}
            fill="rgba(161, 227, 249, 0.15)"
            stroke="#A1E3F9"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
        )}

        {/* Center dot */}
        <circle cx={center} cy={center} r="3" fill="#A1E3F9" />

        {/* Harmony Nodes */}
        {nodes.map((node, i) => {
          const pt = getCoordinates(node.angleDeg, radius);
          const isBase = i === 0;

          return (
            <g key={i}>
              {/* Outer halo */}
              <circle
                cx={pt.x}
                cy={pt.y}
                r={isBase ? 8 : 6}
                fill={node.hex}
                stroke="#FFFFFF"
                strokeWidth="2"
                className="drop-shadow-sm transition-all duration-300"
              />
            </g>
          );
        })}
      </svg>
      <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-[160px]">
        {nodes.map((n, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1 text-[11px] font-medium px-1.5 py-0.5 rounded bg-light-bgSecondary dark:bg-dark-bgSecondary text-light-textSecondary dark:text-dark-textSecondary border border-light-border dark:border-dark-border"
          >
            <span
              className="w-2 h-2 rounded-full border border-black/10 inline-block"
              style={{ backgroundColor: n.hex }}
            />
            {n.label}
          </span>
        ))}
      </div>
    </div>
  );
};
