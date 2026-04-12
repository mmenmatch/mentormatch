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
import Heading from './_Builtin/Heading';
import HtmlEmbed from './_Builtin/HtmlEmbed';
import List from './_Builtin/List';
import ListItem from './_Builtin/ListItem';
import RichText from './_Builtin/RichText';

export function BlogForm({ as: _Component = FormWrapper }) {
  return (
    <_Component className={_utils.cx(_styles, 'form_block-popup')}>
      <FormForm
        className={_utils.cx(_styles, 'form-6-stick')}
        data-name="US LP - SD"
        data-redirect="/successpage"
        id={_utils.cx(_styles, 'wf-form-US-LP---SD')}
        method="get"
        ms-code-validate-form=""
        name="wf-form-US-LP---SD"
        redirect="/successpage"
      >
        <Block
          className={_utils.cx(_styles, 'heading-signup')}
          id={_utils.cx(
            _styles,
            'w-node-_14ca0454-7c24-202e-9b55-b967b76c5146-b76c5144'
          )}
          tag="div"
        >
          <Heading className={_utils.cx(_styles, 'h1-2')} tag="h1">
            {'Signup to start learning'}
          </Heading>
        </Block>
        <HtmlEmbed
          className={_utils.cx(_styles, 'html-embed-12')}
          content=""
          value="%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_source%22%20placeholder%3D%22utm_source%22%20name%3D%22utm_source%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_medium%22%20placeholder%3D%22utm_medium%22%20name%3D%22utm_medium%22%3E%0A%3Cinput%20type%3D%22hidden%22%20class%3D%22utm_campaign%22%20placeholder%3D%22utm_campaign%22%20name%3D%22utm_campaign%22%3E"
        />
        <Block
          className={_utils.cx(_styles, 'input-wrap')}
          id={_utils.cx(
            _styles,
            'w-node-_14ca0454-7c24-202e-9b55-b967b76c514a-b76c5144'
          )}
          tag="div"
        >
          <FormBlockLabel
            className={_utils.cx(_styles, 'label')}
            htmlFor="Parent-Name"
          >
            {"Parent's Name"}
          </FormBlockLabel>
          <FormTextInput
            autoFocus={false}
            className={_utils.cx(_styles, 'input-3')}
            data-name="firstname"
            disabled={false}
            id={_utils.cx(_styles, 'firstname')}
            maxLength={256}
            name="firstname"
            placeholder="Enter your name"
            required={false}
            type="text"
          />
        </Block>
        <Block className={_utils.cx(_styles, 'input-wrap')} tag="div">
          <FormBlockLabel
            className={_utils.cx(_styles, 'label')}
            htmlFor="phone"
          >
            {'Phone Number'}
          </FormBlockLabel>
          <FormTextInput
            autoFocus={false}
            className={_utils.cx(_styles, 'input-3')}
            data-name="phone"
            disabled={false}
            id={_utils.cx(_styles, 'phone')}
            maxLength={256}
            ms-code-phone-number="ca,gb,us"
            name="phone"
            placeholder="Enter your number"
            required={true}
            type="tel"
          />
        </Block>
        <Block className={_utils.cx(_styles, 'input-wrap')} tag="div">
          <FormBlockLabel
            className={_utils.cx(_styles, 'label')}
            htmlFor="Email-Address"
          >
            {'Email Address'}
          </FormBlockLabel>
          <FormTextInput
            autoFocus={false}
            className={_utils.cx(_styles, 'input-3')}
            data-name="email"
            disabled={false}
            id={_utils.cx(_styles, 'email')}
            maxLength={256}
            name="email"
            placeholder="Enter your email address"
            required={true}
            type="email"
          />
        </Block>
        <Block className={_utils.cx(_styles, 'input-wrap')} tag="div">
          <FormBlockLabel
            className={_utils.cx(_styles, 'label')}
            htmlFor="Grade-5"
          >
            {'Select Grade'}
          </FormBlockLabel>
          <FormSelect
            className={_utils.cx(_styles, 'input-3')}
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
            required={true}
          />
        </Block>
        <Block className={_utils.cx(_styles, 'hidden-errors')} tag="div">
          <RichText
            className={_utils.cx(_styles, 'ms-code-validation-error')}
            slot=""
            tag="div"
          >
            <List tag="ul" unstyled={false}>
              <ListItem>{'Something bad'}</ListItem>
            </List>
          </RichText>
          <HtmlEmbed
            content=""
            value="%3Cstyle%3E%0Aul%20%7B%0Apadding-left%3A%200px%20!important%3B%0A%3C%2Fstyle%3E"
          />
        </Block>
        <FormButton
          className={_utils.cx(_styles, 'button', 'submit')}
          data-wait="Please wait..."
          type="submit"
          value="Get your first session free"
        />
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
    </_Component>
  );
}
