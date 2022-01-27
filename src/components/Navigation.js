// Libraries
import React, { useState } from "react";
import styled from "styled-components";

// Components
import Navbar from "./Navbar";

const Burger = styled.div`
  position: ${({ open }) => (open ? "fixed" : "static")};
  right: 20px;
  top: 31px;

  div {
    background: ${({ open }) => (open ? "#FFFFFF" : "#4390d8")};

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) =>
              open ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <Burger className="burger" open={open} onClick={() => setOpen(!open)}>
        <div>{}</div>
        <div>{}</div>
        <div>{}</div>
      </Burger>
      <Navbar open={open} />
    </section>
  );
}
