import { useState } from 'react'
import './App.css'
import Header from '/components/Header.jsx';
import PaintingList from '/components/PaintingList.jsx';
import EditPaintingForm from '/components/EditPaintingForm.jsx';

function App() {

  const data = [
    {id: "016060", title: "Girl Arranging Her Hair", artist: "Mary Cassatt",  year: 1886},
    {id: "019160", title: "Farmhouse in Provence", artist: "Vincent Van Gogh", year: 1888},  
    {id: "016070", title: "The Boating Party", artist: "Mary Cassatt",  year: 1893},
    {id: "017040", title: "Woman with a Parasol", artist: "Claude Monet",  year: 1875},
    {id: "017080", title: "The Bridge at Argenteuil", artist: "Claude Monet", year: 1874}
  ];

  const [paintings, setPaintings] = useState(data);

  const [currentPainting, setCurrentPainting] = useState(data[0]);

  function changePainting(p) {
    setCurrentPainting(p);
  }

  function updatePainting(modifiedPainting) {
    const updatedList = [...paintings];

    const index = updatedList.findIndex( p => p.id == modifiedPainting.id);

    updatedList[index] = modifiedPainting;

    setPaintings(updatedList);
    setCurrentPainting(modifiedPainting);
  }

  function resetList() {
    const originalList = [...data];

    setPaintings(originalList);
  }

  return (
    <article className="app">
      <Header reset={resetList} />
      <div className="box">
        <PaintingList paintings={paintings} current={currentPainting} change={changePainting} />
        <EditPaintingForm current={currentPainting} update={updatePainting} />
      </div>
    </article>
  )
}

export default App;
