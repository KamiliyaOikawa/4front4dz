import React from 'react';

function ProductsList({productslist}) {
  return (
      <ul>
        {
          productslist.length > 0
            ?
          productslist.map((product, key ) => <li key={key}>{product}</li>)
        :
              <li>Список Пуст</li>
        }
      </ul>
  );
}

export default ProductsList;