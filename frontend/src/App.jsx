import './App.css';
import UserRegisterScreen from './screens/UserRegisterScreen';
import UsersScreen from './screens/UsersScreen';
import AddressesScreen from './screens/AddressesScreen';
import AddressFormScreen from './screens/AddressFormScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return(
      <Routes>
        <Route path="/" element={<UsersScreen />}/>
        <Route path="/registro" element={<UserRegisterScreen />}/>
        <Route path="/enderecos" element={<AddressesScreen />}/>
        <Route path="/enderecos-registro/:userId" element={<AddressFormScreen />}/>
        <Route path="*" element={<NotFoundScreen />}/>
      </Routes>
  );
}

export default App;