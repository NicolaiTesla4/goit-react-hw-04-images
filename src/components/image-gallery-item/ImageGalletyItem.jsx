import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image.largeImageURL);
  };

  return (
    <li className='imageGalleryItem' onClick={handleClick}>
      <img
        src={image.webformatURL} 
        alt={image.tags} 
        className="imageGalleryItem-image"
        data-largeurl={image.largeImageURL} 
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem; 