import React from "react";
import sanityClient from "part:@sanity/base/client";
import Spinner from "part:@sanity/components/loading/spinner";
import { withApollo } from "@apollo/react-hoc";

import { QUERY_NODE } from "./previews/withNode";

const TrainingTitle = ({ documentId = `"0"`, client: apolloClient }) => {
  const [title, setTitle] = React.useState();
  function setDefaultTitle() {
    setTitle("Training Details");
  }

  React.useEffect(() => {
    const query = `*[_type == "training" && (_id == "${documentId}" || _id == "drafts.${documentId}")]{
        trainingId
    }`;

    async function fetchTitle() {
      try {
        const response = await sanityClient.fetch(query);

        const nodeId = response && response.length && response[0].trainingId;
        if (nodeId) {
          const { data } = await apolloClient.query({
            query: QUERY_NODE,
            variables: { nodeId },
          });
          if (data && data.node && data.node.title) {
            setTitle(data.node.title);

            return;
          }
        }
      } catch (error) {}

      setDefaultTitle();
    }

    fetchTitle();
  });

  if (!title) {
    return <Spinner />;
  }

  return title;
};

export default withApollo(TrainingTitle);
