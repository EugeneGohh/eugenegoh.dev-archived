import React from "react";
import { useQuery, gql } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";

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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
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
    <div className="container px-5 py-20 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Recent blogs
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      </div>

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
          <section className="text-gray-600 body-font" key={blog._id}>
            <div className="container px-5 py-5 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <Image
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={blog.coverImage}
                      alt="Picture of the author"
                      width={720}
                      height={400}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {blog.type.toUpperCase()}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">
                        {blog.title}
                      </h1>
                      <p className="leading-relaxed mb-3 dark:text-white">
                        {blog.brief}
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <Link
                          href={`https://eugenegoh.hashnode.dev/${blog.slug}`}
                        >
                          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            {" "}
                            Learn More
                          </a>
                        </Link>
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      )}
    </div>
  );
}

export default BlogSection;
