import React from "react";
import { BuilderComponent, builder } from "@builder.io/react";

// Connect your Builder.io account
builder.init("YOUR_PUBLIC_API_KEY"); // replace with your actual Builder.io Public API Key

export default function App() {
  return (
    <div>
      <BuilderComponent model="page" />
    </div>
  );
}
