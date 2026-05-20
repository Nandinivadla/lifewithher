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

    return () => clearInterval(timer);
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById(
      "bgmusic"
    ) as HTMLAudioElement;

    if (!audio) return;

    if (musicPlaying) {
      audio.pause();
    } else {
      audio.currentTime = 17;
      audio.volume = 0.7;
      audio.play();
    }

    setMusicPlaying(!musicPlaying);
  };

  return (
    <main className="min-h-screen bg-[#0d1410] text-white overflow-hidden relative">

      {/* FILM GRAIN */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-50 mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      {/* MUSIC */}
      <audio id="bgmusic" loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#6f8f5f]/25 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#2a0f18]/40 blur-[180px] rounded-full"></div>

      <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-[#6f8f5f]/15 blur-[160px] rounded-full"></div>

      {/* STARS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(120)].map((_, i) => (
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

      {/* FLOATING HEARTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

        {[...Array(45)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#6f8f5f] animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${18 + Math.random() * 28}px`,
              opacity: 0.35,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          >
            ♥
          </div>
        ))}

      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-3xl bg-black/20 border-b border-[#6f8f5f]/20">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-2xl md:text-3xl font-serif text-[#f3e8eb]">
            Nandu & Auriane
          </h1>

          <button
            onClick={toggleMusic}
            className="bg-[#6f8f5f] hover:bg-[#5f7f4f] text-[#0d1410] px-6 py-3 rounded-full font-semibold transition duration-300 shadow-[0_0_30px_rgba(111,143,95,0.4)]"
          >
            {musicPlaying ? "Pause Music" : "Play Music"}
          </button>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-40 pb-24">

        <p className="tracking-[0.5em] uppercase text-sm text-[#6f8f5f] mb-6">
          Wedding Celebration
        </p>

        <h1 className="text-6xl md:text-8xl font-serif text-[#f3e8eb] leading-tight drop-shadow-2xl">
          Nandu <span className="text-[#6f8f5f]">&</span> Auriane
        </h1>

        {/* PHOTO */}
        <div className="relative mt-16 group">

          <div className="absolute inset-0 bg-[#6f8f5f]/25 blur-3xl rounded-[50px]"></div>

          <img
            src="/togetherus.jpeg"
            alt="Nandu and Auriane"
            className="relative w-[330px] md:w-[520px] rounded-[40px] border border-[#d8c8b8]/20 shadow-[0_0_100px_rgba(255,255,255,0.08)] object-cover transition duration-700 group-hover:scale-105 sepia-[28%] contrast-110 brightness-90 saturate-75"
          />

        </div>

        <div className="w-40 h-[3px] bg-[#6f8f5f] my-10 rounded-full"></div>

        <p className="max-w-3xl text-xl md:text-3xl italic text-[#f3e8eb] leading-relaxed">
          “From India to France,
          from two hearts to one forever.”
        </p>

        <p className="max-w-4xl mt-10 text-lg md:text-xl leading-10 text-[#d9d7cf]">
          With immense love and gratitude,
          we are so happy to celebrate
          the beginning of our forever together.
          <br /><br />
          Through every smile,
          every challenge,
          every dream and every moment,
          we found home in each other.
          <br /><br />
          Supported by our friends and families,
          we step into this new chapter
          hand in hand,
          with love,
          trust and endless happiness.
        </p>

        {/* DATE */}
        <div className="mt-14 bg-[#2a0f18]/75 backdrop-blur-xl border border-[#6f8f5f]/20 px-10 py-7 rounded-[35px] shadow-[0_0_50px_rgba(111,143,95,0.15)]">

          <p className="text-[#6f8f5f] uppercase tracking-[4px] text-sm mb-3">
            Wedding Day
          </p>

          <p className="text-2xl text-[#f3e8eb]">
            01 August 2026 • La Bruffière, France
          </p>

        </div>

        {/* ROUTE */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=47.039755,-1.220984"
          target="_blank"
          className="inline-block mt-8 bg-[#6f8f5f] hover:bg-[#5f7f4f] text-[#0d1410] px-10 py-5 rounded-full transition duration-300 font-semibold shadow-[0_0_40px_rgba(111,143,95,0.35)]"
        >
          Track Route To Wedding
        </a>

      </section>

      {/* COUNTDOWN */}
      <section className="relative z-10 px-6 py-24">

        <h2 className="text-center text-5xl font-serif text-[#f3e8eb] mb-16">
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
              className="bg-[#2a0f18]/75 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(111,143,95,0.08)] p-8 text-center border border-[#6f8f5f]/15 hover:scale-105 transition duration-500"
            >

              <h3 className="text-5xl font-bold text-[#f3e8eb]">
                {item.value}
              </h3>

              <p className="mt-3 text-lg text-[#d9d7cf]">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* FAMILY */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-[#f3e8eb] mb-14">
            With Love From Our Families
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-[#2a0f18]/75 backdrop-blur-xl rounded-[35px] p-10 shadow-[0_0_50px_rgba(111,143,95,0.08)] border border-[#6f8f5f]/15">

              <h3 className="text-3xl font-serif text-[#6f8f5f] mb-6">
                Clochard Family
              </h3>

              <div className="space-y-4 text-xl text-[#f3e8eb]">
                <p>Isabelle Clochard</p>
                <p>Olivier Clochard</p>
                <p>Leila Clochard</p>
                <p>Nathanael Clochard</p>
              </div>

            </div>

            <div className="bg-[#2a0f18]/75 backdrop-blur-xl rounded-[35px] p-10 shadow-[0_0_50px_rgba(111,143,95,0.08)] border border-[#6f8f5f]/15 flex flex-col justify-center">

              <h3 className="text-3xl font-serif text-[#6f8f5f] mb-6">
                A Message To Our Friends & Family
              </h3>

              <p className="text-lg md:text-xl leading-9 text-[#f3e8eb] italic">
                “To every friend and family member
                who stood beside us,
                encouraged us,
                loved us and supported our journey —
                thank you for helping us become
                the people we are today.
                <br /><br />
                Your love gave us strength,
                your presence gave us hope,
                and your kindness
                will forever stay in our hearts.”
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WEDDING MEMORIES */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-[#f3e8eb] mb-10">
            Wedding Memories
          </h2>

          <p className="text-lg md:text-xl text-[#d9d7cf] max-w-3xl mx-auto leading-9 mb-14">
            Every smile, every dance, every beautiful moment —
            help us keep them forever by sharing your favorite memories
            from our special day.
          </p>

          <div className="bg-[#2a0f18]/75 backdrop-blur-xl rounded-[35px] p-12 border border-[#6f8f5f]/20 shadow-[0_0_60px_rgba(111,143,95,0.08)]">

            <script
              src="https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js"
              charSet="utf-8"
            ></script>

            <input
              type="hidden"
              role="uploadcare-uploader"
              data-public-key="e2c5a8a8480409d5b4a1"
              data-images-only="true"
              data-multiple="true"
            />

            <p className="mt-6 text-[#d9d7cf] text-sm">
              Upload your precious wedding memories here ✨
            </p>

          </div>

        </div>

      </section>

      {/* RSVP */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-3xl mx-auto bg-[#2a0f18]/75 backdrop-blur-xl rounded-[35px] p-12 shadow-[0_0_60px_rgba(111,143,95,0.08)] border border-[#6f8f5f]/15">

          <h2 className="text-center text-5xl font-serif text-[#f3e8eb] mb-12">
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
              required
              className="w-full p-5 rounded-2xl bg-[#0d1410]/60 border border-[#6f8f5f]/15 text-white outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-5 rounded-2xl bg-[#0d1410]/60 border border-[#6f8f5f]/15 text-white outline-none"
            />

            <textarea
              name="message"
              placeholder="Leave a loving message..."
              required
              className="w-full p-5 rounded-2xl bg-[#0d1410]/60 border border-[#6f8f5f]/15 text-white outline-none h-40"
            />

            <button className="w-full bg-[#6f8f5f] hover:bg-[#5f7f4f] text-[#0d1410] py-5 rounded-2xl text-lg font-semibold transition">
              Send Love
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-20 text-center bg-black/20 text-white">

        <h2 className="text-5xl font-serif mb-6 text-[#f3e8eb]">
          Forever Begins Here
        </h2>

        <p className="text-lg opacity-90 text-[#d9d7cf]">
          Thank you for celebrating our love
          and future together.
        </p>

        <p className="mt-8 text-sm opacity-70">
          Nandu & Auriane • 2026
        </p>

      </footer>

    </main>
  );
}