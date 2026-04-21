
interface CircleProgressProps {
  percent: number;
}

export function CircleProgress({ percent }: CircleProgressProps) {
  
  const radius = 30;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (percent / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      {/* Background circle */}
      <circle
        stroke="#2a2a2a"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      {/* Progress circle */}
      <circle
        stroke="#00d4ff"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      {/* Percentage text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="10"
      >
        {percent}%
      </text>
    </svg>
  );
}