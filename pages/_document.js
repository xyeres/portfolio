import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/images/favicon.ico" />
          <meta name="description" content="Michael Carr, Front End Developer, see my recent projects and find ways to connect with me." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument