import About from "./sections/About";
import Facts from "./sections/Facts";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Resume from "./sections/Resume";
import Skills from "./sections/Skills";
import Services from "./sections/Services";

export default function Home() {
  return (
   <>
   <Hero />
   <main id="id">
    <About />
    <Facts />
    <Skills />
    <Resume />
    <Portfolio />
    <Services />
   </main>
   </>
  )
}
