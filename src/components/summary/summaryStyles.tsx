import styled from "styled-components";

export const SummaryStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 100px;
  z-index: 2;
  color: white;
  z-index: 2;

  #summaryHelp {
    z-index: 2;
    font-size: 1rem;
    font-weight: 400;
    text-align: justify;
  }
  p {
    z-index: 2;
    font-size: 2rem;
    font-weight: 400;
    text-align: justify;
  }
  h2 {
    z-index: 2;
    font-size: 3rem;
    font-weight: 500;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    #summaryHelp {
      font-size: .5rem;
    }
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 1rem;
      text-align: center;
    }
  }
`;
