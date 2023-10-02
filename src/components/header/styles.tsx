import styled from "styled-components";

export const HeaderComponent = styled.header`
  width: 95%;
  padding-bottom: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const ImgContainer = styled.img`
  margin-right: 6px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 7px;
  &:hover {
    transform: scale(1.3);
  }
`;
export const UserProfile = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
`;

export const Title = styled.h2`
  align-items: center;
  text-align: center;
  padding: 20px 0;
  font-size: 13px;
  text-transform: uppercase;
  color: black;
  text-decoration: none;
`;
