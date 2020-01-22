import React from 'react';
import { MdAdd } from 'react-icons/md'
 
import { Container } from './styles';
import Card from "../card"; 

export default function list({data}) {

  return (
    <Container>

      <header>
        <h2>
          {data.title}
        </h2>
        {
          data.creatable &&
          <button type='button'>
            <MdAdd size={24} color={'#FFF'}/>
          </button>
        }
      </header>

      <ul>
        {data.cards.map(e => <Card key={e.id} data={e}/>)}
      </ul>
    </Container>
  );
}
