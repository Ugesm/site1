export interface Developer {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  email: string;
  description: string;
}

export const developers: Developer[] = [
  {
    name: "Khadim SEYE",
    role: "Développeur",
    image: "/images/developers/dev2.jpg",
    linkedin: "https://linkedin.com/in/fatou-ndiaye",
    github: "https://github.com/fatou-ndiaye",
    email: "fatou.ndiaye@ugesm.org",
    description: "A joué un rôle clé dans la refonte du site, en apportant des solutions techniques innovantes et en supervisant l'intégralité du projet, de la conception à la mise en œuvre."
  },
  {
    name: "Ambroise Ngagne TINE",
    role: "Développeur",
    image: "/images/developers/dev1.jpg",
    linkedin: "https://linkedin.com/in/mamadou-diallo",
    github: "https://github.com/mamadou-diallo",
    email: "mamadou.diallo@ugesm.org",
    description: "A développé la première version du site web de l'UGESM, posant les fondations techniques et structurelles du projet initial."
  },
  {
    name: "Saliou THIANE",
    role: "Développeur",
    image: "/images/developers/dev3.jpg",
    linkedin: "https://linkedin.com/in/omar-sall",
    github: "https://github.com/omar-sall",
    email: "omar.sall@ugesm.org",
    description: "A contribué au développement de la nouvelle version du site en implémentant des fonctionnalités clés et en participant à l'optimisation continue de la plateforme."
  }
];