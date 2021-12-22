import { capitalize } from '../../utils/capitalize';
import { Rating } from '../Rating';
import { Container, BookImage, BookTitle, BookAuthor } from './styles';

interface Book {
  author: string;
  book_image: string;
  title: string;
}

export function Book({ author, book_image, title }: Book) {
  return (
    <Container>
      <BookImage source={{ uri: book_image }} />
      <BookTitle numberOfLines={1}>{capitalize(title.toLowerCase())}</BookTitle>

      <BookAuthor numberOfLines={1}>{author}</BookAuthor>

      <Rating />
    </Container>
  );
}
