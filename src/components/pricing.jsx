import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Expand your reach',
    id: 'tier-bronze',
    href: 'https://buy.stripe.com/bIYfZtaQ24HbdkQaEE',
    price: '$1,500',
    features: ['1 review or spotlight blog post', 'Social amplification'],
  },
  {
    name: 'Go deeper',
    id: 'tier-silver',
    href: 'https://buy.stripe.com/4gw4gL2jw6PjfsY3cd',
    price: '$2,800',
    features: [
      '2 review or spotlight blog posts',
      'Social amplification'
    ],
  },
  {
    name: 'Product analysis / Feedback',
    id: 'tier-gold',
    href: 'https://buy.stripe.com/aEU6oTgamgpTbcI8wy',
    price: '$5,000',
    features: [
      'Detailed feedback and analysis',
      'Video recordings of my experience',
      'Technical recommendations',
      'Dedicated review blog Post',
    ],
  },
  {
    name: 'Coaching or career advice',
    id: 'tier-coach',
    href: 'https://buy.stripe.com/aEU6oTgamgpTbcI8wy',
    price: '$500',
    features: [
      'Prep for technical interviews',
      'Or reach the next level in your career', 
      'Or pick up a new career...'
    ],
  },
  {
    name: 'Design or development work',
    id: 'tier-coach',
    href: 'https://buy.stripe.com/aEU6oTgamgpTbcI8wy',
    price: '$500/hr',
    features: [
      'System design',
      'Architecture review', 
      'Development',
      'APIs, Infra, Web apps',
      'Machine learning notebooks...',
      'HTML5 Games or web apps...'
    ],
  },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  return (
    <div className="bg-white p-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                'ring-2 ring-indigo-600',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    'text-indigo-600',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
              </div>
              <p className="mt-6 text-4xl font-bold tracking-tight text-gray-900">{tier.price}</p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                Buy now
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
