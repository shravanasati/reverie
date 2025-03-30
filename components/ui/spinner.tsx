export function LoadingSpinner() {
  return (
    <div className="flex h-96 items-center justify-center">
      <div
        className="h-12 w-12 rounded-full border-t-2 border-b-2 border-primary"
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