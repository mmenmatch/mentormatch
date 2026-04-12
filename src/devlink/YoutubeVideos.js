'use client';
import React from 'react';
import _styles from './css/classes.module.css';
import * as _utils from './utils';
import Block from './_Builtin/Block';
import Grid from './_Builtin/Grid';
import Heading from './_Builtin/Heading';
import HtmlEmbed from './_Builtin/HtmlEmbed';
import Paragraph from './_Builtin/Paragraph';

export function YoutubeVideos({
  as: _Component = Block,
  text1 = '',
  text2 = 'Math Educator, 10+ Years Experience',
  text3 = '',
  text4 = 'English Educator, 6+ Years Experience',
  text5 = '',
  text6 = 'Math Educator, 7+ Years Experience',
  title = 'Educators Committed to Your Child’s Growth',
}) {
  return (
    <_Component
      className={_utils.cx(_styles, 'uui-section_layout01-2')}
      tag="section"
    >
      <Block className={_utils.cx(_styles, 'uui-page-padding-51')} tag="div">
        <Block
          className={_utils.cx(_styles, 'uui-container-large-50')}
          tag="div"
        >
          <Block
            className={_utils.cx(_styles, 'uui-padding-vertical_last')}
            tag="div"
          >
            <Block
              className={_utils.cx(_styles, 'uui-max-width-math')}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, 'uui-space-xsmall-14')}
                tag="div"
              />
              <Heading
                className={_utils.cx(_styles, 'uui-heading-medium-29-title-2')}
                tag="h2"
              >
                {title}
              </Heading>
            </Block>
            <Grid
              className={_utils.cx(_styles, 'grid-three-column-12')}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, 'blog-card_vid')}
                id={_utils.cx(
                  _styles,
                  'w-node-c43d17a6-1ba2-131e-0a4c-bd53820cea45-820cea3c'
                )}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, 'video-card-grid-3-opt-3')}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, 'img-grid-2', 'coffee-cup')}
                    tag="div"
                  >
                    <Block
                      className={_utils.cx(_styles, 'youtube-2')}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, 'code-embed-9')}
                        content=""
                        value="%3Ciframe%20width%3D%22100%25%22%20height%3D%22100%25%22%20src%3D%22https%3A%2F%2Fwww.youtube.com%2Fembed%2Fm485zDrc38A%3Fautoplay%3D1%26loop%3D1%26mute%3D1%26modestbranding%3D1%26rel%3D0%26playlist%3Dm485zDrc38A%22%20title%3D%22Ace%20English%20with%20Kritika%20Sharma%22%20frameborder%3D%220%22%20allow%3D%22accelerometer%3B%20autoplay%3B%20clipboard-write%3B%20encrypted-media%3B%20gyroscope%3B%20picture-in-picture%3B%20web-share%22%20referrerpolicy%3D%22strict-origin-when-cross-origin%22%20allowfullscreen%20loading%3D%22lazy%22%3E%0A%3C%2Fiframe%3E"
                      />
                    </Block>
                  </Block>
                </Block>
                <Block
                  className={_utils.cx(_styles, 'column-x-small-2')}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, 'subheading_title')}
                    tag="div"
                  >
                    {text1}
                  </Block>
                  <Paragraph
                    className={_utils.cx(_styles, 'paragraph-regular-40')}
                  >
                    {text2}
                  </Paragraph>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, 'blog-card_vid')}
                id={_utils.cx(
                  _styles,
                  'w-node-c43d17a6-1ba2-131e-0a4c-bd53820cea50-820cea3c'
                )}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, 'video-card-grid-3-opt-3')}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, 'img-grid-2', 'coffee-cup')}
                    tag="div"
                  >
                    <Block
                      className={_utils.cx(_styles, 'youtube-2')}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, 'code-embed-9')}
                        content=""
                        value="%3Ciframe%20width%3D%22100%25%22%20height%3D%22100%25%22%20src%3D%22https%3A%2F%2Fwww.youtube.com%2Fembed%2Fu9Bvye2X9wM%3Fautoplay%3D1%26loop%3D1%26mute%3D1%26modestbranding%3D1%26rel%3D0%26playlist%3Du9Bvye2X9wM%22%20title%3D%22Ace%20English%20with%20Kritika%20Sharma%22%20frameborder%3D%220%22%20allow%3D%22accelerometer%3B%20autoplay%3B%20clipboard-write%3B%20encrypted-media%3B%20gyroscope%3B%20picture-in-picture%3B%20web-share%22%20referrerpolicy%3D%22strict-origin-when-cross-origin%22%20allowfullscreen%20loading%3D%22lazy%22%3E%0A%3C%2Fiframe%3E"
                      />
                    </Block>
                  </Block>
                </Block>
                <Block
                  className={_utils.cx(_styles, 'column-x-small-2')}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, 'subheading_title')}
                    tag="div"
                  >
                    {text3}
                  </Block>
                  <Paragraph
                    className={_utils.cx(_styles, 'paragraph-regular-40')}
                  >
                    {text4}
                  </Paragraph>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, 'blog-card_vid')}
                id={_utils.cx(
                  _styles,
                  'w-node-c43d17a6-1ba2-131e-0a4c-bd53820cea5b-820cea3c'
                )}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, 'video-card-grid-3-opt-3')}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, 'img-grid-2', 'coffee-cup')}
                    tag="div"
                  >
                    <Block
                      className={_utils.cx(_styles, 'youtube-2')}
                      tag="div"
                    >
                      <HtmlEmbed
                        className={_utils.cx(_styles, 'code-embed-9')}
                        content=""
                        value="%3Ciframe%20width%3D%22100%25%22%20height%3D%22100%25%22%20src%3D%22https%3A%2F%2Fwww.youtube.com%2Fembed%2FUqj8eifPeIc%3Fautoplay%3D1%26loop%3D1%26mute%3D1%26modestbranding%3D1%26rel%3D0%26playlist%3DUqj8eifPeIc%22%20title%3D%22Ace%20English%20with%20Kritika%20Sharma%22%20frameborder%3D%220%22%20allow%3D%22accelerometer%3B%20autoplay%3B%20clipboard-write%3B%20encrypted-media%3B%20gyroscope%3B%20picture-in-picture%3B%20web-share%22%20referrerpolicy%3D%22strict-origin-when-cross-origin%22%20allowfullscreen%20loading%3D%22lazy%22%3E%0A%3C%2Fiframe%3E"
                      />
                    </Block>
                  </Block>
                </Block>
                <Block
                  className={_utils.cx(_styles, 'column-x-small-2')}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, 'subheading_title')}
                    tag="div"
                  >
                    {text5}
                  </Block>
                  <Paragraph
                    className={_utils.cx(_styles, 'paragraph-regular-40')}
                  >
                    {text6}
                  </Paragraph>
                </Block>
              </Block>
            </Grid>
          </Block>
        </Block>
      </Block>
    </_Component>
  );
}
