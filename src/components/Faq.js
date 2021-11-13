import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components";
import TypeWriter from 'react-typewriter';

const Title = styled.h1`
	font-family: "Ubuntu", sans-serif;
	font-style: bold;
	font-size: 53px;
    color: #62B22F
`;

const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 50vh;
    background: #fff;
    `;

const FaqSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100px;
    background: #fff;
    `;

const Container = styled.div`
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
    width: 70vw;
    `;

const Wrap = styled.div`
    background: #468845;
    border-radius: 25px 25px 0px 0px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    h1{
        padding: 2rem;
        font-size: 2rem;
    }

    span {
        margin-right: 1.5rem;
    }
`;

const Dropdown = styled.div`
    background: #468845;
    color: #00ffb9;
    width:70vw;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

function Faq() {

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }
        setClicked(index);
    };


    return (
        <>
            <FaqSection>
                <Title><TypeWriter typing={0.5}><span style={{color: "#62b22f" }}>&lt;FAQ&gt;</span></TypeWriter>
                
                </Title>
            </FaqSection>
            <AccordionSection>
                <Container>
                    {Data.map((item, index) => {
                        return (
                            <>
                                <Wrap onClick={() => toggle(index)} key={index}>
                                    <h1>{item.question}</h1>
                                    <span>+</span>
                                </Wrap>
                                {clicked === index ? (
                                    <Dropdown>
                                        <p>{item.answer}</p>
                                    </Dropdown>
                                ) : null}
                            </>
                        );
                    })}
                </Container>
            </AccordionSection>
        </>
    )
}

export default Faq;