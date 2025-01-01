import './App.css';
import Header from './components/Header';
import Entry from './components/Entry';
import data from "./data"


  export default function App() {
    const arts = data.map((a)=>{
      return(
        <Entry
          key={a.id}
          img={a.img}
          title={a.title}
          artist={a.artist}
          text={a.text}
          link={a.link}
        />
      )
    })
    
  return (
    <>
      <Header/>
      <main className="container">
        {arts}
      </main>
    </>
  );
}

