"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import Image from "./_Builtin/Image";

export function GoogleReviewLogo({
  as: _Component = Block,
  image = "https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/69b41d2a232e9146beef914b_ggl-review-left.webp",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "google-review-logo", "desktop-only")}
      tag="div"
    >
      <Image
        alt=""
        className={_utils.cx(_styles, "ggl-review-desktop-img")}
        height="auto"
        loading="lazy"
        src={image}
        width="auto"
      />
    </_Component>
  );
}
