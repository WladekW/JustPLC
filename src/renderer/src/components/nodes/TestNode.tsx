import { Handle, Position } from '@xyflow/react'
import { useCallback, useState } from 'react'

export function TestNode(): React.JSX.Element {
  const [text, setText] = useState('')
  const onChange = useCallback((evt) => setText(evt.target.value), [])

  return (
    <div className="test-node">
      <label htmlFor="text">Text: {text}</label>
      <input id="text" name="text" onChange={onChange} className="nodrag" />
      <Handle type="source" position={Position.Top} id="a" />
      <Handle type="target" position={Position.Bottom} id="b" />
    </div>
  )
}
