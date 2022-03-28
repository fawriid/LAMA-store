import React, { useEffect, useState } from 'react';
import styled from 'styled-components'


//functions
import { responsive768 } from '../Functions';
import { responsive500 } from '../Functions';


// icons
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';

// slider Items
import { sliderItems } from '../data';
import { useNavigate } from 'react-router-dom';

// styled components
const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`
const Arrow = styled.div`
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: ${props => props.direction ==='left' && '20px'};
    right: ${props => props.direction === 'right' && '20px'};
    cursor: pointer;
    opacity: 0.6;
    z-index: 9;
    transition: all 100ms linear;
    &:hover{
        opacity: 1;
    }
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    transition: all 1.2s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    height: 100vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
    background-color: #${props => props.bgc};
`

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex: 1;
    ${responsive500({ display: "none" })}
`;
const Image = styled.img`
    height: 80%;
    ${responsive768({ height:'60%' })}
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 60px;
    ${responsive768({ flex: '2',padding:'20px' , display:'flex', justifyContent:'left', alignItems:'center', flexDirection:'column' })}
`;
const Title = styled.h1`
    font-size: 50px;
    ${responsive768({fontSize:'25px'})}
`;
const Desc = styled.p`
    margin: 20px 0;
    font-size: 20px;
    letter-spacing: 3px;
    ${responsive768({ fontSize: "15px",letterSpacing:'1px' })}
`;
const Button = styled.button`
    background-color: transparent;
    padding: 5px;
    cursor: pointer;
    border: 0.5px solid gray;
    font-size: 18px;
    ${responsive768({ fontSize: "15px" })}

    transition: all 200ms linear;
    &:hover {
    }
`;

const Slider = () => {

    const navigate = useNavigate() 

    const [slideIndex, setSlideIndex] = useState(1)
    const clickHandler = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex >0 ? slideIndex -1 : 2)
        } else {
            setSlideIndex(slideIndex <2 ? slideIndex +1 : 0)
        }
    } 

    useEffect(() => {
        const changeSlide = setInterval(() => clickHandler('right'), 3500)
        return  () => clearInterval(changeSlide)
    }, [slideIndex, clickHandler])
 
    return (
        <>
            <Container>
                <Arrow direction="left" onClick={() => clickHandler("left")}>
                    <ArrowLeftOutlined style={{ fontSize: "3rem" }} />
                </Arrow>

                <Wrapper slideIndex={slideIndex}>
                    {sliderItems.map((item) => (
                        <Slide bgc={item.bg} key={item.id}>
                            <ImgContainer>
                                {item.id === 1 ? <p>no picture available</p> : <Image src={item.img} alt={ item.title}/>}
                                {/* <Image src={item.img} alt={item.title} /> */}
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button onClick={() => navigate('/productlist')}>Shop Now</Button>
                            </InfoContainer>
                        </Slide>
                    ))}
                </Wrapper>

                <Arrow direction="right" onClick={() => clickHandler("right")}>
                    <ArrowRightOutlined style={{ fontSize: "3rem" }} />
                </Arrow>
            </Container>
        </>
    );
};

export default Slider;