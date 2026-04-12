'use client';
import React from 'react';
import _styles from './css/classes.module.css';
import * as _utils from './utils';
import Block from './_Builtin/Block';
import HtmlEmbed from './_Builtin/HtmlEmbed';
import Image from './_Builtin/Image';
import Link from './_Builtin/Link';
import * as _interactions from './interactions';

const _interactionsData = JSON.parse(
  '{"events":{"e-7884":{"id":"e-7884","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1049","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7885"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0b49cc96-d85f-2e3c-f745-3a4ed6cde59f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0b49cc96-d85f-2e3c-f745-3a4ed6cde59f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770317785622},"e-7885":{"id":"e-7885","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1050","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7884"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0b49cc96-d85f-2e3c-f745-3a4ed6cde59f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0b49cc96-d85f-2e3c-f745-3a4ed6cde59f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770317785965},"e-7886":{"id":"e-7886","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1049","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7887"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc60e319-8a8d-1aa8-19f2-a96bfee7d812","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc60e319-8a8d-1aa8-19f2-a96bfee7d812","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770467819603},"e-7887":{"id":"e-7887","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-1050","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7886"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc60e319-8a8d-1aa8-19f2-a96bfee7d812","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc60e319-8a8d-1aa8-19f2-a96bfee7d812","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770467819603}},"actionLists":{"a-1049":{"id":"a-1049","title":"call-show-hide","actionItemGroups":[{"actionItems":[{"id":"a-1049-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".call-modal","selectorGuids":["5a4c5f82-c098-eba4-2b03-fcb318842d61"]},"value":"flex"}}]},{"actionItems":[{"id":"a-1049-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".caller-link-block","selectorGuids":["9038986d-5cfe-3c34-f552-8c9af5786570"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-1049-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".cross-link-block","selectorGuids":["06b8d6e2-5712-e3de-afd0-1f1ac128b8ce"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1770310840737},"a-1050":{"id":"a-1050","title":"cross-show-hide","actionItemGroups":[{"actionItems":[{"id":"a-1050-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".call-modal","selectorGuids":["5a4c5f82-c098-eba4-2b03-fcb318842d61"]},"value":"none"}}]},{"actionItems":[{"id":"a-1050-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".cross-link-block","selectorGuids":["06b8d6e2-5712-e3de-afd0-1f1ac128b8ce"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-1050-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".caller-link-block","selectorGuids":["9038986d-5cfe-3c34-f552-8c9af5786570"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1770317698410}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function LeadWidget({
  as: _Component = Block,
  image = 'https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/6985d3cecc9ad73195dbe59d_tutor.webp',
  image2 = 'https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/6985c5a04b2bbcaca1936839_icons8-phone-48.png',
  image3 = 'https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/698485e6fc68c14ed4bf9de4_call-communication-device-svgrepo-com%20(1).svg',
  image4 = 'https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/6984d7dcc8812c1f3d3e36dc_cross.png',

  link = {
    href: 'tel:+97148369577',
  },

  link2 = {
    href: '#',
  },

  link3 = {
    href: '#',
  },

  text = 'Priyangha J',
  text2 = (
    <>
      {'Academic Counsellor'}
      <br />
    </>
  ),
  text3 = (
    <>
      {'Hey there 👋'}
      <br />
      {"Need help? I'm here for you, so just give me a call."}
    </>
  ),
  text4 = '+97148369577',
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, 'call-wrapper')} tag="div">
      <Block className={_utils.cx(_styles, 'call-modal')} tag="div">
        <Block className={_utils.cx(_styles, 'call-modal-container')} tag="div">
          <Block className={_utils.cx(_styles, 'call-modal-avatar')} tag="div">
            <Image
              alt=""
              className={_utils.cx(_styles, 'call-modal-img')}
              height="auto"
              loading="lazy"
              src={image}
              width="auto"
            />
          </Block>
          <Block className={_utils.cx(_styles, 'support-block')} tag="div">
            <Block
              className={_utils.cx(_styles, 'support-person-name')}
              tag="div"
            >
              {text}
            </Block>
            <Block className={_utils.cx(_styles, 'support-role')} tag="div">
              {text2}
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, 'support-person-quote')}
            tag="div"
          >
            {text3}
          </Block>
        </Block>
        <Block
          className={_utils.cx(_styles, 'call-cta')}
          id={_utils.cx(_styles, 'phone-no-btn')}
          tag="div"
        >
          <Link
            block="inline"
            button={false}
            className={_utils.cx(_styles, 'call-cta-link')}
            options={{
              href: 'tel:+971585339257',
            }}
          >
            <Image
              alt=""
              className={_utils.cx(_styles, 'caller-icon')}
              height="Auto"
              loading="lazy"
              src={image2}
              width="20"
            />
            <Block className={_utils.cx(_styles, 'text-block-183')} tag="div">
              {'+971585339257'}
            </Block>
          </Link>
        </Block>
        <HtmlEmbed
          className={_utils.cx(_styles, 'counsellor-name-fn')}
          content=""
          value="%3Cscript%3E%0Adocument.addEventListener(%22DOMContentLoaded%22%2C%20()%20%3D%3E%20%7B%0A%C2%A0%C2%A0const%20names%20%3D%20%5B%0A%C2%A0%C2%A0%C2%A0%C2%A0%22Bisma%20Rasool%22%2C%0A%C2%A0%C2%A0%C2%A0%C2%A0%22Priyangha%20J%22%2C%C2%A0%0A%20%20%20%20%5D%3B%0A%0A%C2%A0%C2%A0const%20elements%20%3D%20document.getElementsByClassName(%22support-person-name%22)%3B%0Aconsole.log(%22elements%22%2Celements)%0A%C2%A0%C2%A0if%20(elements.length%20%3E%200)%20%7B%0A%C2%A0%C2%A0%C2%A0%C2%A0const%20randomName%20%3D%20names%5BMath.floor(Math.random()%20*%20names.length)%5D%3B%0A%C2%A0%C2%A0%C2%A0%C2%A0elements%5B0%5D.innerText%20%3D%20randomName%3B%0A%C2%A0%C2%A0%7D%0A%7D)%3B%0A%3C%2Fscript%3E%0A%0A%3Cscript%3E%0Adocument.addEventListener('DOMContentLoaded'%2C%20function%20()%20%7B%0A%20%20var%20el%20%3D%20document.getElementById('phone-no-btn')%3B%0A%20%20if%20(!el)%20return%3B%0A%0A%20%20el.addEventListener('click'%2C%20function%20()%20%7B%0A%20%20console.log(%22Gtag%20phone-no-btn%20called%22)%3B%0A%20%20%20%20gtag('event'%2C%20'phone_number_widget_click'%2C%20%7B%0A%20%20%20%20%20%20click_type%3A%20'phone_number_btn'%2C%0A%20%20%20%20%20%20page_path%3A%20window.location.pathname%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
        />
      </Block>
      <Block
        className={_utils.cx(_styles, 'call-bubble')}
        data-w-id="0b49cc96-d85f-2e3c-f745-3a4ed6cde59f"
        id={_utils.cx(_styles, 'callWidget')}
        tag="div"
      >
        <Link
          block="inline"
          button={false}
          className={_utils.cx(_styles, 'caller-link-block')}
          options={{
            href: '#',
          }}
        >
          <Image
            alt=""
            className={_utils.cx(_styles, 'call-receiver')}
            height="auto"
            loading="lazy"
            src={image3}
            width="Auto"
          />
        </Link>
        <Link
          block="inline"
          button={false}
          className={_utils.cx(_styles, 'cross-link-block')}
          options={{
            href: '#',
          }}
        >
          <Image
            alt=""
            className={_utils.cx(_styles, 'cross-call-image')}
            height="auto"
            loading="lazy"
            src={image4}
            width="auto"
          />
        </Link>
      </Block>
      <HtmlEmbed
        content=""
        id={_utils.cx(_styles, 'callWidget')}
        value="%3Cscript%3E%0Adocument.addEventListener('DOMContentLoaded'%2C%20function%20()%20%7B%0A%20%20var%20el%20%3D%20document.getElementById('callWidget')%3B%0A%20%20if%20(!el)%20return%3B%0A%0A%20%20el.addEventListener('click'%2C%20function%20()%20%7B%0A%20%20console.log(%22Gtag%20called%22)%3B%0A%20%20%20%20gtag('event'%2C%20'call_widget_click'%2C%20%7B%0A%20%20%20%20%20%20click_type%3A%20'call_widget'%2C%0A%20%20%20%20%20%20page_path%3A%20window.location.pathname%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
