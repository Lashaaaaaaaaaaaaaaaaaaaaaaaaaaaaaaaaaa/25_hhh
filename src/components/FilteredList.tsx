import React, { useState, useTransition } from 'react';

interface FilteredListProps {
  items: string[];
}

const FilteredList: React.FC<FilteredListProps> = ({ items }) => {
  const [input, setInput] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    // გამოყენება Transition-ისთვის
    startTransition(() => {
      setFilteredItems(
        items.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      );
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleFilter} placeholder="Filter items..." />
      {isPending && <p>Filtering...</p>}
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
