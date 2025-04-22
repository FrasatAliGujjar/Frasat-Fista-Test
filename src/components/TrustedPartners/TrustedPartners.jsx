import React from 'react'
import styles from './TrustedPartners.module.css';
import COmpanies from '@/assets/TrustedPartners/companies.png';
import COmpanies_mobile from '@/assets/TrustedPartners/mobile.png';
import Image from 'next/image';

const TrustedPartners = () => {
  const logos = [
    { name: 'Eventbrite', src: '/logos/eventbrite.svg' },
    { name: 'Classpass', src: '/logos/classpass.svg' },
    { name: 'Bilt', src: '/logos/bilt.svg' },
    { name: 'Duolingo', src: '/logos/duolingo.svg' },
    { name: 'Notion', src: '/logos/notion.svg' },
    { name: 'Curology', src: '/logos/curology.svg' },
    { name: 'Substack', src: '/logos/substack.svg' },
    { name: 'Faire', src: '/logos/faire.svg' },
    { name: 'Fi', src: '/logos/fi.svg' },
    { name: 'Rippling', src: '/logos/rippling.svg' },
    { name: 'Little Spoon', src: '/logos/littlespoon.svg' },
    { name: 'ClassDojo', src: '/logos/classdojo.svg' },
    { name: 'MasterClass', src: '/logos/masterclass.svg' },
    { name: 'Hertz', src: '/logos/hertz.svg' },
    { name: 'Webflow', src: '/logos/webflow.svg' },
  ]

  return (
    <section className={`py-16  bg-[#E1E1E1] `}>
      <div className="container bg-[#E1E1E1] mx-auto px-4">
        {/* <h2 className="text-xl md:text-xl font-bold text-center text-gray-900 mb-12">
          Industry leaders choose Decagon to redefine customer experience with AI agents
        </h2> */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {/* {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center transition-opacity duration-300 hover:opacity-80"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="max-h-12 w-auto"
              />
            </div>
          ))} */}
          <Image
            src={COmpanies}
            alt="Company logos"
            width={1200}
            height={400}
            className="hidden md:block col-span-full w-full h-auto"
          />
          <Image
            src={COmpanies_mobile}
            alt="Company logos"
            width={1200}
            height={400}
            className="md:hidden col-span-full w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default TrustedPartners 