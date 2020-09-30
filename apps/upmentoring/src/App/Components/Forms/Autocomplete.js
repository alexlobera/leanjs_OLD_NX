import React from 'react';
import Select from './Select';

function Autocomplete({ items, ...rest }) {
  const allItems = React.useMemo(
    () =>
      items && items.edges && items.edges.map
        ? items.edges.map(({ node: { id, published: { title, tags } } }) => ({
            value: id,
            title: `${tags ? tags.join() + ' - ' : ''}  ${title}`,
          }))
        : items || [],
    items
  );

  const [filteredItems, setItems] = React.useState(allItems);

  function onVideoAutocompleteChange(e) {
    const text = e.target.value.toLowerCase();
    setItems(
      text
        ? allItems.filter(
            (item) => item.title.toLowerCase().indexOf(text) !== -1
          )
        : allItems
    );
  }

  return (
    <Select
      items={filteredItems}
      {...rest}
      onAutocompleteChange={onVideoAutocompleteChange}
    />
  );
}

export default Autocomplete;
