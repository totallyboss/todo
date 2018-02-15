import React, { Component } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    background: #FFF;
    margin-bottom: 2rem;
`;

const TextInput = styled.input.attrs({
    type: 'text',
    placeholder: 'Create list item',
})`
    color: #000000;
    padding: 0 0 0.25rem;
    border: none;
    border-bottom: solid 1px #C0C0C0;
    font-size: 2rem;
    outline: none;
    width: 80%;
`;

class Input extends Component {
    render() {
        return (
            <InputWrapper>
                <TextInput />
            </InputWrapper>
        );
    }
}

export default Input;
