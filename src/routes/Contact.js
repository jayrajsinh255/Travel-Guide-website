import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/8.jpg";
import Footer from "../components/Footer";
export default function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}
