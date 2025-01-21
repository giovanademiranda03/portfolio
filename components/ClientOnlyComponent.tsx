"use client";

import { useEffect } from "react";

export default function ClientOnlyComponent() {
  useEffect(() => {
    const tag = document.createElement("div");
    tag.innerText = "";
    document.body.appendChild(tag);
  }, []);

  return <div>{""}</div>;
}
