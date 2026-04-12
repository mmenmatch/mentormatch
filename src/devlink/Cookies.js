'use client';
import React from 'react';
import _styles from './css/classes.module.css';
import * as _utils from './utils';
import Block from './_Builtin/Block';
import FormButton from './_Builtin/FormButton';
import FormCheckboxInput from './_Builtin/FormCheckboxInput';
import FormCheckboxWrapper from './_Builtin/FormCheckboxWrapper';
import FormErrorMessage from './_Builtin/FormErrorMessage';
import FormForm from './_Builtin/FormForm';
import FormInlineLabel from './_Builtin/FormInlineLabel';
import FormSuccessMessage from './_Builtin/FormSuccessMessage';
import FormWrapper from './_Builtin/FormWrapper';
import HtmlEmbed from './_Builtin/HtmlEmbed';
import Link from './_Builtin/Link';
import Strong from './_Builtin/Strong';
import * as _interactions from './interactions';

const _interactionsData = JSON.parse(
  '{"events":{"e-2877":{"id":"e-2877","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-489","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2878"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-cc-banner_trigger","originalId":"604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a","appliesTo":"CLASS"},"targets":[{"selector":".fs-cc-banner_trigger","originalId":"604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615288220024},"e-2878":{"id":"e-2878","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-490","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2877"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-cc-banner_trigger","originalId":"604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a","appliesTo":"CLASS"},"targets":[{"selector":".fs-cc-banner_trigger","originalId":"604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615288220027},"e-2881":{"id":"e-2881","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-493","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2882"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-cc-prefs_checkbox","originalId":"604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e","appliesTo":"CLASS"},"targets":[{"selector":".fs-cc-prefs_checkbox","originalId":"604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615343217594},"e-2882":{"id":"e-2882","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-494","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2881"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-cc-prefs_checkbox","originalId":"604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e","appliesTo":"CLASS"},"targets":[{"selector":".fs-cc-prefs_checkbox","originalId":"604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615343217595},"e-2883":{"id":"e-2883","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-495","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2884"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-cc-prefs_trigger","originalId":"73e7dc50-5d88-fde2-c817-b2bf73944a4c","appliesTo":"CLASS"},"targets":[{"selector":".fs-cc-prefs_trigger","originalId":"73e7dc50-5d88-fde2-c817-b2bf73944a4c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615393093699},"e-2884":{"id":"e-2884","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-496","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2883"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-cc-prefs_trigger","originalId":"73e7dc50-5d88-fde2-c817-b2bf73944a4c","appliesTo":"CLASS"},"targets":[{"selector":".fs-cc-prefs_trigger","originalId":"73e7dc50-5d88-fde2-c817-b2bf73944a4c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615393093699}},"actionLists":{"a-489":{"id":"a-489","title":"Cookie Banner [SHOW]","actionItemGroups":[{"actionItems":[{"id":"a-489-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bec"]},"value":"none"}},{"id":"a-489-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bec"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-489-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bec"]},"value":"flex"}},{"id":"a-489-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bec"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615288223878},"a-490":{"id":"a-490","title":"Cookie Banner [HIDE]","actionItemGroups":[{"actionItems":[{"id":"a-490-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bec"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-490-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bec"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615288223878},"a-493":{"id":"a-493","title":"Preferences Checkbox [CHECK]","actionItemGroups":[{"actionItems":[{"id":"a-493-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".fs-cc-prefs_toggle","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bf1"]},"xValue":20,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-493-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_checkbox-field","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94c0a"]},"globalSwatchId":"","rValue":67,"bValue":255,"gValue":83,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615343221337},"a-494":{"id":"a-494","title":"Preferences Checkbox [UNCHECK]","actionItemGroups":[{"actionItems":[{"id":"a-494-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".fs-cc-prefs_toggle","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bf1"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-494-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_checkbox-field","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94c0a"]},"globalSwatchId":"","rValue":204,"bValue":204,"gValue":204,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615343221337},"a-495":{"id":"a-495","title":"Preferences Popup [SHOW]","actionItemGroups":[{"actionItems":[{"id":"a-495-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bfa"]},"value":"none"}},{"id":"a-495-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bfa"]},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-495-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bfa"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-495-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bfa"]},"value":"flex"}}]},{"actionItems":[{"id":"a-495-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bfa"]},"value":1,"unit":""}},{"id":"a-495-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bfa"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615393118761},"a-496":{"id":"a-496","title":"Preferences Popup [HIDE]","actionItemGroups":[{"actionItems":[{"id":"a-496-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bfa"]},"value":0,"unit":""}},{"id":"a-496-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bfa"]},"yValue":20,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-496-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-prefs_component","selectorGuids":["7ad85580-1cba-970c-03ec-916baae94bfa"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615393118761}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Cookies({ as: _Component = Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        'set-all-components-to-display-none-and-use-this-div-to-create-a-symbol'
      )}
      tag="div"
    >
      <Block
        className={_utils.cx(_styles, 'fs-cc-banner_component')}
        fs-cc="banner"
        tag="div"
      >
        <Block
          className={_utils.cx(_styles, 'fs-cc-banner_container')}
          tag="div"
        >
          <Block className={_utils.cx(_styles, 'fs-cc-banner_text')} tag="div">
            {'By clicking '}
            <Strong>{'“Accept All Cookies”'}</Strong>
            {
              ', you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. View our '
            }
            <Link
              block=""
              button={false}
              className={_utils.cx(_styles, 'fs-cc-banner_text-link')}
              options={{
                href: '#',
              }}
            >
              {'Privacy Policy'}
            </Link>
            {' for more information.'}
          </Block>
          <Block
            className={_utils.cx(_styles, 'fs-cc-banner_buttons-wrapper')}
            tag="div"
          >
            <Link
              block=""
              button={false}
              className={_utils.cx(_styles, 'fs-cc-banner_text-link')}
              fs-cc="open-preferences"
              options={{
                href: '#',
              }}
            >
              {'Preferences'}
            </Link>
            <Link
              block=""
              button={true}
              className={_utils.cx(
                _styles,
                'fs-cc-banner_button',
                'fs-cc-button-alt'
              )}
              fs-cc="deny"
              options={{
                href: '#',
              }}
            >
              {'Deny'}
            </Link>
            <Link
              block=""
              button={true}
              className={_utils.cx(_styles, 'fs-cc-banner_button')}
              fs-cc="allow"
              options={{
                href: '#',
              }}
            >
              {'Accept'}
            </Link>
            <Block
              className={_utils.cx(_styles, 'fs-cc-banner_close')}
              fs-cc="close"
              tag="div"
            >
              <HtmlEmbed
                className={_utils.cx(_styles, 'fs-cc-banner_close-icon')}
                content=""
                value="%3Csvg%20fill%3D%22currentColor%22%20aria-hidden%3D%22true%22%20focusable%3D%22false%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%09%3Cpath%20d%3D%22M9.414%208l4.293-4.293-1.414-1.414L8%206.586%203.707%202.293%202.293%203.707%206.586%208l-4.293%204.293%201.414%201.414L8%209.414l4.293%204.293%201.414-1.414L9.414%208z%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </Block>
          </Block>
        </Block>
        <Block
          className={_utils.cx(_styles, 'fs-cc-banner_trigger')}
          fs-cc="interaction"
          tag="div"
        />
      </Block>
      <FormWrapper
        className={_utils.cx(_styles, 'fs-cc-prefs_component')}
        fs-cc="preferences"
        fs-cc-scroll="disable"
      >
        <FormForm
          className={_utils.cx(_styles, 'fs-cc-prefs_form')}
          data-name="Cookie Preferences"
          id={_utils.cx(_styles, 'cookie-preferences')}
          method="get"
          name="wf-form-Cookie-Preferences"
        >
          <Block
            className={_utils.cx(_styles, 'fs-cc-prefs_close')}
            fs-cc="close"
            tag="div"
          >
            <HtmlEmbed
              className={_utils.cx(_styles, 'fs-cc-prefs_close-icon')}
              content=""
              value="%3Csvg%20fill%3D%22currentColor%22%20aria-hidden%3D%22true%22%20focusable%3D%22false%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%09%3Cpath%20d%3D%22M9.414%208l4.293-4.293-1.414-1.414L8%206.586%203.707%202.293%202.293%203.707%206.586%208l-4.293%204.293%201.414%201.414L8%209.414l4.293%204.293%201.414-1.414L9.414%208z%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </Block>
          <Block
            className={_utils.cx(_styles, 'fs-cc-prefs_content')}
            tag="div"
          >
            <Block
              className={_utils.cx(_styles, 'fs-cc-prefs_space-small')}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, 'fs-cc-prefs_title')}
                tag="div"
              >
                {'Privacy Preference Center'}
              </Block>
            </Block>
            <Block
              className={_utils.cx(_styles, 'fs-cc-prefs_space-small')}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, 'fs-cc-prefs_text')}
                tag="div"
              >
                {
                  'When you visit websites, they may store or retrieve data in your browser. This storage is often necessary for the basic functionality of the website. The storage may be used for marketing, analytics, and personalization of the site, such as storing your preferences. Privacy is important to us, so you have the option of disabling certain types of storage that may not be necessary for the basic functioning of the website. Blocking categories may impact your experience on the website.'
                }
              </Block>
            </Block>
            <Block
              className={_utils.cx(_styles, 'fs-cc-prefs_space-medium')}
              tag="div"
            >
              <Link
                block=""
                button={true}
                className={_utils.cx(
                  _styles,
                  'fs-cc-prefs_button',
                  'fs-cc-button-alt'
                )}
                fs-cc="deny"
                options={{
                  href: '#',
                }}
              >
                {'Reject all cookies'}
              </Link>
              <Link
                block=""
                button={true}
                className={_utils.cx(_styles, 'fs-cc-prefs_button')}
                fs-cc="allow"
                options={{
                  href: '#',
                }}
              >
                {'Allow all cookies'}
              </Link>
            </Block>
            <Block
              className={_utils.cx(_styles, 'fs-cc-prefs_space-small')}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, 'fs-cc-prefs_title')}
                tag="div"
              >
                {'Manage Consent Preferences by Category'}
              </Block>
            </Block>
            <Block
              className={_utils.cx(_styles, 'fs-cc-prefs_option')}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, 'fs-cc-prefs_toggle-wrapper')}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, 'fs-cc-prefs_label')}
                  tag="div"
                >
                  {'Essential'}
                </Block>
                <Block
                  className={_utils.cx(_styles, 'fs-cc-prefs_text')}
                  tag="div"
                >
                  <Strong>{'Always Active'}</Strong>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, 'fs-cc-prefs_text')}
                tag="div"
              >
                {
                  'These items are required to enable basic website functionality.'
                }
              </Block>
            </Block>
            <Block
              className={_utils.cx(_styles, 'fs-cc-prefs_option')}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, 'fs-cc-prefs_toggle-wrapper')}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, 'fs-cc-prefs_label')}
                  tag="div"
                >
                  {'Marketing'}
                </Block>
                <FormCheckboxWrapper
                  className={_utils.cx(_styles, 'fs-cc-prefs_checkbox-field')}
                >
                  <FormCheckboxInput
                    checked={false}
                    className={_utils.cx(_styles, 'fs-cc-prefs_checkbox')}
                    data-name="Marketing 2"
                    form={{
                      type: 'checkbox-input',
                      name: 'Marketing 2',
                    }}
                    fs-cc-checkbox="marketing"
                    id={_utils.cx(_styles, 'marketing-2')}
                    inputType=""
                    name="marketing-2"
                    required={false}
                    type="checkbox"
                  />
                  <FormInlineLabel
                    className={_utils.cx(_styles, 'fs-cc-prefs_checkbox-label')}
                    htmlFor="marketing-2"
                  >
                    {'Essential'}
                  </FormInlineLabel>
                  <Block
                    className={_utils.cx(_styles, 'fs-cc-prefs_toggle')}
                    tag="div"
                  />
                </FormCheckboxWrapper>
              </Block>
              <Block
                className={_utils.cx(_styles, 'fs-cc-prefs_text')}
                tag="div"
              >
                {
                  'These items are used to deliver advertising that is more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns. Advertising networks usually place them with the website operator’s permission.'
                }
              </Block>
            </Block>
            <Block
              className={_utils.cx(_styles, 'fs-cc-prefs_option')}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, 'fs-cc-prefs_toggle-wrapper')}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, 'fs-cc-prefs_label')}
                  tag="div"
                >
                  {'Personalization'}
                </Block>
                <FormCheckboxWrapper
                  className={_utils.cx(_styles, 'fs-cc-prefs_checkbox-field')}
                >
                  <FormCheckboxInput
                    checked={false}
                    className={_utils.cx(_styles, 'fs-cc-prefs_checkbox')}
                    data-name="Personalization 2"
                    form={{
                      type: 'checkbox-input',
                      name: 'Personalization 2',
                    }}
                    fs-cc-checkbox="personalization"
                    id={_utils.cx(_styles, 'personalization-2')}
                    inputType=""
                    name="personalization-2"
                    required={false}
                    type="checkbox"
                  />
                  <FormInlineLabel
                    className={_utils.cx(_styles, 'fs-cc-prefs_checkbox-label')}
                    htmlFor="personalization-2"
                  >
                    {'Essential'}
                  </FormInlineLabel>
                  <Block
                    className={_utils.cx(_styles, 'fs-cc-prefs_toggle')}
                    tag="div"
                  />
                </FormCheckboxWrapper>
              </Block>
              <Block
                className={_utils.cx(_styles, 'fs-cc-prefs_text')}
                tag="div"
              >
                {
                  'These items allow the website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personal features. For example, a website may provide you with local weather reports or traffic news by storing data about your current location.'
                }
              </Block>
            </Block>
            <Block
              className={_utils.cx(_styles, 'fs-cc-prefs_option')}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, 'fs-cc-prefs_toggle-wrapper')}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, 'fs-cc-prefs_label')}
                  tag="div"
                >
                  {'Analytics'}
                </Block>
                <FormCheckboxWrapper
                  className={_utils.cx(_styles, 'fs-cc-prefs_checkbox-field')}
                >
                  <FormCheckboxInput
                    checked={false}
                    className={_utils.cx(_styles, 'fs-cc-prefs_checkbox')}
                    data-name="Analytics 2"
                    form={{
                      type: 'checkbox-input',
                      name: 'Analytics 2',
                    }}
                    fs-cc-checkbox="analytics"
                    id={_utils.cx(_styles, 'analytics-2')}
                    inputType=""
                    name="analytics-2"
                    required={false}
                    type="checkbox"
                  />
                  <FormInlineLabel
                    className={_utils.cx(_styles, 'fs-cc-prefs_checkbox-label')}
                    htmlFor="analytics-2"
                  >
                    {'Essential'}
                  </FormInlineLabel>
                  <Block
                    className={_utils.cx(_styles, 'fs-cc-prefs_toggle')}
                    tag="div"
                  />
                </FormCheckboxWrapper>
              </Block>
              <Block
                className={_utils.cx(_styles, 'fs-cc-prefs_text')}
                tag="div"
              >
                {
                  'These items help the website operator understand how its website performs, how visitors interact with the site, and whether there may be technical issues. This storage type usually doesn’t collect information that identifies a visitor.'
                }
              </Block>
            </Block>
            <Block
              className={_utils.cx(_styles, 'fs-cc-prefs_buttons-wrapper')}
              tag="div"
            >
              <Link
                block=""
                button={true}
                className={_utils.cx(_styles, 'fs-cc-prefs_button')}
                fs-cc="submit"
                options={{
                  href: '#',
                }}
              >
                {'Confirm my preferences and close'}
              </Link>
            </Block>
            <FormButton
              className={_utils.cx(_styles, 'fs-cc-prefs_submit-hide')}
              data-wait="Please wait..."
              type="submit"
              value="Submit"
            />
            <HtmlEmbed
              content=""
              value="%3Cstyle%3E%0A%2F*%20smooth%20scrolling%20on%20iOS%20devices%20*%2F%0A.fs-cc-prefs_content%7B-webkit-overflow-scrolling%3A%20touch%7D%0A%3C%2Fstyle%3E"
            />
          </Block>
        </FormForm>
        <FormSuccessMessage />
        <FormErrorMessage />
        <Block
          className={_utils.cx(_styles, 'fs-cc-prefs_overlay')}
          fs-cc="close"
          tag="div"
        />
        <Block
          className={_utils.cx(_styles, 'fs-cc-prefs_trigger')}
          fs-cc="interaction"
          tag="div"
        />
      </FormWrapper>
    </_Component>
  );
}
