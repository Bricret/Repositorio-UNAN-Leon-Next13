'use client'

import { Nav1 } from "./Nav1"
import { LogoType } from "../logo/LogoType"
import { BurgerMenu } from "./BurgerMenu"
import { ItemsNav } from "./itemsNav"
import { useState } from "react"
import { originalID, newID } from './navItems';


export const Header = () => {

  const [select, setSelect] = useState(false);
  const [first, setFirst]   = useState( originalID );

  const onPick = () => {
    select ? setFirst(originalID) : setFirst(newID);
    setSelect(!select);
  };

  return (
    <>
      <header>
        <Nav1 />
        <nav className='bg-white flex-wrap md:flex-nowrap  py-1 lg:px-10 md:px-8 px-0 flex justify-between lg:w-full border-b-2 border-b-gray-300'>
           <LogoType type={ true }/>

           <BurgerMenu onPick={ onPick } first={ first }/>

           <ItemsNav select={ select } />
        </nav>
      </header>
    </>
  )
}
