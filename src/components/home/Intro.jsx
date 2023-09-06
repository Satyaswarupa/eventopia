import React from "react";
import { Box, AspectRatio } from "@chakra-ui/react";

const Intro = () => {
  return (
    <div className="intro">
      <h3 className="hed">who we are</h3>
      <p className="ped">
        At <span>EVENTOPIA</span>, we take immense pride in bringing you the future of
        celebrations with our innovative line of cold pyro pyro guns. Special
        moments deserve to be lit up in a unique and enchanting way, and that's
        where our cutting-edge pyrotechnics come into play. Whether it's a
        magical wedding, a heartwarming engagement ceremony, a joyous birthday
        party, or any occasion that calls for an unforgettable spark, our cold
        pyro pyro guns add an element of surprise and delight like never before.
        We're dedicated to transforming ordinary events into extraordinary
        memories, one spectacular burst of icy enchantment at a time. Join us in
        redefining celebration experiences with the elegance, safety, and thrill
        of our revolutionary cold pyro pyro guns.
      </p>
      <AspectRatio maxH={["150px","300px"]} maxW={["300px","500px"]} ratio={1} ml={["12%","33%"]}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/ohS06vkHjLE?si=dramB-b6Zqu81T6I"
          allowFullScreen
        />
      </AspectRatio>
    </div>
  );
};

export default Intro;
