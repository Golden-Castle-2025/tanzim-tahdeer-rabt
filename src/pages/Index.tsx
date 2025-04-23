
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import News from "../components/home/News";
import Statistics from "../components/home/Statistics";
import Partners from "../components/home/Partners";
import ContactCTA from "../components/home/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Statistics />
        <News />
        <Partners />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
