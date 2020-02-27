import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import Card from "../components/Card";
import styled from "styled-components";
import tileImage from "../static/tile.jpg";
import logoImage from "../static/logo.png";
require("typeface-montserrat");

export default {
  title: "Card",
  component: Card
};

const SmallCardContainer = styled.div`
  width: 300px;
`;

const MediumCardContainer = styled.div`
  width: 480px;
`;

const LargeCardContainer = styled.div`
  width: 768px;
`;

export const SmallIndividualCard = () => (
  <SmallCardContainer>
    <Card
      image={tileImage}
      logo={{ src: logoImage, alt: "Seven West Media" }}
      title="Home and Away"
    />
  </SmallCardContainer>
);

export const MediumIndividualCard = () => (
  <MediumCardContainer>
    <Card
      image={tileImage}
      logo={{ src: logoImage, alt: "Seven West Media" }}
      title="Home and Away"
    />
  </MediumCardContainer>
);

export const LargeIndividualCard = () => (
  <LargeCardContainer>
    <Card
      image={tileImage}
      logo={{ src: logoImage, alt: "Seven West Media" }}
      title="Home and Away"
    />
  </LargeCardContainer>
);

export const FullwidthIndividualCard = () => (
  <Card
    image={tileImage}
    logo={{ src: logoImage, alt: "Seven West Media" }}
    title="Home and Away"
  />
);

export const DefaultIndividualCard = () => (
  <SmallCardContainer>
    <Card />
  </SmallCardContainer>
);

export const NoImageIndividualCard = () => (
  <SmallCardContainer>
    <Card
      logo={{ src: logoImage, alt: "Seven West Media" }}
      title="Home and Away"
    />
  </SmallCardContainer>
);

export const NoLogoIndividualCard = () => (
  <SmallCardContainer>
    <Card image={tileImage} title="Home and Away" />
  </SmallCardContainer>
);

export const NoTitleIndividualCard = () => (
  <SmallCardContainer>
    <Card
      image={tileImage}
      logo={{ src: logoImage, alt: "Seven West Media" }}
    />
  </SmallCardContainer>
);

export const HoverIndividualCard = () => (
  <SmallCardContainer>
    <Card
      image={tileImage}
      logo={{ src: logoImage, alt: "Seven West Media" }}
      title="Home and Away"
      isHover
    />
  </SmallCardContainer>
);
