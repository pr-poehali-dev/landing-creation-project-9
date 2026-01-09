const BrainWithBulb = ({ size = 40 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35 45 C35 32, 45 25, 50 25 C55 25, 65 32, 65 45 C65 52, 62 58, 58 62 L58 70 L42 70 L42 62 C38 58, 35 52, 35 45Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      <path
        d="M42 70 L58 70 M43 75 L57 75 M45 80 L55 80"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      <circle
        cx="78"
        cy="30"
        r="8"
        fill="currentColor"
        opacity="0"
        style={{
          animation: 'bulb-glow 2s ease-in-out infinite'
        }}
      />
      
      <circle
        cx="78"
        cy="30"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      <line
        x1="78"
        y1="20"
        x2="78"
        y2="24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="78"
        y1="36"
        x2="78"
        y2="40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="68"
        y1="30"
        x2="72"
        y2="30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="84"
        y1="30"
        x2="88"
        y2="30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      <style>
        {`
          @keyframes bulb-glow {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.8; }
          }
        `}
      </style>
    </svg>
  );
};

export default BrainWithBulb;
