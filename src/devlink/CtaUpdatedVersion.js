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
import Heading from "./_Builtin/Heading";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import Image from "./_Builtin/Image";
import Link from "./_Builtin/Link";
import Paragraph from "./_Builtin/Paragraph";
import Section from "./_Builtin/Section";
import Span from "./_Builtin/Span";

export function CtaUpdatedVersion({ as: _Component = Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "cta-section-nh")}
      id={_utils.cx(_styles, "CTA")}
      tag="div"
    >
      <Section
        className={_utils.cx(_styles, "section-cta", "background-gray")}
        grid={{
          type: "section",
        }}
        id={_utils.cx(_styles, "CTA-Banner")}
        tag="section"
      >
        <Block className={_utils.cx(_styles, "container-regular-21")} tag="div">
          <Block
            className={_utils.cx(_styles, "uui-max-width-large-15-newhome")}
            tag="div"
          >
            <Heading
              className={_utils.cx(_styles, "uui-cta-29-title-2")}
              tag="h2"
            >
              <Span className={_utils.cx(_styles)}>
                {"Set your child on the journey to academic excellence today"}
              </Span>
            </Heading>
            <Block
              className={_utils.cx(_styles, "uui-space-xsmall-14")}
              tag="div"
            />
          </Block>
          <Block
            className={_utils.cx(_styles, "contact-card-2")}
            id={_utils.cx(_styles, "CTA-form-Banner")}
            tag="div"
          >
            <Grid className={_utils.cx(_styles, "contact-grid")} tag="div">
              <Block
                className={_utils.cx(_styles, "contact-content-3")}
                id={_utils.cx(
                  _styles,
                  "w-node-_3e02db46-e9ac-3c4b-2060-8f31d9f7c405-d9f7c3fb"
                )}
                tag="div"
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "contact-detail-card",
                    "hide-contactus"
                  )}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "contact-card-title")}
                    tag="div"
                  >
                    <Block
                      className={_utils.cx(_styles, "contact-icon-wrapper")}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, "icon-large-8")}
                        content=""
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M28.0003%2016.2933C28.0003%208.97333%2022.3203%204%2016.0003%204C9.74699%204%204.00033%208.86667%204.00033%2016.3733C3.20033%2016.8267%202.66699%2017.68%202.66699%2018.6667V21.3333C2.66699%2022.8%203.86699%2024%205.33366%2024C6.06699%2024%206.66699%2023.4%206.66699%2022.6667V16.2533C6.66699%2011.1467%2010.6003%206.68%2015.707%206.53333C20.987%206.37333%2025.3337%2010.6133%2025.3337%2015.8667V25.3333H16.0003C15.267%2025.3333%2014.667%2025.9333%2014.667%2026.6667C14.667%2027.4%2015.267%2028%2016.0003%2028H25.3337C26.8003%2028%2028.0003%2026.8%2028.0003%2025.3333V23.7067C28.787%2023.2933%2029.3337%2022.48%2029.3337%2021.52V18.4533C29.3337%2017.52%2028.787%2016.7067%2028.0003%2016.2933Z%22%20fill%3D%22currentColor%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M12.0003%2018.6667C12.7367%2018.6667%2013.3337%2018.0697%2013.3337%2017.3333C13.3337%2016.597%2012.7367%2016%2012.0003%2016C11.2639%2016%2010.667%2016.597%2010.667%2017.3333C10.667%2018.0697%2011.2639%2018.6667%2012.0003%2018.6667Z%22%20fill%3D%22currentColor%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M20.0003%2018.6667C20.7367%2018.6667%2021.3337%2018.0697%2021.3337%2017.3333C21.3337%2016.597%2020.7367%2016%2020.0003%2016C19.2639%2016%2018.667%2016.597%2018.667%2017.3333C18.667%2018.0697%2019.2639%2018.6667%2020.0003%2018.6667Z%22%20fill%3D%22currentColor%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M24.0003%2014.7067C23.3603%2010.9067%2020.0537%208%2016.067%208C12.027%208%207.68033%2011.3467%208.02699%2016.6C11.3203%2015.2533%2013.8003%2012.32%2014.507%208.74667C16.2537%2012.2533%2019.8403%2014.6667%2024.0003%2014.7067Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, "column-x-small-2")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(_styles, "subheading-large-11")}
                        tag="div"
                      >
                        {"Contact us"}
                      </Block>
                      <Paragraph
                        className={_utils.cx(_styles, "paragraph-small-28")}
                      >
                        {"Call us at "}
                        <Link
                          block=""
                          button={false}
                          options={{
                            href: "tel:8778816362",
                          }}
                          target="_blank"
                        >
                          {"(877) 881-6362"}
                        </Link>
                        {
                          " or fill the form to talk about your child’s learning goals and book a trial class to see how we can support their academic journey"
                        }
                      </Paragraph>
                    </Block>
                  </Block>
                </Block>
                <Block
                  className={_utils.cx(
                    _styles,
                    "contact-image",
                    "contact-image_hide"
                  )}
                  tag="div"
                >
                  <Image
                    alt=""
                    className={_utils.cx(_styles, "image-cover-4")}
                    height="auto"
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/67dc07af019537aa662f92dc_sales.webp"
                    width="auto"
                  />
                </Block>
              </Block>
              <FormWrapper
                className={_utils.cx(
                  _styles,
                  "contact-form-block-outline",
                  "w-node-_3e02db46-e9ac-3c4b-2060-8f31d9f7c414-d9f7c3fb"
                )}
                id={_utils.cx(_styles, "form-cta")}
              >
                <FormForm
                  className={_utils.cx(_styles, "contact-form-3")}
                  data-name="Home - popup"
                  data-redirect="/success-page"
                  id={_utils.cx(_styles, "home-popup")}
                  method="get"
                  name="wf-form-Home---popup"
                  redirect="/success-page"
                >
                  <HtmlEmbed
                    className={_utils.cx(_styles, "html-embed-9")}
                    content=""
                    value="%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_source%22%20name%3D%22utm_source%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_medium%22%20name%3D%22utm_medium%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_campaign%22%20name%3D%22utm_campaign%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_content%22%20name%3D%22utm_content%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_term%22%20name%3D%22utm_term%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22gclid%22%20name%3D%22gclid%22%3E"
                  />
                  <Block
                    className={_utils.cx(_styles, "error-message-checkbox")}
                    tag="div"
                  >
                    <Block tag="div">
                      {"Please enter a 10-digit phone number"}
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(_styles, "wrap-v-large")}
                    tag="div"
                  >
                    <Grid className={_utils.cx(_styles, "form-grid")} tag="div">
                      <Block
                        className={_utils.cx(_styles, "wrap-v-tiny")}
                        tag="div"
                      >
                        <FormBlockLabel
                          className={_utils.cx(_styles, "field-label-26")}
                          htmlFor="firstname"
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
                          "w-node-_3e02db46-e9ac-3c4b-2060-8f31d9f7c420-d9f7c3fb"
                        )}
                        tag="div"
                      >
                        <FormBlockLabel
                          className={_utils.cx(_styles, "field-label-26")}
                          htmlFor="student_name"
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
                    <Block
                      className={_utils.cx(_styles, "wrap-v-tiny")}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(_styles, "field-label-26")}
                        tag="div"
                      >
                        {"Parent's Phone Number"}
                      </Block>
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
                    <Block
                      className={_utils.cx(_styles, "wrap-v-tiny")}
                      tag="div"
                    >
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
                    <Block
                      className={_utils.cx(_styles, "wrap-v-tiny")}
                      tag="div"
                    >
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
                    <Block
                      className={_utils.cx(_styles, "wrap-v-tiny")}
                      tag="div"
                    >
                      <FormBlockLabel
                        className={_utils.cx(_styles, "field-label-26")}
                        htmlFor="email"
                      >
                        {"Subject"}
                      </FormBlockLabel>
                      <Block className={_utils.cx(_styles, "select")} tag="div">
                        <FormSelect
                          className={_utils.cx(_styles, "select-field-7")}
                          data-name="subject"
                          id={_utils.cx(_styles, "subject")}
                          multiple={false}
                          name="subject"
                          options={[
                            {
                              t: "Select one...",
                              v: "",
                            },
                            {
                              t: "Biology",
                              v: "Biology",
                            },
                            {
                              t: "Physics",
                              v: "Physics",
                            },
                            {
                              t: "English",
                              v: "English",
                            },
                            {
                              t: "Math",
                              v: "Math",
                            },
                            {
                              t: "Chemistry",
                              v: "Chemistry",
                            },
                            {
                              t: "Coding",
                              v: "Coding",
                            },
                            {
                              t: "SAT",
                              v: "SAT",
                            },
                            {
                              t: "Arabic",
                              v: "Arabic",
                            },
                            {
                              t: "Public Speaking",
                              v: "Public Speaking",
                            },
                            {
                              t: "Social Science",
                              v: "Social Science",
                            },
                          ]}
                          required={false}
                        />
                      </Block>
                    </Block>
                    <Block
                      className={_utils.cx(_styles, "wrap-v-tiny")}
                      tag="div"
                    >
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
                  </Block>
                  <Block
                    className={_utils.cx(_styles, "wrap-v-small-12")}
                    tag="div"
                  >
                    <FormButton
                      className={_utils.cx(_styles, "button-primary-square-2")}
                      data-wait="Please wait..."
                      type="submit"
                      value="Book a Free Trial"
                    />
                  </Block>
                </FormForm>
                <FormSuccessMessage
                  className={_utils.cx(_styles, "success-message-12")}
                >
                  <Block tag="div">
                    {"Thank you! Your submission has been received!"}
                  </Block>
                </FormSuccessMessage>
                <FormErrorMessage
                  className={_utils.cx(_styles, "error-message-4")}
                >
                  <Block tag="div">
                    {"Oops! Something went wrong while submitting the form."}
                  </Block>
                </FormErrorMessage>
              </FormWrapper>
            </Grid>
          </Block>
        </Block>
      </Section>
      <HtmlEmbed
        content=""
        value="%3C!--%3Cstyle%3E%0A.iti__selected-flag%20%7B%0A%20%20%20%20margin-bottom%3A12px%3B%0A%20%20%20%20color%3A%20%23525f75%3B%0A%20%20%20%20text-align%3A%20left%3B%0A%20%20%20%20border%3A%201px%20solid%20%23b5b5b5%3B%0A%20%20%20%20border-radius%3A%208px%3B%0A%20%20%20%20margin-bottom%3A%200%3B%0A%20%20%20%20padding%3A%2012px%2016px%20!important%3B%0A%0A%7D%20%0A.iti__flag-container%7B%0A%20%20%20%20position%3A%20relative%20!important%3B%0A%20%20%20%20font-size%3A%2016px%3B%0A%20%20%20%20box-shadow%3A%200%201px%202px%20%2323272e14%20!important%3B%0A%20%20%20%20top%3A%20-42px%20!important%3B%0A%20%20%20%20margin-bottom%3A12px%20!important%3B%0A%7D%0Alabel%5Bfor%3D%22phonenumber%22%5D%20%7B%0A%20%20%20%20position%3A%20relative%20!important%3B%0A%20%20%20%20top%3A%20116px%20!important%3B%0A%7D%0A.iti--allow-dropdown%20input%2C%20.iti--allow-dropdown%20input%5Btype%3Dtel%5D%7B%0A%20%20%20%20padding%3A%2012px%2016px%20!important%3B%0A%0A%7D%0A%3C%2Fstyle%3E--%3E"
      />
    </_Component>
  );
}
