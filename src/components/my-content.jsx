import Image from 'next/image';
import Link from 'next/link';

import pineconeRefArch from '@/images/pinecone-refarch-logo.webp'
import updatedCodeiumAnalysis from '@/images/updated-codeium-analysis.webp'
import youTube from '@/images/youtube.webp'
import rag from '@/images/retrieval-augmented-generation.webp'
import stages from '@/images/stages.gif'
import blogging from '@/images/blogging-peacefully.webp'

const posts = [
  {
    id: 1,
    title: 'Production-grade semantic search system on AWS',
    href: 'https://github.com/pinecone-io/aws-reference-architecture-pulumi',
    description: 'I designed and built a production-ready semantic search reference system using AWS, TypeScript, Docker and Pulumi',
    imageUrl: pineconeRefArch,
    category: { title: 'Software - distributed system', href: '#' },
  },

  {
    id: 2,
    title: 'Codeium AI-dev tool analysis and review',
    href: 'https://zackproser.com/blog/codeium-analysis-4-2024',
    description:
      'I have been pair-coding alongside AI-enhanced developer tooling since January 2023. I share my analysis of how Codeium stacks up',
    imageUrl: updatedCodeiumAnalysis,
    category: { title: 'AI dev tool analysis', href: '#' },
  },
  {
    id: 3,
    title: 'Reviewing GitHub pull requests in your terminal',
    href: 'https://www.youtube.com/watch?v=0VbWVNWeo7M',
    description:
      'One of my most popular videos, where I demonstrate how to compose open-source tools together in order to perform code review in your terminal',
    imageUrl: youTube,
    category: { title: 'YouTube technical demo', href: '#' }
  },
  {
    id: 4,
    title: 'Retrieval Augmented Generation deep dive',
    href: 'https://pinecone.io/learn/retrieval-augmented-generation',
    description:
      'I researched and wrote a comprehensive learning resource on Retrieval Augmented Generation',
    imageUrl: rag,
    category: { title: 'Research - technical writing', href: '#' },
  },
  {
    id: 5,
    title: 'Golang: The Bubbletea State Machine Pattern',
    href: 'https://zackproser.com/blog/bubbletea-state-machine',
    description: 'I discovered and socialized this design pattern for building ambitious command line interfaces with Go',
    imageUrl: stages,
    category: { title: 'Software - design pattern', href: '#' },
  },
  {
    id: 6,
    title: 'Run your own tech blog',
    href: 'https://zackproser.com/blog/run-your-own-tech-blog',
    description: 'A popular blog post that was picked up by The Changelog and several other popular internet outlets for developers',
    imageUrl: blogging,
    category: { title: 'Software - lifestyle blog', href: '#' },
  },
]

export default function MyContent() {
  return (
    <div className="bg-white p-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <Image
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <a
                      href={post.href}
                      className="relative z-10 rounded-full bg-blue-400 px-3 py-1.5 font-medium text-white hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <h2 className="mt-12 text-3xl font-bold tracking-tight sm:text-4xl text-[#0070f3]">Looking for more?</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
            My <Link href={"https://zackproser.com/blog"}>blog</Link>, <Link href={"https://youtube.com/@zackproser"}>videos</Link>, <Link href={"https://github.com/zackproser"}>GitHub profile</Link>, <Link href={"https://linkedin.com/in/zackproser"}>LinkedIn profile</Link> and <Link href={"https://twitter.com/zackproser"}>Twitter profile</Link> are all public and used daily as resources 
            by software engineers, CTOs, founders, investors and analysts.
        </p>
      </div>
    </div>
  )
}

