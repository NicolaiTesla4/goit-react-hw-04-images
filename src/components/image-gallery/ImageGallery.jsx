import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../image-gallery-item/ImageGalletyItem.jsx';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className='imageGallery'>
      {images.map(image => (
        <ImageGalleryItem 
          key={image.id} 
          image={image} 
          onClick={onImageClick} 
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery; 