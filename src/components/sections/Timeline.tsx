"use client";

import React from "react";
import Link from "next/link";
export default function Timeline() {
  return (
    <div>
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
            <time className='font-mono italic'>02/2024 - 07/2024</time>
            <div className='text-lg font-black'>
              Weiterbildung zum Full Stack Web Developer
            </div>
            inkl. TypeScript, React, NodeJS etc.
            <br />
            <Link
              href='/docs/DBE.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 underline'
            >
              Zertifikat ansehen
            </Link>
            <br />
            <br />
          </div>

          <hr />
        </li>
        <li>
          <hr />
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
            <time className='font-mono italic'>09/2022 - 01/2024</time>
            <div className='text-lg font-black'>Amazon Kundenservice</div>
            Homeoffice
            <br />+ Selbstschulung zur Qualifikation als Entwickler
            <br />
            <Link
              href='/docs/Amazon.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 underline'
            >
              Arbeitszeugnis ansehen
            </Link>
          </div>
          <hr />
        </li>
        <li>
          <hr />
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
            <time className='font-mono italic'>03/2022 - 06/2022</time>
            <div className='text-lg font-black'>Grafikdesigner bei Abihome</div>
            Erstellung und Gestaltung von Abiturzeitungen
            <br />
            Kundenkontakt bezüglich der Anforderungen
            <br />
            Eingesetzte Tools: InDesign, Excel
            <br />
            <Link
              href='/docs/arbeitszeugnis_abihome.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 underline'
            >
              Arbeitszeugnis ansehen
            </Link>
            <br />
            <br />
          </div>
          <hr />
        </li>
        <li>
          <hr />
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
            <time className='font-mono italic'>09/2019 - 08/2022</time>
            <div className='text-lg font-black'>
              Ausbildung zum Grafikdesigner
            </div>
            Designschule Schwerin
            <br />
            Schwerpunkt: Content Management
            <br />
            <strong>Lerninhalte:</strong>
            <br />
            - UI/UX Design
            <br />
            - Adobe Suite
            <br />
            - Suchmaschinenoptimierung
            <br />
            - Content-Management Systeme und Webdesign
            <br />- Plakat-, Logo- und Corporate Design
            <br />{" "}
            <Link
              href='/docs/Designschule.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 underline'
            >
              Zertifikat ansehen
            </Link>
          </div>
          <hr />
        </li>
        <li>
          <hr />
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
            <time className='font-mono italic'>2008 - 2019</time>
            <div className='text-lg font-black'>Ehm Welk Schule</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
