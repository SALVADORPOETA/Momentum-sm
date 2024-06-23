import styled from "styled-components";

export const Welcome = styled.div`
    position: absolute;
    text-align: center;
    padding: 1rem;
    top: 40%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

export const TimeStamp = styled.p`
    font-size: 4rem;
    font-weight: 500;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 640px) {
        font-size: 3rem;
    }
   
    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
`

export const Greeting = styled.p`
    font-size: 3rem;
    font-weight: 600;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 640px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`