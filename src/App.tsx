import { ReactLenis } from "lenis/react";
import Home from "./pages/home";
import About from "./pages/about/about";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/navbar/footer";
import NotFound from "./pages/notFound";
import Contact from "./pages/contact";

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
    <ReactLenis root options={{ duration: 1.5, wheelMultiplier: 1.5 }}>
      <RouterProvider router={router} />
      <Footer />
    </ReactLenis>
  );
}

export default App;
