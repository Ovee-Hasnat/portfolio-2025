import { ReactLenis } from "lenis/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./route/Router";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ReactLenis root options={{ duration: 1, wheelMultiplier: 1.2 }}>
      <RouterProvider router={router} />
      <Toaster />
    </ReactLenis>
  );
}
export default App;
