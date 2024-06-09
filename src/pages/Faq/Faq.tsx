import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  RefreshControl,
} from 'react-native';
import {Loading} from '../../shared/utils/Loading';
import {usePerguntasFrequentesService} from '../../service/perguntasFrequentes.service';
import {Colors} from '../../shared/colors';

// Habilita as animações de Layout para Android
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FaqItem = ({item}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={toggleExpansion}>
      <View style={styles.faqItem}>
        <Text style={styles.faqQuestion}>{item.title}</Text>
        {expanded && <Text style={styles.faqAnswer}>{item.content}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export const Faq = () => {
  const [loading, setLoading] = useState(false);
  const [perguntaFrequente, setPerguntaFrequente] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const {getPerguntaFrequente} = usePerguntasFrequentesService();

  const fetchPerguntasFrequentes = () => {
    setRefreshing(true);
    getPerguntaFrequente()
      .then(resp => {
        setPerguntaFrequente(resp);
      })
      .finally(() => {
        setRefreshing(false);
        setLoading(false);
      })
      .catch(err => console.error(err));
  };

  const onRefresh = () => {
    fetchPerguntasFrequentes();
  };

  useEffect(() => {
    setLoading(true);
    fetchPerguntasFrequentes();
  }, []);

  if (loading) return <Loading />;

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.faqContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text style={styles.title}>Perguntas Frequentes</Text>
        <Text style={styles.description}>
          Bem-vindo à nossa página de Perguntas Frequentes! Aqui você encontrará
          respostas para as dúvidas mais comuns sobre o nosso serviço de
          advocacia. Estamos aqui para ajudá-lo a entender melhor os processos,
          documentos e tudo o que você precisa saber para ter uma ótima
          experiência conosco.
        </Text>

        {perguntaFrequente
          .slice()
          .reverse()
          .map(item => (
            <FaqItem key={item._id} item={item} />
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  faqItem: {
    backgroundColor: Colors.whitegray,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.black,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  faqAnswer: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});
