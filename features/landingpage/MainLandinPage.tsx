import {
  ThemeToggleButton1,
  ThemeToggleButton2,
  ThemeToggleButton3,
  ThemeToggleButton4,
} from "@/components/ui/skiper-ui/skiper4";
import { useThemeToggle } from "@/components/ui/skiper-ui/skiper26";
import React from "react";

import Hero from "./components/Hero";
import { CrowdCanvas } from "@/components/ui/skiper-ui/skiper39";
import Scroll3DText from "./components/Scroll3DText";
import { Skiper28 } from "@/components/ui/skiper-ui/skiper28";
import { SpringMouseFollow } from "@/components/ui/skiper-ui/skiper61";
import { Skiper62 } from "@/components/ui/skiper-ui/skiper62";
import ImageCard from "./components/ImageCard";
import GridCarousel from "./components/GridCarousel";
import FavSongs from "./components/FavSongs";
import SuffelCard from "./components/SuffelCard";
import HowerExpand from "./components/HowerExpand";
import MyDetails from "./components/MyDetails";
import Contributions from "./components/Contributions";
import XCards from "./components/XCards";

const MainLandinPage = () => {
  return (
    <div className=" h-screen w-screen  ">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <GridCarousel />
      </section>
      {/* <section>
    <ImageCard/>
   </section> */}
      <section id="blog">
        <FavSongs />
      </section>
      <section>
        <SuffelCard />
      </section>
      {/* <section>
    <HowerExpand/>
   </section> */}
      <section id="stats">
        <MyDetails />
      </section>
      <section>
        <Contributions />
      </section>
      <section>
        <XCards />
      </section>

    </div>
  );
};

export default MainLandinPage;
