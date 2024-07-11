import React from "react";
import Image from "next/image";
import Link from "next/link";
// import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/utils/fontawesome";
import { motion } from "framer-motion";
const Header: React.FC = () => {
  return (
    <>
      <label
        htmlFor='my-drawer-2'
        aria-label='close sidebar'
        className='drawer-overlay'
      ></label>
      <div className='menu bg-base-200 text-base-content mb-0 w-80 px-4 flex flex-col justify-between'>
        {/* Sidebar content here */}
        <div className=''>
          <Image
            src='/images/Anastasia_2.jpg'
            alt='Evgenii Larin'
            className='rounded-lg my-1 w-full mask mask-squircle'
            width={200}
            height={200}
          />
          <div className='flex flex-col text-ledt m-2'>
            <p className='text-secondary pb-1'>Grafikdesigner</p>
            <h1 className='text-3xl pb-2'>Anastasia Cozarevici</h1>
          </div>
          <p className='m-2 text-lg'>
            Als Grafikdesigner verfolge ich gerne die neuesten Designtrends und
            probiere ständig neue Stile aus. Ich bin voller Begeisterung und
            Hingabe für meinen Beruf und bereit für neue Herausforderungen und
            Wachstumsmöglichkeiten in meiner Karriere.
          </p>
          <br />
          <Link
            href='mailto:hello@ev-dev.de'
            className='btn btn-accent flex items-center space-x-2 my-2 uppercase'
          >
            <FontAwesomeIcon icon={["fas", "envelope"]} />
            <span>E-Mail</span>
          </Link>
          <Link
            href='tel:+4915140486743'
            className='btn btn-secondary flex items-center space-x-2 uppercase'
          >
            <FontAwesomeIcon icon={["fas", "phone"]} />
            <span>Call</span>
          </Link>

          <br />
          <br />
          {/* FOOTER */}
          <div className='flex flex-row  justify-around gap-1 items-center my-2 rounded-btn max-w-full p-4 bg-base-100'>
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              title='instagram'
              href='https://www.instagram.com/schenjalarin/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary'
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} size='2x' />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              title='telegram'
              href='https://t.me/EvgeniiLari'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary'
            >
              <FontAwesomeIcon icon={["fab", "telegram"]} size='2x' />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              title='whatsapp'
              href='https://wa.me/+4915140486743'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary'
            >
              <FontAwesomeIcon icon={["fab", "whatsapp"]} size='2x' />
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
