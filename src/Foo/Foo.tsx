import React from "react";

interface IProps {
  name: String;
}

const Foo = (props: IProps) => {
  return <h1>I am foo, hi {props.name}</h1>;
};

export default Foo;
