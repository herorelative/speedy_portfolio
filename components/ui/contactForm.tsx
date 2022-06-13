import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Box>
      <FormControl mb={6}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          id="name"
          size="lg"
          type="text"
          variant="filled"
          placeholder="enter your name"
        />
      </FormControl>
      <FormControl mb={6}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          size="lg"
          variant="filled"
          placeholder="enter your email address"
        />
      </FormControl>
      <FormControl mb={6}>
        <FormLabel htmlFor="subject">Subject</FormLabel>
        <Input
          id="subject"
          type="text"
          size="lg"
          variant="filled"
          placeholder="enter your message subject"
        />
      </FormControl>
      <FormControl mb={6}>
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea
          id="message"
          variant="filled"
          placeholder="enter your message"
          size="lg"
          resize="vertical"
          rows={5}
        />
      </FormControl>
      <Button
        mb={8}
        size="lg"
        colorScheme="orange"
        // isLoading={props.isSubmitting}
        type="submit"
      >
        Submit
      </Button>
    </Box>
  );
};
export default ContactForm;
