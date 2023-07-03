import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main';
import { OpenAPI } from '../openapi';

export function App() {
  OpenAPI.BASE = 'http://localhost:3000';
  return (
    <div>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      {/* <br /> */}
      {/* <hr /> */}
      {/* <br /> */}
      {/* <div role="navigation"> */}
      {/*   <ul> */}
      {/*     <li> */}
      {/*       <Link to="/">Home</Link> */}
      {/*     </li> */}
      {/*     <li> */}
      {/*       <Link to="/page-2">Page 2</Link> */}
      {/*     </li> */}
      {/*   </ul> */}
      {/* </div> */}
      <Routes>
        <Route path="/" element=<MainPage /> />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
