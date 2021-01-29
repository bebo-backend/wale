import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>


 
          <style>{`
            .page {
              height: 100vh;
            }
          `}</style>
        </Head>
        <body class="horizontal light  ">
    <div class="wrapper">
          <Main />
          <NextScript />
          </div>

        
        </body>
      </Html>
    )
  }
}
