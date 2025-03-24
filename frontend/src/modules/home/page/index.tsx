"use client";

import { TITLE } from "../constants";

export const HomePage = () => {
  return (
    <div>
      {" "}
      <div className="min-h-screen bg-printscreen-50 text-printscreen-900 p-8">
        <h1 className="text-4xl font-heading">Hello World</h1>
        <p className="text-lg font-body mt-4">
          This is using Poppins for body text and Inter for headings.
        </p>
        <button className="btn btn-primary mt-6">Click me</button>
      </div>
      {TITLE}
    </div>
  );
};
