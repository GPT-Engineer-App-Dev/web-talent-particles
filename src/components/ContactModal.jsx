import { useState } from "react";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react";

const ContactModal = ({ developer }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Contact</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact {developer.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired mb={4}>
                <FormLabel>Name</FormLabel>
                <Input type="text" value={name} onChange={(event) => setName(event.target.value)} />
              </FormControl>
              <FormControl isRequired mb={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
              </FormControl>
              <FormControl isRequired mb={4}>
                <FormLabel>Message</FormLabel>
                <Textarea value={message} onChange={(event) => setMessage(event.target.value)} />
              </FormControl>
              <Button type="submit" colorScheme="blue" mr={3}>
                Send
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactModal;
