import * as React from 'react';
import Switch from '@mui/material/Switch';

const Btn_Mode = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    return ( 
        <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
     );
}
 
export default Btn_Mode;