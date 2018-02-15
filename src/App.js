import React, { Component } from 'react';
import styled from 'styled-components';
import List from './List';
import Input from './Input';

const Wrapper = styled.div`
    width: 960px;
    margin: 2rem auto;
    background: #FFF;
    padding: 2rem;
`;

const Title = styled.h1`
    font-size: 20px;
    color: #444;
    margin-bottom: 2rem;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
          <Title>To Do</Title>
          <Input />
          <List />
      </Wrapper>
    );
  }
}

export default App;
