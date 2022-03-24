import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Container = styled.div``;
const Title = styled.h1`
    text-align: center;
    margin: 10px 0;
    margin-top: 30px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
`
const Filter = styled.div``
const FilterText = styled.span`
    font-size: 2rem;
    font-weight: 600;
    margin-right: 10px;
`
const Select = styled.select`
    margin-right: 10px;
    padding: 10px;
    cursor: pointer;
`
const Option = styled.option`
    cursor: pointer;
`

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>ProductList</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Footer bgColor='teal' color='white'/>
        </Container>
    );
};

export default ProductList;