import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import heroImg from "../assets/home.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
// console.log(heroImg);
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={heroImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        btnText="Travel Plan"
        url="#"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
