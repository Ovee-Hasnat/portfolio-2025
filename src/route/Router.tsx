import { Layout } from "@/layout/Layout";
import About from "@/pages/about";
import CaseStudy from "@/pages/case-study";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import NotFound from "@/pages/notFound";
import Projects from "@/pages/projects";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/projects",
    element: (
      <Layout>
        <Projects />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/case-study/:slug",
    element: (
      <Layout>
        <CaseStudy />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
]);
