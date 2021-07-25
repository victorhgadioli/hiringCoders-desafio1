import React from "react";
import Background from "../components/Background/Background";
import PromotionCard from "../components/PromotionCard/PromotionCard";

const LandingPage: React.FC = () => {
  return (
    <Background>
      <PromotionCard />
    </Background>
  );
};

export default LandingPage;
