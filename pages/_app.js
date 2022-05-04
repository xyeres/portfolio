import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title>Stream music from United Pursuit and friends</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@xyeres" />
      <meta name="twitter:title" content="Michael Carr, Front End Developer" />
      <meta name="twitter:description" content="Empathic developer wielding the web for good." />
      <meta name="twitter:image" content="https://github.com/xyeres/portfolio/raw/main/public/screenshot.png" />

      <meta property="og:title" content="Michael Carr, Front End Developer" />
      <meta property="og:site_name" content="Portfolio and ways to connect with me" />
      <meta property="og:description" content="Empathic developer wielding the web for good." />
      <meta property="og:type" content="object" />
      <meta property="og:url" content="https://michaelcoder.dev" />
      <meta property="og:image" content="https://github.com/xyeres/portfolio/raw/main/public/screenshot-sm.jpg" />
      <meta property="og:image:width" content="620" />
      <meta property="og:image:height" content="400" />
      <meta property="og:image:alt" content="Michael Carr website" />

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
