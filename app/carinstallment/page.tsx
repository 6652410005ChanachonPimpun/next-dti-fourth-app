'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function App() {
  // State variables for the form inputs.
  const [carPrice, setCarPrice] = useState('');
  const [downPaymentPercentage, setDownPaymentPercentage] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [installmentPeriod, setInstallmentPeriod] = useState('');
  const [monthlyInstallment, setMonthlyInstallment] = useState('0.00');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle the calculation logic.
  const handleCalculate = () => {
    // Clear any previous error messages.
    setErrorMessage('');

    // Input validation.
    if (!carPrice || !interestRate || !installmentPeriod) {
      setErrorMessage('กรุณาป้อนค่าราคารถ ดอกเบี้ย และจำนวนเดือน');
      return;
    }
    if (parseFloat(carPrice) <= 0 || parseFloat(interestRate) <= 0 || parseFloat(installmentPeriod) <= 0) {
      setErrorMessage('ค่าที่ป้อนต้องมากกว่า 0');
      return;
    }

    // Convert inputs to numbers.
    const carPriceNum = parseFloat(carPrice);
    const downPaymentPercentageNum = parseFloat(downPaymentPercentage) || 0;
    const interestRateNum = parseFloat(interestRate);
    const installmentPeriodNum = parseFloat(installmentPeriod);

    // Calculation formulas from your request.
    const downPayment = carPriceNum * (downPaymentPercentageNum / 100);
    const remainingAmount = carPriceNum - downPayment;
    const totalInterest = remainingAmount * (interestRateNum / 100) * (installmentPeriodNum / 12);
    const totalAmountToPay = remainingAmount + totalInterest;
    const calculatedMonthlyInstallment = totalAmountToPay / installmentPeriodNum;

    // Update the state with the calculated value.
    setMonthlyInstallment(calculatedMonthlyInstallment.toFixed(2));
  };

  // Function to reset all input fields and results.
  const handleReset = () => {
    setCarPrice('');
    setDownPaymentPercentage('');
    setInterestRate('');
    setInstallmentPeriod('');
    setMonthlyInstallment('0.00');
    setErrorMessage('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 hover:scale-105">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-2">
          Car Installment Calculator
        </h1>
        <p className="text-xl md:text-2xl font-medium text-center text-indigo-600">
          คำนวณค่างวดรถ
        </p>
        <img src="/car.png" alt="car" className='w-40 mx-auto mb-2 center'/>

        <div className="space-y-6">
          {/* Car Price Input */}
          <div className="flex flex-col">
            <label htmlFor="carPrice" className="text-sm font-semibold text-gray-700 mb-2">
              ราคารถ (บาท)
            </label>
            <input
              type="number"
              id="carPrice"
              placeholder="0.00"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              value={carPrice}
              onChange={(e) => setCarPrice(e.target.value)}
            />
          </div>

          {/* Down Payment Percentage Input */}
          <div className="flex flex-col">
            <label htmlFor="downPaymentPercentage" className="text-sm font-semibold text-gray-700 mb-2">
              เงินดาวน์ (%)
            </label>
            <input
              type="number"
              id="downPaymentPercentage"
              placeholder="0"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              value={downPaymentPercentage}
              onChange={(e) => setDownPaymentPercentage(e.target.value)}
            />
          </div>

          {/* Interest Rate Input */}
          <div className="flex flex-col">
            <label htmlFor="interestRate" className="text-sm font-semibold text-gray-700 mb-2">
              อัตราดอกเบี้ยต่อปี (%)
            </label>
            <input
              type="number"
              id="interestRate"
              placeholder="0.00"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>

          {/* Installment Period Input */}
          <div className="flex flex-col">
            <label htmlFor="installmentPeriod" className="text-sm font-semibold text-gray-700 mb-2">
              จำนวนเดือนที่ผ่อน
            </label>
            <input
              type="number"
              id="installmentPeriod"
              placeholder="0"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              value={installmentPeriod}
              onChange={(e) => setInstallmentPeriod(e.target.value)}
            />
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row mt-8 space-y-4 md:space-y-0 md:space-x-4">
          <button
            className="w-full md:w-1/2 bg-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition-transform transform hover:scale-105"
            onClick={handleCalculate}>
            คำนวณค่างวด
          </button>
          <button
            className="w-full md:w-1/2 bg-gray-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 transition-transform transform hover:scale-105"
            onClick={handleReset}>
            รีเซ็ต
          </button>
        </div>

        {/* Display for Error Message */}
        {errorMessage && (
          <div className="mt-4 text-center text-red-600 font-semibold">
            {errorMessage}
          </div>
        )}

        {/* Display for the result */}
        <div className="mt-8 text-center">
          <p className="text-lg font-bold text-gray-800">
            ค่างวดต่อเดือน: <span className="text-2xl text-indigo-600">
              {monthlyInstallment} บาท
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
}
