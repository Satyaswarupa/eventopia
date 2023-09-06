import React from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <nav>
      <div className="logo">
        <img
          src="https://i.ibb.co/F8HFVQV/Screenshot-7-removebg-preview.png"
          alt="eventopia"
        />
      </div>
      <div className="menu">
        <Button colorScheme="teal" onClick={onOpen}>
          <RiMenu3Fill />
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay backdropFilter={"blur(3px)"} />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth={"2px"} textAlign={'center'}>EVENTOPIA</DrawerHeader>

            <DrawerBody>
              <VStack gap={'20px'}>
                <Link to={"/"}>
                  <Button onClick={onClose} variant={'ghost'} colorScheme="purple" fontSize={'1.1rem'}>
                    Home
                  </Button>
                </Link>

                <Link to={"/blogs"}>
                  <Button onClick={onClose} variant={'ghost'} colorScheme="purple" fontSize={'1.1rem'}>
                    Blogs
                  </Button>
                </Link>

                <Link to={"/ourProduct"}>
                  <Button onClick={onClose} variant={'ghost'} colorScheme="purple" fontSize={'1.1rem'}>
                    Our Product
                  </Button>
                </Link>

                <Link to={"/bookNow"}>
                  <Button onClick={onClose} variant={'ghost'} colorScheme="purple" fontSize={'1.1rem'}>
                    Book Now
                  </Button>
                </Link>

              </VStack>
            </DrawerBody>

            <DrawerFooter bgColor={'whiteAlpha.900'}>
              <HStack gap={'20px'} >
              <Button colorScheme="green" fontSize={'1.3rem'} mr={'40px'} ><BsWhatsapp /></Button>
              <Button colorScheme="purple" fontSize={'1.3rem'} mr={'70px'} ><BsInstagram /></Button>
              </HStack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Header;
