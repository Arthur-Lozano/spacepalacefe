

import { useState } from 'react';
import './App.css';

import StripeContainer from "./pages/account/StripeContainer"


 function App() {
   const [showItem, setShowItem] = useState(false)
   return (
     <div className="App">
      <h1>SPACE PALACE STORE</h1>
       {showItem ? <StripeContainer/> : <> <h3>$195.00</h3> <img src={"./assets/Suits.png"} alt="Suits" />
      <button onClick={() => setShowItem(true)}>Purchase Suits and protective gear</button></>}
     </div>
   );
 }

export default App;
