const BrainWithRays = ({ size = 40 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0" style={{ animation: 'ray-pulse 2s ease-in-out infinite' }}>
        <line x1="50" y1="15" x2="50" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="70" y1="20" x2="77" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="80" y1="40" x2="90" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="20" x2="23" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="40" x2="10" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="70" y1="60" x2="77" y2="67" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="60" x2="23" y2="67" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </g>
      
      <path
        d="M50 20 C35 20, 25 30, 25 45 C25 50, 27 55, 30 58 C28 60, 27 63, 27 66 C27 71, 31 75, 36 75 L36 78 C36 82, 39 85, 43 85 L57 85 C61 85, 64 82, 64 78 L64 75 C69 75, 73 71, 73 66 C73 63, 72 60, 70 58 C73 55, 75 50, 75 45 C75 30, 65 20, 50 20 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      <path
        d="M35 45 Q40 35, 45 40 M55 40 Q60 35, 65 45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      <circle cx="42" cy="50" r="2" fill="currentColor" />
      <circle cx="58" cy="50" r="2" fill="currentColor" />
      
      <style>
        {`
          @keyframes ray-pulse {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.8; }
          }
        `}
      </style>
    </svg>
  );
};

export default BrainWithRays;
