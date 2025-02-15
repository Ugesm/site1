import { sections } from '@/data/sections';
import Image from 'next/image';
import SectionContent from './SectionContent';

interface SectionPageProps {
  params: {
    city: string;
  };
}

export default function SectionPage({ params }: SectionPageProps) {
  const section = sections.find(s => s.id === params.city);

  if (!section) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Section non trouvée</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={section.heroImage}
            alt={section.city}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/60" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Section {section.city}</h1>
            <p className="text-xl md:text-2xl font-light">{section.slogan}</p>
          </div>
        </div>
      </section>

      <SectionContent section={section} />
    </main>
  );
}

export function generateStaticParams() {
  return sections.map((section) => ({
    city: section.id,
  }));
}
