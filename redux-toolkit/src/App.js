import './App.css';
import Cart from './Components/Cart';
import Products from './Components/Products';
import products from "./products.json"



function App() {
  return (
    <div className="App">
      <Cart/>
      <div className='products'>
        {products.map((product)=>(
          <Products {...product}/>
        ))

        }
      </div>
    </div>
  );
}

export default App;
