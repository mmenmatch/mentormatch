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
import HtmlEmbed from './_Builtin/HtmlEmbed';
import Image from './_Builtin/Image';
import Section from './_Builtin/Section';
import Strong from './_Builtin/Strong';

export function LfLpUae({ as: _Component = Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, 'section-regular-6')}
      grid={{
        type: 'section',
      }}
      tag="section"
    >
      <Block className={_utils.cx(_styles, 'container-regular-11')} tag="div">
        <Grid className={_utils.cx(_styles, 'grid-two-column-3')} tag="div">
          <Block
            className={_utils.cx(_styles, 'form-card')}
            id={_utils.cx(
              _styles,
              'w-node-_7d2d500e-d5ae-cbd9-1480-565afd3eb89d-fd3eb89a'
            )}
            tag="div"
          >
            <FormWrapper className={_utils.cx(_styles, 'form_block---fl')}>
              <FormForm
                className={_utils.cx(_styles, 'form-6---lf')}
                data-name="LF:All Leads"
                data-redirect="/success-page"
                id={_utils.cx(_styles, 'wf-form-LF-All-Leads')}
                method="get"
                name="wf-form-LF-All-Leads"
                redirect="/success-page"
              >
                <HtmlEmbed
                  className={_utils.cx(_styles, 'html-embed-9')}
                  content=""
                  value="%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_source%22%20name%3D%22utm_source%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_medium%22%20name%3D%22utm_medium%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_campaign%22%20name%3D%22utm_campaign%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_content%22%20name%3D%22utm_content%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_term%22%20name%3D%22utm_term%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22gclid%22%20name%3D%22gclid%22%3E"
                />
                <Block
                  className={_utils.cx(_styles, 'parent_notice-llp3')}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, 'indcbse-lp3-bookdemo-title')}
                    tag="div"
                  >
                    {'Book a Free Demo Class with us'}
                    <Strong>{''}</Strong>
                  </Block>
                </Block>
                <Block className={_utils.cx(_styles, 'step_1')} tag="div">
                  <Block
                    className={_utils.cx(_styles, 'indcbse-lp3-inputname-2')}
                    tag="div"
                  >
                    <Block
                      className={_utils.cx(_styles, 'input_wrapper-indcbse-2')}
                      tag="div"
                    >
                      <FormBlockLabel
                        className={_utils.cx(_styles, 'field-label-15')}
                        htmlFor="Parents-Name-5"
                      >
                        {"Parent's Name"}
                      </FormBlockLabel>
                      <FormTextInput
                        autoFocus={false}
                        className={_utils.cx(_styles, 'field_input')}
                        data-ms-member="city"
                        data-name="Parents Name 5"
                        disabled={false}
                        id={_utils.cx(_styles, 'Parents-Name-5')}
                        maxLength={256}
                        name="Parents-Name-5"
                        placeholder="John Smith"
                        required={true}
                        type="text"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, 'input_wrapper-lp3')}
                      tag="div"
                    >
                      <FormBlockLabel
                        className={_utils.cx(_styles, 'field-label-7')}
                        htmlFor="Students-Name-5"
                      >
                        {"Child's Name"}
                      </FormBlockLabel>
                      <FormTextInput
                        autoFocus={false}
                        className={_utils.cx(_styles, 'field_input')}
                        data-ms-member="apartment"
                        data-name="Students Name 5"
                        disabled={false}
                        id={_utils.cx(_styles, 'Students-Name-5')}
                        maxLength={256}
                        name="Students-Name-5"
                        placeholder="Jade Smith"
                        required={true}
                        type="text"
                      />
                    </Block>
                  </Block>
                  <Block
                    className={_utils.cx(_styles, 'input_wrapper')}
                    tag="div"
                  >
                    <FormBlockLabel
                      className={_utils.cx(_styles, 'field-label-7')}
                      htmlFor="phoneNumber"
                    >
                      {"Parent's Phone Number"}
                    </FormBlockLabel>
                    <FormTextInput
                      autoFocus={false}
                      className={_utils.cx(_styles, 'field_input')}
                      data-name="Phone Number"
                      disabled={false}
                      id={_utils.cx(_styles, 'phoneNumber')}
                      maxLength={256}
                      ms-code-phone-number="ca,gb,us"
                      name="Phone-Number"
                      placeholder="93850730XX"
                      required={true}
                      type="tel"
                    />
                  </Block>
                  <Block
                    className={_utils.cx(_styles, 'input_wrapper')}
                    tag="div"
                  >
                    <FormBlockLabel
                      className={_utils.cx(_styles, 'field-label-7')}
                      htmlFor="Email-Address-14"
                    >
                      {'Email Address'}
                    </FormBlockLabel>
                    <FormTextInput
                      autoFocus={false}
                      className={_utils.cx(_styles, 'field_input')}
                      data-ms-member="email"
                      data-name="Email Address 14"
                      disabled={false}
                      id={_utils.cx(_styles, 'Email-Address-14')}
                      maxLength={256}
                      name="Email-Address-14"
                      placeholder="john@email.com"
                      required={true}
                      type="email"
                    />
                  </Block>
                </Block>
                <Block className={_utils.cx(_styles, 'step_2')} tag="div">
                  <Block
                    className={_utils.cx(
                      _styles,
                      'indcbse-lp3-inputname-2-main'
                    )}
                    tag="div"
                  >
                    <Block
                      className={_utils.cx(_styles, 'input_wrapper-indcbse-2')}
                      tag="div"
                    >
                      <FormBlockLabel
                        className={_utils.cx(_styles, 'field-label-7')}
                        htmlFor="Grades-7"
                      >
                        {'Select Grade'}
                      </FormBlockLabel>
                      <FormSelect
                        className={_utils.cx(_styles, 'field_input-dropdown-2')}
                        data-name="Grades 7"
                        id={_utils.cx(_styles, 'Grades-7')}
                        multiple={false}
                        name="Grades-7"
                        options={[
                          {
                            t: 'Select one...',
                            v: '',
                          },
                          {
                            t: 'Grade 1',
                            v: 'Grade 1',
                          },
                          {
                            t: 'Grade 2',
                            v: 'Grade 2',
                          },
                          {
                            t: 'Grade 3',
                            v: 'Grade 3',
                          },
                          {
                            t: 'Grade 4',
                            v: 'Grade 4',
                          },
                          {
                            t: 'Grade 5',
                            v: 'Grade 5',
                          },
                          {
                            t: 'Grade 6',
                            v: 'Grade 6',
                          },
                          {
                            t: 'Grade 7',
                            v: 'Grade 7',
                          },
                          {
                            t: 'Grade 8',
                            v: 'Grade 8',
                          },
                          {
                            t: 'Grade 9',
                            v: 'Grade 9',
                          },
                          {
                            t: 'Grade 10',
                            v: 'Grade 10',
                          },
                          {
                            t: 'Grade 11',
                            v: 'Grade 11',
                          },
                          {
                            t: 'Grade 12',
                            v: 'Grade 12',
                          },
                        ]}
                        required={true}
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, 'input_wrapper-lp3')}
                      tag="div"
                    >
                      <FormBlockLabel
                        className={_utils.cx(_styles, 'field-label-7')}
                        htmlFor="Subjects-7"
                      >
                        {'Select Subject'}
                      </FormBlockLabel>
                      <FormSelect
                        className={_utils.cx(_styles, 'field_input-dropdown-2')}
                        data-name="Subjects 7"
                        id={_utils.cx(_styles, 'Subjects-7')}
                        multiple={false}
                        name="Subjects-7"
                        options={[
                          {
                            t: 'Select one...',
                            v: '',
                          },
                          {
                            t: 'Math',
                            v: 'Maths',
                          },
                          {
                            t: 'English',
                            v: 'English',
                          },
                        ]}
                        required={true}
                      />
                    </Block>
                  </Block>
                </Block>
                <Block className={_utils.cx(_styles, 'step_2')} tag="div">
                  <Block
                    className={_utils.cx(_styles, 'indcbse-lp3-flex')}
                    tag="div"
                  >
                    <Block
                      className={_utils.cx(_styles, 'input_wrapper-qdrpd')}
                      tag="div"
                    >
                      <FormBlockLabel
                        className={_utils.cx(_styles, 'field-label-7')}
                        htmlFor="Academic-4"
                      >
                        {
                          'How would you describe your child’s current academic journey?'
                        }
                      </FormBlockLabel>
                      <FormSelect
                        className={_utils.cx(_styles, 'field_input-qdropd')}
                        data-name="Academic 4"
                        id={_utils.cx(_styles, 'Academic-4')}
                        multiple={false}
                        name="Academic-4"
                        options={[
                          {
                            t: 'Select one...',
                            v: '',
                          },
                          {
                            t: 'Needs support to improve (<50%)',
                            v: 'Needs support to improve (<50%)',
                          },
                          {
                            t: 'Doing fine, but can do better (50% - 70%)',
                            v: 'Doing fine, but can do better (50% - 70%)',
                          },
                          {
                            t: 'Excelling and ready for more! (>70%)',
                            v: 'Excelling and ready for more! (>70%)',
                          },
                        ]}
                        required={true}
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, 'input_wrapper-qdrpd')}
                      tag="div"
                    >
                      <FormBlockLabel
                        className={_utils.cx(_styles, 'field-label-7')}
                        htmlFor="Pricing-4"
                      >
                        {
                          'Are you comfortable with a price of AED75 per session?'
                        }
                      </FormBlockLabel>
                      <FormSelect
                        className={_utils.cx(_styles, 'field_input-qdropd')}
                        data-name="Pricing 4"
                        id={_utils.cx(_styles, 'Pricing-4')}
                        multiple={false}
                        name="Pricing-4"
                        options={[
                          {
                            t: 'Select one...',
                            v: '',
                          },
                          {
                            t: 'Yes',
                            v: 'Yes',
                          },
                          {
                            t: 'No',
                            v: 'No',
                          },
                        ]}
                        required={true}
                      />
                    </Block>
                    <Block
                      className={_utils.cx(_styles, 'input_wrapper-qdrpd')}
                      tag="div"
                    >
                      <FormBlockLabel
                        className={_utils.cx(_styles, 'field-label-7')}
                        htmlFor="Calliing-Time-4"
                      >
                        {'When’s a good time for a 15-minute counseling call?'}
                      </FormBlockLabel>
                      <FormSelect
                        className={_utils.cx(_styles, 'field_input-qdropd')}
                        data-name="Calliing Time 4"
                        id={_utils.cx(_styles, 'Calliing-Time-4')}
                        multiple={false}
                        name="Calliing-Time-4"
                        options={[
                          {
                            t: 'Select one...',
                            v: '',
                          },
                          {
                            t: 'Morning (9:00 AM – 12:00 PM)',
                            v: 'Morning (9:00 AM – 12:00 PM)',
                          },
                          {
                            t: 'Afternoon (12:00 PM – 4:00 PM)',
                            v: 'Afternoon (12:00 PM – 4:00 PM)',
                          },
                          {
                            t: 'Evening (4:00 PM – 8:00 PM)',
                            v: 'Evening (4:00 PM – 8:00 PM)',
                          },
                        ]}
                        required={true}
                      />
                    </Block>
                  </Block>
                </Block>
                <Block className={_utils.cx(_styles, 'step_3')} tag="div">
                  <FormButton
                    className={_utils.cx(_styles, 'button_submit')}
                    data-wait="Please wait..."
                    type="submit"
                    value="Book a free trial"
                  />
                </Block>
              </FormForm>
              <FormSuccessMessage>
                <Block tag="div">
                  {'Thank you! Your submission has been received!'}
                </Block>
              </FormSuccessMessage>
              <FormErrorMessage>
                <Block tag="div">
                  {'Oops! Something went wrong while submitting the form.'}
                </Block>
              </FormErrorMessage>
            </FormWrapper>
          </Block>
          <Block className={_utils.cx(_styles, 'contact-map-right')} tag="div">
            <Image
              alt=""
              className={_utils.cx(_styles, 'contact-map')}
              height="auto"
              loading="lazy"
              src="https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/6752bd1cccfd4cc719efc08a_web%20banner.webp"
              width="auto"
            />
          </Block>
        </Grid>
      </Block>
    </_Component>
  );
}
