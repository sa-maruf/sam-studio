import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import MovieUpload from './components/MovieUpload';
import './index.css';

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Initial dummy data
  useEffect(() => {
    const initialData = [
      { id: 1, name: 'The Matrix 1999', description: 'Movie - A computer programmer discovers a bizarre truth.', poster: 'https://i.ibb.co.com/sdDCFkpt/Screen-Shot-2021-05-19-at-12-59-41-PM.webp', type: 'movie', downloadLink: 'https://mcloud.guru/s/d94488-b86844-c54485-257885-88b565-458885-754538-852544-e44478-a92944-c53595-7595b5-955535-b5b5f9' },
      { id: 2, name: 'Breaking Bad 2008', description: 'Series S 01 - A high school chemistry teacher starts making meth.', poster: 'https://i.ibb.co.com/5XF3vbs0/1111277.jpg', type: 'tv_series', downloadLink: 'https://playerwish.com/d/kgg8kkoxl43w' },
      { id: 3, name: 'Inception 2010', description: 'Movie - A thief who steals corporate secrets through dream-sharing technology.', poster: 'https://i.ibb.co.com/DfT9TP2q/hq720.jpg', type: 'movie', downloadLink: 'https://playerwish.com/d/je804zmq7hml' },
      { id: 4, name: 'Game of Thrones 2011', description: 'Series S 01 - Nine noble families fight for control over the mythical lands of Westeros.', poster: 'https://i.ibb.co.com/YBTQq68w/game-of-thrones-kingsroad-16khf.jpg', type: 'tv_series', downloadLink: 'https://drive.usercontent.google.com/download?id=1QrAFhvonZdAAiayV97myUAAeo-y24ZxQ&export=download' },
      { id: 5, name: 'Jawan 2023', description: 'Movie - Jawan is a 2023 Indian Hindi-language action thriller film co-written and directed by Atlee.', poster: 'https://i.ibb.co.com/RTKzHktR/jawan-5-0.png', type: 'movie', downloadLink: 'https://hblinks.dad/archives/68145' },
      { id: 6, name: 'Avengers: Endgame 2019', description: 'Movie - Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics.', poster: 'https://i.ibb.co.com/Xx6Mz9ww/avengers-endgame-2019-poster-wallpaper.webp', type: 'movie', downloadLink: 'https://playerwish.com/d/jzen4d45rimu' },
      { id: 7, name: 'Taandob 2025', description: 'Movie - A jobless villager moves to Dhaka for work but gets entangled in a conspiracy. ', poster: 'https://i.ibb.co.com/wZWJR6Kr/Taandob-Movie-Hall-List-1.webp', type: 'movie', downloadLink: 'https://fastdokan.top/views/jQkqrpyEoo' },
      { id: 8, name: 'Man of Steel 2013', description: 'Movie - Man of Steel is a 2013 superhero film based on the DC Comics character Superman.', poster: 'https://i.ibb.co.com/KcHn83kr/749ce10c-2774-4e99-89f2-75aa3a4fc24e.jpg', type: 'movie', downloadLink: 'https://playerwish.com/d/x7amszd0yh8b' },
      { id: 9, name: 'Money Heist 2017', description: 'Series S 01 - Money Heist  is a Spanish heist crime drama television series created by Álex Pina.', poster: 'https://i.ibb.co.com/WNYf1K9h/money-heist-season-5.jpg', type: 'tv_series', downloadLink: 'https://drive.usercontent.google.com/download?id=1cySjuEDY1RQv-E9VUbRwFJaOkVHuAYJx&export=download' },
      { id: 10, name: 'Attack on Titan 2013', description: 'Series S 01 - Attack on Titan has been met with widespread critical and commercial success.', poster: 'https://i.ibb.co.com/k2wDgnfN/1d24ae4aa81c3eeeecd5891b42516885e49464acc1a93aacc152298a86c0a5c3.jpg', type: 'tv_series', downloadLink: 'https://mcloud.guru/s/d94488-b86844-c54478-387558-684838-383545-7558b5-75a544-e44478-a92944-c53595-7595b5-954555-9585f9' },
      { id: 11, name: 'Alien: Earth 2025', description: 'Series S 01 - Alien: Earth is an American science fiction horror television series.', poster: 'https://i.ibb.co.com/2701t9Wc/hq720.jpg', type: 'tv_series', downloadLink: 'https://linksheild.site/view/MlXgAqRn' },
      { id: 12, name: 'Avengers: Infinity War 2018', description: 'Movie - Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers.', poster: 'https://i.ibb.co.com/whxxr3Xd/Untitled-design.png', type: 'tv_series', downloadLink: 'https://playerwish.com/d/p04ltimf7zjr' },
    ];
    setItems(initialData);
  }, []);

  useEffect(() => {
    let newFilteredItems = items;

    // Filter by type
    if (currentFilter !== 'all') {
      newFilteredItems = newFilteredItems.filter(item => item.type === currentFilter);
    }

    // Filter by search term
    if (searchTerm) {
      newFilteredItems = newFilteredItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(newFilteredItems);
  }, [items, currentFilter, searchTerm]);

  const handlePost = (newItem) => {
    setItems([...items, newItem]);
    setCurrentFilter('all');
    setSearchTerm('');
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleFilter = (type) => {
    setCurrentFilter(type);
    setSearchTerm('');
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentFilter('all');
  };

  return (
    <Router>
      <div className="bg-[#F0FDF4] min-h-screen text-black">
        <Navbar onSearch={handleSearch} onFilter={handleFilter} />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Hero items={filteredItems} />} />
            <Route path="/sam.mov.bd/movie-upload"
              element={<MovieUpload items={items} onPost={handlePost} onDelete={handleDelete} />} />
            <Route path="/about" element={
              <div className="container min-h-screen mx-auto mt-16 p-4">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p>Welcome to SAM STUDIO your ultimate destination for movies and TV series.</p>
                <p>/sam.mov.bd/movie-upload</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;