import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import index from './page/Home/index';
import Projects from './page/Projects/allprojects';
import Games from './page/Projects/games';
import Websites from './page/Projects/websites';
import More from './page/Projects/More';
import AllGallery from './page/Gallery/allGallery';
import Photos from './page/Gallery/photos';
import Video from './page/Gallery/video';
import About from './page/About/about';
import Contact from './page/Contact/contact';
import Auth from './page/Auth/Auth';

export default function sisVSsis() {
  return (
    <Router>
      <div className="container">
        <Header />
        <br />
        <br />
        <Route path="/" exact component={index} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/projects/games" exact component={Games} />
        <Route path="/projects/websites" exact component={Websites} />
        <Route path="/projects/More" exact component={More} />
        <Route path="/gallery" exact component={AllGallery} />
        <Route path="/gallery/photos" exact component={Photos} />
        <Route path="/gallery/video" exact component={Video} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/auth" exact component={Auth} />
        <br />
        <br />
        <Footer />
      </div>
    </Router>
  );
}
