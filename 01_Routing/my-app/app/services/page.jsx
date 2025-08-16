import Link from "next/link";
import React from "react";

const services = () => {
  return (
    <div>
      <h2>Services</h2>
      <Link href="/">Home</Link>
      <Link href="/services/app-development">App Development</Link>
      <Link href="/services/web-development">Web Development</Link>
    </div>
  );
};

export default services;
