'use client';
import React from 'react';
import _styles from './css/classes.module.css';
import * as _utils from './utils';
import Block from './_Builtin/Block';
import FormBlockLabel from './_Builtin/FormBlockLabel';
import FormButton from './_Builtin/FormButton';
import FormErrorMessage from './_Builtin/FormErrorMessage';
import FormForm from './_Builtin/FormForm';
import FormSelect from './_Builtin/FormSelect';
import FormSuccessMessage from './_Builtin/FormSuccessMessage';
import FormTextInput from './_Builtin/FormTextInput';
import FormWrapper from './_Builtin/FormWrapper';
import Grid from './_Builtin/Grid';
import Heading from './_Builtin/Heading';
import HtmlEmbed from './_Builtin/HtmlEmbed';
import Image from './_Builtin/Image';
import Paragraph from './_Builtin/Paragraph';
import Section from './_Builtin/Section';

export function ServiceBlogForm({
  as: _Component = Block,
  image = 'https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/675ac49cc6555d082c77d34c_img%20(1).avif',
  text1 = 'Contact us',
  text2 = (
    <>
      {'Call us at '}
      {
        ' or fill the form to talk about your child’s learning goals and book a trial class to see how we can support their academic journey'
      }
    </>
  ),
  title = '',
}) {
  return (
    <_Component
      className={_utils.cx(_styles, 'cta-section-nh-2', 'hide-bg')}
      tag="div"
    >
      <Section
        className={_utils.cx(_styles, 'section-cta', 'background-gray')}
        grid={{
          type: 'section',
        }}
        tag="section"
      >
        <Block className={_utils.cx(_styles, 'container-regular-21')} tag="div">
          <Block
            className={_utils.cx(_styles, 'uui-max-width-large-15-newhome')}
            tag="div"
          >
            <Heading
              className={_utils.cx(_styles, 'uui-cta-29-title-2')}
              tag="h2"
            >
              {title}
            </Heading>
            <Block
              className={_utils.cx(_styles, 'uui-space-xsmall-14')}
              tag="div"
            />
          </Block>
          <Block className={_utils.cx(_styles, 'contact-card-2')} tag="div">
            <Grid className={_utils.cx(_styles, 'contact-grid')} tag="div">
              <Block
                className={_utils.cx(
                  _styles,
                  'contact-content-3',
                  'remove-background'
                )}
                id={_utils.cx(
                  _styles,
                  'w-node-f0320347-e5e7-3d98-ee37-d7f3690d3798-690d378e'
                )}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, 'contact-detail-card')}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, 'contact-card-title')}
                    tag="div"
                  >
                    <Block
                      className={_utils.cx(_styles, 'contact-icon-wrapper')}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, 'icon-large-6')}
                        content=""
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M28.0003%2016.2933C28.0003%208.97333%2022.3203%204%2016.0003%204C9.74699%204%204.00033%208.86667%204.00033%2016.3733C3.20033%2016.8267%202.66699%2017.68%202.66699%2018.6667V21.3333C2.66699%2022.8%203.86699%2024%205.33366%2024C6.06699%2024%206.66699%2023.4%206.66699%2022.6667V16.2533C6.66699%2011.1467%2010.6003%206.68%2015.707%206.53333C20.987%206.37333%2025.3337%2010.6133%2025.3337%2015.8667V25.3333H16.0003C15.267%2025.3333%2014.667%2025.9333%2014.667%2026.6667C14.667%2027.4%2015.267%2028%2016.0003%2028H25.3337C26.8003%2028%2028.0003%2026.8%2028.0003%2025.3333V23.7067C28.787%2023.2933%2029.3337%2022.48%2029.3337%2021.52V18.4533C29.3337%2017.52%2028.787%2016.7067%2028.0003%2016.2933Z%22%20fill%3D%22currentColor%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M12.0003%2018.6667C12.7367%2018.6667%2013.3337%2018.0697%2013.3337%2017.3333C13.3337%2016.597%2012.7367%2016%2012.0003%2016C11.2639%2016%2010.667%2016.597%2010.667%2017.3333C10.667%2018.0697%2011.2639%2018.6667%2012.0003%2018.6667Z%22%20fill%3D%22currentColor%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M20.0003%2018.6667C20.7367%2018.6667%2021.3337%2018.0697%2021.3337%2017.3333C21.3337%2016.597%2020.7367%2016%2020.0003%2016C19.2639%2016%2018.667%2016.597%2018.667%2017.3333C18.667%2018.0697%2019.2639%2018.6667%2020.0003%2018.6667Z%22%20fill%3D%22currentColor%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M24.0003%2014.7067C23.3603%2010.9067%2020.0537%208%2016.067%208C12.027%208%207.68033%2011.3467%208.02699%2016.6C11.3203%2015.2533%2013.8003%2012.32%2014.507%208.74667C16.2537%2012.2533%2019.8403%2014.6667%2024.0003%2014.7067Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, 'column-x-small-2')}
                      tag="div"
                    >
                      <Block
                        className={_utils.cx(_styles, 'subheading-large')}
                        tag="div"
                      >
                        {text1}
                      </Block>
                      <Paragraph
                        className={_utils.cx(_styles, 'paragraph-small-14')}
                      >
                        {text2}
                      </Paragraph>
                    </Block>
                  </Block>
                </Block>
                <Block
                  className={_utils.cx(_styles, 'contact-image')}
                  tag="div"
                >
                  <Image
                    alt=""
                    className={_utils.cx(_styles, 'image-cover-2')}
                    height="auto"
                    loading="lazy"
                    src={image}
                    width="auto"
                  />
                </Block>
              </Block>
              <FormWrapper
                className={_utils.cx(_styles, 'contact-form-block-outline')}
                id={_utils.cx(
                  _styles,
                  'w-node-f0320347-e5e7-3d98-ee37-d7f3690d37a7-690d378e'
                )}
              >
                <FormForm
                  className={_utils.cx(_styles, 'contact-form-3')}
                  data-name="Contact Form"
                  id={_utils.cx(_styles, 'wf-form-Contact-Form')}
                  method="get"
                  name="wf-form-Contact-Form"
                >
                  <Block
                    className={_utils.cx(_styles, 'wrap-v-large')}
                    tag="div"
                  >
                    <Grid className={_utils.cx(_styles, 'form-grid')} tag="div">
                      <Block
                        className={_utils.cx(_styles, 'wrap-v-tiny')}
                        tag="div"
                      >
                        <FormBlockLabel
                          className={_utils.cx(_styles, 'field-label-24')}
                          htmlFor="firstname"
                        >
                          {"Parent's Name"}
                        </FormBlockLabel>
                        <FormTextInput
                          autoFocus={false}
                          className={_utils.cx(_styles, 'text-field-5')}
                          data-name="firstname"
                          disabled={false}
                          id={_utils.cx(_styles, 'firstname')}
                          maxLength={256}
                          name="firstname"
                          placeholder="John Smith"
                          required={true}
                          type="text"
                        />
                      </Block>
                      <Block
                        className={_utils.cx(_styles, 'wrap-v-tiny')}
                        id={_utils.cx(
                          _styles,
                          'w-node-f0320347-e5e7-3d98-ee37-d7f3690d37af-690d378e'
                        )}
                        tag="div"
                      >
                        <FormBlockLabel
                          className={_utils.cx(_styles, 'field-label-24')}
                          htmlFor="student_name"
                        >
                          {"Student's Name"}
                        </FormBlockLabel>
                        <FormTextInput
                          autoFocus={false}
                          className={_utils.cx(_styles, 'text-field-5')}
                          data-name="student_name"
                          disabled={false}
                          id={_utils.cx(_styles, 'student_name')}
                          maxLength={256}
                          name="student_name"
                          placeholder="Jade Smith"
                          required={true}
                          type="text"
                        />
                      </Block>
                    </Grid>
                    <Block
                      className={_utils.cx(_styles, 'wrap-v-tiny')}
                      tag="div"
                    >
                      <FormBlockLabel
                        className={_utils.cx(_styles, 'field-label-24')}
                        htmlFor="phone"
                      >
                        {"Parent's Phone Number"}
                      </FormBlockLabel>
                      <FormTextInput
                        autoFocus={false}
                        className={_utils.cx(_styles, 'text-field-5')}
                        data-name="phone"
                        disabled={false}
                        id={_utils.cx(_styles, 'phone')}
                        maxLength={256}
                        name="phone"
                        placeholder="+1 783-234-6334"
                        required={true}
                        type="tel"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, 'wrap-v-tiny')}
                      tag="div"
                    >
                      <FormBlockLabel
                        className={_utils.cx(_styles, 'field-label-24')}
                        htmlFor="email"
                      >
                        {'Email Address'}
                      </FormBlockLabel>
                      <FormTextInput
                        autoFocus={false}
                        className={_utils.cx(_styles, 'text-field-5')}
                        data-name="email"
                        disabled={false}
                        id={_utils.cx(_styles, 'email')}
                        maxLength={256}
                        name="email"
                        placeholder="Enter your email"
                        required={true}
                        type="email"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, 'wrap-v-tiny')}
                      tag="div"
                    >
                      <FormBlockLabel
                        className={_utils.cx(_styles, 'field-label-24')}
                        htmlFor="email"
                      >
                        {'Select Grade'}
                      </FormBlockLabel>
                      <Block className={_utils.cx(_styles, 'select')} tag="div">
                        <FormSelect
                          className={_utils.cx(_styles, 'select-field-6')}
                          data-name="class"
                          id={_utils.cx(_styles, 'class')}
                          multiple={false}
                          name="class"
                          options={[
                            {
                              t: 'Select one...',
                              v: '',
                            },
                            {
                              t: '1',
                              v: '1',
                            },
                            {
                              t: '2',
                              v: '2',
                            },
                            {
                              t: '3',
                              v: '3',
                            },
                            {
                              t: '4',
                              v: '4',
                            },
                            {
                              t: '5',
                              v: '5',
                            },
                            {
                              t: '6',
                              v: '6',
                            },
                            {
                              t: '7',
                              v: '7',
                            },
                            {
                              t: '8',
                              v: '8',
                            },
                            {
                              t: '9',
                              v: '9',
                            },
                            {
                              t: '10',
                              v: '10',
                            },
                            {
                              t: '11',
                              v: '11',
                            },
                            {
                              t: '12',
                              v: '12',
                            },
                          ]}
                          required={false}
                        />
                      </Block>
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(_styles, 'wrap-v-small-10')}
                    tag="div"
                  >
                    <FormButton
                      className={_utils.cx(_styles, 'button-primary-square-2')}
                      data-wait="Please wait..."
                      type="submit"
                      value="Book a Free Trial"
                    />
                  </Block>
                </FormForm>
                <FormSuccessMessage
                  className={_utils.cx(_styles, 'success-message-10')}
                >
                  <Block tag="div">
                    {'Thank you! Your submission has been received!'}
                  </Block>
                </FormSuccessMessage>
                <FormErrorMessage
                  className={_utils.cx(_styles, 'error-message-4')}
                >
                  <Block tag="div">
                    {'Oops! Something went wrong while submitting the form.'}
                  </Block>
                </FormErrorMessage>
              </FormWrapper>
            </Grid>
          </Block>
        </Block>
      </Section>
    </_Component>
  );
}
