import React from 'react';
// Import CSS
import 'materialize-css/dist/css/materialize.min.css'
// Import Components
import Header from './components/Header';
import Photo from './components/Photo';
import Stars from './components/Stars';
import Services from './components/Services';
import Street from './components/Street'
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Photo />
      <Stars />
      <Services />
      <Street />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
