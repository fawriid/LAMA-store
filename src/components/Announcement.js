import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: teal;
    color: #fff;
    font-size: 15px;
`


const Announcement = () => {
    return (
        <>
            <Container>
                Super Deal! Free Shipping on Orders over 50$! 
            </Container>
        </>
    );
};

export default Announcement;