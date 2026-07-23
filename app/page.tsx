import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionPositioning from "@/components/SectionPositioning";
import SectionHelp from "@/components/SectionHelp";
import SectionHelp2 from "@/components/SectionHelp2";
import SectionApproaches from "@/components/SectionApproaches";
import SectionWhySage from "@/components/SectionWhySage";
import SectionLocation from "@/components/SectionLocation";
import SectionClosing from "@/components/SectionClosing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionPositioning />
        {/* <SectionHelp /> */}
        <SectionHelp2 />
        <SectionApproaches />
        <SectionWhySage />
        <SectionLocation />
        <SectionClosing />
      </main>
      <Footer />
    </>
  );
}
