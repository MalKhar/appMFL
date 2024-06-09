import styled from 'styled-components/native';
import {Colors} from '../../colors';

export const Main = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
  padding-top: 6px;
`;
export const BotaoGenerico = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  background-color: ${Colors.secondary};
  justify-content: center;
  align-items: center;
  border-radius: 56px;
`;

export const TextoBotaoGenerico = styled.Text`
  color: ${Colors.white};
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

type TextoBackButtonProps = {
  textColor?: 'white' | 'gray';
};

export const TextoBackButton = styled.Text<TextoBackButtonProps>`
  font-size: 18px;
  font-weight: bold;
  margin-left: 16px;

  ${({textColor}) =>
    textColor === 'white' ? `color: ${Colors.white}` : `color: ${Colors.gray2}`}
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${Colors.gray6};
  margin-top: 15px;
`;

export const EmBreveContainer = styled.View`
  width: 100%;
  height: 85%;
  padding: 15px;
  align-items: center;
  justify-content: center;
`;

export const ImagemEmBreve = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

export const Titulo = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${Colors.gray2};
`;

export const TextoAux = styled.Text`
  margin-top: 6px;
  font-size: 13px;
  color: ${Colors.gray3};
  text-align: center;
`;

export const CentralContainer = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RodapeContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const BotaoWhats = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.green3};
  box-shadow: 8px 8px 12px rgba(58, 138, 52, 0.6);
  position: absolute;
  right: 15px;
  bottom: 35px;
`;
