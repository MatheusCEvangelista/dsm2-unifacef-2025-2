import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda do dia</Text>
      <Text style={styles.sub}>Matheus de Castro Evangelista</Text>
      <Text style={styles.sub}>Sistemas da informação 6ºSemestre</Text>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Meus')}>
        <Text style={styles.btnText}>Meus Compromissos </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('equipe')}>
        <Text style={styles.btnText}>Compromissos da equipe</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 32, marginBottom: 10 },
  sub: { fontSize: 16 },
  btn: { marginTop: 25, padding: 15, backgroundColor: '#ccc', width: 230, alignItems: 'center' },
  btnText: { fontSize: 14 }
});