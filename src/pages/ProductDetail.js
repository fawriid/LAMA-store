import React from "react";

// style
import styled from "styled-components";

// components
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

// icons
import { Add, Remove } from "@material-ui/icons";

// functions
import { responsive768 } from '../functions.js'
import {responsive500} from '../functions.js' 


const Container = styled.div``;
const Wrapper = styled.div`
    padding: 40px 20px 10px;
    display: flex;
    margin-bottom: 20px;
    ${responsive500({ flexDirection:'column' })}
`;
const ImageContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
transform: scale(.8);
    width: 100%;
    height: 90%;
    object-fit:cover;
`;
const InfoContainer = styled.div`
    flex: 1;
`;

const Title = styled.h1`
    font-weight: 200;
    font-size: 5rem;
`
const Desc = styled.p`
    margin: 20px 0;
    font-size: 1.9rem;
`
const Price = styled.span`
    font-size: 4rem;
    font-weight: 200;
`
const FilterContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    ${responsive768({width:'90%'})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterText = styled.div`
    font-size: 1.8rem;
    font-weight: 500;
`
const FilterColor = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${(props) => props.bgColor};
    cursor: pointer;
    margin-left: 10px;
    ${responsive768({ width: '20px' , height:'20px',marginLeft:'7px',marginRight:'2px' })}
`;
const Select = styled.select`
    margin-left: 10px;
    padding: 10px;
    cursor: pointer;
`
const Option = styled.option`
    padding: 20px;
`
const AddContainer = styled.div`
    margin-top: 30px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    ${responsive768({ width: "90%" })}
`;
const Amount = styled.div`
    display: flex;
    align-items: center;
`
const AmountNumber = styled.p`
    margin: 0 10px; font-size: 2rem;
    border: 1px solid teal;
    padding: 1rem;
    border-radius: 5px;
`
const Button = styled.button`
    border: none;
    outline: none;
    background-color: teal;
    color: white;
    font-size: 1.7rem;
    font-weight: 500;
    border-radius: 5px;
    padding: 0 10px ;
    cursor: pointer;
    margin-left: 50px;
`



const SingleProduct = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Woman Bag</Title>
                    <Desc>Best purse that you can find in the market with the best price and shiping free, available in three color and different sizes</Desc>
                    <Price>$30</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterText>Color:</FilterText>
                            <FilterColor bgColor='black' />
                            <FilterColor bgColor='red' />
                            <FilterColor bgColor='blue' />
                        </Filter>
                        <Filter>
                            <FilterText>Size:</FilterText>
                            <Select>
                                <Option>X</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                                <Option>XXL</Option>
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <Amount>
                            <Remove style={{transform:'scale(1.4)', cursor:'pointer'}} />
                            <AmountNumber>1</AmountNumber>
                            <Add style={{transform:'scale(1.4)', cursor:'pointer'}} />
                        </Amount>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer bgColor="teal" color="white" />
        </Container>
    );
};

export default SingleProduct;
