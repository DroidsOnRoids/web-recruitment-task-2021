import React, { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
  aside?: ReactNode;
}

export const Layout = ({ children, aside }: LayoutProps) => (
  <section className="section">
    <div className="container">
      <h1 className="title">Book store</h1>
      <div className="columns">
        <div className="column">{children}</div>
        <div className="column is-one-third">{aside}</div>
      </div>
    </div>
  </section>
);
