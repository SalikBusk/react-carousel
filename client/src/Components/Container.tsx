import React from 'react'

interface ContainerProps {
    children: React.ReactNode,
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <section className='max-x-[2520px] m-auto xl:px-14 md:px-10 sm:px-2 px-4'>
        {children}
    </section>
  )
}

export default Container