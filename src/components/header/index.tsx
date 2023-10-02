import React from "react";
import { ImgContainer, HeaderComponent, UserProfile, Title } from "./styles";
import profileImage from "../../assets/profile.png";
export default function Header() {
  return (
    <>
      <HeaderComponent>
        <Title>Agile Content Frontend test</Title>
        <UserProfile>
          <ImgContainer src={profileImage} alt="profile" />
        </UserProfile>
      </HeaderComponent>
    </>
  );
}
