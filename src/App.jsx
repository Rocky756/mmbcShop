import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import { Link, Switch, Route } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { Main } from './components/Main';
import { Basket } from './components/Basket';

const App = () => {
  const [nav, setNav] = useState();
  const baskets = useSelector((state) => state.baskets);
  // useEffect(() => {

  // }, [])
  return (
    <div className='appCont'>
        <nav className='navdiv'>
          <Link to='/'>
            <Button 
            style={{marginRight: '5px'}}
            variant={nav ? 'outline-primary' : 'outline-secondary'}
            >Главная</Button>
          </Link>
          <Link to='/basket'>
            <Button 
            variant={nav && baskets.length > 0 ? 'outline-success' : nav && baskets.length < 1 ? 'outline-secondary' : 'outline-primary'}
            // variant={!nav ? 'outline-secondary' : basket.length && nav ? 'outline-success' : nav ? 'outline-primary' : null}
            // variant={nav ? 'outline-secondary' : 'outline-primary'}
            >Корзина</Button>
          </Link>
        </nav>
      <Switch>
      <Route path='/basket'>
          <Basket nav={nav} setNav={setNav}/>
        </Route>
        <Route exact path ='/'>
          <Main nav={nav} setNav={setNav}/>
        </Route>
      </Switch>

    </div>
  );
};

export default App;
