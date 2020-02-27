import React, { Fragment } from "react";
import styled from "styled-components";
import cardImage from "../static/card.png";
import logoImage from "../static/logo.png";
import tileImage from "../static/tile.jpg";

require("typeface-rubik");

const cardImageProps = {
  src: cardImage,
  alt: "Example Card"
};

const logoImageProps = {
  src: logoImage,
  alt: "Logo Image"
};

const tileImageProps = {
  src: tileImage,
  alt: "Tile Image"
};

const WelcomeContainer = styled.div`
  font-family: Rubik;
  font-weight: 300;
  padding: 15px;
  display: inline-block;
`;

const CodeElement = styled.code`
  font-size: 16px;
  display: block;
  padding-left: ${props => (props.sub ? `${props.sub * 40}px` : "0px")};
`;

const Card = () => (
  <WelcomeContainer>
    <p>
      This is a coding test submission by Sidney Ramos for the Front-end
      Developer position at Seven West Media.
    </p>
    <p>
      The task was to create a responsive card component that looks like
      following image:
    </p>
    <img src={cardImageProps.src} alt={cardImageProps.alt} />
    <p>
      <strong>The requirements were:</strong>
      <ul>
        <li>
          Use styled-components on a simple React view to accomplish that.
        </li>
        <li>Develop unit tests using your preferred test framework.</li>
        <li>
          Write a README.md with your assumptions, why did you pick that
          approach, what you could have done better if time was not a
          constraint.
        </li>
        <li>
          Push code to Github and host a working demo of the solution using
          Github Pages.
        </li>
      </ul>
    </p>
    <p>
      <strong>Assets provided:</strong>
      <ul>
        <li>
          <img src={cardImageProps.src} alt={cardImageProps.alt} />
        </li>
        <li>
          <img src={tileImageProps.src} alt={tileImageProps.alt} />
        </li>
        <li>
          <img src={logoImageProps.src} alt={logoImageProps.alt} />
        </li>
      </ul>
    </p>
    <p>
      <strong>Assumptions:</strong>
      <ul>
        <li>
          Looking at the outcome image, it can be derived that there are 2 major
          elements. The background image and the foreground element containing
          the logo and the text.
        </li>
        <li>
          In terms of the font, <a href="https://7plus.com.au/">Seven Plus</a>{" "}
          uses Montserrat which is a Google Font so we wouldn't come across any
          problems with purchasing fonts.
        </li>
        <li>
          We can safely assume that the text and logo overlay is 25% or 1/4th of
          the overall height of the card.
        </li>
        <li>
          Transparency of background of the overlay seems to be around 50%.
        </li>
      </ul>
    </p>
    <p>
      <strong>Questions/Challenges:</strong>
      <ul>
        <li>
          <strong>Does the card have a hover state? </strong>
          <p>
            If we look at <a href="https://7plus.com.au/">Seven Plus</a>, one of
            Seven West Media's offerings, the layout is similar to Netflix
            wherein they display a grid of plain block images - no overlay
            whatsoever. It's only when you hover that either a.) more context is
            provided or b.) focus is exaggerated.
          </p>
        </li>
        <li>
          <strong>Does the card have a mobile version? </strong>
          <p>
            When it comes to mobile, how do we present a collection of these
            card components? Do we crop it into a square so more cards can be
            viewed by the user, and present it as a plain grid? Or would leaving
            it as a rectangular shape and inserting it in a swipeable carousel
            be the better option?
          </p>
        </li>
        <li>
          <strong>
            How do we preserve the aspect ratio of the background image?{" "}
          </strong>
          <p>
            When we create a card that doesn't fit the aspect ratio of the image
            (e.g. a square), how do we resize the component in such a way that
            we preserve the aspect ratio and still make the component look
            presentable?
          </p>
        </li>
      </ul>
    </p>

    <p>
      <strong>Approach:</strong>
      <ul>
        <li>
          <strong>Building an individual card component</strong>
          <ul>
            <li>
              <p>
                Looking at the task at face value, there are 2 approaches that
                can be used for developing such a card:
              </p>
              <ol>
                <li>
                  <CodeElement>div </CodeElement>
                  <CodeElement>├── img (Background)</CodeElement>
                  <CodeElement>└── div (Overlay)</CodeElement>
                  <CodeElement sub={1}>├── img (Logo) </CodeElement>
                  <CodeElement sub={1}>└── h1 / p (Title) </CodeElement>
                </li>
                <li>
                  <CodeElement>div (set background-image)</CodeElement>
                  <CodeElement>└── div (Overlay)</CodeElement>
                  <CodeElement sub={1}>├── img (Logo) </CodeElement>
                  <CodeElement sub={1}>└── h1 / p (Title) </CodeElement>
                </li>
              </ol>
              <p>
                The second option is more intuitive and useful than the first
                because background-image is a lot easier to control than height,
                width and object-fit of an image element.
              </p>
            </li>
            <li>
              Now that the DOM architecture has been settled, the next challenge
              is how to make sure the aspect ratio of the background is
              preserved regardless of width. I did a bit of research and found
              an interesting way to make a div preserve the aspect ratio
              involving padding. The link for said article can be found{" "}
              <a href="https://css-tricks.com/aspect-ratio-boxes/">here.</a>
            </li>
            <li>
              The next and final challenge would be to find out how to resize
              the text such that it's still legible for any width. Initially,
              based on stock knowledge and experience I knew that media queries
              were the most obvious answer but I never liked how it kind of
              snapped whenever it transitioned into a different font size. So I
              did a bit of research and found a lightweight, dependency-free
              Javascript library called{" "}
              <a href="https://github.com/rikschennink/fitty">Fitty</a> that
              resizes the text based on the parent container. All I had to do
              now was hook it up to the React component through the useEffect
              hook (the card component was purely functional so I lacked the
              component lifecycle syntax) and voila! Responsive text.
            </li>
            <li>
              <em>
                Side comment: The component is so responsive now that it
                actually looks as if it's just an image being resized. 😅
              </em>
            </li>
          </ul>
        </li>
      </ul>
    </p>

    <p>
      <strong>Possible Extensions:</strong>
      <ul>
        <li>
          <strong>Building an collection card grid</strong>
          <ul>
            Due to time constraints, I could only focus on creating an
            individual card component. It would have been nice to demonstrate
            what would happen if you insert the card into a grid. But maybe that
            should be left for some other time.
          </ul>
        </li>
      </ul>
    </p>
  </WelcomeContainer>
);

export default Card;
