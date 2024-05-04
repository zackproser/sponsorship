import Link from 'next/link'
import Image from 'next/image'

import { CheckIcon, MailIcon, LinkedinIcon, TwitterIcon, YoutubeIcon, GithubIcon } from './icons'; // Ensure this path is correct

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import FollowerStats from '@/components/followers'
import Pricing from '@/components/pricing'

import speech from '@/images/zack-speaking.webp'
import myContent from '@/images/my-content.webp'

export default function Component() {
  return (
    <div className="container mx-auto px-4">
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
       <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-md font-medium hover:underline underline-offset-4 text-[#0070f3]" href="https://zackproser.com">
            About
          </Link>
          <Link className="text-md font-medium hover:underline underline-offset-4 text-[#0070f3]" href="https://zackproser.com/blog">
            Writing
          </Link>
          <Link className="text-md font-medium hover:underline underline-offset-4 text-[#0070f3]" href="https://zackproser.com/videos">
            Videos
          </Link>
          <Link className="text-md font-medium hover:underline underline-offset-4 text-[#0070f3]" href="https://zackproser.com/contact">
            Contact
          </Link>
          <Link className="text-md font-medium hover:underline underline-offset-4 text-[#0070f3]" href="https://zackproser.com/testimonials">
            Testimonials
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center text-center space-y-4">
                  <h1 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#0070f3]">
                    Hi, I&apos;m Zachary 
                  </h1>
                  <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                    I&apos;m a staff developer, open-source maintainer and technical writer specializing in
                    cloud-native development, infrastructure as code, developer tooling and machine learning.
                  </p>
                  <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                    I have a growing audience across multiple platforms and I&apos;m available on a limited basis for 
                    sponsorship, advisory work, consulting or development work so long as it does not conflict with my 
                    primary role at Pinecone.
                  </p>
                  <div className="flex justify-center pt-4 mt-4">
                   <FollowerStats />
                  </div>
                </div>
              <Image 
                className="mx-auto object-cover aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                src={speech} 
                alt="Me speaking about Gen AI in production at Andreesen Horowitz" 
              />
              </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0070f3]">My content</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I create engaging content across media including: video, articles, code. Quick demos to deep analyses and UX or DevEx reviews. 
                  My readers love my work because it is authentic, hard-won through many years of hands on experience, and created by someone who 
                  has worked in some of the world&apos;s most successful startups for the last 12 years.
                </p>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  My development tutorials, infrastructure as code guides, command line tools, web applications and machine learning project walkthroughs, 
                  analsyses and reviews are used and read by developers, investors, and technologists around the world daily. 
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                alt="My content"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height={"310"}
                src={myContent}
                width={"550"}
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Cloud-Native Development</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        I share my expertise in building scalable, resilient, and efficient cloud-native
                        applications using modern tools and frameworks.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Infrastructure as Code</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        I love to automate infrastructure provisioning and management using tools
                        like Terraform, Pulumi, and CloudFormation.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">The latest in AI and vector search</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                       I&apos;m a Staff Developer Advocate at <Link href={"https://pinecone.io"} className="text-blue-500">Pinecone.io</Link>, where we build the genre-defining cloud-native vector database that provides long-term memory for AI.
                       I research, create tutorials, do open-source maintenance on machine learning projects and Jupyter notebooks, and build distributed systems that flex Pinecone at scale
                       I write about  data preprocessing, model training, embeddings, vector databases, semantic search, <Link className="text-blue-500" href="https://pinecone.io/learn/retrieval-augmented-generation">retrieval augmented generation</Link> and productionizing GenAI systems.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#0070f3]">My Audience</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                My content resonates with a diverse audience of tech-savvy individuals, including software
                engineers, DevOps professionals, data scientists, CTOs, security experts, investors and business analysts.
              </p>
            </div>
              <div className="space-y-2">
                <FollowerStats />
              </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#0070f3]">
                Work with me 
              </h2>
              <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Partner with me to reach my engaged audience, elevate your brand and reach a sophisticated group of technologists. 
              </p>
              <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Some of the most impactful work I do is provide early reviews and technical feedback on the DevEx or UX of a product such as an AI-assisted developer tool, new technical service, etc. 
              </p>
              <Pricing />
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
  )
}


