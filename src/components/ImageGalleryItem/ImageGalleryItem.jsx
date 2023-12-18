import React from 'react';
import { ImageGalleryItemLI, ItemPhoto } from './ImageGalleryItemStaled';

export const ImageGalleryItem = ({
  openModal,
  webformatURL,
  largeImageURL,
  id,
}) => {
  const photoClick = () => {
    openModal(largeImageURL);
  };

  return (
    <ImageGalleryItemLI onClick={photoClick} key={id}>
      <ItemPhoto src={webformatURL} alt="#" />
    </ImageGalleryItemLI>
  );
};
