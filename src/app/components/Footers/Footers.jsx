import { LogoType } from '../logo/LogoType'
import { Footer1 } from './Footer1'

export const Footers = () => {
  return (
    <>
        <div className=" bg-secondary-color">
            <div className='py-3 md:px-10 px-7'>
            <LogoType type={ false }/>
            </div>
            <Footer1 />
        </div>

    </>
        
    )
}