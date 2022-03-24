import React, { useState } from "react";
import "./Accordion.scss";
// icons
import { ReactComponent as ArrowBottom } from "../../assets/icons/arrow_bottom.svg";
import { ReactComponent as ArrowTop } from "../../assets/icons/arrow_top.svg";

export default function Accordion({ title, variant, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`accordion_container ${
        variant === "big" && "accordion_container--big"
      }`}
    >
      <div className="accordion_title" onClick={() => setOpen(!open)}>
        {title}

        {open ? <ArrowTop /> : <ArrowBottom />}
      </div>
      <div
        className="accordion_content"
        style={{ display: `${open ? "block" : "none"}` }}
      >
        {children}
      </div>
    </div>
  );
}
