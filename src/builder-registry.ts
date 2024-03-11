"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Title from "./components/Title";
import Card from "./components/Card";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Title, {
  name: "Title",
  inputs: [
    {
      name: "title",
      type: "string",
    },
  ],
});
Builder.registerComponent(Card, {
  name: "Card",
  inputs: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "image",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "price",
      type: "string",
    },
    {
      name: "name",
      type: "string",
    },
  ],
});
