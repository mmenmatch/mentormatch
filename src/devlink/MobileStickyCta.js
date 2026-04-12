'use client';
import React from 'react';
import _styles from './css/classes.module.css';
import * as _utils from './utils';
import Block from './_Builtin/Block';
import Image from './_Builtin/Image';
import Link from './_Builtin/Link';
import Span from './_Builtin/Span';

export function MobileStickyCta({ as: _Component = Block }) {
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
            {'Book a free trial'}
          </Block>
        </Link>
      </Block>
      <Block className={_utils.cx(_styles, 'udesly-reviews_v2')} tag="div">
        <Image
          alt=""
          className={_utils.cx(_styles, 'image-89')}
          height="auto"
          loading="lazy"
          src="https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/67dd0b671b9bfc280db03d0e_65b5f7dd30193b184e239b5a_truspilot-star%20(1)%201%20(1).svg"
          width="auto"
        />
        <Block className={_utils.cx(_styles, 'udesly-paragraph_mo')} tag="div">
          {'Trustpilot rating: '}
          <Span className={_utils.cx(_styles, 'text-span-97')}>
            {'Excellent'}
          </Span>
        </Block>
      </Block>
    </_Component>
  );
}
