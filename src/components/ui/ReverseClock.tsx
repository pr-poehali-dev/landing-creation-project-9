const ReverseClock = ({ size = 40 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      
      <circle cx="50" cy="50" r="3" fill="currentColor" />
      
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        style={{
          transformOrigin: '50px 50px',
          animation: 'reverse-hour 43200s linear infinite reverse'
        }}
      />
      
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          transformOrigin: '50px 50px',
          animation: 'reverse-minute 3600s linear infinite reverse'
        }}
      />
      
      <path
        d="M 70 50 L 75 45 M 70 50 L 75 55"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      <style>
        {`
          @keyframes reverse-hour {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes reverse-minute {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </svg>
  );
};

export default ReverseClock;
