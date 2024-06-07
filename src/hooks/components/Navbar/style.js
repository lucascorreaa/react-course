import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 73px;
    border-bottom: 1px solid black;
    align-items: center;
    justify-content: space-between;
    padding: 0 64px;
`

export const Logo = styled.h1`
    font-size: 30px;
    font-weight: 900;
`

export const Nav = styled.nav`
    display: flex;
    gap: 32px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Link = styled.button`
    font-size: 16px;
`

export const ContainerButton = styled.div`
    display: flex;
    gap: 16px;
`

export const Button = styled.button`
    width: 88px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    color: ${props => props.bgColor ? 'white' : 'black'};
    background-color: ${props => props.bgColor ? props.bgColor : 'transparent'} ;
`