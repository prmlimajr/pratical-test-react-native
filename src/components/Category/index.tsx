import { getRandomColor } from '../../utils/getRandomColor';
import { Container, Color, CategoryName } from './styles';

interface CategoryProps {
  name: string;
}

export function Category({ name }: CategoryProps) {
  return (
    <Container>
      <Color color={getRandomColor()} />

      <CategoryName numberOfLines={2}>{name}</CategoryName>
    </Container>
  );
}
