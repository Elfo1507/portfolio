import styled from "styled-components";

export const DrawerBottomStyles = styled.div<{ pos: string }>`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    z-index: 3;
    background-color: #00000053;
    backdrop-filter: blur(5px);
    height: 80%;
    position: fixed;
    width: 45%;
    margin: 20px;
    bottom: calc(50px - 80%);
    color: white;
    transition: bottom .3s ease-out;
    ${props => props.pos === "left" ? "left: 0" : "right: 0"};
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
    }
    h3 {
        position: sticky;
        top: 0;
        font-size: 2rem;
        font-weight: 500;
        z-index: 3;
        color: white;
    }
    &:hover {
        bottom: 0;
    }
`;
export const DrawerSideStyles = styled.div<{ pos: string }>`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    z-index: 3;
    background-color: #00000053;
    backdrop-filter: blur(5px);
    height: 80%;
    position: fixed;
    width: 45%;
    margin: 20px;
    left: calc(50px - 80%);
    color: white;
    transition: left .3s ease-out;
    ${props => props.pos === "top" ? "top: 0" : "bottom: 0"};
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
    }
    h3 {
        position: sticky;
        top: 0;
        font-size: 2rem;
        font-weight: 500;
        z-index: 3;
        color: white;
        rotate: 90deg;
    }
    &:hover {
        left: 0;
    }
`;

export const DrawerItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    z-index: 3;
    color: white;
    background-color: black;
    border-radius: 3px;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.192);
    transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
    p {
        font-size: 1.5rem;
        font-weight: 400;
    }
    &:hover {
        box-shadow: 0 0 1px .5px rgba(255, 255, 255, 0.288);
    }
`;