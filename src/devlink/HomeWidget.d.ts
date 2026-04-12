import * as React from 'react';
import * as Types from './types';

declare function HomeWidget(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  image2?: Types.Asset.Image;
  image3?: Types.Asset.Image;
  image4?: Types.Asset.Image;
  link?: Types.Basic.Link;
  link2?: Types.Basic.Link;
  link3?: Types.Basic.Link;
  text?: React.ReactNode;
  text2?: React.ReactNode;
  text3?: React.ReactNode;
  text4?: React.ReactNode;
  text5?: React.ReactNode;
}): React.JSX.Element;
