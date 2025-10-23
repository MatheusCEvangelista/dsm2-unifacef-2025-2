import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultScreen({ route }) {
  const { nome, email, telefone } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados Cadastrados</Text>

      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.value}>{nome}</Text>

      <Text style={styles.label}>E-mail:</Text>
      <Text style={styles.value}>{email}</Text>

      <Text style={styles.label}>Telefone:</Text>
      <Text style={styles.value}>{telefone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    marginBottom: 10,
    fontSize: 16,
  },
});
