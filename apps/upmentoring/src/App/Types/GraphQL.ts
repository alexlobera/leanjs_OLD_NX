export interface Edge<Node> {
  cursor: string;
  node: Node;
}

export interface RelayConnection<Node> {
  edges: Edge<Node>[];
  totalCount: number;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
    endCursor: string;
  };
}

export interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
}

export interface Deleted {
  id: string;
  deletedAt: string;
}

export interface ConnectionData<NodeData> {
  edges: Edge<NodeData>[];
  cursor: string;
  pageInfo: PageInfo;
}
