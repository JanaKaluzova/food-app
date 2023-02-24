import { Typography } from "@mui/material";
import React from "react";
import { Section, Wrapper } from "./MealsSummary.styled";

export const MealsSummary: React.FC = () => {
  return (
    <Wrapper>
      <Typography variant="h3">Rozvážíme fantastické jídlo</Typography>
      <Section variant="body1">
        Vyberte si z naší skvělé nabídky chutného jídla a povečeřte s rodinou v
        pohodlí Vašeho domu.
      </Section>
      <Section variant="body1">
        Všechna naše jídla jsou uvařena z těch nejlepších surovin výjimečných
        chutí. Používáme pouze čerstvé ingredience a vaříme s láskou.
      </Section>
    </Wrapper>
  );
};
