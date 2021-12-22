import { Container, Title, IconWrapper } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

interface HeaderProps {
  goBack?: boolean;
  title?: string;
  user?: boolean;
  like?: boolean;
  share?: boolean;
}

export function Header({ goBack, title, user, like, share }: HeaderProps) {
  return (
    <Container>
      {goBack && (
        <Ionicons name="ios-arrow-back-outline" size={24} color="black" />
      )}

      {title && <Title>{title}</Title>}

      {user && (
        <IconWrapper>
          <FontAwesome name="user-circle-o" size={32} color="black" />
        </IconWrapper>
      )}

      {like && <AntDesign name="hearto" size={24} color="black" />}

      {share && <EvilIcons name="share-google" size={24} color="black" />}
    </Container>
  );
}
