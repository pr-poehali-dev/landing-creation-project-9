const IntensiveCalendar = ({ size = 40 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Календарь основа */}
      <g style={{ animation: 'calendar-pulse 2s ease-in-out infinite' }}>
        {/* Верхняя часть календаря */}
        <rect x="20" y="25" width="60" height="12" rx="3" fill="currentColor" opacity="0.9" />
        
        {/* Кольца для подвешивания */}
        <rect x="30" y="20" width="4" height="10" rx="2" fill="currentColor" opacity="0.8" />
        <rect x="66" y="20" width="4" height="10" rx="2" fill="currentColor" opacity="0.8" />
        
        {/* Основное тело календаря */}
        <rect x="20" y="37" width="60" height="48" rx="3" fill="currentColor" opacity="0.7" />
        
        {/* Белые поля дней */}
        <rect x="23" y="40" width="54" height="42" rx="2" fill="white" opacity="0.15" />
      </g>
      
      {/* День 1 */}
      <g style={{ animation: 'day-highlight-1 2s ease-in-out infinite' }}>
        <rect x="26" y="44" width="12" height="9" rx="1.5" fill="currentColor" opacity="0.6" />
        <text x="32" y="51" fontSize="6" fill="white" textAnchor="middle" fontWeight="bold">1</text>
      </g>
      
      {/* День 2 */}
      <g style={{ animation: 'day-highlight-2 2s ease-in-out infinite 0.5s' }}>
        <rect x="41" y="44" width="12" height="9" rx="1.5" fill="currentColor" opacity="0.6" />
        <text x="47" y="51" fontSize="6" fill="white" textAnchor="middle" fontWeight="bold">2</text>
      </g>
      
      {/* День 3 */}
      <g style={{ animation: 'day-highlight-3 2s ease-in-out infinite 1s' }}>
        <rect x="56" y="44" width="12" height="9" rx="1.5" fill="currentColor" opacity="0.6" />
        <text x="62" y="51" fontSize="6" fill="white" textAnchor="middle" fontWeight="bold">3</text>
      </g>
      
      {/* День 4 */}
      <g style={{ animation: 'day-highlight-4 2s ease-in-out infinite 1.5s' }}>
        <rect x="26" y="56" width="12" height="9" rx="1.5" fill="currentColor" opacity="0.6" />
        <text x="32" y="63" fontSize="6" fill="white" textAnchor="middle" fontWeight="bold">4</text>
      </g>
      
      {/* Энергетические волны */}
      <g style={{ animation: 'energy-wave-1 2s ease-in-out infinite' }}>
        <path 
          d="M 15 50 Q 12 48 10 50" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.6"
          strokeLinecap="round"
        />
      </g>
      
      <g style={{ animation: 'energy-wave-2 2s ease-in-out infinite 0.3s' }}>
        <path 
          d="M 85 50 Q 88 48 90 50" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.6"
          strokeLinecap="round"
        />
      </g>
      
      <g style={{ animation: 'energy-wave-3 2s ease-in-out infinite 0.6s' }}>
        <path 
          d="M 15 60 Q 12 58 10 60" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.5"
          strokeLinecap="round"
        />
      </g>
      
      <g style={{ animation: 'energy-wave-4 2s ease-in-out infinite 0.9s' }}>
        <path 
          d="M 85 60 Q 88 58 90 60" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.5"
          strokeLinecap="round"
        />
      </g>
      
      {/* Молнии интенсивности */}
      <g style={{ animation: 'lightning-1 2s ease-in-out infinite' }}>
        <path 
          d="M 12 35 L 15 40 L 13 40 L 16 45" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none"
          opacity="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      
      <g style={{ animation: 'lightning-2 2s ease-in-out infinite 1s' }}>
        <path 
          d="M 88 35 L 85 40 L 87 40 L 84 45" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none"
          opacity="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      
      {/* Звёзды успеха */}
      <g style={{ animation: 'star-twinkle-1 2s ease-in-out infinite' }}>
        <path
          d="M 50 72 L 51 75 L 54 76 L 51 77 L 50 80 L 49 77 L 46 76 L 49 75 Z"
          fill="currentColor"
          opacity="0.8"
        />
      </g>
      
      <g style={{ animation: 'star-twinkle-2 2s ease-in-out infinite 0.7s' }}>
        <circle cx="35" cy="75" r="1.5" fill="currentColor" opacity="0.6" />
      </g>
      
      <g style={{ animation: 'star-twinkle-3 2s ease-in-out infinite 1.4s' }}>
        <circle cx="65" cy="75" r="1.5" fill="currentColor" opacity="0.6" />
      </g>
      
      <style>
        {`
          @keyframes calendar-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
          @keyframes day-highlight-1 {
            0%, 75%, 100% { opacity: 0.6; transform: scale(1); }
            12.5% { opacity: 1; transform: scale(1.15); }
          }
          @keyframes day-highlight-2 {
            0%, 75%, 100% { opacity: 0.6; transform: scale(1); }
            12.5% { opacity: 1; transform: scale(1.15); }
          }
          @keyframes day-highlight-3 {
            0%, 75%, 100% { opacity: 0.6; transform: scale(1); }
            12.5% { opacity: 1; transform: scale(1.15); }
          }
          @keyframes day-highlight-4 {
            0%, 75%, 100% { opacity: 0.6; transform: scale(1); }
            12.5% { opacity: 1; transform: scale(1.15); }
          }
          @keyframes energy-wave-1 {
            0%, 100% { transform: translateX(0); opacity: 0; }
            50% { transform: translateX(-3px); opacity: 0.6; }
          }
          @keyframes energy-wave-2 {
            0%, 100% { transform: translateX(0); opacity: 0; }
            50% { transform: translateX(3px); opacity: 0.6; }
          }
          @keyframes energy-wave-3 {
            0%, 100% { transform: translateX(0); opacity: 0; }
            50% { transform: translateX(-2px); opacity: 0.5; }
          }
          @keyframes energy-wave-4 {
            0%, 100% { transform: translateX(0); opacity: 0; }
            50% { transform: translateX(2px); opacity: 0.5; }
          }
          @keyframes lightning-1 {
            0%, 90%, 100% { opacity: 0; }
            5% { opacity: 0.7; }
            10% { opacity: 0; }
            15% { opacity: 0.9; }
            20% { opacity: 0; }
          }
          @keyframes lightning-2 {
            0%, 90%, 100% { opacity: 0; }
            5% { opacity: 0.7; }
            10% { opacity: 0; }
            15% { opacity: 0.9; }
            20% { opacity: 0; }
          }
          @keyframes star-twinkle-1 {
            0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
            50% { opacity: 0.8; transform: scale(1.2) rotate(180deg); }
          }
          @keyframes star-twinkle-2 {
            0%, 100% { opacity: 0.2; transform: scale(0.7); }
            50% { opacity: 0.6; transform: scale(1.3); }
          }
          @keyframes star-twinkle-3 {
            0%, 100% { opacity: 0.2; transform: scale(0.7); }
            50% { opacity: 0.6; transform: scale(1.3); }
          }
        `}
      </style>
    </svg>
  );
};

export default IntensiveCalendar;
