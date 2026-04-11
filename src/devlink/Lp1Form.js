"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import FormBlockLabel from "./_Builtin/FormBlockLabel";
import FormButton from "./_Builtin/FormButton";
import FormErrorMessage from "./_Builtin/FormErrorMessage";
import FormForm from "./_Builtin/FormForm";
import FormSelect from "./_Builtin/FormSelect";
import FormSuccessMessage from "./_Builtin/FormSuccessMessage";
import FormTextInput from "./_Builtin/FormTextInput";
import FormWrapper from "./_Builtin/FormWrapper";
import Grid from "./_Builtin/Grid";
import HtmlEmbed from "./_Builtin/HtmlEmbed";

export function Lp1Form({ as: _Component = FormWrapper }) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "contact-form-block-outline",
        "fill-white",
        "w-node-_0ea6159e-37a9-f3e2-0b61-37cb0a15c22e-0a15c22e"
      )}
      id={_utils.cx(_styles, "form-cta")}
    >
      <FormForm
        className={_utils.cx(_styles, "contact-form-3")}
        data-name="Home - popup"
        data-redirect="/success-page"
        id={_utils.cx(_styles, "wf-form-Home---popup")}
        method="get"
        name="wf-form-Home---popup"
        redirect="/success-page"
      >
        <Block
          className={_utils.cx(_styles, "error-message-checkbox")}
          tag="div"
        >
          <Block tag="div">{"Please enter a 10-digit phone number"}</Block>
        </Block>
        <Block className={_utils.cx(_styles, "wrap-v-large")} tag="div">
          <Grid className={_utils.cx(_styles, "form-grid")} tag="div">
            <Block className={_utils.cx(_styles, "wrap-v-tiny")} tag="div">
              <FormBlockLabel
                className={_utils.cx(_styles, "field-label-26")}
                htmlFor="Parent-Name-11"
              >
                {"Parent's Name"}
              </FormBlockLabel>
              <FormTextInput
                autoFocus={false}
                className={_utils.cx(_styles, "text-field-5")}
                data-name="firstname"
                disabled={false}
                id={_utils.cx(_styles, "firstname")}
                maxLength={256}
                name="firstname"
                placeholder="John Smith"
                required={true}
                type="text"
              />
            </Block>
            <Block
              className={_utils.cx(_styles, "wrap-v-tiny")}
              id={_utils.cx(
                _styles,
                "w-node-_0ea6159e-37a9-f3e2-0b61-37cb0a15c239-0a15c22e"
              )}
              tag="div"
            >
              <FormBlockLabel
                className={_utils.cx(_styles, "field-label-26")}
                htmlFor="Child-Name-5"
              >
                {"Student's Name"}
              </FormBlockLabel>
              <FormTextInput
                autoFocus={false}
                className={_utils.cx(_styles, "text-field-5")}
                data-name="student_name"
                disabled={false}
                id={_utils.cx(_styles, "student_name")}
                maxLength={256}
                name="student_name"
                placeholder="Jade Smith"
                required={true}
                type="text"
              />
            </Block>
          </Grid>
          <Block className={_utils.cx(_styles, "wrap-v-tiny")} tag="div">
            <FormBlockLabel
              className={_utils.cx(_styles, "field-label-26")}
              htmlFor="phone"
            >
              {"Parent's Phone Number"}
            </FormBlockLabel>
            <FormTextInput
              autoFocus={false}
              className={_utils.cx(_styles, "text-field-5")}
              data-name="phone"
              disabled={false}
              id={_utils.cx(_styles, "phone")}
              maxLength={256}
              ms-code-phone-number="ca,gb,us"
              name="phone"
              placeholder="Enter your phone number"
              required={true}
              type="tel"
            />
          </Block>
          <Block className={_utils.cx(_styles, "wrap-v-tiny")} tag="div">
            <FormBlockLabel
              className={_utils.cx(_styles, "field-label-26")}
              htmlFor="email"
            >
              {"Email Address"}
            </FormBlockLabel>
            <FormTextInput
              autoFocus={false}
              className={_utils.cx(_styles, "text-field-5")}
              data-name="email"
              disabled={false}
              id={_utils.cx(_styles, "email")}
              maxLength={256}
              name="email"
              placeholder="Enter your email address"
              required={true}
              type="email"
            />
          </Block>
          <Block className={_utils.cx(_styles, "wrap-v-tiny")} tag="div">
            <FormBlockLabel
              className={_utils.cx(_styles, "field-label-26")}
              htmlFor="email"
            >
              {"Select Grade"}
            </FormBlockLabel>
            <Block className={_utils.cx(_styles, "select")} tag="div">
              <FormSelect
                className={_utils.cx(_styles, "select-field-7")}
                data-name="class"
                id={_utils.cx(_styles, "class")}
                multiple={false}
                name="class"
                options={[
                  {
                    t: "Select one...",
                    v: "",
                  },
                  {
                    t: "Grade 1/Year 2",
                    v: "Grade 1/Year 2",
                  },
                  {
                    t: "Grade 2/Year 3",
                    v: "Grade 2/Year 3",
                  },
                  {
                    t: "Grade 3/Year 4",
                    v: "Grade 3/Year 4",
                  },
                  {
                    t: "Grade 4/Year 5",
                    v: "Grade 4/Year 5",
                  },
                  {
                    t: "Grade 5/Year 6",
                    v: "Grade 5/Year 6",
                  },
                  {
                    t: "Grade 6/Year 7",
                    v: "Grade 6/Year 7",
                  },
                  {
                    t: "Grade 7/Year 8",
                    v: "Grade 7/Year 8",
                  },
                  {
                    t: "Grade 8/Year 9",
                    v: "Grade 8/Year 9",
                  },
                  {
                    t: "Grade 9/Year 10",
                    v: "Grade 9/Year 10",
                  },
                  {
                    t: "Grade 10/Year 11",
                    v: "Grade 10/Year 11",
                  },
                  {
                    t: "Grade 11/Year 12",
                    v: "Grade 11/Year 12",
                  },
                  {
                    t: "Grade 12/Year 13",
                    v: "Grade 12/Year 13",
                  },
                ]}
                required={true}
              />
            </Block>
          </Block>
          <Block className={_utils.cx(_styles, "wrap-v-tiny")} tag="div">
            <FormBlockLabel
              className={_utils.cx(_styles, "field-label-26")}
              htmlFor="email"
            >
              {"Which curriculum does the student follow?"}
            </FormBlockLabel>
            <Block className={_utils.cx(_styles, "select")} tag="div">
              <FormSelect
                className={_utils.cx(_styles, "select-field-7")}
                data-name="curriculum"
                id={_utils.cx(_styles, "curriculum")}
                multiple={false}
                name="curriculum"
                options={[
                  {
                    t: "Select one...",
                    v: "",
                  },
                  {
                    t: "British/Cambridge",
                    v: "British/Cambridge",
                  },
                  {
                    t: "American",
                    v: "American",
                  },
                  {
                    t: "IB",
                    v: "IB",
                  },
                  {
                    t: "IGCSE",
                    v: "IGCSE",
                  },
                  {
                    t: "CBSE",
                    v: "CBSE",
                  },
                  {
                    t: "ICSE",
                    v: "ICSE",
                  },
                  {
                    t: "Other",
                    v: "Other",
                  },
                ]}
                required={true}
              />
            </Block>
          </Block>
          <HtmlEmbed
            className={_utils.cx(_styles, "html-embed-9")}
            content=""
            value="%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_source%22%20name%3D%22utm_source%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_medium%22%20name%3D%22utm_medium%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_campaign%22%20name%3D%22utm_campaign%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_content%22%20name%3D%22utm_content%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_term%22%20name%3D%22utm_term%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22gclid%22%20name%3D%22gclid%22%3E"
          />
        </Block>
        <Block className={_utils.cx(_styles, "wrap-v-small-12")} tag="div">
          <FormButton
            className={_utils.cx(_styles, "button-primary-square-2")}
            data-wait="Please wait..."
            type="submit"
            value="Book a Free Trial"
          />
        </Block>
      </FormForm>
      <FormSuccessMessage className={_utils.cx(_styles, "success-message-12")}>
        <Block tag="div">
          {"Thank you! Your submission has been received!"}
        </Block>
      </FormSuccessMessage>
      <FormErrorMessage className={_utils.cx(_styles, "error-message-4")}>
        <Block tag="div">
          {"Oops! Something went wrong while submitting the form."}
        </Block>
      </FormErrorMessage>
    </_Component>
  );
}
