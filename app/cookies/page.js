import React from "react";
import ItemLegal from "../../components/ItemLegal";
import Link from "next/link";
import Image from "next/image";

function page() {
  return (
    <div className="mx-auto max-w-7xl">
         <Link href="/" className="flex items-center justify-center mt-20">
          <Image
            className=""
            src="/glam_logo.png"
            alt="encours"
            width="210"
            height="140"
          />
        </Link>
      <ItemLegal
        title="INTRODUCTION :"
        subtitle="
          En tant que visiteur, en continuant d'accéder à notre application web Enao, vous consentez à l'utilisation de cookies. MAJELINK peut utiliser des cookies, des pixels invisibles et des balises web pour obtenir des informations vous concernant lors de la visite du Site internet.

          Lors de la navigation sur notre site nous vous informons que des cookies et autres traceurs peuvent être installés ou servir à accéder à des informations contenues sur votre ordinateur, tablette ou smartphone.
          
          Cette politique de gestion des cookies témoigne de notre engagement de vous délivrer une information complète sur l'utilisation et le dépôt de ces cookies dans le respect de vos choix et de nos obligations réglementaires."
      ></ItemLegal>
      <ItemLegal
        title="Qu'est-ce qu'un cookie? :"
        subtitle="Il s’agit d’un petit fichier texte stocké sur le terminal de l’internaute (parfois dans son navigateur dans le cas des cookies internes). Ce fichier regroupe des données telles que l’heure de visite, le nombre de visites, la source d’arrivée (pour les cookies Google Analytics) mais plus globalement vos préférences et habitudes de navigation sur la toile. Aucun des cookies que nous utilisons ne collecte vos informations personnelles et ils ne peuvent pas être utilisés pour vous identifier, mais uniquement l'appareil mobile et/ou l'équipement utilisé.
          "
      />
      <ItemLegal
        title="Acceptation des cookies et personalisation de votre navigation :"
        subtitle="Afin d'utiliser les cookies dans le Site internet de Kabral Renovation, nous vous demandons votre consentement exprès pour accepter les cookies en cliquant sur le bouton Accepter et fermer (bouton contenu dans la bannière dédiée qui s'affiche lors de votre première navigation sur le Site, généralement sur la page d'accueil), pour qu'ils soient placés sur le disque dur de votre appareil et/ou équipement mobile. Si vous acceptez, votre consentement sera valable 13 mois à compter de son enregistrement. Voici la liste des cookies utilisés sur notre Application web. ils permettent d'identifier l'appareil ou l'équipement mobile utilisés pour naviguer sur notre application web, de connaître son utilisation et ses performances, d’établir des statistiques, des volumes de fréquentation et d’utilisation des divers éléments (contenus visités, parcours) et d’améliorer ainsi son intérêt et son ergonomie. Google analytics : Google Analytics peut utiliser quatre types de cookies (_utma,_utmb,_utmz and _utmv) pour récupérer les données des visiteurs et leurs interactions. Universal Analytics utilise désormais un seul cookie baptisé “_ga - Google tag Manager : Google Tag Manager est un système qui contrôle les balises (scripts) que nous voulons exécuter sur notre Site web et quand nous voulons les exécuter. Au lieu d’avoir à coder et à repérer les différents événements sur notre Site, Google Tag Manager s’en charge. Une fois installé, il gère toutes sortes de balises pouvantt être des scripts statistiques ou des tags marketing, conçus pour la publicité. De tels scripts et balises établissent des cookies, qui collectent les données des utilisateurs pour rassembler des statistiques et des analyses marketing. - Cookies content : Cookie Consent est un outil qui stocke tous les consentements des utilisateurs du Site et nous les livre à la demande.
          "
      >
        {/* <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-blue-900" : "bg-gray-700"
            } relative inline-flex h-6 w-11 items-center rounded-full mt-4 `}
          >
            <span className="sr-only text-2xl text-white">Enable notifications</span>
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch> */}
        {/* <span className="ml-2 text-sm font-MonoFont text-blue-500"> {`"J'accepte l'utilisation des cookies à des fins d'identification
            d'appareils et terminaux, et de mesures d'audience. `}
            </span> */}
      </ItemLegal>

      <ItemLegal
        title="Pourquoi utilisons-nous des cookies? :"
        subtitle="Une fois que vous avez consenti à l'utilisation de cookies, le fichier est ajouté et le cookie aide à analyser le trafic web et nous permet de savoir quand vous visitez notre Site Enao. L'application web peut adapter ses opérations à vos besoins, en mémorisant des informations sur vos habitudes de navigation. Nous utilisons des cookies de trafic pour identifier les pages utilisées. Cela nous aide à analyser les données sur le trafic web et à améliorer notre Site web afin d'identifier les dysfonctionnements éventuels et les améliorations à apporter."
      />
      <ItemLegal
        title="Quelles sont les données collectées via les cookies? :"
        subtitle="Les informations collectées peuvent inclure les pages web consultées, le type de matériel et navigateur utilisé, le numéro d'identification du matériel, le cas échéant l'adresse IP de l'utilisateur, et toute autre information fournie sur notre site.
      "
      />
      <ItemLegal
        title="Quelle est la durée de conservation des données collectées via les cookies? :"
        subtitle="Conformément au règlement général sur la protection des données (RGPD), les données collectées ne peuvent être conservées indéfiniment. Nous conservons vos choix concernant le dépôt des cookies pendant 13 mois.

          La durée de vie de nos cookies est de 13 mois maximum.
          
          Les informations collectées via les cookies de mesure d'audience sont conservées pendant 25 mois.  
      "
      />
      <Link href="/" className="flex items-center justify-center mt-20 pb-14">
          <Image
            className=""
            src="/glam_logo.png"
            alt="encours"
            width="210"
            height="140"
          />
        </Link>
    </div>
  );
}

export default page;
