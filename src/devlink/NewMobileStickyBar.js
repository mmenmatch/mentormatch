'use client';
import React from 'react';
import _styles from './css/classes.module.css';
import * as _utils from './utils';
import Block from './_Builtin/Block';
import Image from './_Builtin/Image';
import Link from './_Builtin/Link';

export function NewMobileStickyBar({
  as: _Component = Block,
  image = 'https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/69b41a2db3032145f1b874f5_user%20detail2.png',

  link = {
    href: '#',
  },

  text = 'Book a free trial',
}) {
  return (
    <_Component className={_utils.cx(_styles, 'newhome-sticky-cta')} tag="div">
      <Block
        className={_utils.cx(
          _styles,
          'uui-button-wrapper',
          'max-width-full-mobile-landscape',
          'newbtn-nehome'
        )}
        tag="div"
      >
        <Link
          block="inline"
          button={false}
          className={_utils.cx(_styles, 'uui-button-secondary-gray-2-sticky')}
          id={_utils.cx(_styles, 'book-free-trail')}
          options={{
            href: '#',
          }}
        >
          <Block className={_utils.cx(_styles, 'text-block-63')} tag="div">
            {text}
          </Block>
        </Link>
      </Block>
      <Block className={_utils.cx(_styles, 'google-review-logo')} tag="div">
        <Image
          alt=""
          className={_utils.cx(_styles, 'ggl-review-img')}
          height="auto"
          loading="lazy"
          src={image}
          width="auto"
        />
      </Block>
    </_Component>
  );
}
