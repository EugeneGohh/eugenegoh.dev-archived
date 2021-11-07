/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useQuery, gql } from "@apollo/client";
import {
  CircularProgress,
  Alert,
  AlertTitle,
  Stack,
  Box,
  Center,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { RoughNotation } from "react-rough-notation";

const GET_BLOGS = gql`
  query Query($username: String!) {
    user(username: $username) {
      publication {
        posts {
          _id
          title
          brief
          type
          coverImage
          slug
        }
      }
    }
  }
`;

function BlogSection() {
  const { data, loading, error } = useQuery(GET_BLOGS, {
    variables: { username: "eugenegoh" },
    context: { clientName: "endpoint1" },
    ssr: true,
  });

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress size={45} thickness={4.0} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }} m={3}>
        <Stack sx={{ width: "70%" }} spacing={2}>
          <Alert severity="error">
            <AlertTitle>{`${error}`}</AlertTitle>
            <strong>Unable to retrieve blogs.</strong>
          </Alert>
        </Stack>
      </Box>
    );
  }

  return (
    <div className="container px-5 py-5 mx-auto">
      <div className="flex flex-wrap w-full mb-8">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Recent blogs
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      </div>

      <SimpleGrid columns={[1, 3]} spacing={"40px"}>
        {data.user.publication.posts.map(
          (blog: {
            _id: React.Key | null | undefined;
            coverImage: string | undefined;
            type: string;
            title:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            brief:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            slug: any;
          }) => (
            <Center py={6} key={blog._id}>
              <Box
                maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
              >
                <Stack>
                  <Text
                    color={"green.500"}
                    textTransform={"uppercase"}
                    fontWeight={800}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    Blog
                  </Text>
                  <Heading
                    color={useColorModeValue("gray.700", "white")}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    <RoughNotation
                      type="underline"
                      color="#392F5A"
                      show={true}
                      multiline={false}
                      padding={5}
                      iterations={1}
                      animationDuration={1500}
                    >
                      {blog.title}
                    </RoughNotation>
                  </Heading>
                  <Text color={"gray.500"}>{blog.brief}</Text>
                </Stack>
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                  {/* <Avatar
                    src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                    alt={"Author"}
                  /> */}
                  <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                    <Text fontWeight={600}>Eugene Goh</Text>
                    {/* <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text> */}

                    <RoughNotation
                      type="highlight"
                      color="#FF9505"
                      show={true}
                      multiline={false}
                      padding={[0, 3]}
                      iterations={1}
                      animationDuration={1500}
                    >
                      <a
                        href={`https://eugenegoh.hashnode.dev/${blog.slug}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                      </a>
                    </RoughNotation>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          )
        )}
      </SimpleGrid>
    </div>
  );
}

export default BlogSection;
