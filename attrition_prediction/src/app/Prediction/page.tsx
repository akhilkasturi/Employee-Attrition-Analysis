'use client';

import React from 'react';
import { useRouter } from "next/navigation";
import {FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function PredictionPage() {
  const router = useRouter()
  const handleDataSetClick = () => {
    router.push('/DataSet');
  }
  return (
    // <div className="w-full min-h-screen flex items-center justify-center p-5 ">
    <div className="min-h-screen bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 animate-gradient-flow bg-gradient-size flex items-center justify-center p-6 shadow-2xl">
      <div className="w-full max-w-[1200px] h-[900px] bg-white shadow-lg rounded-lg overflow-hidden">
        <iframe
          src="https://haniyahalzaben-employee-retention-prediction.hf.space"
          className="w-full h-full border-none"
          title="Employee Retention Prediction"
        />
      </div>

      <button
          onClick={() => router.back()} 
          // className="card-text flex items-center gap-2 p-3 text-white bg-blue-400 rounded-full shadow-md hover:bg-[#3D52A0] transition-all mt-6 ml-6 mb-4 focus:ring-2 focus:ring-blue-400"
          className="absolute top-4 left-4 h-9 w-11 mr-3 bg-blue-500 text-white p-2 rounded-full hover:bg-[#3D52A0] flex items-center justify-center focus:ring-2 focus:ring-blue-400"
        >
          <FaArrowLeft className="text-xl" />
        </button>


        <button
          onClick={handleDataSetClick} 
          // className="card-text flex items-center gap-2 p-3 text-white bg-blue-400 rounded-full shadow-md hover:bg-[#3D52A0] transition-all mt-6 ml-6 mb-4 focus:ring-2 focus:ring-blue-400"
          className="absolute top-4 right-4 h-8 w-35 mr-3 bg-blue-500 text-white p-2 rounded-full hover:bg-[#3D52A0] flex items-center justify-center focus:ring-2 focus:ring-blue-400"
        >
           Data Set
          <FaArrowRight className="text-xl text-center" />
         
        </button>

    </div>
  );
}