'use client';

import React, { useCallback } from 'react';
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    Node,
    Edge,
    useNodesState,
    useEdgesState,
    Handle,
    Position,
    BackgroundVariant
} from 'reactflow';
import 'reactflow/dist/style.css';

const CustomNode = ({ data }: { data: { label: string; description?: string } }) => (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-gray-200">
        <div className="font-bold text-lg text-gray-800">{data.label}</div>
        {data.description && (
            <div className="text-gray-500 text-sm">{data.description}</div>
        )}
        <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
        <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />
    </div>
);

const nodeTypes = {
    custom: CustomNode,
};

const initialNodes: Node[] = [
    {
        id: '1',
        type: 'custom',
        data: { label: 'Start', description: 'Begin patient registration process' },
        position: { x: 400, y: 0 },
    },
    {
        id: '2',
        type: 'custom',
        data: { label: 'Collect Patient Information', description: 'Gather personal and medical details' },
        position: { x: 400, y: 150 },
    },
    {
        id: '3',
        type: 'custom',
        data: { label: 'Verify Patient Identity', description: 'Confirm identity using official documents' },
        position: { x: 400, y: 300 },
    },
    {
        id: '4',
        type: 'custom',
        data: { label: 'Submit to Government Portal', description: 'Upload information to official system' },
        position: { x: 400, y: 450 },
    },
    {
        id: '5',
        type: 'custom',
        data: { label: 'Government Review', description: 'Officials process the application' },
        position: { x: 400, y: 600 },
    },
    {
        id: '6',
        type: 'custom',
        data: { label: 'Registration Approved', description: 'Patient successfully registered' },
        position: { x: 200, y: 750 },
        style: { backgroundColor: '#d1fae5', borderColor: '#059669' },
    },
    {
        id: '7',
        type: 'custom',
        data: { label: 'Registration Rejected', description: 'Application denied, needs revision' },
        position: { x: 600, y: 750 },
        style: { backgroundColor: '#fee2e2', borderColor: '#dc2626' },
    },
];

const initialEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#6366f1' } },
    { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#6366f1' } },
    { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#6366f1' } },
    { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#6366f1' } },
    { id: 'e5-6', source: '5', target: '6', animated: true, label: 'Approved', style: { stroke: '#059669' } },
    { id: 'e5-7', source: '5', target: '7', animated: true, label: 'Rejected', style: { stroke: '#dc2626' } },
];

const FlowchartComponent: React.FC = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onInit = useCallback(() => {
        console.log('Flow loaded');
    }, []);

    return (
        <div className=' w-full max-w-lg rounded-md  shadow-md border  '>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onInit={onInit}
                nodeTypes={nodeTypes}
                fitView
                attributionPosition="bottom-left"

            >
              <Background
                    className=' bg-white'
                    variant={BackgroundVariant.Dots} // Use enum instead of string
                />

            </ReactFlow>
        </div>
    );
};

export default FlowchartComponent;