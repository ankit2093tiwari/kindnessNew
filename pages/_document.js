import { Html, Head, Main, NextScript, About } from "next/document";
import { NextSeo } from "next-seo";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta
          name="og:title"
          content="I am Jhone. Full Stack Developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="my_website_link" />
        <meta property="og:site_name" content="my_website_name" />
        <meta
          property="og:description"
          content="This is my personal blog website."
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600,300" rel="stylesheet" type="text/css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.cdnfonts.com/css/myriad-pro"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/images/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
