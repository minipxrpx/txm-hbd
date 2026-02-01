"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// ข้อมูลรูปภาพ
const memories = [
  { src: "/img/IMG_1034.JPG", date: "ความทรงจำแรก", description: "วันที่เราเริ่มต้น" },
  { src: "/img/IMG_1286.JPG", date: "ช่วงเวลาสุข", description: "ทุกวันที่มีเธอ" },
  { src: "/img/IMG_1287.JPG", date: "เสมอไป", description: "รักเธอนะ" },
];

const wishes = [
  "ขอให้วันเกิดปีนี้เป็นปีที่มีความสุขที่สุด",
  "ขอให้เธอมีแต่เรื่องดีๆ เข้ามาในชีวิต",
  "ขอให้ความฝันของเธอเป็นจริงทุกอย่าง",
  "รักเธอที่สุด ❤️",
];

export default function Home() {
  const [currentWish, setCurrentWish] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Rotate wishes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWish((prev) => (prev + 1) % wishes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Show content animation
  useEffect(() => {
    setTimeout(() => setShowContent(true), 500);
  }, []);

  // Auto-slide images when gift is opened
  useEffect(() => {
    if (!giftOpened) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % memories.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [giftOpened]);

  const openGift = () => {
    setGiftOpened(true);
    setCurrentImageIndex(0); // Reset to first image
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % memories.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  const currentImage = memories[currentImageIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-pink-900 dark:to-purple-900 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className={`text-center transition-all duration-1000 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Birthday Cake */}
          <div className="text-8xl mb-6 animate-bounce">🎂</div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
            สุขสันต์วันเกิดนะ
          </h1>

          {/* Gift Box Section - Only show if not opened */}
          {!giftOpened && (
            <div className="max-w-md mx-auto">
              <div
                className="bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-3xl p-12 shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 border-2 border-pink-200"
                onClick={openGift}
              >
                <div className="text-9xl mb-6 animate-pulse">🎁</div>
                <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  กดเปิดของขวัญ!
                </h3>
              </div>
            </div>
          )}

          {/* Gift Opened Message */}
          {giftOpened && (
            <div className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl shadow-2xl animate-bounce-in border-2 border-pink-300">
              <div className="text-center mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                  ของขวัญพิเศษ
                </h3>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                  ความทรงจำที่สวยงามของเรา
                </p>
              </div>

              {/* Image Carousel - Full Width */}
              <div className="relative">
                {/* Main Image */}
                <div className="relative aspect-[3/4] md:aspect-[9/16] w-full rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
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
                      <h3 className="text-2xl md:text-4xl font-bold">{currentImage.description}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8 text-center">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                  {currentImage.description}
                </p>
                <div className="mt-4 text-3xl md:text-4xl">
                  ❤️ 💕 💖 💗 💓
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Advanced CSS Animations */}
      <style jsx>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-10deg);
          }
          50% {
            transform: scale(1.1) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
