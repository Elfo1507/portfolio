import styled from "styled-components";

export const DrawerBottomStyles = styled.div<{ pos: string }>`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    z-index: 4;
    background-color: #00000053;
    backdrop-filter: blur(5px);
    height: 80%;
    position: fixed;
    width: 45%;
    border-radius: 10px;
    margin: 20px;
    bottom: calc(40px - 80%);
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
        bottom: -40px;
    }
`;
export const DrawerSideStyles = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    z-index: 3;
    background-color: #00000053;
    backdrop-filter: blur(5px);
    width: 20%;
    margin-left: 5px;
    position: fixed;
    border-radius: 10px;
    height: 30%;
    top: 0;
    right: calc(150px - 19%);
    color: white;
    transition: right .3s ease-out;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
    }
    h3 {
        position: sticky;
        padding: 10px;
        top: 0;
        font-size: 2rem;
        font-weight: 500;
        z-index: 3;
        color: white;
        rotate: 270deg;
        position: relative;
    }
    &:hover {
        right: 0;
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
    a {
        font-size: 1.5rem;
        font-weight: 400;
        color: white;
        text-decoration: none;
    }
    &:hover {
        box-shadow: 0 0 1px .5px rgba(255, 255, 255, 0.288);
    }
`;