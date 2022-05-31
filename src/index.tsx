import { TextField, Button, Grid, FormControl, Box } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React, { ChangeEvent, useState } from 'react';

export interface GreeterProps {
  name: string;
}

export const Greeter = (props: GreeterProps) => {
  const [textFiledValue, setTextFieldValue] = useState<string>('');

  const handleTextFieldValue = (event: ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue(event.target.value);
  };

  const handleSubmit = () => {
    return <Alert title="Welcome">{`Hello ${textFiledValue}!`}</Alert>;
  };

  return (
    <Box>
      <Grid container alignItems="center">
        <TextField variant="outlined" label="Enter your name" onChange={handleTextFieldValue} />
        <Button onClick={handleSubmit}>Submit</Button>
      </Grid>
    </Box>
  );
};
