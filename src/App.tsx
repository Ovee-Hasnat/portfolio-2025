import { ReactLenis } from "lenis/react";
import Hero from "./components/home/hero";
import Experience from "./components/experience/experience";

function App() {
  return (
    <ReactLenis root options={{ duration: 1.5, wheelMultiplier: 1.5 }}>
      <Hero />
      <Experience />
    </ReactLenis>
  );
}

export default App;
