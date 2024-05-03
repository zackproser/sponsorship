import { NextResponse } from 'next/server';

type FollowersDetail = {
  newsletter?:number 
  linkedin?: number,
  twitter?: number,
  youtube?: number,
  github?:number,
}

type FollowersCount = {
    breakdown: FollowersDetail
    total: number
}

export async function GET(res: NextResponse) {
    const followersCount: FollowersCount = {
      breakdown: {
        linkedin: 350,
        twitter: 10000,
        youtube: 100000,
        github: 399
      },
    total: 25000
 } 

  return NextResponse.json({ followersCount }, { status: 200 });
}
