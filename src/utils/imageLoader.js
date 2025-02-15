export default function imageLoader({ src, width, quality }) {
  // Pour les images locales
  if (src.startsWith('/')) {
    return src;
  }
  // Pour les images externes
  return src;
}
