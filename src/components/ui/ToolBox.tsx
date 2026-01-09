const ToolBox = ({ size = 40 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="15"
        y="45"
        width="70"
        height="35"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      
      <rect
        x="20"
        y="40"
        width="60"
        height="5"
        fill="currentColor"
        opacity="0.3"
      />
      
      <path
        d="M35 45 L35 35 C35 32, 37 30, 40 30 L60 30 C63 30, 65 32, 65 35 L65 45"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      <line
        x1="30"
        y1="55"
        x2="40"
        y2="55"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      <circle
        cx="50"
        cy="60"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <line
        x1="50"
        y1="64"
        x2="50"
        y2="70"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      <path
        d="M60 55 L65 55 L67 60 L63 60 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      
      <line
        x1="25"
        y1="65"
        x2="35"
        y2="65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="30"
        y1="70"
        x2="38"
        y2="70"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ToolBox;
