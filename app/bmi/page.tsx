'use client';

import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {

    if (!height || !weight) {
        alert("กรุณาป้อนค่าส่วนสูงและน้ำหนัก");
        return; 
    }

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    
    if (weightInKg > 0 && heightInMeters > 0) {
      const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi);
    } else {
      setBmi(null); 
    }
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Head>
        <title>BMI Calculator</title>
      </Head>

      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">BMI Calculator</h1>
          <p className="text-lg text-gray-600 mt-1">คำนวณ BMI</p>
        </div>

        {/* Image */}
        <div className="flex justify-center mb-6">
          <img src="/bmi.png" alt="bmi"  className="w-20 h-20"/>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
              ป้อนน้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="น้ำหนัก"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out"
            />
          </div>
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">
              ป้อนส่วนสูง (เซนติเมตร)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="ส่วนสูง"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button
            type="button"
            onClick={calculateBMI}
            className="w-full py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
          >
            คำนวณ BMI
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="w-full py-2 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out"
          >
            รีเซ็ต
          </button>
        </div>

        {/* Result */}
        <div className="mt-6 text-center text-xl font-bold text-gray-800">
          ค่า BMI ที่คำนวณได้ : {bmi !== null ? bmi.toFixed(2) : '0.00'}
        </div>
        <Link href="/" legacyBehavior> 
          <div className="mt-6 text-center text-xl font-bold text-gray-800">
            กลับไปหน้าแรก
          </div>
        </Link>
      </div>
    </div>
  );
}
