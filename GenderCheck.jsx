import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
function GenderCheck() {
  const [value, setValue] = useState('male');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          row
          name="genderGroup"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
export default GenderCheck;
