import styled from "styled-components";

export const Intro = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding: 50px 100px;
  z-index: 2;
  color: white;
  h1 {
    font-size: 50px;
    font-weight: 500;
    z-index: 2;
  }
  span {
    position: relative;
  }
  span::before {
    content: "";
    width: fit-content;
    color: white;
    white-space: nowrap;
    border-right: 0.15rem solid white;
    overflow: hidden;
    animation: words 10s infinite, blink 1s step-end infinite;
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  @keyframes words {
    0%,
    20% {
      content: "Desenvolvedor Frontend";
    }
    20%,
    40% {
      content: "Desenvolvedor Backend";
    }
    40%,
    60% {
      content: "Desenvolvedor Fullstack";
    }
    60%,
    80% {
      content: "Desenvolvedor de Software";
    }
    80%,
    100% {
      content: "Analista de dados";
    }
  }
`;
