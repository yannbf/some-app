import { DecoratorFn } from '@storybook/react'

import { GlobalStyle } from '../src/styles/GlobalStyle'

export const withGlobalStyle: DecoratorFn = (StoryFn) => {
  return (
    <>
      <GlobalStyle />
      <StoryFn />
    </>
  )
}

// export all decorators that should be globally applied in an array
export const globalDecorators = [withGlobalStyle]
