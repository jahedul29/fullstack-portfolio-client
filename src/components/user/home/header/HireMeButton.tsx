"use client";

import CommonButton from "@/components/common/CommonButton";
import { Link } from "react-scroll";

const HireMeButton = () => {
  return (
    <Link to={"contact"} spy={true} smooth={true} offset={-100} duration={500}>
      <CommonButton content="Hire Me" classNames="px-8 py-1" />
    </Link>
  );
};

export default HireMeButton;
