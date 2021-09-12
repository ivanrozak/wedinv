import { AccountCircle } from '@material-ui/icons';
import React from 'react';
import { FormGroup, Form, Button, Label, Input } from 'reactstrap';

function Comments() {
  return (
    <div className='primary px-3'>
      <div className='oleo bold f24 text-center pt-5'>Wishes & Comments</div>
      <div
        className='p-3'
        style={{ border: '1px solid #8a4332', borderRadius: '10px' }}
      >
        <Form>
          <FormGroup>
            <Label>Nama</Label>
            <Input className='w-100' placeholder='Tuliskan Nama' required />
          </FormGroup>
          <FormGroup className='mt-1'>
            <Label>Pesan</Label>
            <Input
              className='w-100'
              placeholder='Tuliskan Pesan'
              type='textarea'
              required
            />
          </FormGroup>
          <Button className='mt-2 mb-2'>Kirim Pesan</Button>
        </Form>
        <hr />
        <div className='chat'>
          <div className='section mb-2'>
            <div className='top-section d-flex align-items-center'>
              <AccountCircle fontSize='large' className='me-2' />
              <div className='bold f14'>Keluarga Bapak Ari</div>
            </div>
            <div className='bottom-section' style={{ marginLeft: '38px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              eius.
            </div>
          </div>
          <div className='section'>
            <div className='top-section d-flex align-items-center'>
              <AccountCircle fontSize='large' className='me-2' />
              <div className='bold f14'>Keluarga Brian</div>
            </div>
            <div className='bottom-section' style={{ marginLeft: '38px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              eius.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
