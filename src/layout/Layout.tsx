import Footer from "@/components/navbar/footer";
import PrimaryNav from "@/components/navbar/primaryNav";
import { AnimatePresence, motion } from "motion/react";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <PrimaryNav />
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
    <Footer />
  </>
);
