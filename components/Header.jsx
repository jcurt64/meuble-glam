"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import DarkButton from "./DarkButton";


const Header = () => {

  return (
    <motion.header
      // initial={{
      //   y: -300,
      //   opacity: 0,
      // }}
      // transition={{ duration: 1.2 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: false }}
      className="mx-auto max-w-7xl h-70 flex flex-col justify-center items-center space-y-16 xl:flex-row xl:items-center md:justify-between px-2 md:px-6"
      id="/"
    >
      {/* LOGO */}

      <div className="pt-16 text-4xl font-bold underline underline-offset-4 text-[#892731] cursor-pointer">
        <div to="/" spy={true} smooth={true} offset={-100} duration={50}>
          <Image
            className=""
            src="/glam_logo.png"
            alt="encours"
            width="310"
            height="140"
          />
        </div>
      </div>

      {/* NAVIGATION */}

      <div className="flex flex-col xl:flex-row  space-y-14">
        <nav className="flex items-center justify-center gap-14 xl:space-x-16 mx-2">
          <div to="appart" spy={true} smooth={true} offset={-50} duration={50}>
            <p className="itemMenu">Appartements</p>
          </div>
          <div>
            <div
              to="bonus"
              spy={true}
              smooth={true}
              offset={-50}
              duration={50}
            >
              <p className="itemMenu">Bonus</p>
            </div>
          </div>
          <div
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={50}
          >
            <p className="itemMenu">Contact</p>
          </div>
        </nav>
      </div>

      {/* RESERVATION + DARKMODE */}

      <div className="flex items-center justify-evenly gap-16">
        <a href="tel:06.43.90.59.82">
          <p className="px-14 py-2 bg-[#892731] hover:bg-[#9f2934] rounded-tr-xl rounded-bl-xl text-white font-bold cursor-pointer hover:decoration-4 hover:scale-110 transition-transform duration-200 ease-out">
            Réservez
          </p>
        </a>
        <DarkButton />
        {/* <DarkMode /> */}
      </div>
    </motion.header>
  );
}

export default Header;
