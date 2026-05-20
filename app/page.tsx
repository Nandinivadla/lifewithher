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

  const [showIntro, setShowIntro] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);

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

    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 3500);

    // SPARKLE CURSOR
    const sparkle = (e: MouseEvent) => {
      const star = document.createElement("div");

      star.innerHTML = "✦";
      star.style.position = "fixed";
      star.style.left = e.clientX + "px";
      star.style.top = e.clientY + "px";
      star.style.color = "#ffffff";
      star.style.fontSize = "14px";
      star.style.pointerEvents = "none";
      star.style.zIndex = "9999";
      star.style.opacity = "0.8";
      star.style.transition = "all 1s ease";

      document.body.appendChild(star);

      setTimeout(() => {
        star.style.transform = "translateY(-20px)";
        star.style.opacity = "0";
      }, 10);

      setTimeout(() => {
        star.remove();
      }, 1000);
    };

    window.addEventListener("mousemove", sparkle);

    return () => {
      clearInterval(timer);
      clearTimeout(introTimer);
      window.removeEventListener("mousemove", sparkle);
    };
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById(
      "bgmusic"
    ) as HTMLAudioElement;

    if (musicPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setMusicPlaying(!musicPlaying);
  };

  if (showIntro) {
    return (
      <main className="h-screen bg-[#1f1a1c] flex flex-col items-center justify-center text-center overflow-hidden">

        <div className="animate-pulse">
          <h1 className="text-6xl md:text-8xl font-serif text-[#f5d6df] mb-8">
            Nandu ♥ Auriane
          </h1>

          <p className="text-2xl text-[#b8c7a1] italic">
            Forever Begins Here
          </p>
        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#1f1a1c] text-[#f8e9ed] overflow-hidden relative scroll-smooth">

      {/* MUSIC */}
      <audio
        id="bgmusic"
        loop
        src="https://www.bensound.com/bensound-music/bensound-love.mp3"
      />

      {/* STARS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          />
        ))}

      </div>

      {/* HEARTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse text-xl opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 5}s`,
            }}
          >
            ♥
          </div>
        ))}

      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <h1 className="text-2xl font-serif text-[#f5d6df]">
            N ♥ A
          </h1>

          <div className="flex gap-8 text-sm uppercase tracking-[0.2em]">

            <a href="#story" className="hover:text-[#b8c7a1] transition">
              Story
            </a>

            <a href="#family" className="hover:text-[#b8c7a1] transition">
              Family
            </a>

            <a href="#rsvp" className="hover:text-[#b8c7a1] transition">
              RSVP
            </a>

          </div>

        </div>
      </nav>

      {/* MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        className="fixed top-24 right-6 z-50 bg-[#7a2f43] text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition"
      >
        {musicPlaying ? "Pause Music" : "Play Music"}
      </button>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-40 animate-fadeIn">

        <p className="tracking-[0.5em] uppercase text-sm text-[#b8c7a1] mb-6">
          Wedding Celebration
        </p>

        <h1 className="text-6xl md:text-8xl font-serif text-[#f5d6df] leading-tight">
          Nandu <span className="text-[#b8c7a1]">&</span> Auriane
        </h1>

        <div className="w-40 h-[2px] bg-[#b8c7a1] my-8 rounded-full"></div>

        <p className="max-w-3xl text-xl md:text-3xl leading-relaxed text-[#f5d6df] italic">
          “From India to France, from two hearts to one forever.”
        </p>

        <p className="max-w-4xl mt-10 text-lg md:text-xl leading-10 text-[#e7d5d9]">
          With immense love and gratitude, we are so happy to celebrate
          the beginning of our forever together.
          <br />
          <br />
          I, Nandu, am deeply honored and emotional to join the beautiful
          Clochard family.
          <br />
          Supported by our friends and families, we step into this new chapter
          hand in hand, with love, trust, and endless happiness.
        </p>

        <div className="mt-12 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-10 py-5 shadow-2xl">

          <p className="text-lg md:text-xl text-[#f5d6df]">
            01 August 2026 • La Bruffière, France
          </p>

        </div>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=47.039755,-1.220984"
          target="_blank"
          className="inline-block mt-8 bg-[#b8c7a1] hover:bg-[#a2b18e] text-[#1f1a1c] px-8 py-4 rounded-full transition duration-300 font-semibold shadow-lg"
        >
          Track Route To Wedding
        </a>

      </section>

      {/* COUNTDOWN */}
      <section className="relative z-10 px-6 py-24">

        <h2 className="text-center text-5xl font-serif text-[#f5d6df] mb-16">
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
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-2xl hover:scale-105 transition duration-500"
            >

              <h3 className="text-5xl font-bold text-[#f5d6df]">
                {item.value}
              </h3>

              <p className="mt-3 text-lg text-[#d9c9cd]">
                {item.label}
              </p>

            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section
        id="story"
        className="relative z-10 py-28 px-6 animate-fadeIn"
      >

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-[#f5d6df] mb-12">
            Our Story
          </h2>

          <p className="text-lg md:text-2xl leading-10 text-[#e7d5d9]">
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
          </p>

        </div>
      </section>

      {/* FAMILY */}
      <section
        id="family"
        className="relative z-10 py-24 px-6"
      >

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-[#f5d6df] mb-14">
            With Love From Our Families
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[35px] p-10 shadow-2xl">

              <h3 className="text-3xl font-serif text-[#b8c7a1] mb-6">
                Clochard Family
              </h3>

              <div className="space-y-4 text-xl text-[#e7d5d9]">
                <p>Isabelle Clochard</p>
                <p>Olivier Clochard</p>
                <p>Leila Clochard</p>
                <p>Nathanael Clochard</p>
              </div>

            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[35px] p-10 shadow-2xl flex flex-col justify-center">

              <h3 className="text-3xl font-serif text-[#b8c7a1] mb-6">
                A New Beginning
              </h3>

              <p className="text-lg md:text-xl leading-9 text-[#e7d5d9] italic">
                “Families are not only joined by blood,
                but also by love, acceptance and the hearts
                that welcome us home.”
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* RSVP */}
      <section
        id="rsvp"
        className="relative z-10 py-24 px-6"
      >

        <div className="max-w-3xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-[35px] p-12 shadow-2xl">

          <h2 className="text-center text-5xl font-serif text-[#f5d6df] mb-12">
            RSVP
          </h2>

          <form
            action="https://formspree.io/f/xbdbglqp"
            method="POST"
            className="space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-5 rounded-2xl bg-white/10 border border-white/10 text-white outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-5 rounded-2xl bg-white/10 border border-white/10 text-white outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Leave a loving message for the brides..."
              className="w-full p-5 rounded-2xl bg-white/10 border border-white/10 text-white outline-none h-40"
              required
            />

            <button className="w-full bg-[#7a2f43] hover:bg-[#5d2332] text-white py-5 rounded-2xl text-lg font-semibold transition">
              Send Love
            </button>

          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-20 text-center border-t border-white/10">

        <h2 className="text-5xl font-serif mb-6 text-[#f5d6df]">
          Forever Begins Here
        </h2>

        <p className="text-lg text-[#d9c9cd]">
          Thank you for celebrating our love and our future together.
        </p>

        <p className="mt-8 text-sm text-[#9f8f93]">
          Nandu & Auriane • 2026
        </p>

      </footer>
    </main>
  );
}
html {
  scroll-behavior: smooth;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

.animate-fadeIn {
  animation: fadeIn 1.5s ease forwards;
}