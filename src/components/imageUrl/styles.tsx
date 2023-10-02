import styled from "styled-components";

export const UrlComponent = styled.div`
  padding: 10px;
  margin: 30px 50px 10px;
  background-color: #f9f9f9;
  width: 60%;
`;

export const UrlDescription = styled.p`
  margin: 0;
  font-size: 15px;
`;
export const UrlAdress = styled.p`
  font-weight: bold;
  font-size: 12px;
  margin: 0;
  padding-bottom: 5px;
  color: #777777;
`;
export const UrlTitle = styled.p`
  padding-bottom: 5px;
  margin: 0;
  color: #1a0dab;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const ImgContainer = styled.img`
  width: 300px;
  height: 200px;
`;
