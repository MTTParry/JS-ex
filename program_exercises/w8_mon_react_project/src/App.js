import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Header from './components/header';
import Item from './components/item';

export default function App() {
  const [items, setItems] = useState([
    { text: "Petting a cat" },
    { text: "Hanging out with a friend" },
    { text: "Surviving bootcamp"}
  ]);

  const addItem = (text) => {
    const newItems = [...items, { text }];
    setItems(newItems);
  };

  return (
    <div className="App">
      <Header />
      {items.map((item, index) => (
        <Item
          key={index}
          index={index}
          item={item}
        />
      ))}
      <Form addItem={addItem} />
    </div>
  );
}