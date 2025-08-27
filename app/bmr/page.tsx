'use client';

import React from 'react';
 
// The BMR calculator component.
const App = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
                <div className="flex flex-col items-center space-y-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mt-4">
                        BMR Calculator
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-center text-indigo-600">
                        คำนวณ BMR
                    </p>
                    <img src="/bmr.png" alt="bmr" className="w-20 h-20" />
                </div>
 
                <form className="mt-8 space-y-6">
                    {/* Weight Input */}
                    <div className="flex flex-col">
                        <label htmlFor="weight" className="text-sm font-semibold text-gray-700 mb-2">
                            ป้อนน้ำหนัก (กิโลกรัม)
                        </label>
                        <input
                            type="number"
                            id="weight"
                            name="weight"
                            placeholder="0.00"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                        />
                    </div>
 
                    {/* Height Input */}
                    <div className="flex flex-col">
                        <label htmlFor="height" className="text-sm font-semibold text-gray-700 mb-2">
                            ป้อนส่วนสูง (เซนติเมตร)
                        </label>
                        <input
                            type="number"
                            id="height"
                            name="height"
                            placeholder="0.00"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                        />
                    </div>
 
                    {/* Age Input */}
                    <div className="flex flex-col">
                        <label htmlFor="age" className="text-sm font-semibold text-gray-700 mb-2">
                            อายุ (ปี)
                        </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            placeholder="0"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                        />
                    </div>
 
                    {/* Gender Selection */}
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-700 mb-2">เพศ</span>
                        <div className="flex space-x-6">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="male"
                                    className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 transition-colors"
                                />
                                <label htmlFor="male" className="ml-2 text-sm text-gray-700">
                                    ชาย
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female"
                                    className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 transition-colors"
                                />
                                <label htmlFor="female" className="ml-2 text-sm text-gray-700">
                                    หญิง
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
 
                <div className="flex flex-col md:flex-row mt-8 space-y-4 md:space-y-0 md:space-x-4">
                    <button className="w-full md:w-1/2 bg-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition-transform transform hover:scale-105">
                        คำนวณ BMR
                    </button>
                    <button className="w-full md:w-1/2 bg-gray-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 transition-transform transform hover:scale-105">
                        รีเซ็ต
                    </button>
                </div>
 
                <div className="mt-8 text-center">
                    <p className="text-lg font-bold text-gray-800">
                        ค่า BMI ที่คำนวณได้ : <span className="text-2xl text-indigo-600">0.00</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
 
export default App;
 
 