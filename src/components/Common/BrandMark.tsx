/* Inline Arbitrary Value
"bg-linear-[45deg, var(--color-accent)_0%,var(--color-foreground)_100%]
 
bg-linear-tr from-accent to-foreground 

bg-linear-45 from-pink-500 to-violet-600" 

custom => shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]

Here, "shadow-sm" generates: 0 1px 2px 0 rgba(0, 0, 0, 0.05)

"shadow-xs" generates: 0 1px 2px 0

*/

export default function BrandMark() {
  return (
    <a
      href="#top"
      className="flex items-center gap-2 md:gap-2.5 shrink-0 font-jakarta group"
    >
      <span className="grid w-8 h-8 place-items-center rounded-lg bg-gradient-brand shadow-brand-soft text-sm/[1.43] tracking-[-0.5px] font-extrabold text-white group-hover:rotate-6 group-hover:scale-105 transition-all duration-300">
        DS
      </span>

      {/* <span className="text-xl/[1.4] hidden md:block"> */}

      <span className="text-xl/[1.4]">
        <span className="text-text-heading font-bold tracking-[-0.5px]">
          Dev
        </span>
        <span className="text-primary font-bold tracking-[-0.5px] ml-0 lg:ml-1">
          Stack
        </span>
      </span>
    </a>
  );
}
