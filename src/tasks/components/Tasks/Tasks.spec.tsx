import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import React from 'react'

import Tasks from './Tasks'

describe('Testing Tasks', () => {
  it('should be able to show the text in label', () => {
    render(<Tasks />)
    const formLabel = screen.getByText(/Add Task/i)

    expect(formLabel).toBeInTheDocument()
  })

  it('should be able to show the task list', () => {
    const { getByTestId } = render(<Tasks />)

    const techList = getByTestId('task-list')
    expect(techList.children.length).toBe(0)
  })

  it('should be able to add new task', async () => {
    const { getByTestId } = render(<Tasks />)

    const input = (await waitFor(() =>
      getByTestId('input-form'),
    )) as HTMLInputElement
    const newTask = 'testing'

    fireEvent.change(input, { target: { value: newTask } })

    expect(input.value).toEqual(newTask)

    const button = (await waitFor(() =>
      getByTestId('form-btn'),
    )) as HTMLInputElement
    fireEvent.click(button)
  })
})
