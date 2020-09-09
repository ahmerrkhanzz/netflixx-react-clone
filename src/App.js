import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Row from './components/row/Row'
import requests from './requests'
import Banner from './components/banner/Banner';

function App() {  
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row title={'Netflix Originals'} fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title={'Trending Now'} fetchUrl={requests.fetchTrending} isLargeRow={false}/>
      <Row title={'Top Rated'} fetchUrl={requests.fetchTopRated} isLargeRow={false}/>
      <Row title={'Action Movies'} fetchUrl={requests.fetchActionMovies} isLargeRow={false}/>
      <Row title={'Comedy Movies'} fetchUrl={requests.fetchComedyMovies} isLargeRow={false}/>
      <Row title={'Horror Movies'} fetchUrl={requests.fetchHorrorMovies} isLargeRow={false}/>
      <Row title={'Romantic Movies'} fetchUrl={requests.fetchRomanticMovies} isLargeRow={false}/>
      <Row title={'Documentaries'} fetchUrl={requests.fetchDocumentaries} isLargeRow={false}/>
    </div>
  );
}

export default App;