'use client';
import React from 'react';
import _styles from './css/classes.module.css';
import * as _utils from './utils';
import FormButton from './_Builtin/FormButton';

export function PopupBtn({ as: _Component = FormButton }) {
  return (
    <_Component
      className={_utils.cx(_styles, 'iblp-1-main-cta')}
      data-wait="Please wait..."
      type="submit"
      value="Book a Free Demo Class"
    />
  );
}
