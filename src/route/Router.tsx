import { Layout } from "@/layout/Layout";
import Home from "@/pages/home";
import React from "react";
import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";

const aboutPage = lazy(() => import("@/pages/about"));
const projectsPage = lazy(() => import("@/pages/projects"));
const contactPage = lazy(() => import("@/pages/contact"));
const caseStudyPage = lazy(() => import("@/pages/case-study"));
const notFoundPage = lazy(() => import("@/pages/notFound"));

const routeFallback = (
  <div className="min-h-[50vh] flex items-center justify-center text-zinc-600 text-sm">
    Loading...
  </div>
);

const withLayout = (page: ReactNode) => (
  <Layout>
    <Suspense fallback={routeFallback}>{page}</Suspense>
  </Layout>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: withLayout(<Home />),
  },
  {
    path: "/about",
    element: withLayout(React.createElement(aboutPage)),
  },
  {
    path: "/projects",
    element: withLayout(React.createElement(projectsPage)),
  },
  {
    path: "/contact",
    element: withLayout(React.createElement(contactPage)),
  },
  {
    path: "/case-study/:slug",
    element: withLayout(React.createElement(caseStudyPage)),
  },
  {
    path: "*",
    element: withLayout(React.createElement(notFoundPage)),
  },
]);
