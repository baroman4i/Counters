import React, {useContext} from 'react'
import {Context} from './ContextCounters'
function Counter({id, count}) {
  const {removeCounter, setCounter} = useContext(Context)
  const even = React.useMemo(() => !(count % 2), [count])
  
  return (
      <div className="col-md-4 text-center border rounded">
        <button 
          className="btn close btn-danger" 
          onClick={() => {
            removeCounter(id)
          }}
        >
          &times;
        </button>
        <div className="card-body">
          <h2 className="card-title border">{count}</h2>
          <div className="card-text my-5 border">
            {even ? "Введено чётное число" : "Введено не чётное число"}
          </div>
          <button 
            className="btn btn-success mx-3" 
            onClick={() => setCounter(id, count + 1)}
          >
            +
          </button>
          <button 
            className="btn btn-secondary mx-3" 
            onClick={() => setCounter(id, 0)}
            disabled={count === 0}
          >
            Reset
          </button>
          <button 
            className="btn btn-danger mx-3" 
            onClick={() => setCounter(id, count - 1)}
            disabled={count === 0}
          >
            -
          </button>
        </div>
      </div>
  );
}

export default Counter