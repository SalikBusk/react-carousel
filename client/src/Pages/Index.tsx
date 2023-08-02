import React from 'react'
import { useNavigate } from 'react-router';
import Button from '../Components/Buttom'
import Heading from '../Components/Heading'

const Index = () => {
  const navigate = useNavigate();

  function handleHero(): void {
    navigate('/hero');
  }

  function handleCard(): void {
    navigate('/card');
  }


  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <Heading title='React Carousel' subtitle='Komponents til React' center/>
        <div className='flex flex-row gap-3 w-[25%] py-[20px]'>
          <Button label='Hero' onClick={handleHero} outline/>
          <Button label='Card' onClick={handleCard} outline/>
        </div>
    </div>
  )
}

export default Index