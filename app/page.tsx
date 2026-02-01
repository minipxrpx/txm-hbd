"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// ข้อมูลรูปภาพ
const memories = [
  { src: "/img/1.jpg", date: "วันเกิดเธอ", description: "ผ่านไปอีกปีแล้วนะ" },
  { src: "/img/2.jpg", date: "ช่วงเวลา", description: "ขอบคุณเวลาที่อยู่ด้วยกันเค้ามีความสุขมากนะ" },
  { src: "/img/3.jpg", date: "เหนื่อยไหม", description: "ที่ผ่านมาเหนื่อยใช่ไหม" },
  { src: "/img/4.jpg", date: "ของกิน", description: "ได้พาไปกินของที่อยากกินแล้วนะ" },
  { src: "/img/5.jpg", date: "แววตา", description: "อยากเห็นแววตาที่สดใสแบบนี้อีกจัง" },
  { src: "/img/6.jpg", date: "หัวใจ", description: "ขอให้หัวใจเธอมีแต่สีชมพู" },
  { src: "/img/7.jpg", date: "สีสัน", description: "ขอให้ชีวิตมีความสดใส" },
  { src: "/img/9.jpg", date: "วันนี้", description: "ขอให้เป็นช่วงที่มีความสุข" },
  { src: "/img/10.jpg", date: "เวลาร่วมกัน", description: "ไม่ต้องเศร้าหรือเสียใจอีกแล้วนะ" },
  { src: "/img/11.jpg", date: "2 นิ้วสู้ๆ", description: "ขอให้โลกใจดีกับเธอและมีรอยยิ้มที่สดใสแบบนี้" },
  { src: "/img/12.jpg", date: "เสน่ห์", description: "ขอให้น่ารักทุกวัน" },
  { src: "/img/13.jpg", date: "พิเศษ", description: "ขอให้เธอพิเศษกว่าใคร" },
  { src: "/img/14.jpg", date: "สุขใจ", description: "ขอให้มีความสุขเสมอ" },
  { src: "/img/15.jpg", date: "ความสุข", description: "ขอให้เจอแต่เรื่องดี ๆ" },
  { src: "/img/16.jpg", date: "อนาคต", description: "ขอให้อนาคตเธอมีแต่สิ่งสวยงาม" },
];

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  // Show content animation
  useEffect(() => {
    setTimeout(() => setShowContent(true), 500);
  }, []);

  // Auto-slide images when gift is opened
  useEffect(() => {
    if (!giftOpened) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % memories.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [giftOpened]);

  const openGift = () => {
    setGiftOpened(true);
    setShowFinalMessage(false);
    setCurrentImageIndex(0); // Reset to first image
  };

  const showFinal = () => {
    setShowFinalMessage(true);
  };

  const closeDialog = () => {
    setShowFinalMessage(false);
  };

  const currentImage = memories[currentImageIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-gray-300 dark:via-pink-300 dark:to-purple-200">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-2">
        <div className={`text-center transition-all duration-1000 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Birthday Cake */}
          <div className="text-8xl mb-2 animate-bounce">🎂</div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-8xl font-bold mb-2 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
            สุขสันต์วันเกิดนะ
          </h1>
          <h1 className="text-4xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
            ITIM
          </h1>

          {/* Gift Box Section - Only show if not opened */}
          {!giftOpened && (
            <div className="max-w-md mx-auto">
              <div
                className="bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-3xl p-12 shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 border-2 border-pink-200"
                onClick={openGift}
              >
                <div className="text-9xl mb-6 animate-pulse">🎁</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  กดเพื่อดูคำอวยพรสิ!
                </h3>
              </div>
            </div>
          )}

          {/* Gift Opened Message */}
          {giftOpened && (
            <div>
              <div className="w-full max-w-4xl mx-auto dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl shadow-2xl animate-bounce-in border-2 border-pink-300">
              <div className="text-center mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                  2 กุมภาพันธ์ 2026
                </h3>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                  ขอให้มีความสุขมาก ๆ นะ ^^
                </p>
              </div>

              {/* Image Carousel - Full Width */}
              <div className="relative">
                {/* Main Image */}
                <div className="relative aspect-[4/4] md:aspect-[9/16] w-full rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
                  <Image
                    src={currentImage.src}
                    alt={currentImage.description}
                    fill
                    className="object-cover transition-transform duration-500"
                    priority
                  />
                  {/* Overlay with Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 via-transparent to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <p className="text-sm md:text-lg text-pink-300 mb-1 md:mb-2">{currentImage.date}</p>
                      <h3 className="text-xl md:text-4xl font-bold">{currentImage.description}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8 text-center">
                <p className="text-md md:text-2xl text-gray-700 dark:text-gray-300">
                  {currentImage.description}
                </p>
                <div className="mt-4 text-3xl md:text-4xl">
                  ❤️ 💕 💖 💗 💓
                </div>
              </div>
            </div>
              <button
                onClick={showFinal}
                className='mt-2 px-2 py-2 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-600 hover:to-purple-600 text-white text-xs font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer'
              >
                อ่านข้างบนก่อนนะ ค่อยกดอ่านอันนี้ อย่าขี้โกง สุดท้ายแล้วงับ 💝
              </button>
            </div>
            
            
          )}

          {/* Final Message Dialog */}
          {showFinalMessage && (
            <div className='fixed inset-0 z-50 flex items-center justify-center px-2 animate-fade-in'>
              {/* Backdrop */}
              <div
                className='absolute inset-0 bg-black/60 backdrop-blur-sm'
                onClick={closeDialog}
              ></div>

              {/* Dialog Content */}
              <div className='relative bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/80 dark:to-purple-900/80 rounded-3xl p-12 shadow-2xl border-2 border-pink-300 max-w-2xl w-full animate-scale-in'>
                {/* Close Button */}
                <button
                  onClick={closeDialog}
                  className='absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-3xl transition-colors'
                >
                  ✕
                </button>

                <p className='text-xs md:text-3xl text-gray-800 dark:text-gray-100 text-center leading-relaxed'>
                  ถึงแม้เราจะไม่ได้คุยกันแล้ว เค้าขอบคุณเธอทุกอย่างนะ เค้าไม่เคยลืมเธอได้เลยสักวัน มีวันที่ร้องไห้บ้างเสียใจบ้างเช่นตอนนี้ ที่กำลังเขียนข้อความให้อยู่ แต่เค้าก็จะผ่านมันไปให้ได้ เค้ารู้ว่าเธอเหนื่อยมามากแล้ว ตอนนี้เธอคงได้พักแล้ว ไม่รู้ว่าเธอเป็นยังไงบ้างตอนนี้ สบายดีไหม มีความสุขไหม มีคนคุยใหม่หรือยัง เมื่อถึงเวลานึ่ง เค้าขอใช้การ์ดที่เธอให้ไว้ได้ใช่ไหม ถ้ามีโอกาสได้เจอกันอีก หวังว่าเค้าจะเป็นคนที่ดีกว่านี้สำหรับเธอ ^^ เค้าส่งของขวัญไปให้แล้วนะ หวังว่าจะชอบงับ คิดถึงเธอนะ By เจ้าเด้ง💔
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
