import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BlogSection from "../components/BlogSection";
import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../theme";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eugene Goh</title>
        <meta name="description" content="Eugene Goh Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Header />
        <Hero />
        <BlogSection />
        <ProjectSection />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
