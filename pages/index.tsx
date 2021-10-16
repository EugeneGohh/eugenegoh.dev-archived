import type { NextPage } from "next";
import Divider from "@mui/material/Divider";

import Header from "../components/Header";
import Hero from "../components/Hero";
import BlogSection from "../components/BlogSection";
import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BlogSection />
      <ProjectSection />

      <Divider variant="middle" />
      <Footer />
    </div>
  );
};

export default Home;
