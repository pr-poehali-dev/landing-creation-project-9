const WorkingHands = ({ size = 40 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Левая рука */}
      <g style={{ animation: 'hand-left 1.5s ease-in-out infinite' }}>
        <path
          d="M20 50 Q18 45 18 40 L19 36 Q20 34 22 36 L23 45 Q24 35 26 32 Q27 30 29 32 L30 45 Q32 48 35 50 Q36 52 34 54 L25 54 Q21 53 20 50 Z"
          fill="currentColor"
          opacity="0.85"
        />
        {/* Большой палец левой руки */}
        <path
          d="M18 45 Q16 43 16 40 Q16 38 18 38 Q20 38 20 40 L19 45 Z"
          fill="currentColor"
          opacity="0.85"
        />
      </g>
      
      {/* Правая рука */}
      <g style={{ animation: 'hand-right 1.5s ease-in-out infinite' }}>
        <path
          d="M80 50 Q82 45 82 40 L81 36 Q80 34 78 36 L77 45 Q76 35 74 32 Q73 30 71 32 L70 45 Q68 48 65 50 Q64 52 66 54 L75 54 Q79 53 80 50 Z"
          fill="currentColor"
          opacity="0.85"
        />
        {/* Большой палец правой руки */}
        <path
          d="M82 45 Q84 43 84 40 Q84 38 82 38 Q80 38 80 40 L81 45 Z"
          fill="currentColor"
          opacity="0.85"
        />
      </g>
      
      {/* Объект работы - ноутбук / документ */}
      <g style={{ animation: 'work-object 1.5s ease-in-out infinite' }}>
        {/* Экран */}
        <rect x="40" y="35" width="20" height="15" rx="2" fill="currentColor" opacity="0.6" />
        <rect x="42" y="37" width="16" height="11" fill="white" opacity="0.2" />
        
        {/* Клавиатура */}
        <rect x="38" y="52" width="24" height="10" rx="1" fill="currentColor" opacity="0.7" />
        
        {/* Код на экране */}
        <rect x="43" y="39" width="8" height="1" fill="currentColor" opacity="0.4" />
        <rect x="43" y="42" width="6" height="1" fill="currentColor" opacity="0.4" />
        <rect x="43" y="45" width="10" height="1" fill="currentColor" opacity="0.4" />
      </g>
      
      {/* Искры от работы */}
      <g style={{ animation: 'spark-1 2s ease-in-out infinite' }}>
        <circle cx="35" cy="48" r="1.5" fill="currentColor" opacity="0.8" />
      </g>
      
      <g style={{ animation: 'spark-2 2s ease-in-out infinite 0.4s' }}>
        <circle cx="65" cy="48" r="1.5" fill="currentColor" opacity="0.8" />
      </g>
      
      <g style={{ animation: 'spark-3 2s ease-in-out infinite 0.8s' }}>
        <circle cx="50" cy="30" r="1" fill="currentColor" opacity="0.7" />
      </g>
      
      {/* Линии продуктивности */}
      <g style={{ animation: 'productivity-lines 1.5s ease-in-out infinite' }}>
        <line x1="50" y1="65" x2="45" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="50" y1="65" x2="50" y2="72" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="50" y1="65" x2="55" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      </g>
      
      <style>
        {`
          @keyframes hand-left {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(2px, -2px) rotate(5deg); }
            50% { transform: translate(3px, -1px) rotate(8deg); }
            75% { transform: translate(1px, -2px) rotate(3deg); }
          }
          @keyframes hand-right {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(-2px, -2px) rotate(-5deg); }
            50% { transform: translate(-3px, -1px) rotate(-8deg); }
            75% { transform: translate(-1px, -2px) rotate(-3deg); }
          }
          @keyframes work-object {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
          @keyframes spark-1 {
            0%, 100% { transform: translate(0, 0) scale(0); opacity: 0; }
            50% { transform: translate(-5px, -5px) scale(1.5); opacity: 0.8; }
          }
          @keyframes spark-2 {
            0%, 100% { transform: translate(0, 0) scale(0); opacity: 0; }
            50% { transform: translate(5px, -5px) scale(1.5); opacity: 0.8; }
          }
          @keyframes spark-3 {
            0%, 100% { transform: translate(0, 0) scale(0); opacity: 0; }
            50% { transform: translate(0, -8px) scale(2); opacity: 0.7; }
          }
          @keyframes productivity-lines {
            0%, 100% { transform: translateY(0); opacity: 0; }
            50% { transform: translateY(3px); opacity: 0.5; }
          }
        `}
      </style>
    </svg>
  );
};

export default WorkingHands;
