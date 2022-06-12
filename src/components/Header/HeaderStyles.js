import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`

//NAV

export const DropDownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: -25%;
  top: 40px;
  width: 280px;
  background-color: #fff;
  border-radius: 8px;
  z-index: 100;
  padding: 4px 0;
  cursor: default;
  overflow: hidden;
  transition: 0.3s ease;
  visibility: ${({ active }) => active ? 'visible' : 'hidden'};
  opacity: ${({ active }) => active ? '1' : '0'};
  transform-origin: top;
  transform: ${({ active }) => active ? 'scaleY(1)' : 'scaleY(.3)'};

  @media ${(props) => props.theme.breakpoints.md} {
    top: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    top: 24px;
  }
`
export const DropDownItem = styled.a`
  width: 100%;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  transition: .3s ease;
  padding: 12px 16px;

  &:hover {
    transform: scale(1.05);
    background-color: #eee;
    box-shadow: 0 3px 6px 3px rgba(0,0,0,.3);
  }

  &:nth-of-type(2n):hover {
    box-shadow: 0 0 8px 4px rgba(0,0,0,.3);
  }

  &:nth-of-type(3n):hover {
    box-shadow: 0 -3px 6px 3px rgba(0,0,0,.3);
  }
`

export const DropDownIcon = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`

export const DropDownTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const DropDownItemTitle = styled.h2`
  color: #0f1624;
  font-size: 18px;
  line-height: 26px;
  text-align: start;
`

export const DropDownItemDesc = styled.p`
  color: #0f1624;
  opacity: 0.5;
  font-size: 14px;
  line-height: 22px;
  text-align: start;
`