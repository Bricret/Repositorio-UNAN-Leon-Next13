import Link from 'next/link';
import { items } from './navItems';
import PropTypes from 'prop-types';
import { Search } from '../hero/Search';
import { ButtonLogin } from './ButtonLogin';


export const ItemsNav = ({ select = false }) => {

  return (
        <>
            <ul className={ `md:flex md:items-center md:pb-0 py-6 md:py-0  md:static md:bg-white bg-slate-200 text-center md:z-auto md:mb-0 md:mt-0 left-0 w-full md:w-auto transition-all duration-500 ease-in ${select ? 'block' : 'hidden'}` }>
                <div className='md:hidden'>
                    <Search />
                </div>
                {
                    items.map(({ StyleLi, StyleA, link, title }, index) => (
                        <li className={ StyleLi } key={ index }>
                            <Link href={ link } className={ StyleA }>{ title }</Link>
                        </li>
                    ))
                }

                <ButtonLogin />

                <div>
                    <form action="/auth/signout" method="post">
                        <button className="button block" type="submit">
                            Sign out
                        </button>
                    </form>
                </div>

                <Link href='/account' className='pl-3'> cuenta personal</Link>

            </ul>
        </>
    )
}

ItemsNav.propTypes = {
    select : PropTypes.any,
}