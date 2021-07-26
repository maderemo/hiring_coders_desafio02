import React, {useState, useEffect} from 'react';

import { Container } from './style';

import api from '../../services/api'

interface IProduct{
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}


const Home: React.FC = () => {
  const [data,setData] = useState<IProduct[]>([]);
  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])


  return (
    <Container>
      {data.map(prod => (
        <div className="product-content" key={prod.id}>
        <img src={prod.photo} alt="iphone" width="200" height="auto"/>
        <h4>{prod.name}</h4>
        <span>{prod.description}</span>
        <h6>{prod.price}</h6>
      </div>
      ))}
      <section>
        
      </section>
    </Container>


  );
}

export default Home;