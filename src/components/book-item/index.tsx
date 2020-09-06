import React from 'react';

import { Book } from 'types';

import styles from './styles.module.css';

interface Props {
  book: Book;
  isSelected: boolean;
  onSelectBook: (book: Book) => void;
}

const BookItem = (props: Props): JSX.Element => {
  const { book, isSelected, onSelectBook } = props;

  const className =
    (isSelected && styles.bookSelected) ||
    (book.disabled && styles.bookDisabled) ||
    styles.book;
  return (
    <div className={className} onClick={() => onSelectBook(book)}>
      <img
        id={`book-cover-${book.label}`}
        src={`src/assets/library/${book.icon}.png`}
      />
      <label htmlFor={`book-cover-${book.label}`}>{book.label}</label>
    </div>
  );
};

export default BookItem;
