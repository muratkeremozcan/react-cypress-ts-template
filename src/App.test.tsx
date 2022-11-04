import React from 'react'
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'

// To Test
import App from './App'

describe('RTL sanity', () => {
  test('passes sanity', async () => {
    render(<App />)
    const button = await screen.findByTestId('count')

    await screen.findByText('count is 0')

    user.click(button)
    user.click(button)

    await screen.findByText('count is 2')
  })
})
