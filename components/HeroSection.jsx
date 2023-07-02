"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <motion.div
      initial={{
        y: -300,
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-center mt-10 "
    >
      {/* LEFT */}
      <div className="flex flex-col items-center justify-center">
        {/* WELCOME ANNOUNCEMENT HERO */}
        <div className="text-[50px] md:text-[80px] text-center mx-4 py-10 font-extrabold tracking-widest  ">
          <div className="relative">
            <div className="absolute top-0 -left-4 w-52 h-52 xl:w-[300px] xl:h-[300px] bg-purple-300 mix-blend-multiply filter blur-xl opacity-70 rounded-full animate-blob animation-delay-2000"></div>
            <div className="absolute top-0 -right-4 w-52 h-52 xl:w-[300px] xl:h-[300px] bg-yellow-300 mix-blend-multiply filter blur-xl opacity-70 rounded-full animate-blob animation-delay-2000"></div>
            <div className="absolute  left-20 -bottom-60 w-52 h-52 xl:w-[300px] xl:h-[300px] bg-pink-300 mix-blend-multiply filter blur-xl opacity-70 rounded-full animate-blob animation-delay-2000"></div>
          </div>
          <p className="mt-8 xl:-mt-4 text-slate-500 font-Montserrat ">
            Bienvenu{" "}
          </p>
          <p className=" text-[46px] sm:text-[80px] -mt-12 sm:-mt-12 md:-mt-[78px] block bg-gradient-to-r from-yellow-400 to-[#892832] bg-clip-text text-center text-transparent pl-4 font-Montserrat">
            chez vous!
          </p>
        </div>

        {/* LABEL HERO */}
        <div className="flex flex-col space-y-10 items-center ">
          <p className="-mt-8 tracking-wide font-sweaseed text-gray-600 dark:text-gray-100 text-[30px] sm:text-[40px] text-center mx-4">
            Résidez dans nos{" "}
            <span className="bg-[#fde68a] px-2 py-2 dark:text-slate-500 border-red-900">
              appartements flabmants neufs
            </span>{" "}
            lors de votre séjour à Pointe-Noire.
          </p>
        </div>

        {/* RESERVATION HERO */}
        <div className="flex flex-col xl:flex-row mt-10 items-center justify-center gap-4 mb-14">
          <p className=" font-bold text-[#892832] text-lg border-4 border-[#892832] px-6 py-4 rounded-tl-xl rounded-tr-xl cursor-pointer hover:bg-[#892832] hover:text-white transition-transform duration-200 ease-out">
            <a href="tel:06.43.90.59.82">Réservez dès maintenant</a>
          </p>

          <div>
            <p className="text-lg tracking-wide font-bold text-yellow-600 border-4 border-yellow-600 px-7 py-4 rounded-bl-xl rounded-br-xl cursor-pointer hover:bg-yellow-600 hover:text-white transition-transform duration-200 ease-out">
              Découvrez notre Bonus
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      {/* IMAGE HERO */}
      <div className="flex items-center justify-center space-y-10 px-4 xl:flex-row hover:cursor-crosshair hover:scale-110 transition-transform duration-200 ease-out">
        <div className="bg-white px-4 py-4 rounded-xl drop-shadow-md mx-4">
          <Image
            className="rounded-xl filter saturate-200 "
            src="/glem.jpg"
            alt="Le Glam"
            width="700"
            height="800"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
