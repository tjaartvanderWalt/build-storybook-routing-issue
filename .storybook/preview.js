import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  layout: "fullscreen",
});

addDecorator(withA11y);
