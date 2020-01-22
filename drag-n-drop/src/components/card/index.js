import React from 'react';
import styled from "styled-components";

import { Container, Label } from './styles';

export default function card({data}) {
  return (
    <Container>
      <header>
        {data.labels.map(e => <Label key={e} cor ={e}/>)}
      </header>
      <p>{data.content}</p>
     {data.user && <img src={data.user} alt=""/>}
    </Container>
  );
}

