'use client'
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handlePredictionClick = () => {
    router.push('/Prediction');
  }

  return (
   
      <main className="flex-grow flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center -mt-16">
          <h1 className="flex items-center justify-center text-5xl font-bold text-white animate-flipIn relative text-center">
            <span className="absolute inset-0 -translate-x-1 translate-y-1 text-[#3D52A0] blur-md">
              Welcome to Employee Attrition Prediction
            </span>
            <span className="relative">Welcome to Employee Attrition Prediction</span>
          </h1>

          <div className="flex justify-center items-center w-full mt-6">
            <button className="mt-5 bg-blue-500 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-150 shadow-lg"
              onClick={handlePredictionClick}
            >
            Go to Prediction   
            </button>
          </div>
        </div>
    </main>
  );
}
