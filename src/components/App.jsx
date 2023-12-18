import { getAllPhoto } from 'API/Users';
import { Searchbar } from './Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import { Modal } from './Modal/Modal';
import Loader from './Loader/Loader';
import { DivApp } from './AppStaled';

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async (q = '', page = 1) => {
    try {
      setLoading(true);
      const { hits } = await getAllPhoto(q, page);
      if (page === 1) {
        setPhotos(hits);
      } else {
        setPhotos(prev => ({
          photos: [...prev, ...hits],
        }));
      }
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  const getSearch = value => {
    setPage(1);
    setSearch(value);
  };

  const getPage = () => {
    setPage(prev => ({ page: prev + 1 }));
  };
  // Новва частина

  useEffect(() => {
    if (search !== '') {
      fetchPhotos(search, page);
    }
  }, [search, page]);

  const openModal = url => {
    setUrl(url);
    setModal(true);

    window.addEventListener('keydown', onWindowCloseModal);
  };

  const closeModal = () => {
    setModal(false);
  };
  const onWindowCloseModal = el => {
    if (el.code === 'Escape') {
      closeModal();
      window.removeEventListener('keydown', onWindowCloseModal);
    }
  };

  return (
    <DivApp>
      {modal && <Modal closeModal={closeModal} urlModal={url} />}

      <Searchbar getSearch={getSearch}></Searchbar>
      {loading && <Loader />}
      <ImageGallery>
        {photos.length > 0 &&
          photos.map(el => (
            <ImageGalleryItem
              openModal={openModal}
              key={el.id}
              webformatURL={el.webformatURL}
              largeImageURL={el.largeImageURL}
            />
          ))}
      </ImageGallery>
      {photos.length >= 12 && <Button getPage={getPage}></Button>}
    </DivApp>
  );
};
