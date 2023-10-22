import { MidSite } from "./components/Banner/MidSite";
import { Footers } from "./components/Footers/Footers";
import { Cards } from "./components/facultades/Cards";
import { Header } from "./components/headers/Header";
import { Hero } from "./components/hero/Hero";

export default function HomePage() {

  return (

    <>
      <Header />

      <Hero />

      <Cards />

      <MidSite />

      <Footers />
    </>
  )
}
