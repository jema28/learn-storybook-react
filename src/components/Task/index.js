import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => (
  <div className={`list-item ${state}`}>
    <label className="checkbox">
      <input
        type="checkbox"
        defaultChecked={state === 'TASK_ARCHIVED'}
        disabled={true}
        name="checked"
      />
      <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
    </label>
    <div className="title">
      {
        // This is the input for our task title. In practice we would probably update the styles for this element
        // but for this tutorial, let's fix the problem with an inline style:
      }
      <input
        type="text"
        value={title}
        readOnly={true}
        placeholder="Input title"
        style={{ textOverflow: 'ellipsis' }}
      />
      }
      <input
        type="text"
        value={title}
        readOnly={true}
        placeholder="Input title"
        style={{ textOverflow: 'ellipsis' }}
      />
    </div>

    <div className="actions" onClick={event => event.stopPropagation()}>
      {state !== 'TASK_ARCHIVED' && (
        <a onClick={() => onPinTask(id)}>
          <span className={`icon-star`} />
        </a>
      )}
    </div>
  </div>
)

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func
}

export default Task
