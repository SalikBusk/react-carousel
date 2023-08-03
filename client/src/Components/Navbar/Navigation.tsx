import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let label = 'Carousel';
  let label1 = '';

  
  if (location.pathname === '/hero') {
    label = 'Start';
    label1 = 'Card'; 
  } else if (location.pathname === '/card') {
    label = 'Start';
    label1 = 'Hero'; 
  }

  function handleHero(): void {
    navigate('/');
  }

  function handleLabel1Click(): void {
    if (label1 === 'Card') {
      navigate('/card');
    } else if (label1 === 'Hero') {
      navigate('/hero');
    }
  }

  return (
    <div className='flex flex-row items-center gap-3'>
      <MenuItem label={label} onClick={handleHero} />

      {/* hidden in index page  */}
      {location.pathname !== '/' && (
        <MenuItem label={label1} onClick={handleLabel1Click} />
      )}
    </div>
  );
};

export default Navigation;
