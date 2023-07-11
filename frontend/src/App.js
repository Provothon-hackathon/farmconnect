import { Route } from 'react-router-dom'
import UserHomePage from './Pages/UserHomePage';

function App() {
  return (
    <>
      <Route  path="/" component={UserHomePage} eaxct />
      <Route  path="/farmer/:farmerID" component={FarmerDetails} />
    </>
  );
}

export default App;
