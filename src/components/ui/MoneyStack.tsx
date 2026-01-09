const MoneyStack = ({ size = 40 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="money-bill-1">
        <rect x="15" y="55" width="70" height="35" rx="3" fill="#2d7a3e" opacity="0.6" />
        <circle cx="50" cy="72.5" r="8" fill="#e8f5e9" opacity="0.8" />
        <text x="50" y="77" fontSize="12" fill="#1b5e20" textAnchor="middle" fontWeight="bold">$</text>
      </g>
      
      <g className="money-bill-2">
        <rect x="15" y="40" width="70" height="35" rx="3" fill="#2d7a3e" opacity="0.7" />
        <circle cx="50" cy="57.5" r="8" fill="#e8f5e9" opacity="0.85" />
        <text x="50" y="62" fontSize="12" fill="#1b5e20" textAnchor="middle" fontWeight="bold">$</text>
      </g>
      
      <g className="money-bill-3">
        <rect x="15" y="25" width="70" height="35" rx="3" fill="#2d7a3e" opacity="0.85" />
        <circle cx="50" cy="42.5" r="8" fill="#e8f5e9" opacity="0.9" />
        <text x="50" y="47" fontSize="12" fill="#1b5e20" textAnchor="middle" fontWeight="bold">$</text>
      </g>
      
      <g className="money-bill-4">
        <rect x="15" y="10" width="70" height="35" rx="3" fill="#2d7a3e" />
        <circle cx="50" cy="27.5" r="8" fill="#e8f5e9" />
        <text x="50" y="32" fontSize="12" fill="#1b5e20" textAnchor="middle" fontWeight="bold">$</text>
      </g>
      
      <g className="plus-sign">
        <circle cx="80" cy="20" r="10" fill="hsl(var(--secondary))" />
        <line x1="80" y1="15" x2="80" y2="25" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="75" y1="20" x2="85" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </g>
      
      <style>
        {`
          .money-bill-1 {
            animation: stack-grow 2s ease-in-out infinite;
            transform-origin: center;
          }
          .money-bill-2 {
            animation: stack-grow 2s ease-in-out 0.2s infinite;
            transform-origin: center;
          }
          .money-bill-3 {
            animation: stack-grow 2s ease-in-out 0.4s infinite;
            transform-origin: center;
          }
          .money-bill-4 {
            animation: stack-grow 2s ease-in-out 0.6s infinite;
            transform-origin: center;
          }
          .plus-sign {
            animation: plus-pulse 2s ease-in-out infinite;
            transform-origin: 80px 20px;
          }
          
          @keyframes stack-grow {
            0%, 100% {
              transform: scale(1) translateY(0);
              opacity: 1;
            }
            50% {
              transform: scale(1.05) translateY(-2px);
              opacity: 0.8;
            }
          }
          
          @keyframes plus-pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }
        `}
      </style>
    </svg>
  );
};

export default MoneyStack;