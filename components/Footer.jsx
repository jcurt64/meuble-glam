
import Image from "next/image";
import Link from "next/link";
const today = new Date();

function Footer() {
  return (
    <div className=" h-[280px] mt-8 md:h-[120px] bg-zink-100 flex flex-col md:flex-row gap-y-5 items-center justify-evenly">
      <div>
        <Image
          className="cursor-pointer"
          src="/glam_logo2.png"
          alt="encours"
          width="120"
          height="90"
        />
      </div>
      <Link href="/legal"
        className="text-md tracking-wide text-slate-700 dark:text-gray-200 hover:text-slate-900 cursor-pointer hover:underline hover:underline-offset-2"
      >
        Mentions légales
      </Link>
      <Link href="rgpd">
          <p className="text-md tracking-wide text-slate-700 dark:text-gray-200 hover:text-slate-900 cursor-pointer hover:underline hover:underline-offset-2">
            RGPD
          </p>
        </Link>
        <Link href="cookies">
          <p className="text-md tracking-wide text-slate-700 dark:text-gray-200 hover:text-slate-900 cursor-pointer hover:underline hover:underline-offset-2">
            Politique des cookies
          </p>
        </Link>
        
      <p className="text-sm font-light text-slate-700 dark:text-gray-200">
        © Glam meublés {today.getFullYear()} - Tous droits réservés
      </p>
    </div>
  );
}

export default Footer;
