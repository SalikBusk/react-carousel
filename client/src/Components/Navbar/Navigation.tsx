import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuItem from './MenuItem';

const Navigation = () => {
  const navigate = useNavigate();

  function handleHero(): void {
    navigate('/');
  }

  return (
    <div className='flex flex-row items-center gap-3'>
      <MenuItem label='Carousel' onClick={handleHero} />
    </div>
  );
};

export default Navigation;
