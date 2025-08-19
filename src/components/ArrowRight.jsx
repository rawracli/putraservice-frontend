import { useId } from "react";

export default function ArrowRight({ className, strokeWidth = 4, lineWidth = "50%"  }) {
   const id = useId();

  return (
    <svg
      className={className}
      viewBox="0 0 100 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <marker
          id={`arrowhead-${id}`}
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="5"
          orient="auto"
          markerUnits="userSpaceOnUse"
        >
          {/* Kepala panah outline (>) */}
          <path d="M0,0 L10,5 L0,10" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round" />
        </marker>
      </defs>

      {/* Ekor garis */}
      <line
        x1="0"
        y1="12"
        x2={lineWidth}
        y2="12"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
         markerEnd={`url(#arrowhead-${id})`}
      />
    </svg>
  );
}
