import './App.css';
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';
import { useState } from 'react';

const App = () => {
  const availableIngredients = [
    { name: 'Biroche Bun', color: 'saddlebrown' },
    { name: 'Potato Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Sardine Based Bun', color: 'silver' },
    { name: 'Boiled Cabbage Wrap', color: 'olivedrab' },
    { name: 'Beefy Patty', color: '#3F250B' },
    { name: 'Impossible Patty', color: '#3F250B' },
    { name: 'Beyond Beef Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Arugula', color: 'darkgreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Pâté', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: 'orange' },
    { name: 'Jack Cheese', color: '#F1E1A8' },
  ];

  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);

  };

  const removeFromBurger = (index) => {
    setStack([...stack.slice(0, index), ...stack.slice(index + 1)]);
  };
  

  return (
    <main>
      <h1>STACK THE BURGER</h1>
      <section>
      <IngredientList ingredients={availableIngredients} addToBurger={addToBurger}/>
      <BurgerStack stack={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </main>
  );
};

export default App;