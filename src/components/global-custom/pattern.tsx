export const GridPattern = () => {
  return (
    <svg className="absolute inset-0 -z-10 w-full h-[800px] stroke-[#FDBB58]/20 [mask-image:radial-gradient(50%_100%_at_top_center,white,transparent)]">
      <defs>
        <pattern
          id="hero"
          width="80"
          height="80"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none"></path>
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        stroke-width="0"
        fill="url(#hero)"
      ></rect>
    </svg>
  );
};
