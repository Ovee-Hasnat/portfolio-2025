import Footer from "@/components/navbar/footer";
import PrimaryNav from "@/components/navbar/primaryNav";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <PrimaryNav />
    {children}
    <Footer />
  </>
);
