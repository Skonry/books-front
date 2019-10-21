import React from 'react';
import { Dropdown } from 'semantic-ui-react';

function DropdownSelection({items}) {
  return (
    <Dropdown placeholder='Select Shelf'>
      <Dropdown.Menu>
        {items.map((item) => (
          <Dropdown.Item  key={item.name} text={item.name} value={item.name} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownSelection;