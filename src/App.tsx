import './App.css';

import { useState, useCallback, SyntheticEvent, ChangeEvent } from 'react';
import { debounce } from 'lodash';
import { SnackbarCloseReason } from '@mui/material';

import axiosInstance from './services/axiosInstance';

import MultiSelectComponent from './components/MultiSelectComponent';
import ToastMessageComponent from './components/ToastMessageComponent';

interface CharacterOptionsType {
  id: number;
  name: string;
  image: string;
  episode: number;
}

interface CharacterListType {
  id: number;
  name: string;
  image: string;
  episode: string[];
}

export default function App(){
  const [characterOptions, setCharacterOptions] = useState<CharacterOptionsType[]>([]);
  const [autoCompleteLoading, setAutoCompleteLoading] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<{ message: string; open: boolean }>({
    message: '',
    open: false,
  });

  const setToast = (message: string, open: boolean) => {
    setToastMessage({ message, open });
  };

  const getCharacters = async (name: string) => {
    setAutoCompleteLoading(true);
    try {
      const response = await axiosInstance.get('/character', {
        params: { name },
      });
      const results = response.data?.results?.map((character: CharacterListType) => ({
        id: character.id,
        name: character.name,
        image: character.image,
        episode: character.episode.length,
      }));
      setCharacterOptions(results);
    } catch (error: any) {
      console.error(error);
      setToast(error.response?.data.error || 'Error getting characters', true);
    } finally {
      setAutoCompleteLoading(false);
    }
  };

  const debouncedGetCharacters = useCallback(
    debounce((name: string) => getCharacters(name), 500),
    []
  );

  const handleCharacterNameSearch = (event: ChangeEvent<HTMLInputElement>) => {
    debouncedGetCharacters(event.target.value);
  };

  const handleCloseToast = (event: Event | SyntheticEvent<any, Event>, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    setToastMessage((prev) => ({ ...prev, open: false }));
  };

  return (
    <div className="App">
      <MultiSelectComponent
        onSearch={handleCharacterNameSearch}
        options={characterOptions}
        loading={autoCompleteLoading}
      />
      <ToastMessageComponent
        open={toastMessage.open}
        message={toastMessage.message}
        onClose={handleCloseToast}
      />
    </div>
  );
};

