import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftbtntext="Custom Order"
        rightbtntext="Existing Inventory"
        backgroundimg="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftbtntext="Custom Order"
        rightbtntext="Existing Inventory"
        backgroundimg="model-y.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftbtntext="Custom Order"
        rightbtntext="Existing Inventory"
        backgroundimg="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftbtntext="Custom Order"
        rightbtntext="Existing Inventory"
        backgroundimg="model-x.jpg"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back gurrantee"
        leftbtntext="Order Now"
        rightbtntext="Learn More"
        backgroundimg="solar-panel.jpg"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar-Roof Costs Less Than a New Roof"
        leftbtntext="Order Now"
        rightbtntext="Learn More"
        backgroundimg="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        description=""
        leftbtntext="Shop Now"
        rightbtntext=""
        backgroundimg="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
