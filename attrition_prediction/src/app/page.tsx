'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"; // Add this import

export default function Home() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // only renders after client-side mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePredictionClick = () => {
    router.prefetch('/Prediction'); // load in the background before user clicks
    router.push('/Prediction');
  }

  // If not client-side, return null
  if (!isClient) {
    return null;
  }

  return (
    <main className="flex-grow flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center -mt-16">
        <h1 className="flex items-center justify-center text-5xl font-bold text-white animate-flipIn relative text-center">
          <span className="absolute inset-0 
            -translate-x-0.8
            text-[#3D52A0] 
            blur-sm
            opacity-60
            scale-105
            shadow-lg
            transform 
            transition-transform 
            hover:rotate-1">
            Welcome to Employee Attrition Prediction
          </span>
          <span className="relative 
            text-white 
            z-8
            drop-shadow-[0_5px_4px_rgba(0,0,0,0.5)] 
            hover:translate-x-0.5 
            hover:translate-y-0.5 
            transition-transform">
            Welcome to Employee Attrition Prediction
          </span>
        </h1>

        <div className="flex justify-center items-center w-full mt-6">
          <button 
            className="mt-5 bg-blue-500 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-150 shadow-lg"
            onClick={handlePredictionClick}
          >
            Go to Prediction   
          </button>
        </div>
      </div>
    </main>
  );
}