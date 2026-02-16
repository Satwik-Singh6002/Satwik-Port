"use client";

import React, { lazy, Suspense } from "react";
import Hero from "./components/Hero";
const LazyGridCarousel = lazy(() =>
  import("./components/GridCarousel").then((m) => ({ default: m.default }))
);
const LazyFavSongs = lazy(() => import("./components/FavSongs"));
const LazySuffelCard = lazy(() => import("./components/SuffelCard"));
const LazyMyDetails = lazy(() => import("./components/MyDetails"));
const LazyContributions = lazy(() => import("./components/Contributions"));
const LazyXCards = lazy(() => import("./components/XCards"));

function SectionFallback() {
  return <div className="min-h-[200px] w-full" aria-hidden="true" />;
}

const MainLandinPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <Suspense fallback={<SectionFallback />}>
          <LazyGridCarousel />
        </Suspense>
      </section>
      {/* <section>
    <ImageCard/>
   </section> */}
      <section id="blog">
        <Suspense fallback={<SectionFallback />}>
          <LazyFavSongs />
        </Suspense>
      </section>
      <section>
        <Suspense fallback={<SectionFallback />}>
          <LazySuffelCard />
        </Suspense>
      </section>
      {/* <section>
    <HowerExpand/>
   </section> */}
      <section id="stats">
        <Suspense fallback={<SectionFallback />}>
          <LazyMyDetails />
        </Suspense>
      </section>
      <section>
        <Suspense fallback={<SectionFallback />}>
          <LazyContributions />
        </Suspense>
      </section>
      <section>
        <Suspense fallback={<SectionFallback />}>
          <LazyXCards />
        </Suspense>
      </section>

    </div>
  );
};

export default MainLandinPage;
