import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import Icon from "../components/Icon";

export default function Home() {


  return (
    <>
      <header className="pt-12 px-7 py-6 bg-white bg-no-repeat bg-cover text-black flex flex-col items-center">
        <div className="rounded-xl border-solid border-b-8 border-b-slate-600">
          <Image
            alt="Michael Carr"
            src={'/avatar.jpg'}
            width={180}
            height={180}
            className="rounded-lg"
          />
        </div>
        <h1 className="text-black text-2xl font-black mt-4">Michael Carr</h1>
        <h2 className="text-gray-600 text-lg">Front End Developer</h2>
        <p className="text-center my-3 text-sm">
          Empathic creative wielding the web <span className="relative color-line">for good</span>. A Seattle native, when not coding you&apos;ll find me cycling toward sunlight.
        </p>
        <div className="flex flex-row gap-2 mt-5">
          <div className="flex flex-col items-center group relative">
            <Link href="/resume.pdf">
              <a className="z-10 color-line flex flex-row items-center gap-2">
                <FontAwesomeIcon color="#C65454" size="lg" icon={solid("file-pdf")} />
                Download resume
              </a>
            </Link>
          </div>
        </div>
      </header>
      <div className="m-6 mt-10">

        <main className="mt-9">
          <div>
            <h2 className="font-black text-xl">Recent work</h2>
            <p>Two of my favorite recent projects with live site and source code</p>

            <div className="card border-black mt-5 flex flex-row gap-5 relative">
              <div className="w-20 h-20 aspect-square grid place-content-center self-center bg-gradient-to-b from-[#C480F9] to-[#A630DE] p-3 rounded-2xl text-purple-50">
                <FontAwesomeIcon size="3x" icon={solid('compact-disc')} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl">Streamy</h3>
                <p className="text-xs">Subscriber exclusive listening serving thousands of users</p>
                <p className="font-semibold text-xs mt-2">
                  Built with React / NextJs / Redux / Firebase
                </p>
                <div className="self-end relative flex flex-row gap-2 mt-2">
                  <Icon iconStyles="hover:text-purple-primary" text="Live site" icon={<FontAwesomeIcon icon={solid('desktop')} />} />
                  <Icon iconStyles="hover:text-purple-primary" text="Source code" icon={<FontAwesomeIcon size="lg" icon={brands('github')} />} />
                </div>
              </div>
            </div>

            <div className="card border-blue-primary mt-5 flex flex-row gap-5">
              <div className="self-center">
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

              </div>
              <div>
                <h3 className="text-xl">Sound Splits</h3>
                <p className="text-xs">Royalty accounting SaaS for labels and publishers</p>
                <p className="font-semibold text-xs mt-2">
                  Built with Tailwind / React / NextJs / Redux / Django
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <h2 className="font-black text-xl">Resume</h2>
            <p>Grab a copy of my resume, and feel free to share it</p>
            <button className="mt-3 flex justify-center items-center flex-row gap-3 hover:border-b-0 hover:mt-4 transition-all border-b-4 border-b-blue-shadow bg-blue-secondary hover:bg-blue-shadow rounded-md text-white py-3 px-8">
              <FontAwesomeIcon icon={solid('file-pdf')} size="lg" />
              Download resume
            </button>
          </div>
        </main>
      </div>
    </>
  )
}
