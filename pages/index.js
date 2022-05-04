import { ContactForm } from './../components/ContactForm';
import { Card } from './../components/Card';
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import Icon from "../components/Icon";

import {useRef, useState} from 'react'

export default function Home() {

  const [tooManyClicks, settooManyClicks] = useState(false)

  const clicks = useRef(0)
  const handleTooManyClicks = () => {
    clicks.current++
    console.log(clicks)
    if (clicks.current > 5) {
      settooManyClicks(true)
    }
    if (clicks.current > 9) {
      settooManyClicks(false)
    }
  }

  return (
    <div className='max-w-xl mr-30 m-auto bg-transparent'>
      <header className="pt-12 px-7 text-black flex  bg-transparent flex-col items-center">
        <div onClick={handleTooManyClicks} className="relative active:scale-90 flex items-center justify-center group avatar-container">
          <Image
            alt="Michael Carr"
            src={'/avatar.jpg'}
            width={120}
            height={120}
            className="avatar"
          />
        {tooManyClicks && <>
            <span className='sqThing'></span>
            <p className='absolute bg-blue-400 -rotate-6 w-24 shadow flex -right-14 text-xs p-2 top-4 font-semibold flex-col gap-2 text-center text-white items-center justify-center'>
              <FontAwesomeIcon size='2x' icon={solid("bomb")} />
              Whoa that was a lot
            </p>
          </>}

        </div>
        <h1 className="text-black text-2xl 900px:text-white font-black mt-4">Michael Carr</h1>
        <h2 className="text-gray-600 1000px:text-white text-lg">Front End Developer</h2>
        <p className="text-center 1400px:text-white my-3 sm:mx-16">
          Empathic developer wielding the web for good. A Seattle native, when not coding you&apos;ll find me cycling toward sunshine.
        </p>
        <div className="flex flex-row gap-2 mt-5">
          <div className="flex 1600px:text-white flex-row gap-2 relative">
              <Icon href='https://github.com/xyeres' iconStyles={'hover:text-blue-primary active:scale-90'} text="View my GitHub projects" icon={<FontAwesomeIcon size='2x' icon={brands('github-square')} />} />
              <Icon href='https://www.linkedin.com/in/mxcarr/' iconStyles={'hover:text-blue-primary active:scale-90'} text="Connect with me on LinkedIn" icon={<FontAwesomeIcon size='2x' icon={brands('linkedin')} />} />
          </div>
        </div>
      </header>
      <div className="m-6 mt-10">

        <main className="mt-16">
          <div>
            <h2 className="font-black text-xl">Recent work</h2>
            <p>Two of my favorite recent projects with live site and source.</p>
          <Card 
            icon={<div className="w-20 h-20 aspect-square grid place-content-center self-start mt-1 bg-gradient-to-b from-[#C480F9] to-[#A630DE] p-3 rounded-2xl text-purple-50">
            <FontAwesomeIcon size="3x" icon={solid('compact-disc')} />
                  </div>}
            title="Streamy" 
            desc="Subscriber exclusive listening serving thousands of users" 
            stack="Built with React / NextJs / Redux / Firebase"
            links={{livesite: 'https://listen.unitedpursuit.com/', github:'https://github.com/xyeres/streamy'}} 
            iconStyles="hover:text-purple-primary"
            borderColor="border-purple-primary"
          />
          <Card 
            icon={<div className="self-start mt-1">
            <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="82" height="82" rx="19" fill="url(#paint0_linear_0_2)" />
              <path d="M41 64.119V19.3155" stroke="white" strokeWidth="4" />
              <path d="M53.9524 29.6545H28.0476V55.5019H53.9524V29.6545Z" stroke="white" strokeWidth="4" />
              <defs>
                <linearGradient id="paint0_linear_0_2" x1="41" y1="0" x2="41" y2="82" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3BA0FD" />
                  <stop offset="1" stopColor="#2084E1" />
                </linearGradient>
              </defs>
            </svg>
          </div>}
            title="Sound Splits" 
            desc="Royalty accounting SaaS for labels and publishers" 
            stack="Built with Tailwind / React / NextJs / Redux / Django"
            links={{livesite: 'http://www.soundsplits.com/', github:'https://github.com/xyeres/splits-client'}} 
            iconStyles="hover:text-blue-primary"
            borderColor="border-blue-primary"
            />
            <p className='text-center text-sm mt-6'>Visit my <Link href="https://github.com/xyeres"><a className='border-b-4 border-b-gray-300 hover:border-b-gray-500 transition-all'>GitHub profile</a></Link> for more samples.</p>
          </div>
          {/* <div className="flex flex-col mt-12">
            <h2 className="font-black text-xl">Resume</h2>
            <p className='sm:mb-6'>Straight to the brass tacks huh? </p>
            <button className="mt-3 mx-10 flex justify-center items-center flex-row gap-3 hover:scale-95 active:border-b-0 active:mt-4 transition-all border-b-4 border-b-blue-shadow hover:border-b-blue-900 bg-blue-primary hover:bg-blue-shadow rounded-md text-white py-3 px-8">
              <FontAwesomeIcon  icon={solid('file-pdf')} size="lg" />
              Download resume
            </button>
          </div> */}
          <div className="flex flex-col mt-16">
            <h2 className="font-black text-xl">Contact</h2>
            <p className='mb-5'>I&apos;d love to hear what you are working on, send me something interesting!</p>
            <ContactForm />
          </div>
        </main>
        <footer className="mt-6 mx-10 border-t flex flex-row items-center justify-center">
          <p className="text-xs mt-2 text-slate-400">&copy;2022 Michael Carr</p>
        </footer>
      </div>
    </div>
  )
}
