import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components'

// functions
import { responsive768 } from '../Functions';
import { responsive500 } from '../Functions';


const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center ;
`
const Title = styled.h1`
    font-size: 5rem;
    margin-bottom: 20px;
    letter-spacing: 2px;
    ${responsive768({ fontSize: "4rem" })}
`;
const Desc = styled.div`
    font-size: 2.4rem;
    margin-bottom: 20px;
    ${responsive768({ textAlign: "center",fontSize:'2rem' })}
`;
const InputContainer = styled.div`
    width: 70%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid lightgray;
`
const Input = styled.input`
    flex: 8;
    outline: none;
    border: none;
    margin-left: 10px;
`
const Button = styled.button`
    flex: 1;
    background-color: teal;
    color: #fff;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all .5s ease;
    &:active{
        transform: scale(1.4);
    }
    ${responsive500({flex:'1'})}
`;


const NewsLetter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder='Your email..' />
                <Button>
                    <Send style={{transform:'scale(1.3)'}} />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default NewsLetter;