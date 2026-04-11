"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import Heading from "./_Builtin/Heading";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import Section from "./_Builtin/Section";

export function GoogleReviewCompetitorsWidget({
  as: _Component = Section,
  title = "We're always aiming for good grades",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "ggl-review-section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <Heading
        className={_utils.cx(
          _styles,
          "google-review-header",
          "competitor-header"
        )}
        tag="h1"
      >
        {title}
      </Heading>
      <Block className={_utils.cx(_styles, "ggl-review-container")} tag="div">
        <HtmlEmbed
          className={_utils.cx(_styles, "google-review")}
          content=""
          value="%3C!--%20Elfsight%20Google%20Reviews%20%7C%20Mentor%20Match%20Desktop%20--%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Felfsightcdn.com%2Fplatform.js%22%20async%3E%3C%2Fscript%3E%0A%3Cdiv%20class%3D%22elfsight-app-b538d4d6-d0b3-4edd-861b-f734181f3e2a%22%20data-elfsight-app-lazy%3E%3C%2Fdiv%3E"
        />
        <HtmlEmbed
          className={_utils.cx(_styles, "google-mobile-review")}
          content=""
          value="%3C!--%20Elfsight%20Google%20Reviews%20%7C%20Mentor%20Match%20Mobile%20%20--%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Felfsightcdn.com%2Fplatform.js%22%20async%3E%3C%2Fscript%3E%0A%3Cdiv%20class%3D%22elfsight-app-c4273f61-0456-47b8-a826-979540397c27%22%20data-elfsight-app-lazy%3E%3C%2Fdiv%3E"
        />
      </Block>
    </_Component>
  );
}
