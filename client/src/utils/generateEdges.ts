/* eslint-disable @typescript-eslint/no-explicit-any */

import { Edge } from "@xyflow/react";


export const createEdgesFromNodes = (nodes: any): Edge[] => {
  const edges: Edge[] = [];

  for (let i = 0; i < nodes.length - 1; i++) {
    edges.push({
      id: `edge-${nodes[i].id}-${nodes[i + 1].id}`,
      source: nodes[i].id,
      target: nodes[i + 1].id,
      type: 'straight',
      style: {
        stroke: 'gray', 
        strokeWidth: 2,
      },
    });
  }

  return edges;
};