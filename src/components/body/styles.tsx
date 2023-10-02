import styled from "styled-components";
import { Link } from "react-router-dom";
export const Img = styled.img`
  max-width: 30%;
  height: auto;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #4285f4;
  color: #fff;
  padding: 10px 20px;
  border: none;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;
