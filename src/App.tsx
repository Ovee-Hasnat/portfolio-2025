import { ReactLenis } from "lenis/react";
import Home from "./pages/home";
import About from "./pages/about";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/navbar/footer";
import NotFound from "./pages/notFound";
import Contact from "./pages/contact";
import { Toaster } from "@/components/ui/toaster";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <ReactLenis root options={{ duration: 1.5, wheelMultiplier: 1.1 }}>
        <RouterProvider router={router} />
        <Footer />
        <Toaster />
      </ReactLenis>
    </>
  );
}

export default App;
