function Confiance({ Icon, Title, subtitle, color, border }) {
  return (
    <div
      className="flex flex-col items-center w-[300px] sm:w-[400px] mx-auto h-[250px] sm:h-[240px] lg:h-[220px] hover:bg-[#F1F5F9] px-4 py-4 dark:bg-white bg-white/60 border-4 rounded-lg  hover:drop-shadow-xl  hover:scale-105 ease-in duration-300"
      style={{ borderColor: border }}
    >
      <Icon
        src={Icon}
        className="h-14 w-14 md:h-22 md:w-22 p-3 "
        style={{ color: color }}
      />
      <p className="text-xl xl:text-2xl tracking-wider dark:text-slate-700 text-center font-bold text-gray-600">
        {Title}
      </p>
      <p className="mt-4 px-4 text-center text-sm font-light tracking-wide dark:text-slate-700 text-gray-500">
        {subtitle}
      </p>
    </div>
  );
}

export default Confiance;
