import React from 'react';
import { MdAdd } from 'react-icons/md'
 
import { Container } from './styles';
import Card from "../card"; 

export default function List({data, index:listIndex}) {

  return (
    <Container done={data.done}>

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
        { data.cards.map((e, index) => <Card key={e.id} listIndex={listIndex} index={index} data={e}/>)}
      </ul>
    </Container>
  );
}
