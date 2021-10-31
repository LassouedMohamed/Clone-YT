import react from 'react'
import Activite1 from './components/Activite1'
import Activite2 from './components/Activites2'
import Activite3 from './components/Activite3'
import Exercice from './components/Exercice'
import './App.css';

class App extends react.Component {
  render(){
  return (
    <div className="App">
      <Activite1/>
      <Activite2/>
      <Activite3/>
      <h1>Exercice</h1>
      <div className="contacts">
        <Exercice img={"http://placekitten.com/300/200"} nom={"Mr. Whiskerson"} tel={"(212) 555-1234"} email={"mr.whiskaz@catnap.meow"}/>
        <Exercice img={"http://placekitten.com/400/200"} nom={"Fluffykins"} tel={"(212) 555-2345"} email={"fluff@me.com"}/>
        <Exercice img={"http://placekitten.com/400/300"} nom={"Destroyer"} tel={"(212) 555-3456"} email={"ofworlds@yahoo.com"}/>
        <Exercice img={"http://placekitten.com/200/100"} nom={"Felix"} tel={"(212) 555-4567"} email={"thecat@hotmail.com"}/>
      </div>
    </div>
  );
  }
}

export default App;
