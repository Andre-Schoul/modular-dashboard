import React from 'react';
import { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';

import whyDidYouRender from '@welldone-software/why-did-you-render';

import '../styles/globals.scss';

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  whyDidYouRender(React);
}

const App = ({ Component, pageProps, router }: AppProps) => {

  const getLayout = (Component as any).getLayout || ((page: any) => page);

  //return <Component {...pageProps} />
  return getLayout(
    <AnimatePresence exitBeforeEnter>
      <motion.div 
        key={router.route}
        initial='pageInitial'
        animate='pageAnimate'
        exit='pageExit'
        variants={{
          pageInitial: {
            opacity: 0,
            transition: {
              duration: 0.4
            },
            x: -150
          },
          pageAnimate: {
            opacity: 1,
            transition: {
              duration: 0.4 
            },
            x: 0
          },
          pageExit: {
            opacity: 0,
            transition: {
              duration: 0.4 
            },
            x: 150
          }
        }}>
        <Component {...pageProps}></Component>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;