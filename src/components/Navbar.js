import { Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

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

// #######3
// right
const Right = styled.div`
    flex: 1;
    text-align: right;
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
                            <Search style={{ fontSize: '2rem', fontWeight: 'bold', cursor:'pointer' } }>                                    
                                </Search>
                        </SearchContainer>
                    </Left>
                    <Center>center</Center>
                    <Right>right</Right>
                </Wrapper>
            </Container>
        </>
    );
}
export default Navbar;