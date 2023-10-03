import styled from "styled-components";

export const Text = styled.input`
  margin: 0;
  width: 100%;
  border: 0;
  outline: none;
  background-color: 0;
`;

export const TextComponent = styled.div`
  justify-content: center;
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 12px 13px;
  border-radius: 20px;
  display: flex;
  max-width: 500px;
  width: 60%;
  margin: 30px auto 0;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.2s, box-shadow 0.2s;
  border: 1px solid black;

  &:focus {
    border-color: #4285f4;
  }
`;

export const Img = styled.img`
  width: 20px;
  height: auto;
`;
export const ImgClose = styled.img`
  width: 13px;
  height: auto;
`;

export const DataComponents = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  justify-content: center;
  margin: 0 auto;
  width: 50%;
  align-items: center;
  border-radius: 0 0 5% 5%;
  max-width: 500px;
  max-height: 300px;
  overflow: hidden;
  overflow-y: auto;
  z-index: 3;
  &::-webkit-scrollbar {
    display: none;
  }
`;
