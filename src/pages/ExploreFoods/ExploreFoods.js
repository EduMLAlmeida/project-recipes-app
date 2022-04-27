import React from 'react';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';

export default function ExploreFoods() {
  return (
    <div>
      <Header
        title="Explore Foods"
        searchButton={ false }
      />
      <MenuInferior />
    </div>
  );
}
