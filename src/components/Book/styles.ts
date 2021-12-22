import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 104px;
  margin-right: 12px;
  margin-top: 16px;
`;

export const BookImage = styled.Image`
  width: 104px;
  height: 160px;
  margin-bottom: 4px;
`;

export const BookTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.primary100};
  font-size: ${RFValue(14)}px;
`;

export const BookAuthor = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.primary40};
  font-size: ${RFValue(12)}px;
  margin-bottom: 4px;
`;
