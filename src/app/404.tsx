export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page non trouvée</h1>
        <p className="text-gray-600 mb-8">La page que vous recherchez n&apos;existe pas.</p>
        <a
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}
