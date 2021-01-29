import { PageTransition } from 'next-page-transitions'


import { SWRConfig } from 'swr'
import {getFetch} from '../lib/ax-fetch'

import 'react-dropzone-uploader/dist/styles.css'
import "../public/vendors/styles/icon-font.min.css"

import "../public/css/feather.css"
import "../public/css/select2.css"
import "../public/css/app-light.css"
import "../public/vendors/styles/core.css"
import "../public/vendors/styles/style.css"  
import "antd/dist/antd.css"

import "../category.css"

if (typeof window !== "undefined") {
  require("jquery");
  require("popper.js");
  require("bootstrap");
}



import Loader from '../components/Loader'

const TIMEOUT = 400

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageTransition
        timeout={TIMEOUT}
        classNames="page-transition"
        loadingComponent={<Loader />}
        loadingDelay={500}
        loadingTimeout={{
          enter: TIMEOUT,
          exit: 0,
        }}
        loadingClassNames="loading-indicator"
      >
         <SWRConfig
      value={{
        fetcher: getFetch,
        onError: (err) => {
          console.error(err)
        },
      }}>
      <Component {...pageProps} />
    </SWRConfig>
      </PageTransition>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }
        .loading-indicator-appear,
        .loading-indicator-enter {
          opacity: 0;
        }
        .loading-indicator-appear-active,
        .loading-indicator-enter-active {
          opacity: 1;
          transition: opacity ${TIMEOUT}ms;
        }
      `}</style>
    </>
  )
}









