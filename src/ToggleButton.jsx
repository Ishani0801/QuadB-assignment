// import React, {useState} from 'react';
// import {Switch} from 'antd';

// const ToggleButton = () => {

//     const [toggle, setToggle] = useState(true);
    
//     const toggler = () => {
//         toggle ? setToggle(true) : setToggle(false);
//     }

//     return (
//         <div>
//             <Switch onClick={toggler} />
//         </div>
//     );
// }

// export default ToggleButton;
// import React from 'react';
// import Switch from '@material-ui/core/Switch';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

// const ToggleButton = () => {
//   const [checked, setChecked] = React.useState(true);


//   const toggleChecked = () => {
//     setChecked((prev) => !prev);
//   };

//   return (
//     <FormGroup>
//       <FormControlLabel style={{width: 40}}
//         control={<Switch checked={checked} onChange={toggleChecked} />}
//       />
//     </FormGroup>
//   );
// }
// export default ToggleButton;

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#3DC6C1',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#3DC6C1',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const ToggleButton = () => {
  const [state, setState] = React.useState({
    checkedB: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
      />
    </FormGroup>
  );
}
export default ToggleButton;

