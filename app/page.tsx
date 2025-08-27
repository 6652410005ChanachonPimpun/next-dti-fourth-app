import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

// This is a CSS-only solution for the card flip effect.
// It uses Tailwind CSS utility classes with transform properties
// and does not require any state management hooks like useState.
// The `group-hover` utility class is the key to triggering the flip animation.

const HomePage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center p-8">
      <Head>
        <title>เว็บไซต์เครื่องคำนวณ</title>
        <meta name="description" content="เว็บไซต์สำหรับคำนวณ BMI, BMR, และผ่อนรถ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center py-12 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-12 text-gray-800 dark:text-gray-100">
          เว็บไซต์เครื่องคำนวณสารพัดประโยชน์
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-16 max-w-2xl">
          เครื่องมือครบครันสำหรับการคำนวณด้านสุขภาพและการเงิน
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
          {/* Card 1: BMI Calculator */}
          <Link href="/bmi" legacyBehavior>
            <a className="relative perspective-1000 group">
              <div className="relative w-full h-80 transform-style-3d transition-transform duration-700 group-hover:rotate-y-180 rounded-2xl shadow-xl dark:shadow-2xl">
                {/* Card Front */}
                <div className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-800 p-6 flex flex-col items-center justify-center rounded-2xl">
                  <img src="/bmi.png" alt="bmi" className="w-20 h-20" />
                  <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                    เครื่องคำนวณ BMI
                  </h2>
                  <p className="text-center text-gray-600 dark:text-gray-300 px-4">
                    คำนวณดัชนีมวลกายเพื่อประเมินน้ำหนักที่เหมาะสม
                  </p>
                </div>
                {/* Card Back */}
                <div className="absolute w-full h-full backface-hidden bg-blue-600 dark:bg-blue-800 rotate-y-180 p-6 flex flex-col items-center justify-center rounded-2xl">
                  <p className="text-center text-white text-lg font-medium px-4">
                    คลิกเพื่อหาว่าน้ำหนักของคุณเหมาะสมหรือไม่
                  </p>
                </div>
              </div>
            </a>
          </Link>

          {/* Card 2: BMR Calculator */}
          <Link href="/bmr" legacyBehavior>
            <a className="relative perspective-1000 group">
              <div className="relative w-full h-80 transform-style-3d transition-transform duration-700 group-hover:rotate-y-180 rounded-2xl shadow-xl dark:shadow-2xl">
                {/* Card Front */}
                <div className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-800 p-6 flex flex-col items-center justify-center rounded-2xl">
                  <img src="/bmr.png" alt="bmi" className="w-20 h-20" />
                  <h2 className="text-3xl font-bold mb-4 text-green-600 dark:text-green-400">
                    เครื่องคำนวณ BMR
                  </h2>
                  <p className="text-center text-gray-600 dark:text-gray-300 px-4">
                    คำนวณอัตราการเผาผลาญพลังงานพื้นฐานของร่างกาย
                  </p>
                </div>
                {/* Card Back */}
                <div className="absolute w-full h-full backface-hidden bg-green-600 dark:bg-green-800 rotate-y-180 p-6 flex flex-col items-center justify-center rounded-2xl">
                  <p className="text-center text-white text-lg font-medium px-4">
                    คลิกเพื่อดูว่าร่างกายคุณต้องการพลังงานเท่าไหร่ต่อวัน
                  </p>
                </div>
              </div>
            </a>
          </Link>

          {/* Card 3: Car Installment Calculator */}
          <Link href="/carinstallment" legacyBehavior>
            <a className="relative perspective-1000 group">
              <div className="relative w-full h-80 transform-style-3d transition-transform duration-700 group-hover:rotate-y-180 rounded-2xl shadow-xl dark:shadow-2xl">
                {/* Card Front */}
                <div className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-800 p-6 flex flex-col items-center justify-center rounded-2xl">
                  <img src="/car.png" alt="bmi" className="w-20 h-20" />
                  <h2 className="text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                    คำนวณผ่อนรถ
                  </h2>
                  <p className="text-center text-gray-600 dark:text-gray-300 px-4">
                    วางแผนการผ่อนชำระค่างวดรถยนต์ในแต่ละเดือน
                  </p>
                </div>
                {/* Card Back */}
                <div className="absolute w-full h-full backface-hidden bg-purple-600 dark:bg-purple-800 rotate-y-180 p-6 flex flex-col items-center justify-center rounded-2xl">
                  <p className="text-center text-white text-lg font-medium px-4">
                    คลิกเพื่อคำนวณค่างวดรถในฝันของคุณ
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
