import React from "react";
import PropTypes from "prop-types";
import Spinner from "part:@sanity/components/loading/spinner";
import DefaultSelect from "part:@sanity/components/selects/default";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";
import gql from "graphql-tag";
import { graphql } from "@apollo/react-hoc";
import client from "part:@sanity/base/client";

const createPatchFrom = (value) =>
  PatchEvent.from(value === "" ? unset() : set(value));

class TrainingInput extends React.Component {
  static propTypes = {
    type: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  state = {
    sanityLoading: true,
    sanityData: null,
    sanityError: null,
  };

  // this is called by the form builder whenever this input should receive focus
  //   focus() {
  //     this._inputElement && this._inputElement.focus();
  //   }

  componentDidMount = () => {
    client
      .fetch(
        `*[_type == "training"]{ 
          trainingId 
        }`
      )
      .then((sanityData) => {
        this.setState({ sanityLoading: false, sanityData });
      })
      .catch((error) => {
        this.setState({ sanityError: error.message, sanityLoading: false });
      });
  };

  render() {
    const { type, value, onChange, disabled, data } = this.props;
    const { sanityLoading, sanityError } = this.state;
    const { loading: graphqlLoading, error: graphqlError } = data;

    if (graphqlLoading || sanityLoading) {
      return <Spinner />;
    }

    if (graphqlError || sanityError) {
      return <h3>Error</h3>;
    }

    const allTraining = data.trainings.edges
      .map(({ node: { id, title } }) => ({
        key: id,
        title,
        id,
      }))
      .sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });

    const sanityData = this.state.sanityData || [];
    const selectedItem = allTraining.find((training) => training.id === value);
    const items = allTraining.filter(
      (training) =>
        training.id === value ||
        !sanityData.find((doc) => doc.trainingId === training.id)
    );

    return (
      <div>
        <h2>{type.title}</h2>
        <DefaultSelect
          label="Select training"
          placeholder="A training is required"
          onChange={(event) => {
            onChange(createPatchFrom(event.id));
          }}
          items={items}
          value={selectedItem}
          disabled={disabled ? true : false}
        />
      </div>
    );
  }
}

export default graphql(gql`
  query trainings {
    trainings {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`)(TrainingInput);
