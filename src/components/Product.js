import { FavoriteBorderOutlined, FavoriteOutlined, HearingOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components'


const IconContainer = styled.div`
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 500ms ease;
    z-index: 3;
`;

const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    height: 300px;
    background-color: #f5fbfd;
    margin: 20px;
    position: relative;
    &:hover ${IconContainer}{
        opacity: 1;
    }
`;
const Circle = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
`
const Image = styled.img`
    height: 80%;
    z-index: 2;
    object-fit: cover;
`

const Icon = styled.div`
    transform: scale(1.25);
    width: 50px;
    height: 50px;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #fff;
    transition: all 200ms ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.4);
    }
`;


const Product = ({item}) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} alt='product' />
            <IconContainer>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </IconContainer>
        </Container>
    );
};

export default Product;