import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {ProcessosRoutes} from '../../navigation/routes/processos.routes';
import {useLoginService} from '../../service/login.service';

export const TelaInicial = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const {postLogin} = useLoginService();

  const handleLogin = async () => {
    try {
      const user = await postLogin(username, password);
      // Login bem-sucedido, fazer algo com as informações do usuário
      navigation.navigate('Processos', {
        screen: ProcessosRoutes.Newslettler,
      });

      navigation.reset({
        index: 0,
        routes: [{name: 'Processos'}],
      });
    } catch (error) {
      // Login falhou, exibir mensagem de erro
      Alert.alert('Erro de Login', error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View className="bg-white h-full w-full">
          <Image
            className="h-full w-full absolute"
            source={require('../../img/background.png')}
          />
          <View className="h-full w-full flex justify-around pt-40 pb-10">
            <View className="flex items-center">
              <Text className="text-white font-bold tracking-wider text-5xl">
                MFL
              </Text>
            </View>
            <View className="flex items-center mx-7 space-y-4 mt-4">
              <TextInput
                className="bg-black/5  mb-1 p-5 rounded-2xl w-full"
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                className="bg-black/5 mb-1 p-5 rounded-2xl w-full"
                placeholder="Senha"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                className="bg-black/70 p-3 rounded items-center w-full"
                onPress={handleLogin}>
                <Text className="text-white text-lg">Entrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
