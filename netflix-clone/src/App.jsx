import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Row from './components/Row/Row'
import requests from './API/requests'

function App() {

  return (
    <>
     <Navbar/>
     <Banner/>
     <Row 
     title="NETFLİX ORIGINALS" 
     fetchURL={requests.fetchNetflixOriginals}
     />
     <Row 
     title="TRENDINGS" 
     fetchURL={requests.fetchTrending}
     />
     <Row 
     title="TOP RATED" 
     fetchURL={requests.fetchTopRated}
     />
     <Row 
     title="ACTION MOVİES" 
     fetchURL={requests.fetchActionMovies}
     />
     <Row 
     title="COMEDY MOVIES" 
     fetchURL={requests.fetchComedyMovies}
     />
     <Row 
     title="HORROR MOVIES" 
     fetchURL={requests.fetchHorrorMovies}
     />
     <Row 
     title="ROMANCE MOVIES" 
     fetchURL={requests.fetchRomanceMovies}
     />
     <Row 
     title="DOCUMENTARIES" 
     fetchURL={requests.fetchDocumentaries}
     />


    </>
  )
}

export default App
