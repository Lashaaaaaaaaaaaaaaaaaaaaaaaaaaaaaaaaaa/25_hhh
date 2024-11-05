import React, { useState, Suspense } from 'react';
import EmailForm from './components/EmailForm';
import FilteredList from './components/FilteredList';

const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

const App: React.FC = () => {
  const [showHeavyComponent, setShowHeavyComponent] = useState(false);
  const items = ['Porche', 'BMW', 'CLS', 'Bugatti', 'Pagani', 'BMW M8', 'Chevrolet'];

  const handleClick = () => {
    setShowHeavyComponent(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Show Heavy Component</button>
      <Suspense fallback={<div>Loading...</div>}>
        {showHeavyComponent && <HeavyComponent />}
      </Suspense>

      <h3>Filtered List</h3>
      <FilteredList items={items} />

      <h3>Email Forms</h3>
      <EmailForm />
      <EmailForm />
      <EmailForm />
    </div>
  );
};

export default App;
