import { publications } from '@/data/publications';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PublicationPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return publications.map((publication) => ({
    id: publication.id,
  }));
}

export default function PublicationPage({ params }: PublicationPageProps) {
  const publication = publications.find((p) => p.id === params.id);

  if (!publication) {
    notFound();
  }

  // Fonction pour extraire l'ID de la vidéo YouTube de manière statique
  const getYouTubeVideoId = (url: string) => {
    if (!url) return null;
    
    // Format: https://youtu.be/VIDEO_ID
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return id || null;
    }
    
    // Format: https://www.youtube.com/watch?v=VIDEO_ID
    if (url.includes('youtube.com/watch')) {
      const id = url.split('v=')[1]?.split('&')[0];
      return id || null;
    }
    
    return null;
  };

  const videoId = publication.videoUrl ? getYouTubeVideoId(publication.videoUrl) : null;

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <div className="relative h-96 rounded-xl overflow-hidden mb-8">
            {publication.videoUrl ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={publication.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            ) : (
              <Image
                src={publication.image}
                alt={publication.title}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg">
              <div className="text-2xl font-bold">{publication.date.day}</div>
              <div className="text-sm">{publication.date.month}</div>
              <div className="text-sm">{publication.date.year}</div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={publication.author.image}
                  alt={publication.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">{publication.author.name}</p>
                <p className="text-gray-500">{publication.author.university}</p>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {publication.title}
            </h1>

            <div className="flex items-center text-gray-500 mb-8">
              <span className="capitalize bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                {publication.category}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {publication.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-3xl mx-auto">
          <p className="text-gray-600 whitespace-pre-line leading-relaxed">
            {publication.content}
          </p>

          {/* PDF Download Button */}
          {publication.pdfUrl && (
            <div className="mt-8">
              <a
                href={publication.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger le PDF
              </a>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between">
            <Link
              href="/publications"
              className="inline-flex items-center text-green-600 hover:text-green-500 transition-colors"
            >
              <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour aux publications
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
