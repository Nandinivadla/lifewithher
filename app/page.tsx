"use client";

import { useEffect, useState } from "react";

export default function WeddingPage() {
  const weddingDate = new Date("2026-08-01T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    document.title = "Nandu & Auriane";

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#fff9ef] text-[#6b4d57] overflow-hidden relative">
      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-pink-200/40 blur-[150px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-yellow-200/40 blur-[130px] rounded-full bottom-0 right-0" />

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-pink-300 text-5xl animate-bounce">
          ♥
        </div>

        <div className="absolute top-40 right-20 text-yellow-300 text-4xl animate-pulse">
          ♡
        </div>

        <div className="absolute bottom-20 left-1/3 text-pink-400 text-5xl animate-pulse">
          ♥
        </div>

        <div className="absolute bottom-40 right-1/4 text-yellow-400 text-3xl animate-bounce">
          ♡
        </div>

        <div className="absolute top-1/2 left-1/2 text-pink-200 text-6xl animate-ping">
          ♥
        </div>
      </div>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">
        <p className="tracking-[0.5em] uppercase text-sm text-pink-400 mb-6">
          Wedding Celebration
        </p>

        <h1 className="text-6xl md:text-8xl font-serif text-[#d97795] leading-tight drop-shadow-xl">
          Nandu <span className="text-yellow-400">&</span> Auriane
        </h1>

        <div className="w-40 h-[3px] bg-yellow-300 my-8 rounded-full"></div>

        <p className="max-w-3xl text-xl md:text-3xl leading-relaxed text-[#8c5c6c] italic">
          “From India to France, from two hearts to one forever.”
        </p>

        <p className="max-w-4xl mt-10 text-lg md:text-xl leading-10 text-[#7d5b65]">
          With immense love and gratitude, we are so happy to celebrate the
          beginning of our forever together.
          <br />
          <br />
          I, Nandu, am deeply honored and emotional to join the beautiful
          Clochard family.
          <br />
          Supported by our friends and families, we step into this new chapter
          hand in hand, with love, trust, and endless happiness.
        </p>

        <div className="mt-12 bg-white/70 backdrop-blur-xl shadow-2xl rounded-full px-10 py-5 border border-pink-200">
          <p className="text-lg md:text-xl font-medium text-[#7d5b65]">
            01 August 2026 • La Bruffière, France
          </p>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="relative z-10 px-6 py-20">
        <h2 className="text-center text-5xl font-serif text-[#d97795] mb-16">
          Countdown To Forever
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 text-center border border-pink-100 hover:scale-105 transition duration-300"
            >
              <h3 className="text-5xl font-bold text-pink-400">
                {item.value}
              </h3>

              <p className="mt-3 text-lg text-[#7d5b65]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="relative z-10 py-28 px-6 bg-[#fff4f6]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-serif text-[#d97795] mb-12">
            Our Story
          </h2>

          <p className="text-lg md:text-2xl leading-10 text-[#7d5b65]">
            Love brought together two souls from different worlds.
            <br />
            One heart from India, one heart from France.
            <br />
            Different cultures, different journeys, but the same feeling:
            unconditional love.
            <br />
            <br />
            Through every smile, every challenge, every dream and every moment,
            we found home in each other.
            <br />
            <br />
            Today, surrounded by the people we cherish the most, we celebrate
            not only our marriage, but the beautiful life we are creating
            together forever.
          </p>
        </div>
      </section>

      {/* QUOTES */}
      <section className="relative z-10 py-28 px-6">
        <h2 className="text-center text-5xl font-serif text-[#d97795] mb-16">
          Words From The Heart
        </h2>

        <div className="max-w-5xl mx-auto space-y-10">
          {[
            "Love knows no gender, no borders, no distance — only hearts that choose each other.",
            "Home is no longer a place. It is each other.",
            "In every lifetime, I would still find you.",
            "Two brides, one love story, forever together.",
          ].map((quote, index) => (
            <div
              key={index}
              className="bg-white/70 rounded-3xl p-10 shadow-2xl border border-pink-100 text-center italic text-xl text-[#7d5b65]"
            >
              “{quote}”
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-20 text-center bg-[#ffdfe8] text-[#7d5b65]">
        <h2 className="text-5xl font-serif mb-6 text-[#d97795]">
          Forever Begins Here
        </h2>

        <p className="text-lg opacity-90">
          Thank you for celebrating our love and our future together.
        </p>

        <p className="mt-8 text-sm opacity-70">
          Nandu & Auriane • 2026
        </p>
      </footer>
    </main>
  );
}