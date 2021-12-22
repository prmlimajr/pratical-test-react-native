import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 104px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.title900};
  margin-left: 24px;
`;

export const IconWrapper = styled.View`
  margin-right: 12px;
`;
