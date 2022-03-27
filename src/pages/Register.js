import React from 'react';
import styled from 'styled-components'


// functions
import { responsive768 } from '../functions';
import { responsive500 } from '../functions';



const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") top center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    
    padding: 20px;
    background-color: #fff;
    width: 50%;
    ${responsive768({width:'80%'})}
    ${responsive500({margin:'40px 0'})}
`
const Title = styled.h1`
    font-size: 2.4rem;
    text-align: center;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px ;
    font-size: 1.6rem;
    padding: 2px 5px 2px 10px;
`
const Agreement = styled.p`
    font-size: 1.4rem;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    outline: none;
    background-color:teal;
    color: white;
    font-size: 1.7rem;
    margin-left: 10px;
    margin-top: 10px;
    padding: 1rem;
    cursor: pointer;
    transition: all .1s ease;
    &:hover{
        transform: translateY(-2px);
        box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    }
`


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;