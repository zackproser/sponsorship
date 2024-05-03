'use client'

import React, { useState, useEffect } from 'react';

// Icons import statements
import { MailIcon, LinkedinIcon, TwitterIcon, YoutubeIcon, GithubIcon } from './icons'; // Ensure this path is correct

const platforms = [
  { name: 'Newsletter', Icon: MailIcon, followers: 450 },
  { name: 'LinkedIn', Icon: LinkedinIcon, followers: 750 },
  { name: 'Twitter', Icon: TwitterIcon, followers: 350 },
  { name: 'YouTube', Icon: YoutubeIcon, followers: 165 },
  { name: 'GitHub', Icon: GithubIcon, followers: 142 },
];

const FollowerStats = () => {
  const [totalFollowers, setTotalFollowers] = useState(0);
  const [followerBreakdown, setFollowerBreakdown] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/followers');
      const data = await response.json();
      const { total, breakdown } = data.followersCount; 

      console.log(`data: %o`, data);
      console.log(`total: ${total}, followerCounts: %o`, breakdown);
      setTotalFollowers(total);
      setFollowerBreakdown(breakdown);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 min-[400px]:flex-row lg:justify-end">
        <div className="grid grid-cols-3 gap-4 text-center">
          {platforms.map(platform => (
            <div key={platform.name} className="flex flex-col items-center">
              <platform.Icon className="h-8 w-8 text-[#0070f3]" />
              <span className="mt-2 font-medium">{platform.followers}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>

      <h1>Total Followers: {totalFollowers}</h1>
    </>
  );
};

export default FollowerStats;

