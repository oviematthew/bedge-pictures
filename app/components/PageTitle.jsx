import React from "react";

export default function PageTitle({ title }) {
  return (
    <>
      <Breadcrumb />
      <h1 className="text-lg">{title}</h1>
      <Accordion />
    </>
  );
}
