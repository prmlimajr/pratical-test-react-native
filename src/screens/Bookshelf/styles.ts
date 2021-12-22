import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;
`;

export const ScrollableContainer = styled.ScrollView``;

export const SectionTitle = styled.Text`
  margin-top: 32px;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.title900};
`;
