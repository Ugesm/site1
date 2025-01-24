// Types
import { Post } from '@/types/post';
import type { Author } from '@/types/post';

export interface Attachment {
  type: 'image' | 'video' | 'pdf'
  url: string
  title: string
  thumbnailUrl?: string
}

export interface Author {
  name: string
  image: string
  role?: string
  linkedin?: string
  twitter?: string
  email?: string
}

export interface Gallery {
  url: string
}

export interface Document {
  title: string
  url: string
  type: 'pdf'
}

export interface Video {
  title: string
  url: string
  thumbnail: string
}

export const posts: Post[] = [
  {
    id: 'benguerir-1',
    title: 'TERENGA EN PARTAGE',
    content: `La Teranga en Partage : Une journée de découverte et d'échanges à ne pas manquer

L'UGESM Benguerir a le plaisir de vous inviter à un événement exceptionnel placé sous le signe de la Teranga, cette valeur fondamentale de l'hospitalité sénégalaise. Préparez-vous à vivre une expérience enrichissante et inoubliable.

Lieu : UM6P, Campus Benguerir
Date : Samedi 25 janvier 2025
Horaires : Ouverture des portes à 9h00

Pourquoi participer ?

Cet événement est une célébration de la diversité culturelle et un moment d'échange unique, où vous pourrez :

Découvrir la culture sénégalaise à travers des présentations captivantes, des performances artistiques et des expositions.
Participer à des ateliers interactifs pour en apprendre davantage sur les traditions, les arts, et la cuisine sénégalaise.
Profiter d'un espace d'échanges et de rencontres, où étudiants, invités et organisateurs partageront des moments de convivialité.
La journée sera marquée par des activités variées, entre moments festifs et partages inspirants. Que vous soyez étudiant, passionné de culture ou simplement curieux, cet événement est fait pour vous.

Informations pratiques :

Pour toute question ou information supplémentaire, n'hésitez pas à nous joindre :
Téléphone : +212 610 144 377
E-mail : ugesmbenguerir@gmail.com

En partenariat avec Leyton – Empower your future.

Ne manquez pas cette occasion exceptionnelle de découvrir l'essence de la Teranga et de partager des moments uniques en communauté. Nous vous attendons nombreux.`,
    date: 'Samedi 25 Janvier 2025',
    section: 'benguerir',
    category: 'Événement',
    image: '/images/ben1.jpg',
    excerpt: 'Rencontre avec Son Excellence Madame Seynabou DIAL, Ambassadeur du Sénégal au Maroc',
    likes: 0,
    author: { 
      name: 'Bureau UGESM Bemguerir', 
      image: '/logo.png' 
    }
  },
  {
    id: 'rabat-1',
    title: 'Rencontre avec Son Excellence Madame Seynabou DIAL, Ambassadeur du Sénégal au Maroc',
    content: `Nous avons eu l'immense honneur d'être reçus par Son Excellence Madame Seynabou DIAL, Ambassadeur du Sénégal au Maroc . Cette rencontre marquante s'inscrit dans le cadre de la présentation officielle du nouveau bureau de l'UGESM section Rabat.

Temps forts de la rencontre :
Débriefing des réalisations du bureau sortant : Retour sur les initiatives marquantes et les projets aboutis au cours de l'année écoulée.
Présentation des membres du nouveau bureau : Une équipe dynamique et engagée prête à relever les défis à venir.
Partage du programme annuel : Mise en lumière des grandes orientations et des projets prévus pour cette nouvelle mandature.
Discussion sur les défis et solutions : Échange constructif autour des obstacles rencontrés, avec une recherche collective de solutions concrètes pour soutenir nos objectifs.
Nos engagements pour l'avenir :
Cette rencontre a renforcé notre motivation à travailler ensemble pour le bien-être des étudiants sénégalais au Maroc, avec un accent particulier sur la solidarité, le dynamisme et l'excellence.

Un grand merci à Son Excellence Madame Seynabou DIAL pour son accueil chaleureux et son soutien indéfectible à notre communauté.

UGESM – Section Rabat

"Unis pour réussir, ensemble pour avancer."`,
    date: 'Mercredi 18 Décembre 2024',
    section: 'rabat',
    category: 'Événement',
    image: '/images/r1.jpg',
    excerpt: 'Rencontre avec Son Excellence Madame Seynabou DIAL, Ambassadeur du Sénégal au Maroc',
    likes: 0,
    author: { 
      name: 'Bureau UGESM Rabat', 
      image: '/logo.png' 
    }
  },
  {
    id: 'agadir-1',
    title: 'Invitation à un Panel Exceptionnel avec le Professeur Papa Ibra Kebe',
    content: `L'UGESM Agadir a le plaisir de vous inviter à un panel d'exception animé par Papa Ibra Kebe, professeur de contrôle de gestion, qui partagera son expertise sur des thématiques essentielles pour les étudiants souhaitant poursuivre leurs études ou développer leur carrière en France.

Thèmes abordés :
Modalités d'inscription dans les établissements supérieurs en France : Tout ce qu'il faut savoir pour bien démarrer.
Possibilités de financement :
Bourses des fondations des grandes écoles.
Contrats d'alternance.
Le coût de la vie dans les villes de province : Comparatif et conseils pratiques.
Jobs étudiants : Trouver des opportunités pour subvenir à ses besoins.
Admissions parallèles et passerelles : Comment intégrer les grandes écoles après une formation universitaire.
Perspectives de carrière en France pour les étudiants étrangers : Conseils pour réussir son insertion professionnelle.
Pourquoi participer ?
Obtenez des informations précieuses pour vos projets d'études ou de carrière en France.
Profitez d'un moment d'échange direct avec un expert.
Posez toutes vos questions et obtenez des réponses concrètes.
Ne manquez pas cette opportunité !

UGESM Agadir – Toujours à vos côtés pour vous guider vers la réussite.
`,
    date: 'Samedi 30 Novembre 2024',
    section: 'agadir',
    category: 'Événement',
    image: '/images/ag1.heic',
    excerpt: 'Invitation à un Panel Exceptionnel avec le Professeur Papa Ibra Kebe',
    likes: 0,
    author: { 
      name: 'Bureau UGESM Agadir', 
      image: '/logo.png' 
    }
  },
  {
    id: 'marrakech-1',
    title: 'NÉMÉKOU TOUR : Première Initiative du Bureau Exécutif de l\'UGESM Marrakech',
    content: `Dans le cadre de son mandat, le bureau exécutif fraîchement élu de l'Union Générale des Étudiants Sénégalais de Marrakech (UGESM) pose les bases de son engagement en lançant NÉMÉKOU TOUR.

Cette initiative vise à :

Comprendre les attentes des membres de la communauté sénégalaise de Marrakech pour mieux les représenter.
Obtenir des retours constructifs sur le programme élaboré afin de l'ajuster en fonction des besoins réels.
L'UGESM Marrakech souhaite ainsi instaurer un dialogue constructif, renforcer les liens entre ses membres, et promouvoir une dynamique collective autour des valeurs de solidarité et d'entraide.

Nous vous invitons à participer activement aux rencontres prévues dans le cadre de NÉMÉKOU TOUR. Votre avis est indispensable pour co-construire une communauté plus forte et plus épanouie.
`,
    date: 'Jeudi 21 novembre 2024',
    section: 'marrakech',
    category: 'Événement',
    image: '/images/m1.jpg',
    excerpt: 'NÉMÉKOU TOUR : Première Initiative du Bureau Exécutif de l\'UGESM Marrakech',
    likes: 0,
    author: { 
      name: 'Bureau UGESM Marrakech', 
      image: '/logo.png' 
    }
  }
];

// Obtenir tous les posts
export const getAllPosts = () => {
  return posts;
};

// Fonction pour obtenir les posts les plus récents
export function getRecentPosts(count: number = 3): Post[] {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// Fonction pour obtenir les posts d'une section spécifique
export const getSectionPosts = (sectionId: string) => {
  console.log('Getting posts for section:', sectionId);
  const filteredPosts = posts.filter(post => post.section.toLowerCase() === sectionId.toLowerCase());
  console.log('Found posts:', filteredPosts);
  return filteredPosts;
};

// Fonction pour obtenir les posts par catégorie
export const getCategoryPosts = (category: string) => {
  return posts.filter(post => post.category === category);
};

// Fonction pour obtenir les posts filtrés par section et catégorie
export function getFilteredPosts(sectionId?: string, category?: string): Post[] {
  return posts.filter(post => {
    if (!post) return false;
    const matchesSection = !sectionId || post.section === sectionId;
    const matchesCategory = !category || post.category === category;
    return matchesSection && matchesCategory;
  }) || [];
}
