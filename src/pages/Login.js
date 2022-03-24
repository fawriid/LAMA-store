import React from "react";
import styled from "styled-components";



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            top center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    padding: 20px;
    background-color: #fff;
    width: 30%;
`;
const Title = styled.h1`
    font-size: 2.4rem;
    text-align: center;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px;
    font-size: 1.6rem;
    padding:10px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    outline: none;
    background-color: teal;
    color: white;
    font-size: 1.7rem;
    margin-left: 10px;
    margin-top: 10px;
    padding: 1rem;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.1s ease;
    &:hover {
        transform: translateY(-2px);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    }
`;
const Link = styled.a`
    margin: 5px 0;
    margin-left: 10px;
    font-size: 1.5rem;
    text-decoration: underline;
    transition: all 200ms ease;
    cursor: pointer;
    &:hover{
        color: blue;
    }
`


const Login = () => {
    return (
        <Container>
            <Container>
                <Wrapper>
                    <Title>SIGN IN</Title>
                    <Form>
                        <Input placeholder="username" />
                        <Input placeholder="password" />
                        <Button>LOGIN</Button>
                        <Link>Do you forget your password ?</Link>
                        <Link>CREATE AN ACCOUNT</Link>
                    </Form>
                </Wrapper>
            </Container>
        </Container>
    );
};

export default Login;
