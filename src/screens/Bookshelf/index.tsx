import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Book } from '../../components/Book';
import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { api } from '../../services/api';
import { Category } from '../../components/Category';

import { Container, ScrollableContainer, SectionTitle } from './styles';
import { getRandomColor } from '../../utils/getRandomColor';

interface Book {
  author: string;
  book_image: string;
  title: string;
}

export function Bookshelf() {
  const [recomendations, setRecomendations] = useState<Book[]>([]);
  const [weeklyMostRead, setWeeklyMostRead] = useState<Book[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function getBooks() {
      const books = await api.get(
        '/overview.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR'
      );

      const list = books.data.results.lists;
      const recomendations = [] as Book[];
      const weeklyMostRead = [] as Book[];

      list.forEach((category) => {
        weeklyMostRead.push({
          author: category.books[0].author,
          book_image: category.books[0].book_image,
          title: category.books[0].title,
        });

        recomendations.push({
          author: category.books[1].author,
          book_image: category.books[1].book_image,
          title: category.books[1].title,
        });
      });

      setWeeklyMostRead(weeklyMostRead);
      setRecomendations(recomendations);
    }

    async function getCategories() {
      const result = await api.get(
        '/names.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR'
      );

      const list = result.data.results;

      const categories = [] as string[];

      list.forEach((category) => {
        categories.push(category.display_name);
      });

      setCategories(categories);
    }

    getBooks();
    getCategories();
  }, []);

  return (
    <Container>
      <Header title="Bookshelf" user />

      <ScrollableContainer>
        <SearchBar />

        <SectionTitle>Para Você</SectionTitle>

        <FlatList
          data={recomendations}
          keyExtractor={(item) => Math.random().toString()}
          renderItem={({ item }) => (
            <Book
              author={item.author}
              book_image={item.book_image}
              title={item.title}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />

        <SectionTitle>Categorias</SectionTitle>

        <FlatList
          data={categories}
          keyExtractor={(item) => Math.random().toString()}
          renderItem={({ item }) => <Category name={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal
        />

        <SectionTitle>Os mais lidos da semana</SectionTitle>

        <FlatList
          data={weeklyMostRead}
          keyExtractor={(item) => Math.random().toString()}
          renderItem={({ item }) => (
            <Book
              author={item.author}
              book_image={item.book_image}
              title={item.title}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </ScrollableContainer>
    </Container>
  );
}
