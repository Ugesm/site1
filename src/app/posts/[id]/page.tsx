import Image from 'next/image'
import { posts } from '@/data/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'
import LikeButton from '@/components/posts/LikeButton'

interface PostPageProps {
  params: { 
    id: string 
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find(p => p.id === params.id)
  
  if (!post) {
    notFound()
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/actualites"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Retour aux actualités
          </Link>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

          {/* Metadata */}
          <div className="flex items-center text-gray-600 mb-8">
            <div className="flex items-center">
              {post.author?.avatar && (
                <div className="relative w-10 h-10 mr-3">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-semibold">{post.author?.name}</p>
                <p className="text-sm">{new Date(post.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
              </div>
            </div>
            <div className="ml-auto">
              <LikeButton postId={post.id} initialLikes={post.likes} />
            </div>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="relative w-full h-[400px] mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Attachments */}
          {post.attachments && post.attachments.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pièces jointes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {post.attachments.map((attachment, index) => (
                  <a
                    key={index}
                    href={attachment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <p className="font-medium text-blue-600">{attachment.title}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {attachment.type.toUpperCase()}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id
  }))
}
