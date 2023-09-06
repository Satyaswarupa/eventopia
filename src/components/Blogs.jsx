import { Divider, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

const Blogs = () => {
  return (
    <div className="blg">
      <UnorderedList>
        <ListItem className="list">
          <h2>Cold Pyro </h2>
          <p>
            This category would focus on explaining the science, history, and
            types of cold pyro effects. It's a great way to educate your
            audience about the uniqueness of your products.
          </p>
        </ListItem>
        <Divider />
        <ListItem className="list">
          <h2>Event Inspiration</h2>
          <p>
            Share stories and ideas about how cold pyro can elevate various
            events. Provide tips and inspiration for using your products in
            weddings, birthday parties, ring ceremonies, and more.
          </p>
        </ListItem>
        <Divider />
        <ListItem className="list">
          <h2>Behind the Scenes</h2>
          <p>
            Take your readers behind the scenes of your business. Discuss the
            process of creating cold pyro effects, safety measures, and the art
            of pyrotechnic design.
          </p>
        </ListItem>
        <Divider />
        <ListItem className="list">
          <h2>Collaborations</h2>
          <p>
            Highlight your collaborations with popular events and pop culture.
            Showcase how your cold pyro effects have added excitement and charm
            to these events.
          </p>
        </ListItem>
      </UnorderedList>
    </div>
  );
};

export default Blogs;
