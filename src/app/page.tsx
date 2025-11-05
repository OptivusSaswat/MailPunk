"use client";

import React from "react";
import { Button } from "@/components/ui/button";

/**
 * Home page component.
 * This file is a client component because it directly uses the `Button`
 * component from the UI library, which is a client component.
 */
export default function Home(): JSX.Element {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button>LandingPage</Button>
    </div>
  );
}