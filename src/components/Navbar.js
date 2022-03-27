import React from 'react';
import styled from 'styled-components';

// functions
import { responsive768 } from '../functions';
import { responsive500 } from '../functions';

// icons
// import Badge from '@material-ui/core/Badge';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';

// ###########################################
// styled components


// container
const Container = styled.div`
    /* background-color:black; */
    height:60px;
`
const Wrapper = styled.div`
    padding:10px 20px;
    /* color:white; */
    display:flex;
    justify-content:space-between;
    align-items: center;
`


// ############
// left
const Left = styled.div`
    flex: 1;
    text-align: left;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: 700;
    transition: all 200ms linear;
    :hover{
        color: #ccc;
    }
    ${responsive768({display:'none'})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    margin-left: 20px;
    padding: 5px;
    align-items: center;
    ${responsive768({ marginLeft: "5px", width: "100%" })}
    ${responsive500({ width: "fit-content" })}
`;
const Input = styled.input`
    border: none;
    outline: none;
    padding: 3px;
    ${responsive768({ width: "100%" })}
    ${responsive500({display:'none'})}
`;

// #########
// center
const Center = styled.div`
    flex: 1;
    text-align: center;
    ${responsive768({ flex: "2", textAlign: "right" })}
    ${responsive500({ flex: "1", textAlign:'center' })}
`;
const Logo = styled.h1`
    font-weight: bold;
`;

// #######3
// right
const Right = styled.div`
    flex: 1;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${responsive768({ flex: "3" })}
    ${responsive500({ flex: "1" })}
`;
const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 25px;
    transition: all 200ms linear;
    :hover {
        color: #ccc;
    }
    ${responsive768({ marginLeft: "15px" })}
    &:nth-child(1) {
        ${responsive500({ display: "none" })}
    }
    &:nth-child(2) {
        ${responsive500({ display: "none" })}
    }
`;



const Navbar = () => {


    return (
        <>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <SearchContainer>
                            <Input />
                            <Search
                                style={{
                                    color: "gray",
                                    fontSize: "2rem",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                }}
                            ></Search>
                        </SearchContainer>
                    </Left>
                    <Center>
                        <Logo>LAMA.</Logo>
                    </Center>
                    <Right>
                        <MenuItem>Regiseter</MenuItem>
                        <MenuItem>Sign In</MenuItem>
                        {/* <MenuItem>
                            <Badge badgeContent={3} color='primary' >
                                <ShoppingCartOutlined style={{ fontSize:'3rem'}}/>
                            </Badge>
                        </MenuItem> */}
                        <MenuItem>
                            <div style={{ position:'relative', }}>
                                <ShoppingCartOutlined style={{ fontSize: "3rem" }} />
                                <span style={{ position: 'absolute', top: '-9px',right:'-9px',fontSize:'12px',height:'20px',width:'20px',display:'flex' , justifyContent:'center' , alignItems:'center', background: 'darkblue', color: '#fff', borderRadius: '50%', padding:'0px' }}>0</span>
                            </div>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        </>
    );
}
export default Navbar;