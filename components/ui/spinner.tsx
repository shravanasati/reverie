interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white' | 'black';
}

export function LoadingSpinner({ size = 'md', color = 'primary' }: LoadingSpinnerProps) {
  const sizeClass = {
    sm: 'size-6',
    md: 'size-12',
    lg: 'size-16'
  }[size];

  const heightClass = {
    sm: 'h-5',
    md: 'h-48',
    lg: 'h-96'
  }[size];

  const borderColor = {
    primary: 'border-primary',
    white: 'border-white',
    black: 'border-black'
  }[color];

  return (
    <div className={`flex ${heightClass} items-center justify-center`}>
      <div
        className={`${sizeClass} rounded-full border-t-2 border-b-2 ${borderColor}`}
        style={{
          animation: "spinCustom 1s linear infinite",
        }}
      ></div>
      <style>
        {`
          @keyframes spinCustom {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}