/** Animated tree/hive emblem rendered as inline SVG */
export function HiveEmblem() {
  return (
    <svg
      className="w-full h-full text-white"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Branch Structure */}
      <g
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M100 178 V24" strokeWidth="3.5" />
        <path d="M100 162 L60 134 V102" strokeWidth="2.5" />
        <path d="M100 162 L140 134 V102" strokeWidth="2.5" />
        <path d="M100 138 L72 116 V78" strokeWidth="2" />
        <path d="M100 138 L128 116 V78" strokeWidth="2" />
        <path d="M100 114 L80 96 V58" strokeWidth="2" />
        <path d="M100 114 L120 96 V58" strokeWidth="2" />
        <path d="M100 90 L88 78 V44" strokeWidth="1.75" />
        <path d="M100 90 L112 78 V44" strokeWidth="1.75" />
        <path d="M60 116 L42 98 V72" strokeWidth="2" />
        <path d="M140 116 L158 98 V72" strokeWidth="2" />
        <path d="M42 82 L28 68 V50" strokeWidth="1.5" />
        <path d="M158 82 L172 68 V50" strokeWidth="1.5" />
        <path d="M72 94 L56 78 V56" strokeWidth="1.75" />
        <path d="M128 94 L144 78 V56" strokeWidth="1.75" />
        <path d="M80 74 L68 62 V42" strokeWidth="1.5" />
        <path d="M120 74 L132 62 V42" strokeWidth="1.5" />
      </g>

      {/* Hexagonal Nodes */}
      <g fill="#FFFFFF">
        <polygon points="100,20 105,24 105,30 100,34 95,30 95,24" />
        <polygon points="88,40 92,43 92,47 88,50 84,47 84,43" />
        <polygon points="112,40 116,43 116,47 112,50 108,47 108,43" />
        <polygon points="80,54 84,57 84,61 80,64 76,61 76,57" />
        <polygon points="120,54 124,57 124,61 120,64 116,61 116,57" />
        <polygon points="68,38 72,41 72,45 68,48 64,45 64,41" />
        <polygon points="132,38 136,41 136,45 132,48 128,45 128,41" />
        <polygon points="72,74 76,77 76,81 72,84 68,81 68,77" />
        <polygon points="128,74 132,77 132,81 128,84 124,81 124,77" />
        <polygon points="56,52 60,55 60,59 56,62 52,59 52,55" />
        <polygon points="144,52 148,55 148,59 144,62 140,59 140,55" />
        <polygon points="60,98 64,101 64,105 60,108 56,105 56,101" />
        <polygon points="140,98 144,101 144,105 140,108 136,105 136,101" />
        <polygon points="42,68 46,71 46,75 42,78 38,75 38,71" />
        <polygon points="158,68 162,71 162,75 158,78 154,75 154,71" />
        <polygon points="28,46 32,49 32,53 28,56 24,53 24,49" />
        <polygon points="172,46 176,49 176,53 172,56 168,53 168,49" />
      </g>

      {/* Base Lines */}
      <g stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" fill="none">
        <path d="M84 178 H116" strokeLinecap="square" />
        <path d="M88 184 H112" strokeLinecap="square" />
        <path d="M92 190 H108" strokeLinecap="square" />
      </g>
    </svg>
  );
}
