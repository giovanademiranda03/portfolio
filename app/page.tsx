import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import dynamic from "next/dynamic";

const ClientOnlyComponent = dynamic(
  () => import("../components/ClientOnlyComponent"),
  { ssr: false }
);

export async function getStaticProps() {
  const res = await fetch("https://giovana-portfolio.vercel.app");
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60,
  };
}

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
        <ClientOnlyComponent />
      </div>
    </main>
  );
}
