import { Html, Head, Main, NextScript, About } from "next/document";
import { NextSeo } from "next-seo";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <title>{`The Kindness Campaign News`}</title>
          <meta name="description" content="The Kindness Campaign News" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={'https://kindness-omega.vercel.app/'} />
          <meta property="og:title" content={`The Kindness Campaign News`} />
          <meta property="og:description" content={`Website description`} />
          <meta property="og:image" content={'https://kindness-omega.vercel.app/images/logo.png'} />

          
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="canonical"
            href={'https://kindness-omega.vercel.app/'}
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
