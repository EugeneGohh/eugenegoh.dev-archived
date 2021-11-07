import React from "react";
import {
  Box,
  Container,
  Divider,
  Link,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={12}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "65fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={3}>
            <Box>
              <Heading mb={2}>Get In Touch</Heading>
            </Box>
            <Divider size="sm" />
            <Text fontSize={"sm"}>
              Designed and Built by <b>Eugene Goh</b>
            </Text>
          </Stack>

          <Stack align={"flex-start"}>
            <Link href={"https://twitter.com/_eugenegoh"} isExternal>
              Twitter
            </Link>
            <Link href={"https://github.com/EugeneGohh"} isExternal>
              GitHub
            </Link>
            <Link href={"https://www.instagram.com/eugenegoh.dev/"} isExternal>
              Instagram
            </Link>
            <Link href={"https://www.linkedin.com/in/eugenegohh/"} isExternal>
              LinkedIn
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Footer;
