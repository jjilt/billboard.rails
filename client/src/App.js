import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import About from './components/shared/about/About';
import Artists from './components/artists/Artists';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Songs from './components/songs/Songs';
import Playlists from './components/playlists/Playlists';

const App = () => (
  <> 
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/playlists' element={<Playlists />} />
      <Route path='/:playlistId/artists' element={<Artists />} />
      <Route path='/:artistId/songs' element={<Songs />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;
