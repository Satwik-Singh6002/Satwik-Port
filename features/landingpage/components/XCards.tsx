import SocialButton from "@/components/kokonutui/social-button";
import React from "react";

const XCards = () => {
  return (
    <div
      style={{
        background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
      }}
      className=" flex flex-col ">
      <div className=" p-10 flex justify-center ">
        <SocialButton />
      </div>
    </div>
  );
};

export default XCards;
