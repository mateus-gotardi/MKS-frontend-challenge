import { render, screen } from '@testing-library/react'
import { Header } from '../components'

describe('Check the Homepage', () => {
  it('render the header', () => {
    const {container} = render(<Header />)
    expect(container.firstChild).toHaveStyleRule('height', '3rem' )
    expect(container.firstChild).toHaveStyleRule('background-color', '#0F52BA' )
  })
})
