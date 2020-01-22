import React from 'react';

import GlobalStyle from "./styles/global";
import Header from './components/header/Header'
import Board from './components/board/index'

export default function App() {
  return (
      <>
        <Header/>
        <Board/>
        <GlobalStyle/>
      </>
  );
}