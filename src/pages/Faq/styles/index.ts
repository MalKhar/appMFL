import styled from 'styled-components/native';
import { Colors } from '../../../shared/colors';

export const Descricao = styled.Text`
  color: ${Colors.gray2};
  font-size: 16px;
  font-family: 'Inter';
  margin-top: 10px;
  text-align: justify; /* Adicionando alinhamento justificado */
`;

export const ViewSemDocumento = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


export const TituloSemDocumento = styled.Text`
  color: ${Colors.gray2};
  font-size: 18px;
  line-height: 26px;
  font-family: 'Inter';
  margin-top: 10px;
`;
