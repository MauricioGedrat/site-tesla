import styled from "styled-components";
import BurguerSvg from "../../SvgIcons/Burguer";
import HeaderLogo from "../../SvgIcons/Logo";

export const Container = styled.div``;

export const Header = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  min-height: 52px;
  width: 99%;
  background: transparent;
  z-index: 1000 !important;
`;
export const Logo = styled(HeaderLogo)`
  padding: 20px;
  cursor: pointer;
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    list-style: none;
  }
  ul a {
    text-decoration: none;
    color: #393c41;
    font-size: 14px;
    transition: 0.3s;

    &:hover {
      color: black;
      font-weight: 600;
    }
  }

  margin-bottom: 20px;

  @media (min-width: 600px) {
    ul {
      flex-direction: row;
      gap: 30px;
    }
  }
`;
