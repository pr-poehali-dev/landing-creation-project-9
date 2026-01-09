const AdaptiveSparkles = ({ size = 40 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ animation: 'sparkle-1 1.5s ease-in-out infinite' }}>
        <path
          d="M30 30 L32 38 L40 40 L32 42 L30 50 L28 42 L20 40 L28 38 Z"
          fill="currentColor"
        />
      </g>
      
      <g style={{ animation: 'sparkle-2 1.8s ease-in-out infinite 0.3s' }}>
        <path
          d="M65 25 L67 31 L73 33 L67 35 L65 41 L63 35 L57 33 L63 31 Z"
          fill="currentColor"
        />
      </g>
      
      <g style={{ animation: 'sparkle-3 2s ease-in-out infinite 0.6s' }}>
        <path
          d="M50 55 L53 65 L63 68 L53 71 L50 81 L47 71 L37 68 L47 65 Z"
          fill="currentColor"
        />
      </g>
      
      <g style={{ animation: 'sparkle-1 1.6s ease-in-out infinite 0.9s' }}>
        <path
          d="M75 60 L77 66 L83 68 L77 70 L75 76 L73 70 L67 68 L73 66 Z"
          fill="currentColor"
        />
      </g>
      
      <g style={{ animation: 'sparkle-2 1.7s ease-in-out infinite 1.2s' }}>
        <circle cx="25" cy="70" r="3" fill="currentColor" />
      </g>
      
      <style>
        {`
          @keyframes sparkle-1 {
            0%, 100% { opacity: 0.2; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          @keyframes sparkle-2 {
            0%, 100% { opacity: 0.3; transform: scale(0.7) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.1) rotate(180deg); }
          }
          @keyframes sparkle-3 {
            0%, 100% { opacity: 0.4; transform: scale(0.9); }
            50% { opacity: 1; transform: scale(1.3); }
          }
        `}
      </style>
    </svg>
  );
};

export default AdaptiveSparkles;
