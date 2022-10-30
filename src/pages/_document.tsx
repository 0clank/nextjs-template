import React from "react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document(): React.ReactElement {
  return (
    <Html lang={"de"}>
      <Head>
        <meta charSet={"utf-8"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
