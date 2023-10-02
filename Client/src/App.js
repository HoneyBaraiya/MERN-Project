
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Product from './Component/Product';
import SingleProduct from './Component/SingleProduct';
import Cart from './Component/Cart';
import ErrorPage from './Component/ErrorPage';
import {GlobalStyle} from './Component/GlobalStyle';
import { ThemeProvider } from 'styled-components';

function App() {

  const theme={
    colors:{
      bg:"#F6F8FA",
      footer_bg:"#0a1435",
      btn:"rgb(98 84 243)",
      border:"rgba(98,84,243,0.5)",
      hr:"#ffffff",
      gradient:"linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252)100%)",
      shadow:"rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport:"rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media:{
      mobile:"768px",
      tab:"998px"
    }
  }

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/SingleProduct" element={<SingleProduct/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="*" element={<ErrorPage/>}/>

      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
