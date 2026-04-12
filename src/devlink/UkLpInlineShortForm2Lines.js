'use client';
import React from 'react';
import _styles from './css/classes.module.css';
import * as _utils from './utils';
import Block from './_Builtin/Block';
import FormButton from './_Builtin/FormButton';
import FormErrorMessage from './_Builtin/FormErrorMessage';
import FormForm from './_Builtin/FormForm';
import FormSelect from './_Builtin/FormSelect';
import FormSuccessMessage from './_Builtin/FormSuccessMessage';
import FormTextInput from './_Builtin/FormTextInput';
import FormWrapper from './_Builtin/FormWrapper';
import HtmlEmbed from './_Builtin/HtmlEmbed';
import Strong from './_Builtin/Strong';

export function UkLpInlineShortForm2Lines({ as: _Component = Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, 'header-form-wrapper')}
      id={_utils.cx(_styles, 'form-on-top')}
      tag="div"
    >
      <FormWrapper className={_utils.cx(_styles, 'form-block-7')}>
        <FormForm
          className={_utils.cx(_styles, 'header-newsletter-form')}
          data-name="LP UK - popup"
          data-redirect="/success-page"
          id={_utils.cx(_styles, 'wf-form-LP-UK---popup')}
          method="get"
          name="wf-form-LP-UK---popup"
          redirect="/success-page"
        >
          <Block
            className={_utils.cx(_styles, 'error-message-checkbox')}
            tag="div"
          >
            <Block className={_utils.cx(_styles, 'text-block-130')} tag="div">
              {'Please enter a 10-digit phone number'}
            </Block>
          </Block>
          <HtmlEmbed
            className={_utils.cx(_styles, 'html-embed-11')}
            content=""
            value="%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_source%22%20name%3D%22utm_source%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_medium%22%20name%3D%22utm_medium%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_campaign%22%20name%3D%22utm_campaign%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_content%22%20name%3D%22utm_content%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_term%22%20name%3D%22utm_term%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22gclid%22%20name%3D%22gclid%22%3E%0A%3Cstyle%3E%0A.iti%20%7B%0A%20%20%20%20margin-bottom%3A%200rem%20!important%3B%0A%7D%0A%3C%2Fstyle%3E"
          />
          <Block className={_utils.cx(_styles, 'parent_notice-llp3')} tag="div">
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
                className={_utils.cx(_styles, 'form-icon-wrapper')}
                tag="div"
              >
                <FormTextInput
                  autoFocus={false}
                  className={_utils.cx(_styles, 'form-text-field', 'input-2')}
                  data-name="Parent Name"
                  disabled={false}
                  id={_utils.cx(_styles, 'Parent-Name-7')}
                  maxLength={256}
                  name="Parent-Name"
                  placeholder="Parent Name "
                  required={true}
                  type="text"
                />
              </Block>
              <Block
                className={_utils.cx(_styles, 'form-icon-wrapper')}
                tag="div"
              >
                <FormTextInput
                  autoFocus={false}
                  className={_utils.cx(_styles, 'form-text-field', 'input-2')}
                  data-name="Phone"
                  disabled={false}
                  id={_utils.cx(_styles, 'phoneNumber-uae')}
                  maxLength={256}
                  ms-code-phone-number="ca,gb,us"
                  name="Phone"
                  placeholder="77250730XX"
                  required={true}
                  type="tel"
                />
              </Block>
            </Block>
            <Block
              className={_utils.cx(_styles, 'indcbse-lp3-inputname-2-main')}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, 'form-icon-wrapper')}
                tag="div"
              >
                <FormTextInput
                  autoFocus={false}
                  className={_utils.cx(_styles, 'form-text-field', 'input-2')}
                  data-name="Email Address"
                  disabled={false}
                  id={_utils.cx(_styles, 'Email-Address-13')}
                  maxLength={256}
                  name="Email-Address"
                  placeholder="Email Address"
                  required={true}
                  type="email"
                />
              </Block>
              <Block
                className={_utils.cx(_styles, 'form-icon-wrapper')}
                tag="div"
              >
                <FormSelect
                  className={_utils.cx(_styles, 'form-text-field', 'input-2')}
                  data-name="Grade"
                  id={_utils.cx(_styles, 'Grade-6')}
                  multiple={false}
                  name="Grade"
                  options={[
                    {
                      t: 'Grade',
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
            </Block>
            <Block className={_utils.cx(_styles, 'btn-lp3-form')} tag="div">
              <FormButton
                className={_utils.cx(
                  _styles,
                  'button-primary-large-2',
                  'button',
                  'submit'
                )}
                data-wait="Please wait..."
                type="submit"
                value="Book a free trial"
              />
            </Block>
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
    </_Component>
  );
}
