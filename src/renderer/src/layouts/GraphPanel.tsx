import React, { useState, useCallback } from 'react'
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  ConnectionLineType
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { TestNode } from '@renderer/components/nodes/TestNode'

const nodeTypes = {
  testNode: TestNode
}
const initialNodes = [
  {
    id: 'node-1',
    type: 'testNode',
    position: { x: 0, y: 0 },
    data: { value: 123 }
  },
  {
    id: 'node-2',
    type: 'testNode',
    position: { x: 20, y: 20 },
    data: { value: 123 }
  },
  {
    id: 'node-3',
    type: 'testNode',
    position: { x: 30, y: 30 },
    data: { value: 123 }
  },
  {
    id: 'node-4',
    type: 'testNode',
    position: { x: 40, y: 40 },
    data: { value: 123 }
  }
]
const initialEdges = [{ id: 'n1-n2', source: 'a', target: 'b' }]

function GraphEditor(): React.JSX.Element {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  )
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  )
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  )

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
      />
    </div>
  )
}

export default GraphEditor
