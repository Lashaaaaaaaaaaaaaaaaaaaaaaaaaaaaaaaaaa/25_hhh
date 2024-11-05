import React from 'react';

const HeavyComponent: React.FC = () => {
  return (
    <div>
      <h2>Heavy Component</h2>
      <p>This is a lazily-loaded, "heavy" component.</p>
    </div>
  );
};

export default HeavyComponent;
