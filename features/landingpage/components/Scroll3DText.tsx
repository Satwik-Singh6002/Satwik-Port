import { Skiper28 } from "@/components/ui/skiper-ui/skiper28";
import React from "react";


const Scroll3DText = () => {
  const array = ["SATWIK", "DEV", "AI", "SEO", "UI/UX", "TECH"]
  let text = "Satwik Singh is a motivated and technically skilled computer engineering student with hands-on experience in web development and AI projects. He possesses strong foundational knowledge in front-end technologies, Python programming, and NLP, supported by real-world internship experience. Known for his collaborative mindset, clear communication, and eagerness to tackle new challenges, Satwik is well-positioned to contribute to innovative tech projects and grow within dynamic development teams."
  return (
    <div className=" bg-amber-700 ">
      <Skiper28 text={text} arr={array} />


    </div>
  );
};

export default Scroll3DText;
