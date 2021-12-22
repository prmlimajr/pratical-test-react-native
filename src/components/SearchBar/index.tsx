import { TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container } from './styles';
import theme from '../../global/theme';

export function SearchBar() {
  return (
    <Container>
      <TextInput placeholder="Qual livro você gostaria de ler hoje?" />
      <MaterialIcons name="search" size={24} color={theme.colors.primary50} />
    </Container>
  );
}
