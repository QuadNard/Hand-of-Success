import './styles/App.scss';
import { SliderValueLabel } from '@mui/material';
import React from 'react'


function App() {
  return (
<div className="container">
    <div className="hand">
	<div className="fingers">

		
<a href="/zulu" className="hat">
	<div className="index-finger" title="Zulu">
</div>
</a>  


<a href="/todo" className="test">
    <div className="middle-finger" title="Todo">
</div>	
</a>


<a href="/quote" className="cat">        
    <div className="ring-finger" title="Quote">			
	</div>
</a>



    <div className="baby-finger"></div>
  </div>
    <div className="palm"> 
    <div className="right-palm"></div>
    <div className="left-bottom-palm"></div>
    <div className="thumb"></div>
    <div className="center-palm">
    <div className="inner-palm"></div>
  </div>
</div>
    <div className="wrist">
    <div className="left-wrist"></div>
    <div className="right-wrist"></div>
    </div>
  </div>
</div>
  );
}

export default App;
