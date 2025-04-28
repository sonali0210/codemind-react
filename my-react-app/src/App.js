import './App.css';
import { Fragment } from 'react';
// import Header from './propsInReact/Header.jsx';
// import Body1 from './propsInReact/Body1.jsx';
// import Body2 from './propsInReact/Body2.jsx';
// import Footer from './propsInReact/Footer.jsx';
// import Account from './propsInReact/Account.jsx';
// import Body1 from './propsInReact/Body1.jsx';
import StateInFuncComponent from './StatesInReact/StateInFuncComponent.jsx';

function App() {
  // const companyName = "My Recipe Book";
  // let companyLocation = "Pune";
  // let text = "Hello from body1 in Body 11";
  return (
    // <Fragment>
    //   <FuncComponent />
    //   <ClassComponent />
    //   <SimpleCalculator />
    //   <MathOperations />
    // </Fragment>

    // <Fragment>
    //   <Header compName = {companyName}/>
    //   <Body1 text = {text}/>
    //   <Body2 />
    //   <Footer compName = {companyName} compLoc = {companyLocation}/>
    //   <Account />
    //   <Body1/>
    // </Fragment>
    
    <>
      <StateInFuncComponent />
    </>
  );
}

export default App;
