import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
// import ProfilePic from "../public/profile-pic.png";

function Card() {
  return (
    <Center py={2} px={12}>
      <Box
        maxW={"360px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={""}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 4,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          Eugene Goh
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          @eugenegoh
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Developer, Chapter Lead @codecademy, Content Creator @hashnode and
          Blockchain Nerd.{" "}
        </Text>

        <Stack mt={8} direction={"row"} spacing={4}>
          {/* <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
            Message
          </Button> */}
        </Stack>
      </Box>
    </Center>
  );
}

export default Card;
