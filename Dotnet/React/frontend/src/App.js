import { useState } from 'react';
import Joblisting from './Joblisting';
import Login from './Login';
// import ProjectNavbar from './ProjectNavbar';

function App() {
  
  let [flag,setFlag]=useState(false);
  let f1=()=>{
    setFlag(true)
  }
  return (
    <div>
      {/* <ProjectNavbar></ProjectNavbar> */}
      <input type="submit" value="Show Jobs" onClick={f1}/>
      {flag && <Joblisting></Joblisting>}
      <Login></Login>
    </div>
  );
}
export default App;

