import React from 'react';

// style
import styled from 'styled-components'

// components
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons';


// functions
import { responsive768 } from '../Functions';
import { responsive500 } from '../Functions';



// styled elements
const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
    min-height: 50vh;
`

const Title = styled.h1`
    text-align: center;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 20px 0;
    ${responsive500({ flexDirection: "column" })}
`;
const TopButton = styled.button`
    padding: 10px;
    border: ${(props) => (props.type === "filled" ? "none" : "1px solid black")};
    background-color: ${(props) => (props.type === "filled" ? "black" : "transparent")};
    color: ${(props) => (props.type === "filled" ? "white" : "black")};
    cursor: pointer;
    font-size: 1.8rem;
    transition: all 200ms ease;
    &:hover {
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.35);
        transform: translateY(-2px);
    }
    ${responsive768({ fontSize: "1.6rem", padding: "5px" })}
    ${responsive500({ margin: "5px 0" })}
`;
const TopTexts = styled.div`
    display: flex;
    ${responsive768({ flexDirection: "column", margin: "0 10px" })}
    ${responsive500({ margin: "10px 0" })}
`;
const TopText = styled.p`
    margin: 0 10px;
    text-decoration: underline;
    cursor: pointer;
    transition: all 200ms ease;
    &:hover {
        color: blue;
    }
    ${responsive768({ margin: "10px 0" })}
`;

const Bottom = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items:center ;
    ${responsive768({flexDirection:'column',justifyContent:'center'})}
`
const Info = styled.div`
    flex: 3;
    ${responsive768({ flex: "1",width:'90%' })}
`;
const Product = styled.div`
    ${responsive500({margin:'20px 0',width:'90%',textAlign:'center'})}
`
const Image = styled.img`
    width: 200px;
    margin-right: 20px;
    ${responsive768({ width: "180px", marginRight: "10px" })}
    ${responsive500({ margin: "0 auto" })}
`;
const ProductDetails = styled.div`
    flex: 1;
    display: flex;
    min-height: 200px;
    ${responsive500({flexDirection:'column'})}
`;
const Details = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
`;
const B = styled.b`
    margin-right: 5px;
    ${responsive768({ marginLeft: "5px" })}
`;

const ProductName = styled.span`
    ${responsive500({ margin: "5px auto" })}
`;
const ProductId = styled.span`
    ${responsive500({ margin: "5px auto" })}
`;
const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    ${responsive500({margin:'5px auto',})}
`;
const ProductSize = styled.span`
    ${responsive500({ margin: "5px auto" })}
`;


const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
    ${responsive768({ paddingRight: "5px" })}
    ${responsive500({ flexDirection:'row' })}
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    ${responsive500({ margin: "0 10px",justifyContent:'center' })}
`;
const Amount = styled.span`
    font-size: 2.4rem;
    margin: 0px 10px;
    font-weight: 500;
    ${responsive768({ fontSize: "2rem" })}
`;
const Price = styled.span`
    font-size: 2.5rem;
    font-weight: 200;
    margin-top: 15px;
    ${responsive768({ fontSize: "2.3rem" })}
    ${responsive500({ margin: "0",marginLeft:'15px' })}
`;

const Hr = styled.hr`
    width: 92%;
    height: 1px;
    background-color: lightgray;
    margin: 5px 0;
    border: none;
    ${responsive768({ width: "100%" })}
`;

const Summary = styled.div`
    flex: 1;
    align-self: start;
    padding: 20px;
    border: 1px solid lightgray;
    border-radius: 20px;
    height: fit-content;
    ${responsive768({ alignSelf: "center",marginTop:'30px' })}
`;
const SummaryTitle = styled.h1`
    text-align: center;
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.type === 'discount' && 'red'};
    font-size: ${props => props.type === 'total' && '2.4rem'};
    font-weight: ${props => props.type === 'total' && '700'};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    font-size: 1.8rem;
    border: none;
    outline: none;
    background-color: black;
    color: white;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
    transition: all 200ms ease;
    cursor: pointer;
    &:hover{
        box-shadow: 2px 2px 10px rgba(0,0,0,0.35);
        transform: translateY(-2px);
    }
`


const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping bag (2)</TopText>
                        <TopText>Your whishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout Now!</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Details>
                                    <ProductName>
                                        <B>Product:</B>JESSIE THUNDER SHOES
                                    </ProductName>
                                    <ProductId>
                                        <B>ID:</B>932871678
                                    </ProductId>
                                    <ProductColor color="Black" />
                                    <ProductSize>
                                        <B>Size:</B>37.5
                                    </ProductSize>
                                </Details>
                                <PriceDetail>
                                    <AmountContainer>
                                        <Remove
                                            style={{
                                                transform: "scale(1.5)",
                                                cursor: "pointer",
                                            }}
                                        />
                                        <Amount>1</Amount>
                                        <Add
                                            style={{
                                                transform: "scale(1.5)",
                                                cursor: "pointer",
                                            }}
                                        />
                                    </AmountContainer>
                                    <Price>$ 30</Price>
                                </PriceDetail>
                            </ProductDetails>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetails>
                                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                                <Details>
                                    <ProductName>
                                        <B>Product:</B>HAKURA T-SHIRT
                                    </ProductName>
                                    <ProductId>
                                        <B>ID:</B>98329837449
                                    </ProductId>
                                    <ProductColor color="gray" />
                                    <ProductSize>
                                        <B>Size:</B>XL
                                    </ProductSize>
                                </Details>
                                <PriceDetail>
                                    <AmountContainer>
                                        <Remove
                                            style={{
                                                transform: "scale(1.5)",
                                                cursor: "pointer",
                                            }}
                                        />
                                        <Amount>1</Amount>
                                        <Add
                                            style={{
                                                transform: "scale(1.5)",
                                                cursor: "pointer",
                                            }}
                                        />
                                    </AmountContainer>
                                    <Price>$ 40</Price>
                                </PriceDetail>
                            </ProductDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 70</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="discount">
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 70</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout Now !</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;