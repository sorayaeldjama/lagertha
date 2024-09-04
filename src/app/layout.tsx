import ReduxProvider from "@/components/ReduxProvider";
import "@/styles/globals.scss";
import "@/styles/reset.scss";
import type { Metadata } from "next";
import {extendTheme,CssVarsProvider } from '@mui/joy/styles'

import { Inter } from "next/font/google";
import { CssBaseline, GlobalStyles,  } from "@mui/joy";
import Script from "next/script";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
const title = process.env.NEXT_PUBLIC_LAYOUT_TITLE

export const metadata: Metadata = {
  title:  title || "",
  icons: {
    icon: '/image/favicon.ico'
  },
  description:
    "Discover secure and efficient file transferring with our Transfer service with End-to-End Encryption (E2EE). Our platform ensures the highest level of security for your data, offering peace of mind with advanced encryption technology. Experience seamless, protected file sharing, ideal for sensitive information, without sacrificing speed or convenience.  LAGERTHA Transfer with E2EE – the smart choice for safe, reliable, and confidential file sharing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <html lang="en">
      <Head>
        <link rel="shortcut" href="/image/favicon.ico"/>
      </Head>
      <body className={inter.className}>
        <Script
          id="matomo"
          dangerouslySetInnerHTML={{
            __html: `var _paq = window._paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="//matomo.lagertha.tech/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '3']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();`,
          }}
        />
        
          <GlobalStyles
            styles={{
              ":root": {
                "--Collapsed-breakpoint": "769px", // form will stretch when viewport is below `769px`
                "--Cover-width": "50vw", // must be `vw` only
                "--Form-maxWidth": "800px",
                "--Transition-duration": "0.4s", // set to `none` to disable transition
              },
            }}
          />
          <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
