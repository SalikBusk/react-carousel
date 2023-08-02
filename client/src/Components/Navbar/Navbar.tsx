import React from 'react'
import Container from '../Container'
import Navigation from './Navigation'

const Navbar = () => {
  return (
    <div className='w-full bg-white z-10 fixed'>
        <div className='py-2'>
            <Container>
                <div className='flex flex-row items-center justify-center gap-3 md:gap-0'>
                    <Navigation/>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Navbar