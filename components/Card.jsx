import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import tileImage from "../static/tile.jpg";
import logoImage from "../static/logo.png";
import { Textfit } from "react-textfit";
import fitty from "fitty";

const classNames = require("classnames");
require("typeface-montserrat");

const CardContainer = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: ${props =>
    props.width && props.height
      ? `${(props.height / props.width) * 100}%`
      : "100%"};
  background: #f0f0f0;
  background-image: url("${props => props.backgroundImage}");
  background-size: cover;
  position: relative;
  font-family: Montserrat;

  &.hover {
    cursor: pointer;
    
    .overlay-container {
      opacity: 0;
      transition: all 0.3s;
    }

    &:hover {
      .overlay-container {
        opacity: 1;
      }
    }
  }
`;

const InnerCardContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

const OverlayContainer = styled.div`
  display: flex;
  align-items: center;
  height: calc(23%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2%;
  color: white;
`;

const OverlayTitle = styled.h1`
  margin: 0;
  line-height: 1.2;
`;

const OverlayTitleContainer = styled.div`
  height: 50%;
  width: 50%;
`;

const LogoImage = styled.img`
  height: 100%;
  width: auto;
`;

const Card = ({
  children,
  image = "http://via.placeholder.com/640x360",
  logo,
  title,
  isHover,
  ...props
}) => {
  let backgroundImage = new Image();
  backgroundImage.src = image;
  useEffect(() => {
    fitty(".fit");
  });

  return (
    <CardContainer
      className={classNames([
        "card-container",
        {
          hover: isHover
        }
      ])}
      width={backgroundImage.width}
      height={backgroundImage.height}
      backgroundImage={image}
      {...props}
    >
      <InnerCardContainer className="inner-card-container">
        <FlexBox>
          {title && (
            <OverlayContainer className="overlay-container">
              {logo && <LogoImage src={logo.src} alt={logo.alt} />}
              <OverlayTitleContainer>
                <OverlayTitle className="fit">{title}</OverlayTitle>
              </OverlayTitleContainer>
            </OverlayContainer>
          )}
        </FlexBox>
      </InnerCardContainer>
    </CardContainer>
  );
};

export default Card;
