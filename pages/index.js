import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
      <div className="m-6">
        <header className="flex flex-col items-center">
          <div className="rounded-xl border-solid border-b-8 border-b-teal-primary">
          <Image 
            alt="Michael Carr" 
            src={'/avatar.jpg'} 
            width={180} 
            height={180}
            className="rounded-lg"
          />
          </div>
          <h1 className="text-2xl font-black mt-4">Michael Carr</h1>
          <h2 className="text-gray-400 text-lg">Front End Developer</h2>
          <p className="text-center mt-2">
            Empathic creative wielding the web for good. A Seattle native, when not coding you&apos;ll find me cycling toward sunlight.
          </p>
          <div className="flex flex-row gap-2 mt-5">
            <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.125 14.25H3.75V12H4.125C4.74844 12 5.25 12.5016 5.25 13.125C5.25 13.7484 4.74844 14.25 4.125 14.25ZM9 12H9.375C9.7875 12 10.125 12.3375 10.125 12.75V15.75C10.125 16.1625 9.7875 16.5 9.375 16.5H9V12ZM10.5 0V6C10.5 6.82969 11.1703 7.5 12 7.5H18V21C18 22.6547 16.6547 24 15 24H3C1.34297 24 0 22.6547 0 21V3C0 1.34297 1.34297 0 3 0H10.5ZM3 10.5C2.58562 10.5 2.25 10.8375 2.25 11.25V17.25C2.25 17.6625 2.58562 18 3 18C3.41438 18 3.75 17.6625 3.75 17.25V15.75H4.125C5.57344 15.75 6.75 14.5734 6.75 13.125C6.75 11.6766 5.57344 10.5 4.125 10.5H3ZM7.5 17.25C7.5 17.6625 7.8375 18 8.25 18H9.375C10.6172 18 11.625 16.9922 11.625 15.75V12.75C11.625 11.5078 10.6172 10.5 9.375 10.5H8.25C7.8375 10.5 7.5 10.8375 7.5 11.25V17.25ZM13.5 10.5C13.0875 10.5 12.75 10.8375 12.75 11.25V17.25C12.75 17.6625 13.0875 18 13.5 18C13.9125 18 14.25 17.6625 14.25 17.25V15H15.75C16.1625 15 16.5 14.6625 16.5 14.25C16.5 13.8375 16.1625 13.5 15.75 13.5H14.25V12H15.75C16.1625 12 16.5 11.6625 16.5 11.25C16.5 10.8375 16.1625 10.5 15.75 10.5H13.5ZM12 0L18 6H12V0Z" fill="#C04242"/>
            </svg>
            <p>
              <Link href="/resume.pdf"><a>Download resume</a></Link>
              <svg width="100%" height="4" viewBox="0 0 109 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="109" y="2" width="109" height="1.99999" transform="rotate(-180 109 2)" fill="url(#paint0_linear_2_130)"/>
                <defs>
                <linearGradient id="paint0_linear_2_130" x1="109" y1="2" x2="218" y2="1.99998" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3BA0FD"/>
                <stop offset="1" stopColor="#BC2FFF"/>
                </linearGradient>
                </defs>
                </svg>
            </p>
          </div>
        </header>
        <main className="mt-9">
          <div>
            <h2 className="font-black text-xl">Recent work</h2>
            <p>Two of my favorite recent projects with live site and source code</p>

            <div className="card border-purple-primary mt-5 flex flex-row gap-5">
              <div className="self-center">
                <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="82" height="82" rx="19" fill="url(#paint0_linear_0_1)"/>
                <path d="M40.5 17C26.9676 17 16 27.9676 16 41.5C16 55.0324 26.9676 66 40.5 66C54.0324 66 65 55.0324 65 41.5C65 27.9676 54.0324 17 40.5 17ZM23.7252 41.5H23.6208C22.752 41.5 22.0513 40.7333 22.1317 39.8405C22.9251 30.9727 30.0205 23.8964 38.9018 23.1307C39.7631 23.0561 40.5 23.771 40.5 24.6649C40.5 25.464 39.9052 26.1272 39.1343 26.1952C31.7623 26.8479 25.867 32.724 25.2019 40.1027C25.1301 40.8875 24.4956 41.5 23.7252 41.5ZM40.5 50.6014C35.4258 50.6014 31.3125 46.4861 31.3125 41.5C31.3125 36.5139 35.4258 32.3125 40.5 32.3125C45.5742 32.3125 49.6875 36.4277 49.6875 41.5C49.6875 46.5723 45.5723 50.6014 40.5 50.6014ZM40.5 38.4375C38.8061 38.4375 37.4375 39.7965 37.4375 41.5C37.4375 43.2035 38.8061 44.5625 40.5 44.5625C42.1939 44.5625 43.5625 43.1987 43.5625 41.5C43.5625 39.8013 42.1939 38.4375 40.5 38.4375Z" fill="white"/>
                <defs>
                <linearGradient id="paint0_linear_0_1" x1="41" y1="0" x2="41" y2="82" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C480F9"/>
                <stop offset="1" stopColor="#B044E2"/>
                </linearGradient>
                </defs>
                </svg>
              </div>
              <div>
              <h3 className="text-xl">Streamy</h3>
              <p className="text-xs">Subscriber exclusive music service serving thousands of users</p>
              <p className="font-bold text-sm mt-2">
              Built with React / NextJs / Redux / Firebase
              </p>
              </div>
            </div>

            <div className="card border-blue-primary mt-5 flex flex-row gap-5">
              <div className="self-center">
                <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="82" height="82" rx="19" fill="url(#paint0_linear_0_2)"/>
                <path d="M41 64.119V19.3155" stroke="white" strokeWidth="4"/>
                <path d="M53.9524 29.6545H28.0476V55.5019H53.9524V29.6545Z" stroke="white" strokeWidth="4"/>
                <defs>
                <linearGradient id="paint0_linear_0_2" x1="41" y1="0" x2="41" y2="82" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3BA0FD"/>
                <stop offset="1" stopColor="#2084E1"/>
                </linearGradient>
                </defs>
                </svg>

              </div>
              <div>
              <h3 className="text-xl">Sound Splits</h3>
              <p className="text-xs">Royalty accounting SaaS for labels and publishers</p>
              <p className="font-bold text-sm mt-2">
              Built with React / NextJs / Redux / Tailwind / Django
              </p>
              </div>
            </div>


          </div>
        </main>
      </div>
  )
}
