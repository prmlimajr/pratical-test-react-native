import { Container } from './styles';
import { Entypo } from '@expo/vector-icons';
import theme from '../../global/theme';

export function Rating() {
  return (
    <Container>
      <Entypo name="star" size={10} color={theme.colors.secondary100} />
      <Entypo name="star" size={10} color={theme.colors.secondary100} />
      <Entypo name="star" size={10} color={theme.colors.secondary100} />
      <Entypo name="star" size={10} color={theme.colors.secondary100} />
      <Entypo name="star" size={10} color={theme.colors.secondary100} />
    </Container>
  );
}
