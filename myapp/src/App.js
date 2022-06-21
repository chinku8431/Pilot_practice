// import logo from './logo.svg';
// import './App.css';
// import loginpage from './components/login';

// function App() {
//   return (
//     <div className="App">
//        <div>
//        Grooming
//                    ::<select id="pilot_1" name="country">
//       <option value="opaquecost">Opaque</option>
//       <option value="ztransparent Qty">Transparent</option>
//       <option value="Grooming Date">Grooming</option>
      
//     </select>
    
//                     </div>

//                     <div>
//                     <label for="wlg_pilot">wlg</label>
//     <input type="text" name="wlg_pilot_input"  className="small_input" />
//                     </div>
//                     <div>
//                     View
//                    ::<select id="pilot_2" name="country">
//       <option value="one">1</option>
//       <option value="two">2</option>
//       <option value="three">3</option>
      
//     </select>
//                     </div>
                    
                    
//          <div>
//          Import EPT::<input        
          
//           type="file"          
//         />
//         <button>Upload File</button>
//            </div>    

//            <div>
//          Import Pilot::<input        
          
//           type="file"          
//         />
//         <button>Upload File</button>
//            </div>
                      
//            <button className="btn">Cancel</button>
//            <button className="btn">Run</button>
           

        
//     </div>
//   );
// }

// export default App;
import React, { Component } from "react";
import Home from "./Home";
import Macros from "./Macros";
import Rates from "./Rates";
import './App.css';

class App extends Component {
render() {
	return (
	<div>
		
		<Home/>
		<Macros/>
		<Rates />
	</div>
	);
}
}

export default App;
