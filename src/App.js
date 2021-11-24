import React from 'react'
import Counter from './components/Counter'
import SideBar from './components/SideBar'
import {Context} from './components/ContextCounters'

function App() {
  const [counters, setCounters] = React.useState([])
  const [score, setScore] = React.useState(0)
  
  //обнуляет массив счётчиков
  const resetCounters = () => setCounters([])
  
  //удаляет выбраный объект через id и уменьшает не чётные значения на 1
  const removeCounter = (id) => setCounters(counters.filter(c => c.id !== id).map(c => c.count > 0 && c.count % 2 ? {id: c.id, count: c.count-1} : c))
  
  //обновление значения элемента через id (написал через объект из-за бага)
  const setCounter = (id, val) => setCounters(counters.map(c => c.id === id ? c = {id, count: val} : c))
  
  //добавляет новый объект в массив и увеличивает чётные значения на 1
  const addCounter = () => {
    setScore(score+1)
    setCounters(counters.map(c => !(c.count % 2) ? {id: c.id, count: c.count+1} : c))
    setCounters(prev => [...prev, {id: score, count: 0}])
  }

  return (
    <Context.Provider 
      value={{
      removeCounter, addCounter, setCounter, resetCounters
      }}
    >
      <SideBar/>
      <div className=".container-fluid row">
        {counters.map(counter => <Counter 
          count={counter.count} 
          id={counter.id} 
          key={counter.id}
        />)}
      </div>
    </Context.Provider>
  );
}

export default App;
