import Link from "next/link";
import React from "react";

const WebDevelopment = () => {
  return (
    <div>
      <h2>Web Development Services</h2>
      <p>
        We specialize in creating modern web applications using the latest
        technologies.
      </p>
      <Link href="/services">Back to Services</Link>
    </div>
  );
};

export default WebDevelopment;
