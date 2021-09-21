import React, { useState } from 'react';
import { AccountCircle } from '@material-ui/icons';
import { Button, Label, Input } from 'reactstrap';

function Comments() {
  const [state, setState] = useState([
    { name: 'Keluarga Bapak Ari', comment: 'Hai, Selamat yaah. Semoga Samawa' },
    {
      name: 'Keluarga Bapak Untung',
      comment: 'Hai, Selamat yaah. Semoga Samawa',
    },
  ]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  // let comment = [
  //   { name: 'Keluarga Bapak Ari', comment: 'Hai, Selamat yaah. Semoga Samawa' },
  //   {
  //     name: 'Keluarga Bapak Untung',
  //     comment: 'Hai, Selamat yaah. Semoga Samawa',
  //   },
  // ];
  let data = {
    name: name,
    comment: comment,
  };

  function masukinData() {
    let manipulate = [...state];
    manipulate.push(data);
    setState(manipulate);
    setName('');
    setComment('');
  }

  return (
    <div className='primary px-3'>
      <div className='oleo bold f24 text-center pt-5'>Wishes & Comments</div>
      <div
        className='p-3'
        style={{ border: '1px solid #8a4332', borderRadius: '10px' }}
      >
        <Label>Nama</Label>
        <Input
          className='w-100'
          placeholder='Tuliskan Nama'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Label className='mt-2'>Pesan</Label>
        <Input
          className='w-100'
          placeholder='Tuliskan Pesan'
          type='textarea'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />

        <Button className='mt-2 mb-2' onClick={masukinData}>
          Kirim Pesan
        </Button>

        <hr />
        {/* <button onClick={pushData()}>Click</button> */}
        {state.map((item, index) => (
          <div className='chat' key={index}>
            <div className='section mb-2'>
              <div className='top-section d-flex align-items-center'>
                <AccountCircle fontSize='large' className='me-2' />
                <div className='bold f14'>{item.name}</div>
              </div>
              <div className='bottom-section' style={{ marginLeft: '38px' }}>
                {item.comment}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
