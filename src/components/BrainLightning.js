export default function BrainLightning() {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.15" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="brain-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="bolt-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="bolt-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="bolt-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <circle cx="200" cy="100" r="90" fill="url(#bg-glow)" />

      {/* Outer electric arcs */}
      <g opacity="0.3" stroke="#818cf8" strokeWidth="1" fill="none">
        <path d="M120 55 Q140 30 165 45" />
        <path d="M235 45 Q260 30 280 55" />
        <path d="M110 120 Q125 150 155 155" />
        <path d="M245 155 Q275 150 290 120" />
      </g>

      {/* Floating particles */}
      <g opacity="0.5">
        <circle cx="130" cy="40" r="2" fill="#a78bfa">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="270" cy="45" r="1.5" fill="#facc15">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="115" cy="105" r="1.5" fill="#38bdf8">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="285" cy="100" r="2" fill="#a78bfa">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="145" cy="160" r="1" fill="#facc15">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="260" cy="155" r="1.5" fill="#818cf8">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.9s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Brain – left hemisphere */}
      <g filter="url(#glow)">
        <path
          d="M200 60
             C190 58 175 50 165 55
             C155 60 148 68 145 78
             C140 72 132 72 128 78
             C122 86 125 98 130 105
             C126 108 125 115 128 122
             C132 132 140 138 150 140
             C155 148 162 152 170 155
             C178 158 190 158 200 155"
          fill="url(#brain-grad)"
          opacity="0.9"
        />
        {/* Left hemisphere folds */}
        <path
          d="M170 72 Q162 82 168 92 M155 85 Q150 95 158 105
             M145 100 Q142 110 150 118 M165 110 Q158 120 166 132
             M180 68 Q174 78 180 88"
          stroke="#c4b5fd"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
        />
      </g>

      {/* Brain – right hemisphere */}
      <g filter="url(#glow)">
        <path
          d="M200 60
             C210 58 225 50 235 55
             C245 60 252 68 255 78
             C260 72 268 72 272 78
             C278 86 275 98 270 105
             C274 108 275 115 272 122
             C268 132 260 138 250 140
             C245 148 238 152 230 155
             C222 158 210 158 200 155"
          fill="url(#brain-grad)"
          opacity="0.9"
        />
        {/* Right hemisphere folds */}
        <path
          d="M230 72 Q238 82 232 92 M245 85 Q250 95 242 105
             M255 100 Q258 110 250 118 M235 110 Q242 120 234 132
             M220 68 Q226 78 220 88"
          stroke="#c4b5fd"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
        />
      </g>

      {/* Brain stem */}
      <path
        d="M195 155 Q198 168 200 175 Q202 168 205 155"
        fill="url(#brain-grad)"
        opacity="0.7"
      />

      {/* Central fissure line */}
      <line x1="200" y1="58" x2="200" y2="155" stroke="#4f46e5" strokeWidth="1" opacity="0.4" />

      {/* Lightning bolt – left */}
      <g filter="url(#bolt-glow)">
        <polygon
          points="140,42 150,72 138,72 155,102 143,102 162,140 148,100 160,100 146,70 158,70 145,42"
          fill="url(#bolt-1)"
          opacity="0.9"
        >
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
        </polygon>
      </g>

      {/* Lightning bolt – right */}
      <g filter="url(#bolt-glow)">
        <polygon
          points="260,42 250,72 262,72 245,102 257,102 238,140 252,100 240,100 254,70 242,70 255,42"
          fill="url(#bolt-2)"
          opacity="0.9"
        >
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.3s" repeatCount="indefinite" />
        </polygon>
      </g>

      {/* Small spark bolts */}
      <g opacity="0.7" filter="url(#bolt-glow)">
        <polyline points="120,65 125,58 118,55" stroke="#facc15" strokeWidth="1.5" fill="none">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
        </polyline>
        <polyline points="280,65 275,58 282,55" stroke="#38bdf8" strokeWidth="1.5" fill="none">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.7s" repeatCount="indefinite" />
        </polyline>
        <polyline points="125,135 130,142 123,145" stroke="#facc15" strokeWidth="1.5" fill="none">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.3s" repeatCount="indefinite" />
        </polyline>
        <polyline points="275,135 270,142 277,145" stroke="#818cf8" strokeWidth="1.5" fill="none">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.4s" repeatCount="indefinite" />
        </polyline>
      </g>

      {/* Inner neural glow dots on the brain */}
      <g opacity="0.7">
        <circle cx="175" cy="80" r="2" fill="#e9d5ff">
          <animate attributeName="r" values="1.5;3;1.5" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="225" cy="80" r="2" fill="#e9d5ff">
          <animate attributeName="r" values="2;3.5;2" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="110" r="1.5" fill="#fde68a">
          <animate attributeName="r" values="1;2.5;1" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="240" cy="110" r="1.5" fill="#bae6fd">
          <animate attributeName="r" values="1;2;1" dur="1.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="100" r="2.5" fill="#fff">
          <animate attributeName="r" values="2;4;2" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.2s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}