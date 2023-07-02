import { PhoneIcon } from "@heroicons/react/24/solid";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import ReactPlayer from "react-player";

function Contact() {
  return (
    <div
      className="pt-44 mt-24 pb-24 flex flex-col items-center justify-center w-full bg-zinc-100 h-[1000px]"
      id="contact"
    >
      <div className="flex flex-col -mt-44 gap-3">
        <p className="text-4xl font-bold tracking-wide text-slate-700 text-center">
          Un seul point de <span className="text-red-900">contact...</span>
        </p>
        <p className="text-3xl font-bold text-slate-700 text-center">
          Un seul numéro de <span className="text-yellow-600">réservation</span>
        </p>
        <div className="mt-6 flex mx-4 items-center cursor-pointer animate-pulse hover:scale-110 transition-transform duration-200 ease-out justify-center gap-x-10 border-4 border-red-900 rounded-md py-4">
          <a href="tel:06.43.90.59.82" className="flex gap-5">
            <PhoneIcon className="w-8 h-8 font-light text-red-900" />
            <p className="font-bold text-xl text-red-900">06.43.90.59.82</p>
          </a>
        </div>
        <div className="mt-5 mx-4 flex items-center justify-center gap-x-5">
          <p className="font-light text-gray-600 text-md ">
            Suivez-nous également sur :
          </p>
          <a href="/">
            <FaFacebookSquare className="w-10 h-10 text-[#3b5998] hover:animate-bounce" />
          </a>
          <a href="/">
            <FaInstagramSquare className="w-10 h-10 text-[#c2410c] hover:animate-bounce" />
          </a>
        </div>
      </div>

      {/* VIDEOS */}
      <div className="mt-10 lg:mt-0 flex flex-col items-center  justify-center gap-5">
        <p className="text-xl font-bold italic tracking-wide text-slate-700 text-center">
          Ils parlent de nous
        </p>
        {/* <ReactPlayer
          width={240}
          height={140}
          url="https://www.facebook.com/100063537908623/videos/756015202848323"
        /> */}
        <video
        src="https://www.youtube.com/watch?v=TWfW_c3jG9A&t=4239s"
        controls
        className="w-[300px] h-[300px]"
        >

        </video>
      </div>
    </div>
  );
}

export default Contact;
