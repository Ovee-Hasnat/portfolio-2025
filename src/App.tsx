import { ReactLenis } from "lenis/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./route/Router";
import { Toaster } from "./components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <ReactLenis root options={{ wheelMultiplier: 1.2 }}>
      <RouterProvider router={router} />
      <Toaster />
      <Analytics />
      <SpeedInsights />
    </ReactLenis>
  );
}
export default App;
