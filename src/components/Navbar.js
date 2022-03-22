import React from 'react';
import styled from 'styled-components';


// icons
import Badge from '@material-ui/core/Badge';
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
`

const Language = styled.span`
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: 700;
    transition: all 200ms linear;
    :hover{
        color: #ccc;
    }
`
const SearchContainer = styled.div`
    border: .5px solid lightgray;
    display: flex;
    margin-left: 20px;
    padding: 5px;
    align-items: center;
`
const Input = styled.input`
    border: none;
    outline: none;
    padding: 3px;
`

// #########
// center
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`

// #######3
// right
const Right = styled.div`
    flex: 1;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 25px;
    transition: all 200ms linear;
    :hover {
        color: #ccc;
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
                            <Search style={{ color:'gray',fontSize: '2rem', fontWeight: 'bold', cursor:'pointer' } }>                                    
                                </Search>
                        </SearchContainer>
                    </Left>
                    <Center><Logo>LAMA.</Logo></Center>
                    <Right>
                        <MenuItem>Regiseter</MenuItem>
                        <MenuItem>Sign In</MenuItem>
                        <MenuItem>
                            <Badge badgeContent={3} color='primary' >
                                <ShoppingCartOutlined style={{ fontSize:'3rem'}}/>
                            </Badge>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        </>
    );
}
export default Navbar;