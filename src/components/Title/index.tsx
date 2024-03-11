import React from "react";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <h1 className="bg-red-400">{title}</h1>;
};

export default Title;
