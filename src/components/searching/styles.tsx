import styled from "styled-components";

export const SearchContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  padding: 0;
  width: 70%;
  position: absolute;
  z-index: 2;
`;

export const Img = styled.img`
  margin: 0;
  padding-right: 3px;
  border: none;
  width: 99px;
  margin: 40px 20px;
  height: 30px;
  @media (max-width: 768px) {
    margin-top: -10px;
    height: 24px;
    width: auto;
  }
`;

export const UrlBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearcherInput = styled.div`
  width: 80%;
  padding: 0;
  margin: 0;
  z-index: 1;
  position: absolute;
`;

export const Button = styled.button`
  margin-left: 48%;
  margin-top: 8%;
  background-color: #4285f4;
  color: #fff;
  padding: 10px 20px;
  border: none;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  @media (max-width: 768px) {
    margin-left: 55%;
  }
`;
