import React, { Component } from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
    background: #FFF;
`;

const Item = styled.div`
    border: solid 1px #F0F0F0;
    border-radius: 4px;
    padding: 1rem;
    margin-bottom: 1rem;
`;

class List extends Component {
    render() {
        return (
            <ListWrapper>
                <Item>To do item 1</Item>
                <Item>To do item 2</Item>
                <Item>To do item 3</Item>
            </ListWrapper>
        );
    }
}

export default List;
