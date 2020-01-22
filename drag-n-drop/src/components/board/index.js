import React from 'react';

import { Container } from './styles';
import List from '../list/index';
import {loadLists} from "../../service/api"

const list = loadLists();

export default function boards() {
  return (
    <Container>
      {list.map(e => <List key={e.title}  data={e} /> )}
    </Container>
  );
}
