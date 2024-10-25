import Page from "./[...filename]/page";
import React from "react";

export default async function HomePage() {
  return (<Page params={{ filename: ['home'] }} />);
}
