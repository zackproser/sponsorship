'use client'

import React from 'react';
import Link from 'next/link';
import { MailIcon, LinkedinIcon, TwitterIcon, YoutubeIcon, GithubIcon } from './icons'; // Ensure this path is correct

const platforms = [
  { 
    name: 'Newsletter', 
    Icon: MailIcon,
    href: 'https://zackproser.com/newsletter'
  },
  { 
    name: 'LinkedIn', 
    Icon: LinkedinIcon,
    href: 'https://linkedin.com/in/zackproser'
  },
  { 
    name: 'Twitter', 
    Icon: TwitterIcon,
    href: 'https://twitter.com/zackproser'
  },
  { 
    name: 'YouTube', 
    Icon: YoutubeIcon,
    href: 'https://youtube.com/@zackproser'
  },
  { 
    name: 'GitHub', 
    Icon: GithubIcon,
    href: 'https://github.com/zackproser'
  },
];

const FollowerStats = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row flex-wrap gap-16 justify-center lg:justify-between px-8">
        {platforms.map(platform => (
          <Link 
            key={platform.name} 
            href={platform.href}
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <platform.Icon className="h-11 w-11 text-[#0070f3]" />
            <span className="text-sm text-gray-500 dark:text-gray-400">{platform.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FollowerStats;

