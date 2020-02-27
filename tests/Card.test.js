import React from "react";
import renderer from "react-test-renderer";
import Card from "../components/Card";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Card
        image="https://sidneyramos.github.io/seven-test/static/media/tile.25b4e634.jpg"
        logo={{
          src:
            "https://sidneyramos.github.io/seven-test/static/media/logo.2a3f011a.png",
          alt: "Seven West Media"
        }}
        title="Home and Away"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly without props", () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly without image", () => {
  const tree = renderer
    .create(
      <Card
        logo={{
          src:
            "https://sidneyramos.github.io/seven-test/static/media/logo.2a3f011a.png",
          alt: "Seven West Media"
        }}
        title="Home and Away"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly without logo", () => {
  const tree = renderer
    .create(
      <Card
        image="https://sidneyramos.github.io/seven-test/static/media/tile.25b4e634.jpg"
        title="Home and Away"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly without title", () => {
  const tree = renderer
    .create(
      <Card
        image="https://sidneyramos.github.io/seven-test/static/media/tile.25b4e634.jpg"
        logo={{
          src:
            "https://sidneyramos.github.io/seven-test/static/media/logo.2a3f011a.png",
          alt: "Seven West Media"
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with hover props", () => {
  const tree = renderer
    .create(
      <Card
        image="https://sidneyramos.github.io/seven-test/static/media/tile.25b4e634.jpg"
        logo={{
          src:
            "https://sidneyramos.github.io/seven-test/static/media/logo.2a3f011a.png",
          alt: "Seven West Media"
        }}
        title="Home and Away"
        isHover
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
