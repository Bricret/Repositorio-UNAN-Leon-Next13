import { LogoType } from '../logo/LogoType'
import { Footer1 } from './Footer1'
import { Footer2 } from './Footer2'

export const Footers = () => {
  return (
    <>
        <footer className=" bg-secondary-color">
            <div className='py-3 md:px-10 px-7'>
            <LogoType type={ false }/>
            </div>
            <Footer1 />
            <Footer2 />
        </footer>

    </>
        
    )
}