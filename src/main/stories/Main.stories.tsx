import React from "react";
import { Main } from "../component";
import { ComponentMeta } from "@storybook/react";

// // // //

export default {
    title: "Components/Main",
    component: Main,
} as ComponentMeta<typeof Main>;

export const Render: React.FC = () => <Main />;
