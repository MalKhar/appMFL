import styled from 'styled-components/native';
import {Colors} from '../../../shared/colors';

export const View = styled.SafeAreaView``;
export const Text = styled.Text``;

export const Botao = styled.TouchableOpacity`
  border-radius: 4px;
  height: 40px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;

export const TextoBotao = styled.Text`
  color: ${Colors.white};
  font-size: 16px;
`;
