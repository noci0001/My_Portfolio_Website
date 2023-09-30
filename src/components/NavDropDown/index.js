import React from 'react'
//import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
//import { FaLocationArrow } from "react-icons/fa"
import { IoLanguageOutline } from "react-icons/io5"

//DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer

import { DropDownContainer, DropDownIcon } from './NavDropDown'


const NavDropDown = (props) => (
  <DropDownContainer>
  <DropDownIcon>
      <IoLanguageOutline Size="3rem"/>
  </DropDownIcon>
</DropDownContainer>
);

export default NavDropDown;
