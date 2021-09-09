import React from 'react';

export default class Footer extends React.Component {
    render() {
        return <div>
            <hr style={{color:'#787E83'}}></hr>
            <div style={{diplay: 'flex'}}>
                <p style={{color:'#787E83',fontFamily: 'Oswald, sans-serif', fontSize:'12px'}}>
                   <span>Copyright © 2019  </span><span>  HodlInfo.com  </span><span>  Developed By
                         <a href="https://www.quadbtech.com/" target="_blank" style={{color: '#35A2A0',textDecoration:'none'}}> QuadBTech</a>
                         </span>
                         <span style={{color:'#787E83',fontFamily: 'Oswald, sans-serif', fontSize:'12px',float:'right'}}>Support</span>
                    </p>
            </div>
            </div>
    }
}