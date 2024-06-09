import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useListNewsletterService} from '../../service/newletter.service';
import {Loading} from '../../shared/utils/Loading';
import {Newsletter} from '../../shared/model/Newsletter';
import moment from 'moment';

export const Newletter = () => {
  const [loading, setLoading] = useState(true);
  const [listaNoticias, setListaNoticias] = useState<Newsletter[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const {getListNewsletter} = useListNewsletterService();

  const fetchNoticias = () => {
    setRefreshing(true);

    getListNewsletter()
      .then(resp => {
        resp.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setListaNoticias(resp);
      })
      .finally(() => {
        setRefreshing(false);
        setLoading(false);
      })
      .catch(err => console.error(err));
  };

  const onRefresh = () => {
    fetchNoticias();
  };

  useEffect(() => {
    fetchNoticias();
  }, []);

  if (loading) return <Loading />;

  return (
    <ScrollView
      style={{flex: 1}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {listaNoticias.map(item => (
        <TouchableOpacity
          key={item._id}
          activeOpacity={0.7}
          onPress={() => Linking.openURL(item.URL)}>
          <View style={styles.card}>
            <Image style={styles.image} source={{uri: item.imgLink}} />
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.footer}>
                <Text style={styles.date}>
                  {moment(item.createdAt).format('DD/MM/YYYY')}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  readMore: {
    fontSize: 14,
    color: '#007bff',
  },
});
