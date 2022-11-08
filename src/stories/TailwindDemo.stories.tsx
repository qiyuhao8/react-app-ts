// TailwindDemo.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TailwindDemo } from './TailwindDemo';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'TailwindCSS',
  component: TailwindDemo,
} as ComponentMeta<typeof TailwindDemo>;

export const Primary: ComponentStory<typeof TailwindDemo> = () => <TailwindDemo />;