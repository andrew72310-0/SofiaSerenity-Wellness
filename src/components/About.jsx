function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80"
            alt="Peaceful wellness and massage setting"
            className="h-[350px] w-full rounded-2xl object-cover shadow-lg md:h-[500px]"
            loading="lazy"
          />

            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 text-white shadow-xl flex flex-col md:left-auto md:right-8 md:max-w-xs">
                <h3 className="text-xl font-bold tracking-wide mb-1">
                 Your Time
                </h3>
                <p className="text-sm font-medium text-emerald-400">
                  To Relax & Restore
                </p>
            </div>
        </div>

        {/* About content */}
        <div className="mt-4 md:mt-0">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-800">
            About Serenity Wellness
          </p>

          <h2 className="text-3xl font-bold leading-tight text-stone-900 md:text-5xl">
            A Peaceful Escape From Everyday Stress
          </h2>

          <p className="mt-6 leading-8 text-stone-600">
            Welcome to Serenity Wellness, a space dedicated to relaxation,
            comfort, and personal well-being. We believe that taking time
            for yourself is an important part of feeling your best.
          </p>

          <p className="mt-4 leading-8 text-stone-600">
            Our goal is to create a welcoming and respectful environment
            where every client can enjoy a personalized experience.
            Whether you are looking to unwind or simply take a break
            from your busy schedule, your comfort matters to us.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="border-l-4 border-green-800 pl-4">
              <h3 className="font-semibold text-stone-900">
                Personal Attention
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Experiences tailored to your preferences and comfort.
              </p>
            </div>

            <div className="border-l-4 border-green-800 pl-4">
              <h3 className="font-semibold text-stone-900">
                Relaxing Atmosphere
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                A calm setting designed to help you slow down and unwind.
              </p>
            </div>
          </div>

          <a
            href="#services"
            className="mt-8 inline-block rounded-full bg-green-900 px-7 py-3 font-medium text-white transition hover:bg-green-800"
          >
            Explore Our Services
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;