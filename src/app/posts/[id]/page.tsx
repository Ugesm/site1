'use client'

import Image from 'next/image'
import { posts } from '@/data/posts'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id)
  
  if (!post) {
    notFound()
  }

  const [likes, setLikes] = useState(post.likes)

  const handleLike = () => {
    setLikes(likes + 1)
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
            <span className="mr-4">{post.date}</span>
            <span>{post.category}</span>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-96 mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="rounded-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose max-w-none mb-8">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Video if exists */}
          {post.videoUrl && (
            <div className="mb-8">
              <iframe
                width="100%"
                height="480"
                src={post.videoUrl}
                title="Video content"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          )}

          {/* Like Button */}
          <div className="mt-8">
            <button
              onClick={handleLike}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>{likes} likes</span>
            </button>
          </div>

          {/* Author */}
          <div className="mt-8 border-t pt-8">
            <div className="flex items-center">
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{post.author.name}</h3>
                {post.author.role && (
                  <p className="text-gray-600">{post.author.role}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
