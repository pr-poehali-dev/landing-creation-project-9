const ToolsInHand = ({ size = 40 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Рука */}
      <g style={{ animation: 'hand-bounce 2s ease-in-out infinite' }}>
        <path
          d="M35 65 Q30 55 30 45 L32 40 Q34 38 36 40 L38 50 Q40 38 42 35 Q44 33 46 35 L48 50 Q50 35 52 32 Q54 30 56 32 L58 50 Q60 38 62 36 Q64 34 66 36 L68 55 Q68 65 62 70 L45 70 Q38 68 35 65 Z"
          fill="currentColor"
          opacity="0.9"
        />
      </g>
      
      {/* Инструмент 1 - Гаечный ключ */}
      <g style={{ animation: 'tool-rotate-1 3s ease-in-out infinite' }}>
        <path
          d="M20 25 L25 20 L30 25 L28 27 L32 31 L30 33 L26 29 L24 31 Z"
          fill="currentColor"
          opacity="0.8"
        />
      </g>
      
      {/* Инструмент 2 - Отвертка */}
      <g style={{ animation: 'tool-float-1 2.5s ease-in-out infinite 0.3s' }}>
        <rect x="68" y="15" width="3" height="15" fill="currentColor" opacity="0.7" />
        <path d="M67 30 L72 30 L70 35 Z" fill="currentColor" opacity="0.7" />
      </g>
      
      {/* Инструмент 3 - Молоток */}
      <g style={{ animation: 'tool-rotate-2 2.8s ease-in-out infinite 0.6s' }}>
        <rect x="78" y="35" width="12" height="4" fill="currentColor" opacity="0.75" />
        <rect x="77" y="37" width="3" height="8" fill="currentColor" opacity="0.75" />
      </g>
      
      {/* Инструмент 4 - Шестеренка */}
      <g style={{ animation: 'tool-spin 4s linear infinite' }}>
        <circle cx="15" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" />
        <circle cx="15" cy="50" r="2" fill="currentColor" opacity="0.7" />
        <rect x="14" y="43" width="2" height="3" fill="currentColor" opacity="0.7" />
        <rect x="14" y="54" width="2" height="3" fill="currentColor" opacity="0.7" />
        <rect x="11" y="49" width="3" height="2" fill="currentColor" opacity="0.7" />
        <rect x="18" y="49" width="3" height="2" fill="currentColor" opacity="0.7" />
      </g>
      
      {/* Инструмент 5 - Кисть */}
      <g style={{ animation: 'tool-float-2 2.3s ease-in-out infinite 0.9s' }}>
        <rect x="82" y="60" width="2" height="12" fill="currentColor" opacity="0.65" />
        <path d="M80 72 L86 72 L84 78 Z" fill="currentColor" opacity="0.65" />
      </g>
      
      {/* Инструмент 6 - Линейка */}
      <g style={{ animation: 'tool-rotate-3 3.2s ease-in-out infinite 1.2s' }}>
        <rect x="18" y="78" width="20" height="3" fill="currentColor" opacity="0.7" />
        <rect x="20" y="78" width="1" height="3" fill="white" opacity="0.3" />
        <rect x="25" y="78" width="1" height="3" fill="white" opacity="0.3" />
        <rect x="30" y="78" width="1" height="3" fill="white" opacity="0.3" />
        <rect x="35" y="78" width="1" height="3" fill="white" opacity="0.3" />
      </g>
      
      {/* Инструмент 7 - Циркуль */}
      <g style={{ animation: 'tool-float-1 2.7s ease-in-out infinite 1.5s' }}>
        <line x1="75" y1="78" x2="80" y2="88" stroke="currentColor" strokeWidth="2" opacity="0.65" />
        <line x1="75" y1="78" x2="70" y2="88" stroke="currentColor" strokeWidth="2" opacity="0.65" />
        <circle cx="75" cy="78" r="2" fill="currentColor" opacity="0.65" />
      </g>
      
      <style>
        {`
          @keyframes hand-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          @keyframes tool-rotate-1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.8; }
            50% { transform: translate(-3px, -3px) rotate(15deg); opacity: 1; }
          }
          @keyframes tool-rotate-2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.75; }
            50% { transform: translate(3px, -2px) rotate(-20deg); opacity: 1; }
          }
          @keyframes tool-rotate-3 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.7; }
            50% { transform: translate(-2px, 2px) rotate(10deg); opacity: 1; }
          }
          @keyframes tool-float-1 {
            0%, 100% { transform: translateY(0); opacity: 0.7; }
            50% { transform: translateY(-5px); opacity: 1; }
          }
          @keyframes tool-float-2 {
            0%, 100% { transform: translateY(0); opacity: 0.65; }
            50% { transform: translateY(-4px); opacity: 1; }
          }
          @keyframes tool-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </svg>
  );
};

export default ToolsInHand;
