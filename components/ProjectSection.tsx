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

const GET_REPOS = gql`
  query QueryRepos(
    $login: String!
    $first: Int
    $orderBy: RepositoryOrder
    $isFork: Boolean
  ) {
    user(login: $login) {
      repositories(first: $first, orderBy: $orderBy, isFork: $isFork) {
        nodes {
          id
          name
          url
          description
          visibility
        }
      }
    }
  }
`;

function ProjectSection() {
  const { data, loading, error } = useQuery(GET_REPOS, {
    variables: {
      login: "eugenegohh",
      first: 3,
      orderBy: {
        field: "UPDATED_AT",
        direction: "DESC",
      },
      isFork: false,
    },
    context: { clientName: "endpoint2" },
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
            <strong>Unable to retrieve repositories.</strong>
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
            Recent projects
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      </div>

      <SimpleGrid columns={[1, 3]} spacing={"40px"}>
        {data.user.repositories.nodes.map((project: any) => (
          <Center py={6} key={project.id}>
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
                  Project
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
                    padding={[0, 3]}
                    iterations={1}
                    animationDuration={1500}
                  >
                    {project.name}
                  </RoughNotation>
                </Heading>
                <Text color={"gray.500"}>{project.description}</Text>
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
                    <a href={project.url} target="_blank" rel="noreferrer">
                      Learn More
                    </a>
                  </RoughNotation>
                </Stack>
              </Stack>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default ProjectSection;
