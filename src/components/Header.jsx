import WiLogo from '../assets/main-black.png'
import { MainLogo } from './Images'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { HeadNavigation } from './Navigation'


const Header = () => {

  const [currentMenu, menuState] = useState(false)

  return (
    <div className='container mx-auto'>
      <div className="h-24 flex mx-4 justify-between items-center">
        <div className='flex items-center gap-1'>
          <MainLogo imgprops={
              { loc: WiLogo, title: 'William Calda' }
            } 
          />
          <h1 className='font-sans font-medium text-lg'>
            WilliamC
          </h1>
        </div>
        <HeadNavigation />
        <div className='flex sm:hidden mx-2'>
          <button onClick={ () => { menuState(!currentMenu) }}>
          {
            currentMenu ? <X /> : <Menu />
          }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header