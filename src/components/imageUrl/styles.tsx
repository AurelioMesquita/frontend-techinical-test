import styled from "styled-components";

export const UrlComponent = styled.div`
  font-weight: bold;
  font-size: 10px;
  margin: 0;
  padding-bottom: 5px;
  color: #777777;
`;

export const UrlDescription = styled.p`
  margin: 0;
  font-size: 15px;
`;

export const UrlTitle = styled.p`
  margin: 0;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const ImgContainer = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`;
export const Container = styled.div`
  margin-right: 20px;
  margin-top: 30px;
  max-width: 40%;
`;
