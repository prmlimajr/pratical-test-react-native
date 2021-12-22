import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { api } from '../../services/api';

interface Book {
  author: string;
  book_image: string;
  title: string;
}

interface Category {
  display_name: string;
}

export function Home() {
  const [recomendations, setRecomendations] = useState<Book[]>([]);
  const [weeklyMostRead, setWeeklyMostRead] = useState<Book[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

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

      const categories = [] as Category[];

      list.forEach((category) => {
        categories.push({
          display_name: category.display_name,
        });
      });

      setCategories(categories);
    }

    getBooks();
    getCategories();

    console.log({ categories });
  }, []);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
