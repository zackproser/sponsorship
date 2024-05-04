import Link from 'next/link'
import Image from 'next/image'

import { CheckIcon, MailIcon, LinkedinIcon, TwitterIcon, YoutubeIcon, GithubIcon } from './icons'; // Ensure this path is correct

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import FollowerStats from '@/components/followers'
import Pricing from '@/components/pricing'
import MyContent from '@/components/my-content'

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
                    My readers love my work because it is authentic and informed through hard-won through experience
                    working on core engineering teams at some of the world&apos;s most successful startups for the past 12 years.
                  </p>
                  <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                    I have a growing audience across multiple platforms and I&apos;m available on a limited basis for 
                    sponsorship, advisory work, consulting or development so long as it does not conflict with my 
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
          <div className="container px-4 md:px-6">
            <MyContent />
          </div>
        <section>
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


