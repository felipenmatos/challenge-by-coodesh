import React from "react";
import TitleLogin from "../TitleLogin";

export default {
  title: "Components/Title",
  component: <TitleLogin text="teste" />,
};

const Template = () => <TitleLogin text="Teste" />;

export const Default = Template.bind({});
