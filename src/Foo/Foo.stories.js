import React from "react";
import mdx from "./Foo.mdx";

import { Foo } from "../";

export default {
  title: "Foo",

  parameters: {
    component: Foo,
    docs: { page: mdx },
  },
};

export const Example1 = () => {
  return <Foo name={"I am Groot!"} />;
};

export const Example2 = () => {
  return <Foo name={"I am not Groot!"} />;
};
