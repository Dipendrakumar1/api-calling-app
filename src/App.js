import {handlePosts} from './components/images/apicalling';
import Button from './components/buttons';
import './App.css';
import {useEffect} from 'react';
function App() {
  useEffect(()=>{
    handlePosts().then(posts=>posts.json()).then(posts=>console.log(posts));
  },[])

  return (
    <div className="App">

      <h1>API-CALLING APP</h1>
      <Button title={['VIEW POSTS','VIEW COMMENTS','VIEW USERS','VIEW PHOTOS']}/>
    </div>
  );
}

export default App;
