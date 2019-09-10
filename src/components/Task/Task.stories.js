import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

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

// 1. to initiate Storybook we call storiesOf() to register the component
// 2. we add a display name that appears in the sidebar in the Storybook app
// 3. to define our stories we call add() for each of our test cases to generate a story
// 4. action() allows us to create a callback that appears in the actions panels of Storybook UI.
// When we build a pin button we'll be able to determine in the test UI if a button click is succesful.
// 5. We pass all actions {...actions} in to the Tasks.
storiesOf('Task', module)
  .add('default', () => <Task task={task} {...actions} />)
  .add('pinned', () => (
    <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />
  ))
  .add('archived', () => (
    <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />
  ))
