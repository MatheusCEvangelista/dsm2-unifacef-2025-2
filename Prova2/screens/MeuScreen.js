import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default function MeuScreen({ navigation }) {
  const compromissos = [
    { id: '1', hora: '09:30', evento: 'Reunião "Daily"' },
    { id: '2', hora: '14:00', evento: 'Reunião com cliente Carros & Carros' },
    { id: '3', hora: '16:30', evento: 'Prazo Final Projeto X' }
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.voltar}>-</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Meus Compromissos</Text>

      <Text style={styles.data}>EU</Text>
      <Text style={styles.sub}>Matheus de Castro Evangelista</Text>
      <Text style={styles.sub}>SI 6ºSemestre</Text>

      <FlatList
        data={compromissos}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 30 }}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.hora} : {item.evento}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  voltar: { fontSize: 22, marginBottom: 10 },
  title: { fontSize: 22, marginBottom: 20 },
  data: { fontSize: 26, marginBottom: 5 },
  sub: { fontSize: 14 },
  item: { fontSize: 16, marginBottom: 10 }
});
