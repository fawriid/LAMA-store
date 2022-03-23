import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
    flex: 1;
    position: relative;
    height: 70vh;
    margin: 5px;
`
const InfoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
`
const Title = styled.h1`
    color: #fff;
    margin-bottom: 10px;
    backdrop-filter:blur(20px);
    padding: 5px 15px;
`
const Button = styled.button`
    padding: 10px 10px;
    border: none;
    background-color: #fff;
    color: gray;
    font-size: 1.8rem;
    cursor: pointer;
    font-weight: 500;
    transition: all 200ms linear;
    &:hover{
        color:black;
    }
`

const CategoryItem = ({item}) => {
    return (
        <Container>
                <Image src={item.img} />
            <InfoContainer>
                <Title>{ item.title}</Title>
                <Button>SHOP NOW ! </Button>
            </InfoContainer>
        </Container>
    );
};

export default CategoryItem;