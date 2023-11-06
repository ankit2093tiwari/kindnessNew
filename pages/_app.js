import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/store";
import "@/styles/globals.css";
import "@/styles/eventpages.css";
import "@/styles/Home.module.css";
import "@/styles/admin.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { useEffect, useState } from "react";

let persistor = persistStore(store);

export default function MyApp({ Component, pageProps }) {
  const [data, setData] = useState("");

  useEffect(() => {
    const newsData = localStorage.getItem("N-d");
    if (newsData) {
      setData(newsData);
      localStorage.removeItem("N-d");
    }
  });
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kindness Campaign</title>
        <meta name="description" content='Kindness Campaign' />
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

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
