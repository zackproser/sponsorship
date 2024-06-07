import Link from 'next/link'
import Image from 'next/image'

import FollowerStats from '@/components/followers'
import Pricing from '@/components/pricing'
import MyContent from '@/components/my-content'
import CV from '@/components/CV'

import speech from '@/images/zack-speaking.webp'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 py-2 h-16 flex items-center">
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="https://zackproser.com" className="text-md font-medium hover:underline underline-offset-4 text-[#0070f3]">
              About
            </Link>
            <Link href="https://zackproser.com/blog" className="text-md font-medium hover:underline underline-offset-4 text-[#0070f3]">
              Writing
            </Link>
            <Link href="https://zackproser.com/videos" className="text-md font-medium hover:underline underline-offset-4 text-[#0070f3]">
              Videos
            </Link>
            <Link href="https://zackproser.com/contact" className="text-md font-medium hover:underline underline-offset-4 text-[#0070f3]">
              Contact
            </Link>
            <Link href="https://zackproser.com/testimonials" className="text-md font-medium hover:underline underline-offset-4 text-[#0070f3]">
              Testimonials
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-20 lg:py-28 xl:py-36">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center text-center space-y-4">
                  <h1 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl text-[#0070f3]">
                    Hi, I&apos;m Zachary
                  </h1>
                  <p className="max-w-[600px] mx-auto text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
                    I&apos;m a staff developer, open-source maintainer and technical writer specializing in
                    cloud-native development, infrastructure as code, developer tooling and machine learning.
                  </p>
                  <p className="max-w-[600px] mx-auto text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
                    I have a growing audience across multiple platforms and I&apos;m available on a limited basis for
                    sponsorship, advisory work, consulting or development so long as it does not conflict with my
                    primary role at Pinecone.
                  </p>
                  <div className="flex justify-center pt-6">
                    <FollowerStats />
                  </div>
                </div>
                <div className="relative w-full h-full">
                  <Image
                    className="inset-0 w-full h-full object-cover rounded-xl"
                    src={speech}
                    alt="Me speaking about Gen AI in production at Andreesen Horowitz"
                  />
                  <div className="absolute inset-0 flex items-end justify-center p-4 bg-black bg-opacity-30">
                    <div className="text-white text-center p-2">
                      <h2 className="text-lg sm:text-xl md:text-3xl font-bold">Speaking at Andreesen Horowitz</h2>
                      <p className="text-sm sm:text-md md:text-xl">Discussing Gen AI in production</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container grid items-center justify-center gap-4 px-4 text-center py-16 md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#0070f3]">
                  Where I am coming from
                </h2>
                <p className="mx-auto pt-8 text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
                  My readers love my work because it is authentic and hard-won through experience. I have worked on core
                  engineering teams at some of the world&apos;s most successful startups for the past 12 years.
                </p>
                <div className="pt-8">
                  <CV />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container grid items-center justify-center gap-4 px-4 text-center py-16 md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#0070f3]">
                  My content
                </h2>
                <p className="mx-auto pt-8 text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
                  12 years of engineering experience meets a passion for hand-crafted technical content. I code, write and create videos.
                </p>
              </div>
              <MyContent />
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#0070f3]">
                  Work with me
                </h2>
                <p className="mx-auto text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
                  Partner with me to reach my engaged audience, elevate your brand and reach a sophisticated group of technologists.
                </p>
                <p className="mx-auto text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
                  Some of the most impactful work I do is provide early reviews and technical feedback on the DevEx or UX of a product such as an AI-assisted developer tool, new technical service, etc.
                </p>
              </div>
              <Pricing />
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#0070f3]">My Audience</h2>
                <p className="max-w-[600px] text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
                  My content resonates with a diverse audience of tech-savvy individuals, including software
                  engineers, DevOps professionals, data scientists, CTOs, security experts, investors and business analysts.
                </p>
              </div>
              <div className="space-y-2">
                <FollowerStats />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

