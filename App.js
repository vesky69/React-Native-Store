import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './Componentes/Header';
import Filter from './Componentes/Filter';

export default function App() {
  return (
      <ScrollView >
        <Header />
        <Text style={styles.subTitle}>Special offers</Text>
        <Text style={styles.title}>Shop the latest deals.</Text>
        <StatusBar style="auto" />      
        <Filter />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#202124',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    color: '#5f6368',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
});
