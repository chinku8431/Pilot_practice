import React, { Component } from "react";



class Rates extends Component {
   
render() {
    
	return (
		<div class="container">
			<div>
		<label for="wlg_pilot">ID</label>
<input type="text" name="wlg_pilot_input"  className="small_input" />
	   </div>
	   <div>
                            <label for="wlg_pilot">Rate</label>
          <input type="text" name="wlg_pilot_input"  className="small_input" />
                           </div>
		</div>
		

	   
	   
	);
}
}

export default Rates;