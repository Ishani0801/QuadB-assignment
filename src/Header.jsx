import React from 'react';
import ToggleButton from './ToggleButton';
import logo from './HODLINFO.png';
import Button from '@material-ui/core/Button';


export default class Header extends React.Component {
    render() {
        return <div style={{display:'flex'}}>

            <span>
                <img src={logo} style={{height:'40%', width:'20%', padding:'2%'}}></img>
            
           <p> <span style={{fontFamily: 'Oswald, sans-serif', fontSize: 18,
        color: 'gray', textAlign:'left', marginLeft:'2%', marginTop:'0%'}}>Powered By <a target="_blank" href="https://www.finstreet.in/" style={{color: '#35A2A0', textDecoration:'none'}}>
            Finstreet</a></span></p>
            </span>
            <span></span>
            <span><Button variant="contained" color="primary">
         Telegram
      </Button>
     </span>
            <span><div style={{float: 'right', padding: '20px'}}><ToggleButton/></ div></span>
            </div>
        
    }
}