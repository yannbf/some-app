import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withDesign } from 'storybook-addon-designs'
// @ts-ignore This addon has no types unfortunately

// If Storybook does not need initializeWorker you can remove it.
// Cyrpess does not need this
import { /* initializeWorker, */ mswDecorator } from 'msw-storybook-addon'

import { globalDecorators } from './decorators'
import { viewports as breakpoints } from '../src/styles/breakpoints'

// initializeWorker({
//   serviceWorker: {
//     // I have to do this for cypress
//     url: '/public/mockServiceWorker.js',
//   },
// })

// Create custom viewports using widths defined in design tokens
const breakpointViewports = Object.keys(breakpoints).reduce((acc, key) => {
  acc[`breakpoint${key}`] = {
    name: `Breakpoint - ${key}`,
    styles: {
      width: `${breakpoints[key as keyof typeof breakpoints]}px`,
      // Account for padding and border around viewport preview
      height: 'calc(100% - 20px)',
    },
    type: 'other',
  }
  return acc
}, {} as typeof INITIAL_VIEWPORTS)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      ...breakpointViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme for the components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
        { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
      ],
    },
  },
}

export const decorators = [...globalDecorators, withDesign, mswDecorator]
