import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: ${props => props.bgColor};
    color:${props => props.color};
`
const Left = styled.div`
    flex:1;
    padding: 20px;
`
const Logo = styled.h1`
    font-size: 4rem;
`
const Desc = styled.p`
    margin: 20px 0px;
    font-size: 2rem;
`
const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    width:40px;
    height:40px;
    border-radius: 50%;
    background-color: #${props => props.color};
    color: #fff;
    cursor: pointer;
    transition: all 200ms ease;
    &:hover{
        background-color: #${props => props.color}cc;
    }
`


const Center = styled.div`
    flex: 1;
    text-align: center;
    padding: 20px;
`;
const Title = styled.h1`
    
`
const List = styled.ul`
    padding: 1rem;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    margin:0 10px; 
    margin-bottom: 5px;
    width: 30%;
    cursor: pointer;
    transition: all 100ms linear;
    &:hover{
        color:gray;
    }
`


const Right = styled.div`
    flex: 1;
    text-align: right;
    padding: 20px;
`;
const ContactItem = styled.div`
    margin: 10px 0;
`
const Payment = styled.img`
    margin-top: 20px;
    width: 50%;
    cursor: pointer;
`


const Footer = (props) => {
    return (
        <Container bgColor={props.bgColor} color={props.color}>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>The most popular Mall in the Dubai</Desc>
                <SocialContainer>
                    <SocialIcon color="55ACEE">
                        <Twitter style={{ transform: "scale(1.4)" }} />
                    </SocialIcon>
                    <SocialIcon color="3B5999">
                        <Facebook style={{ transform: "scale(1.4)" }} />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram style={{ transform: "scale(1.4)" }} />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest style={{ transform: "scale(1.4)" }} />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    622 Dixie Path , South Tobinchester 98336{" "}
                    <Room style={{ marginLeft: "10px" , transform:'scale(1.4)'}} />
                </ContactItem>
                <ContactItem>
                    +1 234 56 78 <Phone style={{ marginLeft: "10px" , transform:'scale(1.4)'}} />
                </ContactItem>
                <ContactItem>
                    contact@lama.dev <MailOutline style={{ marginLeft: "10px", transform:'scale(1.4)' }} />
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;