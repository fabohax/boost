import React from 'react';
import Image from 'next/image';
import '../app/globals.css';
import { SessionProvider } from "next-auth/react"

// Import the CSS files for the Google Fonts
import 'typeface-quicksand';
import 'typeface-roboto';
import 'typeface-roboto-mono';

function App({ Component, pageProps: { session, ...pageProps } }) {
  
  return (
    <>
        <SessionProvider session={session}>
          <stripe><Image src="/stripe.svg" height={3} width={1200} alt="stripe"></Image></stripe>
          <Component {...pageProps} />
        </SessionProvider>
    </>
  );
}
  
export default App;