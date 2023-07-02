
import Image from "next/image";
import ItemLegal from "../../components/ItemLegal";
import Link from "next/link";

function Legal() {
  return (
    <div>
     <Link href="/" className="flex items-center justify-center mt-20">
          <Image
            className=""
            src="/glam_logo.png"
            alt="encours"
            width="210"
            height="140"
          />
        </Link>
    <div className="">

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-4 mb-10">
          <p className="text-4xl font-InterFont dark:text-gray-300 text-slate-700 tracking-wide text-center mt-16 max-w-[700px]">
            {`Conditions générales d'utilisation du site www.kabral-renovation.fr`}
          </p>
          <span className="font-light pt-12 dark:text-gray-300 text-slate-700 underline underline-offset-4">
            Version - Juillet 2023
          </span>
        </div>
        <div className="p-8">
          <ItemLegal
            title="Propriétés du Site :"
            subtitle={`Le site internet https://www.kabral-renovation.fr (ci-après dénommé « le Site ») est la propriété de Kabral Renovation,
    société à responsabilité limitée unipersonnelle au capital de 1 000 euros immatriculée au Registre de commerce et des sociétés de Toulouse, sous le numéro 892514167. TVA intracommunautaire : FR02853407484.
    Le siège social est situé au 82 boulevard Jean Brunhes 31300 Toulouse. Le directeur de la publication de ce site est le Directeur Général de la société Kabral Renovation : Houya
    KABRAL, domicilié au 82 boulevard Jean Brunhes 31300 Toulouse. Téléphone : 06.95.16.14.28. e-mail : kabral-renovation@outlook.fr.`}
          />
          <ItemLegal
            title="Conception graphique et développement :"
            subtitle="Le site web kabral-renovation a été conçue et développée par Majelink."
          />
          <ItemLegal
            title="Hébergement et sécurité :"
            subtitle={`Le site est hébergé par : Netlify.  Kabral Renovation met tout en œuvre pour offrir aux utilisateurs des informations et/ou outils disponibles et vérifiés, mais ne saurait être tenue pour responsable des erreurs, d’une absence de disponibilité des informations et/ou de la présence de virus sur son site.`}
          />
          <ItemLegal
            title={`Droits et devoirs de l’Utilisateur :`}
            subtitle={` L’utilisateur du Site (ci-après, l’« Utilisateur(s) ») reconnaît disposer de la compétence et des moyens nécessaires pour accéder au Site, l’utiliser et avoir vérifié que la configuration informatique utilisée ne contient aucun virus et qu’elle est en parfait état de fonctionnement. En conformité avec les dispositions le Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l’égard du traitement des données à caractère personnel et à la libre circulation de ces données (règlement général sur la protection des données , ci-après, « RGPD »), et abrogeant la directive 95/46/CE, le traitement automatisé de données nominatives réalisé à partir de ce Site web est intégré dans le registre des activités de traitement de Kabral Renovation.`}
          />
          <ItemLegal
            title="Données à caractère personnel :"
            subtitle={`Le Site ne réalise aucune collecte des données visées par le Règlement général sur la protection des données personnelles (RGPD).`}
          />
          <ItemLegal
            title={`Utilisation du Site par l’Utilisateur :`}
            subtitle={`L’accès au site est libre et gratuit à tout utilisateur disposant d’un accès à internet. Tous les
          coûts afférant à l’accès (frais matériels, logiciels, ou accès à internet) sont exclusivement à la
          charge de l’Utilisateur du Site. L’utilisateur du Site est seul responsable du bon fonctionnement de
          son matériel informatique et de son accès à internet. Il utilise le Site sous sa responsabilité
          exclusive. Majelink ne saurait être reconnue responsable de quelque manière que ce soit si les
          documents et les éléments graphiques publiés sur ce site contenaient des inexactitudes
          techniques ou des erreurs typographiques. Il en est de même pour les modifications qui sont
          périodiquement apportées aux informations contenues sur ce site. L’Utilisateur du présent Site est
          tenu de respecter les dispositions du Règlement Général sur la Protection des données
          personnelles et toute autre législation applicable en France, dont la violation est passible de
          sanctions pénales. Il doit notamment s’abstenir, s’agissant des informations nominatives
          auxquelles il accède, de toute collecte, de toute utilisation détournée, et d’une manière générale,
          de tout acte susceptible de porter atteinte à la vie privée ou à la réputation des personnes. La
          structure générale, ainsi que les logiciels, textes, images (animées ou non), vidéos, sons, savoir-faire, et tous autres éléments composants le Site sont la propriété exclusive de Majelink. Toute
          représentation totale ou partielle du Site par quelque procédé que ce soit, sans l’autorisation
          expresse de Majelink est interdite et constituerait une contrefaçon sanctionnée par les articles
          L.335-2 et suivants du Code de la propriété intellectuelle. Il en est de même des bases de
          données qui pourraient figurer sur le Site, qui sont protégées par les dispositions de la loi du 1er
          juillet 1998 portant transposition dans le Code de la propriété intellectuelle de la directive
          européenne du 11 mars 1996 relative à la protection juridique des bases de données, et dont
          l’AFNIC est producteur.
          La marque Majelink ainsi que le logo figurant sur le Site sont des marques déposées et sont la
          propriété de la société Majelink. Toute reproduction totale ou partielle de cette marque ou de ce
          logo, effectuée à partir des éléments du Site sans l’autorisation expresse de Majelink est donc
          prohibée, au sens de l’article L.713-2 du Code de la propriété intellectuelle.
          Reproduction sur support papier :
          À l’exception de l’iconographie, la reproduction des pages du Site sur un support papier est
          autorisée, sous réserve du respect des trois conditions suivantes : gratuité de la diffusion, respect
          de l’intégrité des documents reproduits (aucune modification, ni altération d’aucune sorte)
          citation explicite du site http://www.kabral-renovation.fr comme source et mention que les droits de
          reproduction sont réservés et strictement limités.`}
          />
          <ItemLegal
            title="Reproduction du Site sur support électronique :"
            subtitle={`La reproduction de tout ou partie du Site sur un support électronique est autorisée sous réserve
          de l’ajout de façon claire et lisible de la source (http://www.kabral-renovation.fr) et de la mention “Droits
          réservés”. Les informations utilisées ne doivent l’être qu’à des fins personnelles, associatives ou
          professionnelles ; toute utilisation à des fins commerciales ou publicitaires est exclue.`}
          />
          <ItemLegal
            title="Création de liens vers http://www.kabral-renovation.fr :"
            subtitle={`Le Site autorise la mise en place d’un lien hypertexte pointant vers son contenu, sous réserve
          de :
          - Ne pas utiliser la technique du lien profond (“deep linking”), c’est-à-dire que les pages du Site
          majelink.fr ne doivent pas être imbriquées à l'intérieur des pages d’un autre site, mais
          accessibles par l’ouverture d’une fenêtre.
          - Mentionner la source qui pointera grâce à un lien hypertexte directement sur le contenu visé.
          Les informations utilisées ne doivent l'être qu’à des fins personnelles, associatives ou
          professionnelles ; toute utilisation à des fins commerciales ou publicitaires est exclue.
          Attention ! Cette autorisation ne s’applique pas aux sites internet diffusant des informations à
          caractère polémique, pornographique, xénophobe ou pouvant, dans une plus large mesure
          porter atteinte à la sensibilité du plus grand nombre. Pour d’autres utilisations, veuillez
          consulter la société Majelink.`}
          />
          <ItemLegal
            title={`Durée et évolution des présentes Conditions Générales d’Utilisation :`}
            subtitle={`Les présentes CGU s’appliquent pour une durée indéterminée à compter de l’utilisation
          du Site par l’internaute.
          Majelink se réserve le droit de modifier ou de corriger le contenu du Site et les présentes CGU à
          tout moment et sans préavis.
          Les internautes sont invités à consulter régulièrement les présentes afin de prendre connaissance
          des changements apportés. Majelink reste titulaire de tous les droits qui ne sont pas
          expressément concédés à l’utilisateur du site aux termes des présentes CGU.`}
          />
          <ItemLegal
            title="Loi applicable et juridiction compétente :"
            subtitle={` Le contenu du site internet et les présentes CGU sont soumis à la loi française. L’internaute
          accepte la compétence des tribunaux français pour le règlement des litiges relatifs au contenu et
          à l’utilisation du site.`}
          />
          <ItemLegal
            title="Acceptation et opposabilité :"
            subtitle={`L’Utilisateur du Site déclare que Majelink lui a fourni toutes les informations nécessaires
          relativement à l’utilisation du site et adhérent sans réserve aux présentes Conditions Générales
          d’Utilisation. L’Utilisateur du Site déclare avoir pris connaissance des conditions de
          fonctionnement du Site et disposer de toutes les compétences techniques nécessaires pour
          accéder et utiliser le Site conformément au contenu des présentes Conditions Générales
          d’Utilisation.
          En se connectant au Site, l’Utilisateur accepte les présentes Conditions Générales d’Utilisation.`}
          />
        </div>
      </div>
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
    </div>
  );
}

export default Legal;
