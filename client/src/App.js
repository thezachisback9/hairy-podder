import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'
import WizardDetail from './pages/wizarddetail';



const App = () => {
  

  const posts = [

  ]
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    },
    {
      path: "/wizard/:id",
      element: <WizardDetail />
    }
    
  
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>hairy podder</h1>
        <Link to="/"><button className="headerBtn"> wizard gallery  </button></Link>
        <Link to="/new"><button className="headerBtn"> create a wizard  </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
