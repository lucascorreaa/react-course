import styled from "styled-components";

export const AccordionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AccordionContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    width: 300px;
    transition: all 240ms;
    animation: slide-in 0.2s ease-in-out;

    @keyframes slide-in {
        from {
            transform: translateY(0);
        }

        to {
            transform: translateY(10%);
        }
    }
`

export const ContentText = styled.p`
    font-size: 14px;
`

export const AccordionContainer = styled.div`
    width: 300px;
    border-bottom: 1px solid black;
    height: 50px;
    display: flex;
    padding-left: 20px;
    padding-right: 10px;
    align-items: center;
    justify-content: space-between;
`

export const AccordionText = styled.p`
    font-size: 16px;
`

export const AccordionButton = styled.button``

export const AccordionImage = styled.img``