
const produceSpans = (text: string, animation: string) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  return (
    <div className="relative cursor-default font-medium text-white text-[10px] xs:text-[20px]  md:text-[20px] lg:text-[30px] 2xl:text-[50px]  md:leading-[32px] 2xl:leading-[40px] w-full flex justify-center items-center">
      <div className="absolute inset-0 top-[-30px] sm:top-[-10px] lg:top-0 flex flex-col">
        <div className="text first absolute  flex" aria-label="Software Developer">
          {produceSpans("Software Developer", "animate-textRotate1")}
        </div>
        <div className="text second absolute flex" aria-label="Peaceful Wanderer">
          {produceSpans("Peaceful Wanderer", "animate-textRotate2")}
        </div>
      </div>
    </div>
  );
};

export default Position;