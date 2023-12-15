import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState } from "react";
import { Box, Image } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export function ImageSlider({ imageList }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModalSlider = (imgIndex) => {
    setCurrentImageIndex(imgIndex);
    setIsModalOpen(true);
  };
  const renderImages = () => {
    return imageList.map((imageLink, i) => {
      return (
        <Image
          onClick={() => openModalSlider(i)}
          src={imageLink}
          boxShadow="xl"
          borderRadius="xl"
          key={imageLink}
        />
      );
    });
  };
  const slider = (
    <Slide
      defaultIndex={currentImageIndex}
      infinite={false}
      arrows={imageList.length > 1}
      autoplay={false}
    >
      {renderImages()}
    </Slide>
  );
  const modalSlider = (
    <Modal
      size="6xl"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow={"none"}>
        <ModalCloseButton zIndex={1} bg="white" />
        <ModalBody>{slider}</ModalBody>
      </ModalContent>
    </Modal>
  );
  return (
    <>
      <Box cursor="pointer" w={350}>{slider}</Box>
      {modalSlider}
    </>
  );
}
