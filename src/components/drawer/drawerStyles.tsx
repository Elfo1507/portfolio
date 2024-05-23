import styled from "styled-components";

export const DrawerBottomStyles = styled.div<{ pos: string }>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    z-index: 4;
    background-color: #00000053;
    backdrop-filter: blur(5px);
    height: 70%;
    position: fixed;
    width: 45%;
    border-radius: 10px;
    margin: 10px;
    bottom: calc(-60%);
    color: white;
    transition: bottom .3s ease-out;
    ${props => props.pos === "left" ? "left: 0" : "right: 0"};
    #title {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 10px;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
    }
    h3 {
        font-size: 2rem;
        font-weight: 500;
        z-index: 3;
        color: white;
        width: 100%;
    }

    &:hover {
        bottom: -5%;
    }

    @media (max-width: 768px) {
        ${props => props.pos === "left" ? "top: 30%" : "top: 70%"};
        width: 80%;
        right: calc(-80%);
        height: 30%;
        transition: right .3s ease-out;
        flex-direction: row;
        justify-content: center;
        left: auto;

        h3 {
            font-size: .5rem;
            rotate: 270deg;
            left: 0;
            width: 60px;
            height: 60px;
            margin: 0;
        }

        &:hover {
            right: 0;
        }
    }   
`;
export const DrawerSideStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 40px;
    padding: 5px;
    z-index: 3;
    background-color: #00000053;
    backdrop-filter: blur(5px);
    width: 400px;
    margin-left: 5px;
    position: fixed;
    border-radius: 10px;
    height: 40%;
    top: 30px;
    right: calc(-310px);
    color: white;
    transition: right .3s ease-out;
    #title {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 10px;
    }
    div {
        display: flex;
        justify-content: center;        
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
    }
    h3 {
        position: fixed;
        padding: 10px;
        width: 30%;
        height: 60px;
        left: 0;
        font-size: 2rem;
        font-weight: 500;
        z-index: 3;
        color: white;
        rotate: 270deg;
    }
    &:hover {
        right: 0;
    }

    @media (max-width: 768px) {
        width: 30%;
        right: calc(-25%);
        height: 20%;
        transition: right .3s ease-out;
        top: 0;
        h3 {
            font-size: .5rem;
            margin: 0;
            height: 50px;
        }
        &:hover {
            right: 0;
        }
    }
`;

export const DrawerItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 3px;
    z-index: 3;
    color: white;
    background-color: black;
    border-radius: 3px;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.192);
    transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
    p {
        font-size: 1rem;
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

    @media (max-width: 768px) {
        padding: 0 5px;
        p {
            font-size: .4rem;
        }
        a {
            font-size: .5rem;
        }
    }
`;