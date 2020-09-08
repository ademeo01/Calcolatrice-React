import React from "react";
import "./styles.css";


function pulsanteReducer(state, action) {
  switch (action.type) {
    case "MAKE_OPERATION":
      const op=action.op;
      state={ op:op, num:0, operando1:state.num }
      return state;
    case "ADD_Number":
      console.log(state.num)
      const numeroagg=(state.num)?String(state.num)+String(action.number):action.number
      state=(state.op)?state.num=numeroagg:{num:numeroagg}
      return state;
    default:
      return state;
  }
}


export default function App() {
  const [res, dispatch] = React.useReducer(pulsanteReducer, []);

  function onAddNumber(number) {
    dispatch({
      type: "ADD_Number",
      number: number
    });
  }

  function onMakeOperation(op) {
    dispatch({
      type: "MAKE_OPERATION",
      op: op
    });
  }



  return (
    <div className="App">
      <Risultato res={res} />
      <Pulsantiera onAddNumber={onAddNumber} onMakeOperation={onMakeOperation}   />
    </div>
  );
}

function Risultato({ res }){

  return(
    <div className="risultato">{res.num}</div>
  )

}



function Pulsantiera({onAddNumber , onMakeOperation} ){
return(
<>
  <div className="pulsantiera">
    <Pulsante onClick={onMakeOperation} name="C" classe="operazione-special"/>
    <Pulsante onClick={onMakeOperation} name="AC" classe="operazione-special" />
    <Pulsante onClick={onMakeOperation} name="%" classe="operazione-special"/>
    <Pulsante onClick={onMakeOperation} name="/" classe="operazione" />
    <Pulsante onClick={onAddNumber} name="7" />
    <Pulsante onClick={onAddNumber} name="8" />
    <Pulsante onClick={onAddNumber} name="9" />
    <Pulsante onClick={onMakeOperation} name="X" classe="operazione" />
    <Pulsante onClick={onAddNumber} name="4" />
    <Pulsante onClick={onAddNumber} name="5" />
    <Pulsante onClick={onAddNumber} name="6" />
    <Pulsante onClick={onMakeOperation} name="-" classe="operazione" />
    <Pulsante onClick={onAddNumber} name="1" />
    <Pulsante onClick={onAddNumber} name="2" />
    <Pulsante onClick={onAddNumber} name="3" />
    <Pulsante onClick={onMakeOperation} name="+" classe="operazione" />
    <Pulsante onClick={onAddNumber} name="0" classediv="doppialung" />
    <Pulsante onClick={onAddNumber} name="," />
    <Pulsante onClick={onMakeOperation} name="=" classe="operazione" />
  </div>
  </>
)

}



function Pulsante({name,onClick,classe,classediv}){

return (
  <div className={ `pulsantediv ${classediv}`}><button className={`pulsante ${classe}`} onClick={()=>onClick(name)}>{name}</button></div>
);

}  