import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      // margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [chat, setChat] = useState('');

  const handleChange = (e) => {
    setChat(e.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField
        id='outlined-multiline-static'
        multiline
        // rows={2}
        value={chat}
        onChange={handleChange}
        placeholder='Input your comment here'
        variant='outlined'
      />
    </form>
  );
}
