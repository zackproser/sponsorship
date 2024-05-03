import Link from 'next/link'
import Image from 'next/image'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import speech from '@/images/a16z-2.webp'
import myContent from '@/images/my-content.webp'

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
       <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#0070f3]" href="https://zackproser.com">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#0070f3]" href="https://zackproser.com/blog">
            Writing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#0070f3]" href="https://zackproser.com/videos">
            Videos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#0070f3]" href="https://zackproser.com/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#0070f3]">
                    Sponsor Zack Proser
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Zack Proser is a staff-level developer and open-source maintainer with a specialization in
                    cloud-native development, infrastructure as code and machine learning. 
                  </p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    He has a growing audience
                    across multiple platforms and offers exciting sponsorship opportunities for brands looking to
                    connect with his engaged community.
                  </p>
                </div>
              </div>
              <Image 
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0070f3]">Zack&apos;s Content</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Zack Proser creates a variety of engaging content across multiple platforms, including cloud-native
                  development tutorials, infrastructure as code guides, and machine learning project walkthroughs. His
                  content resonates with a diverse audience seeking inspiration and authentic technical storytelling.
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
                        Zack shares his expertise in building scalable, resilient, and efficient cloud-native
                        applications using modern tools and frameworks.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Infrastructure as Code</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Zack showcases his skills in automating infrastructure provisioning and management using tools
                        like Terraform, Pulumi, and CloudFormation.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Machine Learning Projects</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Zack shares his experience in building and deploying machine learning models, including
                        tutorials on data preprocessing, model training, model serving and building distributed GenAI systems that are production-ready.
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#0070f3]">Zack&apos;s Audience</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Zack&apos;s content resonates with a diverse audience of tech-savvy individuals, including software
                engineers, DevOps professionals, and data scientists. His audience is primarily male, with a strong
                presence in urban areas and a high engagement rate across social media platforms.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row lg:justify-end">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <MailIcon className="h-8 w-8 text-[#0070f3]" />
                  <span className="mt-2 font-medium">450</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Newsletter</span>
                </div>
                <div className="flex flex-col items-center">
                  <LinkedinIcon className="h-8 w-8 text-[#0070f3]" />
                  <span className="mt-2 font-medium">750</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</span>
                </div>
                <div className="flex flex-col items-center">
                  <TwitterIcon className="h-8 w-8 text-[#0070f3]" />
                  <span className="mt-2 font-medium">350</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Twitter</span>
                </div>
                <div className="flex flex-col items-center">
                  <YoutubeIcon className="h-8 w-8 text-[#0070f3]" />
                  <span className="mt-2 font-medium">165</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">YouTube</span>
                </div>
                <div className="flex flex-col items-center">
                  <GithubIcon className="h-8 w-8 text-[#0070f3]" />
                  <span className="mt-2 font-medium">142</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#0070f3]">
                Sponsorship Opportunities
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Partner with Zack Proser to reach his engaged audience and elevate your brand. Choose from our
                sponsorship tiers to find the perfect fit for your marketing goals.
              </p>
            </div>
            <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-[#0070f3]">Bronze Tier</CardTitle>
                  <CardDescription>Ideal for small businesses and startups.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <ul className="space-y-2">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#0070f3]" />
                      1 Sponsored Post
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#0070f3]" />
                      Mention in 1 Story
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#0070f3]" />
                      Inclusion in Newsletter
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <Button className="w-full bg-[#0070f3] hover:bg-[#0070f3]/90 text-gray-50 dark:bg-[#0070f3] dark:text-gray-900 dark:hover:bg-[#0070f3]/90" asChild>
                      <Link href={'https://buy.stripe.com/bIYfZtaQ24HbdkQaEE'}>$1500</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-[#0070f3]">Silver Tier</CardTitle>
                  <CardDescription>Great for growing businesses and e-commerce brands.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <ul className="space-y-2">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#0070f3]" />
                      2 Sponsored Posts
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#0070f3]" />
                      Mention in 2 Stories
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#0070f3]" />
                      Inclusion in Newsletter
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#0070f3]" />
                      Shoutout in 1 Video
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <Button className="w-full bg-[#0070f3] hover:bg-[#0070f3]/90 text-gray-50 dark:bg-[#0070f3] dark:text-gray-900 dark:hover:bg-[#0070f3]/90" asChild>
                      <Link href={"https://buy.stripe.com/4gw4gL2jw6PjfsY3cd"}>$2,800</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-[#0070f3]">Gold Tier</CardTitle>
                  <CardDescription>Ideal for established brands and e-commerce leaders.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <ul className="space-y-2">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#0070f3]" />
                      3 Sponsored Posts
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#0070f3]" />
                      Mention in 3 Stories
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#0070f3]" />
                      Inclusion in Newsletter
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#0070f3]" />
                      Shoutout in 2 Videos
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#0070f3]" />
                      Dedicated Blog Post
                    </li>
                  </ul>
                  <div className="mt-auto" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#0070f3]">
                Other Services
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get honest, actionable feedback on your product, architecture or direction from a staff-level developer.
              </p>
            </div>
            <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-[#0070f3]">Product review and feedback</CardTitle>
                  <CardDescription>Ideal for small businesses and startups.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <ul className="space-y-2">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#0070f3]" />
                      Detailed analysis of your product or tool's functionality and user experience. 
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#0070f3]" />
                      Detailed recordings, transcriptions, step by step 
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#0070f3]" />
                      Discussion, feedback, and advice in follow up meetings with your team 
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <Button className="w-full bg-[#0070f3] hover:bg-[#0070f3]/90 text-gray-50 dark:bg-[#0070f3] dark:text-gray-900 dark:hover:bg-[#0070f3]/90" asChild>
                      <Link href={'https://buy.stripe.com/aEU6oTgamgpTbcI8wy'}>$5000</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
