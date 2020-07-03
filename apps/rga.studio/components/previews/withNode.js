import gql from "graphql-tag";
import { graphql } from "@apollo/react-hoc";

function getNodeId(props) {
  const splitTitle =
    props.value &&
    props.value.title &&
    props.value.title.split &&
    props.value.title.split("queryNodeId=");
  const nodeId = splitTitle && splitTitle.length === 2 ? splitTitle[1] : null;

  return nodeId;
}

export const QUERY_NODE = gql`
  query node($nodeId: ID!) {
    node(id: $nodeId) {
      id
      ... on Training {
        title
      }
    }
  }
`;

export default graphql(QUERY_NODE, {
  options: (props) => ({
    variables: {
      nodeId: getNodeId(props),
    },
  }),
  props({ data, ownProps: props }) {
    const isPlaceholder = props.isPlaceholder || (data && data.loading);
    const newTitle = data.node && data.node.title;

    return { isPlaceholder, title: newTitle || props.title };
  },
  skip: (props) => !getNodeId(props),
});
