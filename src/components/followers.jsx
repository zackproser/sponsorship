'use client'

import React, { useState, useEffect } from 'react';

import { MailIcon, LinkedinIcon, TwitterIcon, YoutubeIcon, GithubIcon } from './icons'; // Ensure this path is correct

const platforms = [
  { name: 'Newsletter', Icon: MailIcon, followers: 480 },
  { name: 'LinkedIn', Icon: LinkedinIcon, followers: 762 },
  { name: 'Twitter', Icon: TwitterIcon, followers: 317 },
  { name: 'YouTube', Icon: YoutubeIcon, followers: 168 },
  { name: 'GitHub', Icon: GithubIcon, followers: 142 },
];

const FollowerStats = () => {
  const [totalFollowers, setTotalFollowers] = useState(0);
  const [followerBreakdown, setFollowerBreakdown] = useState({});
  
  return (
    <>
     <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-end">
          {platforms.map(platform => (
              <div key={platform.name} className="flex flex-col items-center">
                  <platform.Icon className="h-8 w-8 text-[#0070f3]" />
                  <span className="mt-2 font-medium">{platform.followers}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{platform.name}</span>
              </div>
          ))}
      </div>
    </>
  );
};

export default FollowerStats;

