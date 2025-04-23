
import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AboutBanner from "../components/about/AboutBanner";
import AboutIntro from "../components/about/AboutIntro";
import VisionMission from "../components/about/VisionMission";
import StrategicObjectives from "../components/about/StrategicObjectives";
import CouncilMembers from "../components/about/CouncilMembers";
import CouncilStrategy from "../components/about/CouncilStrategy";
import GeneralAssembly from "../components/about/GeneralAssembly";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      <main className="flex-grow">
        <AboutBanner />
        <AboutIntro />
        <VisionMission />
        <StrategicObjectives />
        <CouncilStrategy />
        <GeneralAssembly />
        <CouncilMembers />
      </main>
      <Footer />
    </div>
  );
};

export default About;
