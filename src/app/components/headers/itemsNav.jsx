import Link from 'next/link';
import { items } from './navItems';
import PropTypes from 'prop-types';
import { ButtonLogin } from './ButtonLogin';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/client';
import { UserAccount } from '../user/UserAccount';


export const ItemsNav = ({ select = false }) => {

    const [login, setLogin] = useState(false);

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
          if (session){
            setLogin(true)
          } else {
            setLogin(false)
          }
      })
      }, [ ])

  return (
    <ul className={ `md:flex md:items-center md:pb-0 md:py-0  md:static md:bg-white bg-slate-200 text-center md:z-auto md:mb-0 md:mt-0 left-0 w-full md:w-auto transition-all duration-500 ease-in ${select ? 'block' : 'hidden'}` }>
        {
            items.map(({ StyleLi, StyleA, link, title }, index) => (
                <li className={ StyleLi } key={ index }>
                    <Link href={ link } className={ StyleA }>{ title }</Link>
                </li>
            ))
        }
        <div className={login ? 'hidden' : 'block md:bg-red-400 md:hover:bg-red-600 bg-transparent  text-white font-bold py-2 px-4 lg:mr-0 mr-4 md:rounded-full transition-all duration-500 ease-in'}>
            <ButtonLogin />
        </div>

        <div className={`relative ${ login ? 'block' : 'hidden'  }`}>
            <UserAccount />
        </div>

    </ul>
    )
}

ItemsNav.propTypes = {
    select : PropTypes.any,
}