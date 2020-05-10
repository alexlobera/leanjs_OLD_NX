import React from "react";
import PropTypes from "prop-types";
import Spinner from "part:@sanity/components/loading/spinner";
import DefaultSelect from "part:@sanity/components/selects/default";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";
import { gql } from "apollo-boost";
import { graphql } from "@apollo/react-hoc";

const createPatchFrom = value =>
  PatchEvent.from(value === "" ? unset() : set(value));

class TrainingInput extends React.Component {
  static propTypes = {
    type: PropTypes.shape({
      title: PropTypes.string
    }).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

  // this is called by the form builder whenever this input should receive focus
  //   focus() {
  //     this._inputElement && this._inputElement.focus();
  //   }

  render() {
    const { type, value, onChange, disabled, data } = this.props;

    if (data.loading) {
      return <Spinner />;
    }

    if (data.error) {
      return <h3>Error</h3>;
    }

    const items = data.trainings.edges
      .map(({ node: { id, title } }) => ({
        key: id,
        title,
        id
      }))
      .sort(function(a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });

    const selectedItem = items.find(item => item.id === value);

    return (
      <div>
        <h2>{type.title}</h2>
        <DefaultSelect
          label="Select training"
          placeholder="A training is required"
          onChange={event => {
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
