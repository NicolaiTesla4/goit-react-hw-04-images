import React, { useState, useEffect } from 'react';
import Searchbar from '../searchbar/Searchbar.jsx';
import ImageGallery from '../image-gallery/ImageGallery.jsx';
import Button from '../button/Button.jsx';
import Modal from '../modal/Modal.jsx';
import Loader from '../loader/Loader.jsx';
import { fetchImages } from '../api/fetchimages.js'; 

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    const handleEscKeyPress = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleEscKeyPress);

    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
    };
  }, []);

  const handleSubmit = async (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    fetchImages(query, 1); // Corrección
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    fetchImages(query, page + 1); // Corrección
  };

  const handleOpenModal = (largeImageURL) => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...response.hits]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }
    };

    if (query) {
      fetchData();
    }
  }, [query, page]);

  return (
    <div className='app'>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <ImageGallery images={images} onImageClick={handleOpenModal} />

      {images.length > 0 && !isLoading && <Button onClick={handleLoadMore} />}
      {showModal && <Modal largeImageURL={largeImageURL} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;