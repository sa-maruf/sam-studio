import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import MovieUpload from './components/MovieUpload';
import './index.css';
import About from './components/About';

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Initial dummy data
  useEffect(() => {
    const initialData = [
      { id: 1, name: 'The Matrix 1999', description: 'Movie - The Matrix is a 1999 science fiction action film written and directed by the Wachowskis.[a] It is the first installment in the Matrix film series.', poster: 'https://i.ibb.co.com/sdDCFkpt/Screen-Shot-2021-05-19-at-12-59-41-PM.webp', type: 'movie', downloadLink: 'https://drive.usercontent.google.com/download?id=1Em-n7q1cwrDWNrxQc-B32cHhqGKz4991&export=download' },
      { id: 2, name: 'Breaking Bad 2008', description: 'Series S 01 - Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan for AMC.', poster: 'https://i.ibb.co.com/5XF3vbs0/1111277.jpg', type: 'tv_series', downloadLink: 'https://mrbobd.com/links/wgh86y2i8s' },
      { id: 3, name: 'Inception 2010', description: 'Movie - A thief who steals corporate secrets through dream-sharing technology.', poster: 'https://i.ibb.co.com/DfT9TP2q/hq720.jpg', type: 'movie', downloadLink: 'https://playerwish.com/d/je804zmq7hml' },
      { id: 4, name: 'Game of Thrones 2011', description: 'Series S 01 - Nine noble families fight for control over the mythical lands of Westeros.', poster: 'https://i.ibb.co.com/YBTQq68w/game-of-thrones-kingsroad-16khf.jpg', type: 'tv_series', downloadLink: 'https://drive.usercontent.google.com/download?id=1QrAFhvonZdAAiayV97myUAAeo-y24ZxQ&export=download' },
      { id: 5, name: 'Jawan 2023', description: 'Movie - Jawan is a 2023 Indian Hindi-language action thriller film co-written and directed by Atlee.', poster: 'https://i.ibb.co.com/RTKzHktR/jawan-5-0.png', type: 'movie', downloadLink: 'https://hblinks.dad/archives/68145' },
      { id: 6, name: 'Avengers: Endgame 2019', description: 'Movie - Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics.', poster: 'https://i.ibb.co.com/Xx6Mz9ww/avengers-endgame-2019-poster-wallpaper.webp', type: 'movie', downloadLink: 'https://playerwish.com/d/jzen4d45rimu' },
      { id: 7, name: 'Taandob 2025', description: 'Movie - A jobless villager moves to Dhaka for work but gets entangled in a conspiracy. ', poster: 'https://i.ibb.co.com/wZWJR6Kr/Taandob-Movie-Hall-List-1.webp', type: 'movie', downloadLink: 'https://fastdokan.top/views/jQkqrpyEoo' },
      { id: 8, name: 'Man of Steel 2013', description: 'Movie - Man of Steel is a 2013 superhero film based on the DC Comics character Superman.', poster: 'https://i.ibb.co.com/KcHn83kr/749ce10c-2774-4e99-89f2-75aa3a4fc24e.jpg', type: 'movie', downloadLink: 'https://playerwish.com/d/x7amszd0yh8b' },
      { id: 9, name: 'Money Heist 2017', description: 'Series S 01 - Money Heist  is a Spanish heist crime drama television series created by Álex Pina.', poster: 'https://i.ibb.co.com/WNYf1K9h/money-heist-season-5.jpg', type: 'tv_series', downloadLink: 'https://drive.usercontent.google.com/download?id=1cySjuEDY1RQv-E9VUbRwFJaOkVHuAYJx&export=download' },
      { id: 10, name: 'Attack on Titan 2013', description: 'Series S 01 - Attack on Titan has been met with widespread critical and commercial success.', poster: 'https://i.ibb.co.com/k2wDgnfN/1d24ae4aa81c3eeeecd5891b42516885e49464acc1a93aacc152298a86c0a5c3.jpg', type: 'tv_series', downloadLink: 'https://mcloud.guru/s/d94488-b86844-c54478-387558-684838-383545-7558b5-75a544-e44478-a92944-c53595-7595b5-954555-9585f9' },
      { id: 11, name: 'Alien: Earth 2025', description: 'Series S 01 - Alien: Earth is an American science fiction horror television series.', poster: 'https://i.ibb.co.com/2701t9Wc/hq720.jpg', type: 'tv_series', downloadLink: 'https://linksheild.site/view/MlXgAqRn' },
      { id: 12, name: 'Avengers: Infinity War 2018', description: 'Movie - Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers.', poster: 'https://i.ibb.co.com/whxxr3Xd/Untitled-design.png', type: 'movie', downloadLink: 'https://playerwish.com/d/p04ltimf7zjr' },
      { id: 13, name: 'Avatar 2009', description: 'Movie - Avatar is a 2009 epic science fiction film co-produced, co-edited, written, and directed by James Cameron .', poster: 'https://i.ibb.co.com/3mRnYCQB/Avatar-2009-film-poster-1.jpg', type: 'movie', downloadLink: 'https://drive.usercontent.google.com/download?id=1Y4ouZ2OMmLselPHe1jqi1yRBIZyeHkiQ&export=download' },
      { id: 14, name: 'Avatar: The Way of Water 2022', description: 'Movie - Avatar: The Way of Water is a 2022 American epic science fiction film co-produced, co-edited, and directed by James Cameron .', poster: 'https://i.ibb.co.com/8Dc1j1YB/Avatar-The-Way-of-Water-poster-2.jpg', type: 'movie', downloadLink: 'https://playerwish.com/d/8s36gd1mbckr' },
      { id: 15, name: 'John Wick: Chapter 4 2023', description: 'Movie - John Wick: Chapter 4 is a 2023 American neo-noir action thriller film, directed and co-produced by Chad Stahelski.', poster: 'https://i.ibb.co.com/hJ5WDc9j/john-wick-chapter-4.jpg', type: 'movie', downloadLink: 'https://playerwish.com/d/n0jig31xs383' },
      { id: 16, name: 'John Wick: Chapter 3 2019', description: 'Movie - John Wick: Chapter 3 – Parabellum is a 2019 American neo-noir action thriller film directed by Chad Stahelski.', poster: 'https://i.ibb.co.com/Jwp4RRzd/385668-Product-0-I-a045513a-4731-48a7-b141-07167e541ee8.jpg', type: 'movie', downloadLink: 'https://playerwish.com/d/1w0y7rcezvuv' },
      { id: 17, name: 'Mission: Impossible – Dead Reckoning Part One 2023', description: 'Movie - Mission: Impossible – Dead Reckoning Part One is a 2023 American action spy film directed by Christopher McQuarrie.', poster: 'https://i.ibb.co.com/GQnZvqGM/m-ISSION-i-MPOSSIBLE.jpg', type: 'movie', downloadLink: 'https://playerwish.com/d/e6heshscgf8e' },
      { id: 18, name: 'Mission: Impossible – The Final Reckoning 2025', description: 'Movie - Mission: Impossible – The Final Reckoning is a 2025 American action spy film directed by Christopher McQuarrie.', poster: 'https://i.ibb.co.com/7q3wBwS/images.jpg', type: 'movie', downloadLink: 'https://mcloud.guru/s/d94488-b86844-c54455-788868-784885-489558-785545-382544-e44478-a92944-c53595-75a575-555585-b595f9?token=UmVJR1hadExkYWRWem9xQ21iTlorUzRHTFNBRGdHOXNLQVJtTFVNNnJ0T3pjWmFJTHVxSkFxT3FKdlE5bFdieEFOeGIyOGpGOVE3SjRua3BONkpid3hhOXhNYXVoZ1E4cGFhNk5LaEswRjA9' },
      { id: 19, name: 'K.G.F: Chapter 1 2018', description: 'Movie - KGF is an Indian Kannada-language period action film series set mostly in the Kolar Gold Fields.', poster: 'https://i.ibb.co.com/j9w0C1z8/ab67616d0000b27310f03b82352c78ffb70591b7.jpg', type: 'movie', downloadLink: 'https://playerwish.com/d/o68x11yjpfgy' },
      { id: 20, name: 'K.G.F: Chapter 2 2022', description: 'Movie - KGF: Chapter 2 is a 2022 Indian Kannada-language period action film written and directed by Prashanth Neel.', poster: 'https://i.ibb.co.com/Tx7TWs0H/953682-kgf-chapter-2.jpg', type: 'movie', downloadLink: 'https://playerwish.com/d/656qndcbt5dc' },
      { id: 21, name: 'Loki 2021', description: 'Series S 01 - The first season of the American television series Loki, based on Marvel Comics.', poster: 'https://i.ibb.co.com/bRb1CLhW/loki-lede-1.jpg', type: 'tv_series', downloadLink: 'https://drive.usercontent.google.com/download?id=1g1CVKGY68Vr0vSqjjY3bXGPm2J7Qs0CW&export=download' },
      { id: 22, name: 'War 2019', description: 'Movie - War is a 2019 Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra under Yash Raj Films.', poster: 'https://i.ibb.co.com/hJqXkHkF/e6b63e8f450da2c53c822342ee724e26a5cb4bcf58aeccdb2ffd264111a71772.jpg', type: 'movie', downloadLink: 'https://fastdokan.top/views/2XLbOrvgDc' },
      { id: 23, name: 'War 2 2025', description: 'Movie - War 2 is a 2025 Indian Hindi-language action-thriller film directed by Ayan Mukerji and produced by Aditya Chopra under Yash Raj Films.', poster: 'https://i.ibb.co.com/PvNtDJ2X/war-2-review-1.jpg', type: 'movie', downloadLink: 'https://playerwish.com/d/szfii9wdtvmm' },
      { id: 24, name: 'Loki 2023', description: 'Series S 01 - The second season of the American television series Loki, based on Marvel Comics.', poster: 'https://i.ibb.co.com/Q3RQ3BQk/Untitled-design.png', type: 'tv_series', downloadLink: 'https://drive.usercontent.google.com/download?id=1Z03kV5zGr8bHZ86YGpfGeM8PjcdmlfOy&export=download' },
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
      <div className="bg-[#383636] min-h-screen ">
        <Navbar onSearch={handleSearch} onFilter={handleFilter} />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Hero items={filteredItems} />} />
            <Route path="/sam.mov.bd/movie-upload"
              element={<MovieUpload items={items} onPost={handlePost} onDelete={handleDelete} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;