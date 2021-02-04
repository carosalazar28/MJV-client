import { Product } from '../components/Products/Product';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Products() {

  const [data, setData] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com/',
      url: 'posts',
    })
      .then(({ data}) => setData(data) )
      .catch(err => {
        setErrors(err);
      });
  }, []);

  const ContainerProducts = styled.section`
    display: grid;
    display: grid;
    grid-template-columns: repeat(3, [col-start] minmax(100px, 1fr) [col-end]);
    grid-gap: 18px;
    justify-content: space-around;
    padding: 15px;
  `;

  return (
    <div>
      <h1>List of Products</h1>
      <ContainerProducts>
        {!!data && data.length > 0 && data.map(product => (
          <Product
            key={product.id}
            title={product.title}
            description={product.body}
            errors={errors}
          />
        ))}
      </ContainerProducts>
    </div>
  );
}

export default Products;
