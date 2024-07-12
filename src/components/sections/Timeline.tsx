"use client";

import React from "react";
import Link from "next/link";

export default function Timeline() {
  return (
    <div>
      {/* SCHOOLING AND STUDYING */}
      <div>
        <h2 className='text-2xl font-bold mt-8 mb-4 text-center text-primary'>
          Schulbildung und Ausbildung
        </h2>
        <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
          <li>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-start mb-12 md:text-end'>
              <time className='font-mono italic'>09/2021 - 07/2024</time>
              <div className='text-lg font-black'>„Designschule“ Schwerin</div>
              Grafikdesign & Content Management
              <br />
              {/* <Link
                href='/docs/Designschule.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 underline'
              >
                Zertifikat ansehen
              </Link> */}
              <br />
              <br />
            </div>
            <hr className='bg-secondary' />
          </li>
          <li>
            <hr className='bg-secondary' />
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end mb-10'>
              <time className='font-mono italic'>09/2005 - 07/2017</time>
              <div className='text-lg font-black'>
                Theoretisches Lyzeum M V Lomonosov (Balti, Moldawien)
              </div>
              Abitur
              <br />
              <br />
            </div>
          </li>
        </ul>
      </div>

      {/* PROFESSIONAL EXPERIENCE */}
      <div>
        <h2 className='text-2xl font-bold mb-4 text-center text-primary'>
          Berufliche Laufbahn
        </h2>

        <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
          <li>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-start mb-12 md:text-end'>
              <time className='font-mono italic'>04/2024 - 06/2024</time>
              <div className='text-lg font-black'>
                Praktikum als Grafikdesignerin
              </div>
              Cerise Beauty Studio
              <br />
              <br />
            </div>
            <hr className='bg-secondary' />
          </li>
          <li>
            <hr className='bg-secondary' />
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end mb-10'>
              <time className='font-mono italic'>06/2023 - 08/2023</time>
              <div className='text-lg font-black'>
                Praktikum als Grafikdesignerin
              </div>
              LingoA&A Sprachendienste UG
              <br />
              <br />
            </div>
            <hr className='bg-secondary' />
          </li>
          <li>
            <hr className='bg-secondary' />
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-start mb-10 md:text-end'>
              <time className='font-mono italic'>01/2022 - jetzt</time>
              <div className='text-lg font-black'>Verkäuferin - Minijob</div>
              Laden „Lieblingsstücke“
              <br />
              <br />
            </div>
            <hr className='bg-secondary' />
          </li>
          <li>
            <hr className='bg-secondary' />
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end mb-10'>
              <time className='font-mono italic'>11/2020 - 12/2021</time>
              <div className='text-lg font-black'>
                Rezeptionistin (Beauty-Assistentin)
              </div>
              Friseursalon „CutConcept“ HAIR-COSMETIC-TEAM
              <br />
              <br />
            </div>
            <hr className='bg-secondary' />
          </li>
          <li>
            <hr className='bg-secondary' />
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-start mb-10 md:text-end'>
              <time className='font-mono italic'>01/2020 - 10/2020</time>
              <div className='text-lg font-black'>Pizzabäckerin</div>
              Pizzeria Express
              <br />
              <br />
            </div>
            <hr className='bg-secondary' />
          </li>
          <li>
            <hr className='bg-secondary' />
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-start mb-10 md:text-end'>
              <time className='font-mono italic'>10/2019 - 12/2019</time>
              <div className='text-lg font-black'>Verkäuferin/ Kassiererin</div>
              Nahkauf Lübz
              <br />
              <br />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
