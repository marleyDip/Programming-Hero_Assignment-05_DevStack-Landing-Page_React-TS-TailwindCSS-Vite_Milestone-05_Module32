import { ArrowRight } from "lucide-react";
import bannerStack from "../../assets/images/banner-stack.png";
import GradientText from "../Common/GradientText";

const Hero = () => {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-10 pb-12 md:pb-16 sm:pt-20 lg:pt-24"
    >
      <div className="grid items-center gap-3 md:gap-8 md:grid-cols-2">
        {/* Info */}
        <div className="max-w-174 py-0 md:py-12 text-center md:text-left min-w-0">
          {/* Heading */}
          <h1 className="text-3xl/tight md:text-6xl font-bold md:font-extrabold tracking-[-0.75px] md:tracking-[-1.5px] text-[#030712] md:text-text-heading font-inter">
            Build Your Ideal{" "}
            <GradientText variant="hero">Development Stack</GradientText>
          </h1>

          {/* Description */}
          <p className="mt-3 md:mt-6 pr-1 text-lg/[1.63] font-inter md:font-jakarta text-[#4b5563] md:text-text-secondary">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div className="mt-3 md:mt-10 pt-3 gap-3 flex items-center font-inter text-xs/[1.33] md:text-sm/[1.14]">
            <button
              type="button"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-linear-to-r from-orange-light to-accent text-white py-3 px-4 font-normal md:font-semibold shadow-brand-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-pink-glow-light-hover active:translate-y-0 active:scale-[0.98]  cursor-pointer"
            >
              <span className="relative z-10">Explore Technologies</span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />

              {/* diagonal shine sweep on hover */}
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full  " />
            </button>

            {/* #e5e7eb equals to gray-200; #374151 equals to gray-700;
            shadow-[0_8px_24px_-8px] rgba(219, 39, 119, 0.35) equals to shadow-pink-600/35 */}
            {/* <button
              type="button"
              className="py-3 px-12 bg-white border border-[#e5e7eb] text-[#374151] cursor-pointer rounded-lg shadow-sm"
            >
              Learn More
            </button> */}

            <button
              type="button"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg shadow-sm border border-[#e5e7eb] bg-white text-[#374151] px-8 py-3 font-normal md:font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-pink-glow-hover active:translate-y-0 active:scale-[0.98] cursor-pointer"
            >
              <span className="relative z-10">Learn More</span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
              {/* Soft tinted fill that sweeps in on hover */}
              <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-linear-to-r from-primary/5 to-accent/5 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center md:justify-end min-w-0">
          {/* Soft colored glow sitting behind the image */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-linear-to-br from-[#f472b6] to-[#c084fc] opacity-20 blur-2xl md:hidden" />
          </div>

          <img
            src={bannerStack}
            alt="Developer stack tools and technologies"
            className="w-full h-auto object-contain -mt-8 md:mt-0 drop-shadow-[0_24px_48px_rgba(124,58,237,0.25)] md:drop-shadow-none transition-transform duration-500 ease-out hover:scale-[1.03] max-w-81.75 sm:max-w-100 md:max-w-122 lg:max-w-122"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* <div className="h-64 w-64 rounded-full bg-linear-to-br from-orange-light via-accent to-foreground opacity-20 blur-3xl md:h-80 md:w-80" /> */
