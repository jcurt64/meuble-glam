"use client"
import Confiance from "./Confiance";
import {
  CheckBadgeIcon,
  HandThumbUpIcon,
  SwatchIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

function ConfianceDetail() {
  return (
    <motion.div 
    initial={{
      x: -300,
      opacity: 0,
    }}
    transition={{ duration: 1.2 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    
    className="my-2 mt-10 flex flex-col items-center">
      <div className="flex ">
        <p className="text-[30px] mx-4 mt-16 font-bold tracking-wide text-slate-700 dark:text-gray-200 text-center uppercase font-Montserrat border-b-4 border-dotted border-yellow-500">
          Pourquoi choisir{" "}
          <span className="text-red-900  cursor-crosshair">GLAM meublés</span> ?
        </p>
      </div>
      <p className="max-w-[600px] text-center mt-8 px-4 tracking-wide font-light text-gray-600 dark:text-gray-400 text-lg">
        La villa Glam meublés a été construite dans un souci de répondre aux
        besoins des personnes souhaitant séjourner à Pointe-Noire dans un cadre
        confortable, et bénéficiant de prestations de qualité.
      </p>
      <div
       
        className="mt-12 flex flex-col lg:flex-row flex-wrap  gap-10 items-center lg:justify-center "
      >
        {/* flex flex-col lg:flex-row lg:space-x-3 lg:px-4 items-center space-y-5 lg:space-y-0 */}
        <Confiance
          Icon={CheckBadgeIcon}
          color="#7f1d1d"
          Title="Un décor design"
          subtitle="Le décor et les équipements de nos loft ont été choisis avec le plus grand soin pour le confort des clients. "
          border="#7f1d1d"
        />
        <Confiance
          Icon={SwatchIcon}
          color="#312e81"
          Title="Des prestations soignées"
          subtitle="Nous mettons à disposition de nos clients des prestations dignes de services hôteliers afin d'agrémenter leur séjour"
          border="#312D80"
        />
        <Confiance
          Icon={HandThumbUpIcon}
          color="#eab308"
          Title="Toujours à votre écoute"
          subtitle="Nous restons à votre écoute durant tout votre séjour, pour vous tous vos besoins quotidiens."
          border="#eab308"
        />
      </div>
    </motion.div>
  );
}

export default ConfianceDetail;
