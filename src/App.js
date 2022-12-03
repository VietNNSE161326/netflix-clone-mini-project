import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Main from './components/Main';
import useSmoothScroll from './Hooks/useSmoothScroll';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Contact from './components/Contact';
import { ThemeContext } from './shared/ThemeContext'
import { useContext } from 'react';
import About from './components/About';
import News from './components/News';
function App() {
  const [botRef, smoothScrollToBot] = useSmoothScroll();
  const { theme, dark, toggle } = useContext(ThemeContext)
  return (
    <div className="wrapper" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Navigation />
      <button className='smoothScroll-btn' onClick={smoothScrollToBot}>Scroll down</button>
      <Routes>
        <Route exact path='/' element={<Main />}></Route>
        <Route exact path='/detail/:id' element={<Detail />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/news' element={<News />}></Route>
      </Routes>
      <Footer />
      <div ref={botRef}></div>
    </div>
  );
}

export default App;
