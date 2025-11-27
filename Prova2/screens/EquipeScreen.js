import { View, Text, TouchableOpacity, StyleSheet, SectionList } from 'react-native';

export default function EquipeScreen({ navigation }) {
  const dados = [
    {
      pessoa: 'Eu',
      data: [
        {  id: '1', hora: '09:30', evento: 'Reunião "Daily"' },
        { id: '2', hora: '14:00', evento: 'Reunião com cliente Carros & Carros' },
        {id: '3', hora: '16:30', evento: 'Prazo Final Projeto X'}
      ]
    },
    {
      pessoa: 'Jurema (chefe)',
      data: [
        { id: '3', hora: '09:30', evento: 'Reunião"Daily"' },
        { id: '4', hora: '12:00', evento: 'Almoço com a diretoria' },
        { id: '5', hora: '15:00', evento: 'Saída viagem' }
      ]
    },
    {
      pessoa: 'Aderbal',
      data: [
        { id: '6', hora: '09:30', evento: 'Reunião "daily"' },
        { id: '7', hora: '13:30', evento: 'Visita técnica UNI-FACEF' },
        { id: '8', hora: '20:30', evento: 'Parzo final Projeto X' }
      ]
    }
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.voltar}>-</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Compromissos da equipe</Text>
      <Text style={styles.sub}>Matheus de Castro Evangelista</Text>
      <Text style={styles.sub}>SI 6ºSemestre</Text>

      <SectionList
        sections={dados}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 25 }}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.hora} : {item.evento}</Text>
        )}
        renderSectionHeader={({ section: { pessoa } }) => (
          <Text style={styles.pessoa}>{pessoa}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  voltar: { fontSize: 22, marginBottom: 10 },
  title: { fontSize: 22, marginBottom: 10 },
  sub: { fontSize: 14 },
  pessoa: { fontSize: 18, marginTop: 20, marginBottom: 5 },
  item: { fontSize: 15, marginBottom: 6 }
});