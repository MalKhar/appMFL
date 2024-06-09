import React from 'react';
import {ActivityIndicator} from 'react-native';
import * as S from './styles/styled';

export const Loading = () => {
  return (
    <S.Main>
      <S.CentralContainer>
        <ActivityIndicator size="large" />
      </S.CentralContainer>
    </S.Main>
  );
};
