import Image from 'next/image';
import logoCloudflare from '@/images/cloudflare.svg';
import logoCloudmark from '@/images/cloudmark.png';
import logoGrunty from '@/images/grunty.png';
import logoPinecone from '@/images/pinecone-logo.png';
import logoBrightcontext from '@/images/brightcontext.png';

const roles = [
  { id: 1, name: 'Staff Developer Advocate', company: 'Pinecone.io', logo: logoPinecone, years: '2023-Present' },
  { id: 2, name: 'Tech Lead & Senior Software Engineer', company: 'Gruntwork.io', logo: logoGrunty, years: '2020-2023' },
  { id: 3, name: 'Senior Software Engineer', company: 'Cloudflare', logo: logoCloudflare, years: '2017-2020' },
  { id: 4, name: 'Software Engineer', company: 'Cloudmark', logo: logoCloudmark, years: '2015-2017' },
  { id: 5, name: 'Software Engineer', company: 'BrightContext', logo: logoBrightcontext, years: '2012-2014' },
];

export default function CV() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
         <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <div key={role.id} className="flex flex-col bg-rounded  rounded-2xl items-center bg-blue-400/5 p-8">
                <Image src={role.logo} alt={`${role.company} logo`} width={64} height={64} unoptimized className="m-4"/>
                <dd className="order-first text-xl font-semibold tracking-tight text-gray-500">{role.name}</dd>
                <dt className="text-sm font-semibold leading-6 text-gray-600">{role.company}</dt>
                <dt className="text-xs font-medium text-gray-500">{role.years}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

