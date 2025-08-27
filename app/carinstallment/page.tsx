'use client';

import { useState } from 'react';

// The main App component for the car installment calculator UI.
export default function App() {
  // State variables for the form inputs.
  const [carPrice, setCarPrice] = useState<string>('');
  const [downPaymentAmount, setDownPaymentAmount] = useState<string>('');
  const [downPaymentPercentage, setDownPaymentPercentage] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [installmentPeriod, setInstallmentPeriod] = useState<number>(0);
  const [monthlyInstallment, setMonthlyInstallment] = useState<string>('0.00');

  // Placeholder function for future calculation logic.
  const handleCalculate = () => {
    // This is where the calculation logic will go.
    // For now, it's just a placeholder.
    console.log("Calculate button clicked");
  };

  // Placeholder function to reset the form.
  const handleReset = () => {
    setCarPrice('');
    setDownPaymentAmount('');
    setDownPaymentPercentage(0);
    setInterestRate(0);
    setInstallmentPeriod(0);
    setMonthlyInstallment('0.00');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl transform rounded-3xl bg-white p-8 shadow-2xl transition-all duration-300 hover:scale-[1.01]">
        {/* Header section with titles and an image */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-800">Car Installment</h1>
          <h2 className="mb-4 text-xl font-medium text-gray-600">คำนวณ ค่างวดรถ</h2>
          {/* Placeholder for a car image */}
          <div className="flex justify-center ">
            <img src="/car.png" alt="car" className="h-full w-50" />
          </div>
        </div>

        {/* Form fields for the calculator */}
        <div className="space-y-6">
          {/* Car Price Input */}
          <div>
            <label htmlFor="carPrice" className="mb-2 block text-sm font-medium text-gray-700">
              ราคารถยนต์ (บาท)
            </label>
            <input
              type="number"
              id="carPrice"
              value={carPrice}
              onChange={(e) => setCarPrice(e.target.value)}
              className="mt-1 block w-full rounded-xl border-gray-300 px-4 py-3 text-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="ป้อนราคารถยนต์"
            />
          </div>

          {/* Down Payment Input and Select */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="downPayment" className="mb-2 block text-sm font-medium text-gray-700">
                เงินดาวน์ (บาท)
              </label>
              <input
                type="number"
                id="downPayment"
                value={downPaymentAmount}
                onChange={(e) => setDownPaymentAmount(e.target.value)}
                className="mt-1 block w-full rounded-xl border-gray-300 px-4 py-3 text-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="ป้อนเงินดาวน์"
              />
            </div>
            <div>
              <label htmlFor="downPaymentPercent" className="mb-2 block text-sm font-medium text-gray-700">
                เงินดาวน์ (%)
              </label>
              <select
                id="downPaymentPercent"
                value={downPaymentPercentage}
                onChange={(e) => setDownPaymentPercentage(Number(e.target.value))}
                className="mt-1 block w-full rounded-xl border-gray-300 px-4 py-3 text-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value={0}>เลือก</option>
                <option value={10}>10%</option>
                <option value={15}>15%</option>
                <option value={20}>20%</option>
                <option value={25}>25%</option>
                <option value={30}>30%</option>
                <option value={35}>35%</option>
                <option value={40}>40%</option>
                <option value={45}>45%</option>
                <option value={50}>50%</option>
              </select>
            </div>
          </div>

          {/* Interest Rate and Installment Period */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="interestRate" className="mb-2 block text-sm font-medium text-gray-700">
                ดอกเบี้ยต่อปี (%)
              </label>
              <input
                type="number"
                id="downPayment"
                value={downPaymentAmount}
                onChange={(e) => setDownPaymentAmount(e.target.value)}
                className="mt-1 block w-full rounded-xl border-gray-300 px-4 py-3 text-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="ป้อนดอกเบี้ยต่อปี"
              />
            </div>
            <div>
              <label htmlFor="installmentPeriod" className="mb-2 block text-sm font-medium text-gray-700">
                จำนวนเดือนผ่อน
              </label>
              <select
                id="installmentPeriod"
                value={installmentPeriod}
                onChange={(e) => setInstallmentPeriod(Number(e.target.value))}
                className="mt-1 block w-full rounded-xl border-gray-300 px-4 py-3 text-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value={0}>เลือก</option>
                <option value={1}>1 เดือน</option>
                <option value={2}>2 เดือน</option>
                <option value={3}>3 เดือน</option>
                <option value={4}>4 เดือน</option>
                <option value={5}>5 เดือน</option>
                <option value={6}>6 เดือน</option>
                <option value={7}>7 เดือน</option>
                <option value={8}>8 เดือน</option>
                <option value={8}>9 เดือน</option>
                <option value={8}>10 เดือน</option>
                <option value={8}>11 เดือน</option>
                <option value={8}>12 เดือน</option>
              </select>
            </div>
          </div>

          {/* Buttons and Result Display */}
          <div className="flex flex-col items-center justify-center space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <button
              onClick={handleCalculate}
              className="w-full transform rounded-full bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              คำนวณ
            </button>
            <button
              onClick={handleReset}
              className="w-full transform rounded-full bg-gray-300 px-8 py-3 font-semibold text-gray-700 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              รีเซ็ต
            </button>
          </div>

          {/* Result display */}
          <div className="mt-8 rounded-2xl bg-gray-100 p-6 text-center">
            <p className="text-xl font-medium text-gray-700">
              ค่าค่างวดต่อเดือน:
              <span className="ml-2 text-2xl font-bold text-blue-600">{monthlyInstallment}</span> บาท
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
