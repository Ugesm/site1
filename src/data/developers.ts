export interface Developer {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  email: string;
  description: string;
}

export const developers: Developer[] = [
  {
    name: "Khadim SEYE",
    role: "Développeur",
    image: "/images/developers/dev1.jpg",
    linkedin: "#",
    instagram: "https://www.instagram.com/khadim.seye_/",
    email: "khadimseye2004@gmail.com",
    description: "A joué un rôle clé dans la refonte du site, en apportant des solutions techniques innovantes et en supervisant l'intégralité du projet, de la conception à la mise en œuvre."
  },
  {
    name: "Saliou THIANE",
    role: "Développeur",
    image: "/images/developers/dev3.jpg",
    linkedin: "https://www.linkedin.com/in/saliou-thiane-925180319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "Saliouthiane26@gmail.com",
    description: "A contribué au développement de la nouvelle version du site en implémentant des fonctionnalités clés et en participant à l'optimisation continue de la plateforme."
  }
];