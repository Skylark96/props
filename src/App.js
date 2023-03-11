import './App.css';
import Profile from './Profile/Profile';
import Image from './Profile/image';

function App() {
  const styleObject={textAlign: 'center', justifyContent:'center', display:'flex'}
  const handleName =(x,y)=> alert(`My Name is ${x}`)
  return (

    <div className="main" style={styleObject}>
      <Image/>
      <Profile 
        fullName= "Ala Farhat"
        profession= "Front End Web Devoloper"
        bio= "I am the best corrector of my own failures."
        handleName={handleName}
/>

    </div>
  );
}

export default App;
