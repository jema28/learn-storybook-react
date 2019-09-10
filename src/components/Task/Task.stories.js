import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import Task from './index'

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
}

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
}
const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not`

// 1. to initiate Storybook we call storiesOf() to register the component
// 2. we add a display name that appears in the sidebar in the Storybook app
// 3. to define our stories we call add() for each of our test cases to generate a story
// 4. action() allows us to create a callback that appears in the actions panels of Storybook UI.
// When we build a pin button we'll be able to determine in the test UI if a button click is succesful.
// 5. We pass all actions {...actions} in to the Tasks.
storiesOf('Task', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Task task={object('task', { ...task })} {...actions} />
  ))
  .add('pinned', () => (
    <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />
  ))
  .add('archived', () => (
    <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />
  ))
  .add('long title', () => (
    <Task task={{ ...task, title: longTitle }} {...actions} />
  ))
