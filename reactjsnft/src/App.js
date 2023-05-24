// import logo from './logo.svg';
import './App.css';
import { Button } from './Component/Button';
import { Cart } from 'Component/Card';
import { MainLayout } from 'Component/Layout';
import Logo1 from 'images/Logo.svg';
import { Routes, Route } from 'react-router-dom';
import Home from 'Component/Container/Home';
import About from 'Component/Container/About';
import Login from 'Component/Container/Login';
import PageNotFound from 'Component/Container/PageNotFount';
function App() {
  return (

    <div className="App">
      {/* <Routes>
        <Route path='/' element={<Home></Home>}>

        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes> */}
      <header className="App-header">
        {/* <Button percent={10} onClick={() => console.log('After click')} > click me</Button>
        <Button percent={12.3}>12.3%</Button>
        <Button percent={8.1}>8.1%</Button>
        <Button percent={- 5.1}>5.1%</Button>
        <Button percent={3.2}>3.2%</Button> */}

        {/* <Cart tittle={"Revenue"} amount={"5.00"} percent={12.3}></Cart> */}

        <MainLayout imagePath={Logo1} main_Tittle={"MyNFT"} sub_Tittle={"NFT Marketplace"}></MainLayout>
      </header>
    </div>
  );
}

export default App;
