
function App() {

  let name="Sahil";
  const age=25;
  name="kunal";
  
  function add(m1,m2){

      return m1+m2;
  }

  return (
    <>
      <div>

       <h3>my name{name} and my {age+1}</h3>
       <h3>sum:{add(2,3)}</h3>

      </div>
      
    </>
  )
}

export default App
