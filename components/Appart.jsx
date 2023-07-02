"use client"
import React from "react";
import { motion } from "framer-motion";
import AppartDetail from "./AppartDetail";

const Appart = () => {
  return (
    <motion.div
      initial={{
        x: -300,
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      className="mt-4 flex flex-col items-center justify-center"
      id="appart"
    >
      <p className="text-center text-[30px] mt-16 font-bold tracking-wide text-slate-700 dark:text-gray-200 font-Montserrat border-b-4 border-dotted border-yellow-500">
        NOS APPARTEMENTS
      </p>
      <p className="w-full sm:max-w-[900px] px-4 mt-8 tracking-wide font-light text-gray-600 dark:text-gray-400 text-lg text-center  ">
        Vous aurez le plaisir de séjourner dans 2 beaux appartements style loft,
        récemment construits, et dotés de prestations dignes des services
        hôteliers pour que vous ne manquez de rien.
      </p>

      {/* appartements */}
      <div className="flex flex-col lg:flex-row gap-y-12 mt-24">
        <AppartDetail
          img="/19.jpg"
          title1="LE PARIS LOFT"
          title2="Le véritable luxe"
          como1="45m2"
          como2="Illimité"
          como3="Italienne"
          como4="Wifi"
          subtitle=" Un grand loft doté d'une cuisine américaine et d'une douche italienne. Le décor vous rappelera sûrement la capitale de la France..."
          price="30 000"
        />

        <AppartDetail
          img="/31.jpg"
          title1="EL ROMA LOFT"
          title2="Le véritable luxe"
          como1="30m2"
          como2="Illimité"
          como3="Italienne"
          como4="Wifi"
          subtitle=" Laissez-vous emporter quelques temps dans ce loft dans le décor soigné vous offre une invation à l'évasion. La capitale de l'Italie vous semblera familier."
          price="30 000"
        />
      </div>
    </motion.div>
  );
}

export default Appart;
