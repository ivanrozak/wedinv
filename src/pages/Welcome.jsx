import React from 'react';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Welcome() {
  const { name } = useParams();
  return (
    <div className='w-100 text-center mt-5'>
      <div className='bold mb-2'>Kepada :</div>
      <div className='f24 bold mb-4'>{name ? name : 'Tamu Undangan'}</div>
      <Button variant='outlined'>
        <Link style={{ textDecoration: 'none' }} className='bold' to='/home'>
          Buka Undangan
        </Link>
      </Button>
    </div>
  );
}
