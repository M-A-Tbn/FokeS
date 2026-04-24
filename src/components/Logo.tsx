import React from "react";

export const FokesLogo = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* Layer 1: Outer Star/Aura */}
    <path 
      d="M50 4 C60 25 75 40 96 50 C75 60 60 75 50 96 C40 75 25 60 4 50 C25 40 40 25 50 4 Z" 
      fill="currentColor" 
      fillOpacity="0.25"
    />
    
    {/* Layer 2: Inner Focused Spark */}
    <path 
      d="M50 20 C56 32 68 44 80 50 C68 56 56 68 50 80 C44 68 32 56 20 50 C32 44 44 32 50 20 Z" 
      fill="currentColor" 
      fillOpacity="0.6"
    />
    
    {/* Layer 3: Solid Core */}
    <circle 
      cx="50" 
      cy="50" 
      r="10" 
      fill="currentColor" 
    />
  </svg>
);
