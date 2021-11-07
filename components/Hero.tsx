import React from "react";
import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "./Card";

function Hero() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
        <Stack spacing={6}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            About Me
          </Text>
          <Heading>Hi there, I am Eugene!</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            I love writing TypeScript/JavaScript, Next.js, Redux, GraphQL,
            Node.js, MongoDB, and PostgreSQL. I enjoy giving back to society by
            contributing to open source repositories on GitHub, writing blogs &
            organizing events on Codecademy Community sharing what I have
            learned. I am also one of the early contributors behind Codecademy
            Docs.
          </Text>
        </Stack>
        <Flex>
          <Card />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

export default Hero;
