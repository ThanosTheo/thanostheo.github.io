import React, { lazy, Suspense } from 'react';

import Loader from '../../components/Loader/Loader';

import styles from './Main.module.scss';

/* COMPONETS */
const Hero = lazy(() => import('../../components/Hero/Hero'));
const AboutMe = lazy(() => import('../../components/AboutMe/AboutMe'));

export default function Index() {
  return (
    <Suspense fallback={<Loader />}>
      <div className={styles.container}>
        <Loader />
        <Hero />
        <AboutMe />
      </div>
    </Suspense>
  );
}
