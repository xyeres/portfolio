import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="m-6 mt-10">
      <header className="text-gray-500 flex flex-col items-center">
        <div className="rounded-xl border-solid border-b-8 border-b-teal-primary">
          <Image
            alt="Michael Carr"
            src={'/avatar.jpg'}
            width={180}
            height={180}
            className="rounded-lg"
          />
        </div>
        <h1 className="text-teal-primary text-2xl font-black mt-4">Michael Carr</h1>
        <h2 className="text-gray-400 text-lg">Front End Developer</h2>
        <p className="text-center mt-2">
          Empathic creative wielding the web for good. A Seattle native, when not coding you&apos;ll find me cycling toward sunlight.
        </p>
        <div className="flex flex-row gap-2 mt-5">
          <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.125 14.25H3.75V12H4.125C4.74844 12 5.25 12.5016 5.25 13.125C5.25 13.7484 4.74844 14.25 4.125 14.25ZM9 12H9.375C9.7875 12 10.125 12.3375 10.125 12.75V15.75C10.125 16.1625 9.7875 16.5 9.375 16.5H9V12ZM10.5 0V6C10.5 6.82969 11.1703 7.5 12 7.5H18V21C18 22.6547 16.6547 24 15 24H3C1.34297 24 0 22.6547 0 21V3C0 1.34297 1.34297 0 3 0H10.5ZM3 10.5C2.58562 10.5 2.25 10.8375 2.25 11.25V17.25C2.25 17.6625 2.58562 18 3 18C3.41438 18 3.75 17.6625 3.75 17.25V15.75H4.125C5.57344 15.75 6.75 14.5734 6.75 13.125C6.75 11.6766 5.57344 10.5 4.125 10.5H3ZM7.5 17.25C7.5 17.6625 7.8375 18 8.25 18H9.375C10.6172 18 11.625 16.9922 11.625 15.75V12.75C11.625 11.5078 10.6172 10.5 9.375 10.5H8.25C7.8375 10.5 7.5 10.8375 7.5 11.25V17.25ZM13.5 10.5C13.0875 10.5 12.75 10.8375 12.75 11.25V17.25C12.75 17.6625 13.0875 18 13.5 18C13.9125 18 14.25 17.6625 14.25 17.25V15H15.75C16.1625 15 16.5 14.6625 16.5 14.25C16.5 13.8375 16.1625 13.5 15.75 13.5H14.25V12H15.75C16.1625 12 16.5 11.6625 16.5 11.25C16.5 10.8375 16.1625 10.5 15.75 10.5H13.5ZM12 0L18 6H12V0Z" fill="#C04242" />
          </svg>
          <p className="flex flex-col items-center">
            <Link href="/resume.pdf"><a>Download resume</a></Link>
            <svg width="100%" height="4" viewBox="0 0 109 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="109" y="2" width="109" height="1.99999" transform="rotate(-180 109 2)" fill="url(#paint0_linear_2_130)" />
              <defs>
                <linearGradient id="paint0_linear_2_130" x1="109" y1="2" x2="218" y2="1.99998" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3BA0FD" />
                  <stop offset="1" stopColor="#BC2FFF" />
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
                <rect width="82" height="82" rx="19" fill="url(#paint0_linear_0_1)" />
                <path d="M40.5 17C26.9676 17 16 27.9676 16 41.5C16 55.0324 26.9676 66 40.5 66C54.0324 66 65 55.0324 65 41.5C65 27.9676 54.0324 17 40.5 17ZM23.7252 41.5H23.6208C22.752 41.5 22.0513 40.7333 22.1317 39.8405C22.9251 30.9727 30.0205 23.8964 38.9018 23.1307C39.7631 23.0561 40.5 23.771 40.5 24.6649C40.5 25.464 39.9052 26.1272 39.1343 26.1952C31.7623 26.8479 25.867 32.724 25.2019 40.1027C25.1301 40.8875 24.4956 41.5 23.7252 41.5ZM40.5 50.6014C35.4258 50.6014 31.3125 46.4861 31.3125 41.5C31.3125 36.5139 35.4258 32.3125 40.5 32.3125C45.5742 32.3125 49.6875 36.4277 49.6875 41.5C49.6875 46.5723 45.5723 50.6014 40.5 50.6014ZM40.5 38.4375C38.8061 38.4375 37.4375 39.7965 37.4375 41.5C37.4375 43.2035 38.8061 44.5625 40.5 44.5625C42.1939 44.5625 43.5625 43.1987 43.5625 41.5C43.5625 39.8013 42.1939 38.4375 40.5 38.4375Z" fill="white" />
                <defs>
                  <linearGradient id="paint0_linear_0_1" x1="41" y1="0" x2="41" y2="82" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C480F9" />
                    <stop offset="1" stopColor="#B044E2" />
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
              <p className="font-bold text-sm mt-2">
                Built with Tailwind / React / NextJs / Redux / Django
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <h2 className="font-black text-xl">Resume</h2>
          <p>Grab a copy of my resume, and feel free to share it</p>
          <button className="mx-24 mt-3 flex flex-row gap-3 hover:border-b-0 hover:mt-4 transition-all border-b-4 border-b-blue-shadow bg-blue-secondary hover:bg-blue-shadow rounded-md text-white py-3 px-8">
            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2_91)">
                <path d="M3.66667 12.6667H3.33333V10.6667H3.66667C4.22083 10.6667 4.66667 11.1125 4.66667 11.6667C4.66667 12.2208 4.22083 12.6667 3.66667 12.6667ZM8 10.6667H8.33333C8.7 10.6667 9 10.9667 9 11.3333V14C9 14.3667 8.7 14.6667 8.33333 14.6667H8V10.6667ZM9.33333 0V5.33333C9.33333 6.07083 9.92917 6.66667 10.6667 6.66667H16V18.6667C16 20.1375 14.8042 21.3333 13.3333 21.3333H2.66667C1.19375 21.3333 0 20.1375 0 18.6667V2.66667C0 1.19375 1.19375 0 2.66667 0H9.33333ZM2.66667 9.33333C2.29833 9.33333 2 9.63333 2 10V15.3333C2 15.7 2.29833 16 2.66667 16C3.035 16 3.33333 15.7 3.33333 15.3333V14H3.66667C4.95417 14 6 12.9542 6 11.6667C6 10.3792 4.95417 9.33333 3.66667 9.33333H2.66667ZM6.66667 15.3333C6.66667 15.7 6.96667 16 7.33333 16H8.33333C9.4375 16 10.3333 15.1042 10.3333 14V11.3333C10.3333 10.2292 9.4375 9.33333 8.33333 9.33333H7.33333C6.96667 9.33333 6.66667 9.63333 6.66667 10V15.3333ZM12 9.33333C11.6333 9.33333 11.3333 9.63333 11.3333 10V15.3333C11.3333 15.7 11.6333 16 12 16C12.3667 16 12.6667 15.7 12.6667 15.3333V13.3333H14C14.3667 13.3333 14.6667 13.0333 14.6667 12.6667C14.6667 12.3 14.3667 12 14 12H12.6667V10.6667H14C14.3667 10.6667 14.6667 10.3667 14.6667 10C14.6667 9.63333 14.3667 9.33333 14 9.33333H12ZM10.6667 0L16 5.33333H10.6667V0Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_2_91">
                  <rect width="16" height="21.3333" fill="white" />
                </clipPath>
              </defs>
            </svg>

            Download resume
          </button>
        </div>
      </main>
    </div>
  )
}
