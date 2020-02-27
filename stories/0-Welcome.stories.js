import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import Welcome from "../components/Welcome";

export default {
  title: "Welcome",
  component: Welcome
};

export const ReadMe = () => <Welcome />;
