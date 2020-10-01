import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import {
  Tabs,
  TabList,
  TabItem,
  TabPanel,
} from '../../../../App/Components/Layout/Tabs';
import { formatUTC } from '../../../../App/Utils';
import { Table, Tbody, Tr, Td } from '../../../../App/Components/Table';
import FinalFormFocus from '../../../../App/Components/Forms/FinalFormFocus';
import Button from '../../../../App/Components/Buttons/Button';
import { P } from '../../../../App/Components/Text/P';
import ErrorMessage from '../../../../App/Components/Forms/ErrorMessage';

const TrItem = ({ selectItem, selectedItem, item }: any) => (
  <Tr key={item.id}>
    <Td>{item.published?.title || item.title}</Td>
    <Td>
      {item.published.startDate &&
        formatUTC(item.published.startDate, item.published.utcOffset)}
    </Td>
    <Td>{item.published.city}</Td>
    {selectItem && (
      <Td>
        <Button
          variant={selectedItem.itemId === item.id ? 'primary' : 'tertiary'}
          onClick={() =>
            selectedItem.itemId !== item.id && selectItem({ itemId: item.id })
          }
        >
          {selectedItem.itemId === item.id ? 'Discount added' : 'Add discount'}
        </Button>
      </Td>
    )}
  </Tr>
);

const ItemSelector = ({ meta, input: { onChange, name }, item }: any) => {
  const [selectedItem, setSelectedItem] = useState({});

  const { data, loading, error } = useQuery(QUERY_ITEMS, {
    skip: item && item.id,
  });

  if (item) {
    return (
      <Table>
        <Tbody>
          <TrItem item={item} />
        </Tbody>
      </Table>
    );
  }

  if (!data) {
    return null;
  } else if (loading) {
    return <P>...Loading</P>;
  } else if (error) {
    return <p>There's an error</p>;
  } else {
    const { edges: trainingInstancesEdges = [] } = data.trainingInstances || {};
    const { edges: eventsEdges = [] } = data.events || {};
    const { edges: trainingEdges = [] } = data.trainings || {};
    const selectItem = (selectItemEvent: any) => {
      setSelectedItem(selectItemEvent);
      onChange(selectItemEvent);
    };

    return (
      <>
        {meta && meta.error && meta.touched && (
          <ErrorMessage>
            {meta.error}. Please select a training, instance, or event
          </ErrorMessage>
        )}
        <FinalFormFocus name={name} />
        <Tabs defaultValue="trainingInstances">
          <TabList>
            <TabItem name="trainingInstances">Course instances</TabItem>
            <TabItem name="trainings">Trainings</TabItem>
            <TabItem name="events">Events</TabItem>
          </TabList>
          <Table>
            <Tbody>
              <TabPanel name="trainingInstances">
                {trainingInstancesEdges.map(({ node }: any) => (
                  <TrItem
                    key={node.id}
                    item={node}
                    selectItem={selectItem}
                    selectedItem={selectedItem}
                  />
                ))}
              </TabPanel>
              <TabPanel name="trainings">
                {trainingEdges.map(({ node }: any) => (
                  <TrItem
                    key={node.id}
                    item={node}
                    selectItem={selectItem}
                    selectedItem={selectedItem}
                  />
                ))}
              </TabPanel>
              <TabPanel name="events">
                {eventsEdges.map(({ node }: any) => (
                  <TrItem
                    key={node.id}
                    item={node}
                    selectItem={selectItem}
                    selectedItem={selectedItem}
                  />
                ))}
              </TabPanel>
            </Tbody>
          </Table>
        </Tabs>
      </>
    );
  }
};

export const QUERY_ITEMS = gql`
  query trainings($first: Int = 40) {
    trainingInstances(
      first: $first
      filter: { startDate: future }
      orderBy: { sort: startDate, direction: ASC }
    ) {
      edges {
        node {
          id
          title
          published {
            startDate
            utcOffset
            city
          }
        }
      }
    }
    trainings(first: $first, orderBy: { sort: title, direction: ASC }) {
      edges {
        node {
          id
          published {
            title
          }
        }
      }
    }
    events(
      first: $first
      filter: { startDate: future }
      orderBy: { sort: startDate, direction: ASC }
    ) {
      edges {
        node {
          id
          published {
            title
            startDate
            utcOffset
            city
          }
        }
      }
    }
  }
`;

export default ItemSelector;
