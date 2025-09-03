'use client';

import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
 
// The BMR calculator component.
const App = () => {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [bmr, setBmr] = useState('0.00');

    const calBMR = () => {
        //validate
        if (!weight || !height || !age || parseFloat(weight) <= 0 || parseFloat(height) <= 0 || parseFloat(age) <= 0) {
            alert("กรุณาป้อนค่าส่วนสูงและน้ำหนัก และต้องมากกว่า 0");
            return; 
        }
    

// //สูตร BMR
// สำหรับผู้ชาย:
// BMR = 66.5 + (13.75 × น้ำหนักตัว (กก.)) + (5.003 × ส่วนสูง (ซม.)) – (6.75 × อายุ)
// สำหรับผู้หญิง:
// BMR = 655.1 + (9.563 × น้ำหนักตัว (กก.)) + (1.850 × ส่วนสูง (ซม.)) – (4.76 × อายุ)

    if(gender == 'male'){
        const BMR = 66.5 + (13.75 * parseFloat(weight)) + (5.003 * parseFloat(height)) - (6.75 * parseFloat(age));
        setBmr(BMR.toFixed(2));
    }else{
        const BMR = 655.1 + (9.563 * parseFloat(weight)) + (1.850 * parseFloat(height)) - (4.76 * parseFloat(age));
        setBmr(BMR.toFixed(2));
    }
}

    const resetbuttom = () => {
        setWeight('');
        setHeight('');
        setAge('');
        setGender('male');
        setBmr('0.00');
    }

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
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
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
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
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
                            value={age}
                            onChange={(e) => setAge(e.target.value)}                        
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
                                    checked={gender === 'male'}
                                    onChange={(e) => setGender(e.target.value)}
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
                                    checked={gender === 'female'}
                                    onChange={(e) => setGender(e.target.value)}
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
                    <button className="w-full md:w-1/2 bg-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition-transform transform hover:scale-105"
                        onClick={calBMR}>
                        คำนวณ BMR
                    </button>
                    <button className="w-full md:w-1/2 bg-gray-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 transition-transform transform hover:scale-105"
                        onClick={resetbuttom}>
                        รีเซ็ต
                    </button>
                </div>
 
                <div className="mt-8 text-center">
                    <p className="text-lg font-bold text-gray-800">
                        ค่า BMI ที่คำนวณได้ : <span className="text-2xl text-indigo-600">
                            {bmr}
                        </span>
                    </p>
                </div>
                <Link href="/" legacyBehavior> 
          <div className="mt-6 text-center text-xl font-bold text-gray-800">
            กลับไปหน้าแรก
          </div>
        </Link>
            </div>
        </div>
    );
};
 
export default App;