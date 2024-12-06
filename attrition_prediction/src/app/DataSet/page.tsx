'use client'
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { useState } from 'react'
import {FaArrowLeft} from "react-icons/fa";


// Sample dataset images - replace with your actual images
const datasetImages = [
  '/images/COIL1.png',
  '/images/COIL2.png',
  '/images/COIL3.png',
  '/images/COIL4.png',
  '/images/COIL5.png',
  '/images/COIL6.png',


]

export default function DataSetPage() {
  const [selectedImage, setSelectedImage] =  useState<string | null>(null);
  const router = useRouter()


  return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-8">
        <div className="container mx-auto mb-40">
          <h1 className="text-5xl font-bold text-center text-[#3D52A0] mb-36">
            Employee Attrition Dataset
          </h1>
    
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            {datasetImages.map((imagePath, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-110 transition-transform"
                onClick={() => setSelectedImage(imagePath)}
              >
                <Image 
                  src={imagePath} 
                  alt={`Dataset Image ${index + 1}`}
                  width={1500}
                  height={1000}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
        </div>

        {/* click for full image view */}
        {selectedImage && (
                <div 
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedImage(null)}
                >
                <div className="w-full max-w-[500vw] max-h-[500vh] flex items-center justify-center overflow-hidden">
                <Image 
                        src={selectedImage} 
                        alt="Full Image" 
                        width={3000} // Increased width
                        height={1500} // Increased height
                        className="w-auto h-auto max-w-full max-h-full object-contain"
                />
                </div>
                </div>
                )}
        </div>

      <button
          onClick={() => router.back()} 
          className="absolute top-4 left-4 h-9 w-11 mr-3 bg-blue-500 text-white p-2 rounded-full hover:bg-[#3D52A0] flex items-center justify-center focus:ring-2 focus:ring-blue-400"
        >
          <FaArrowLeft className="text-xl" />
        </button>
    </div>
  )
}