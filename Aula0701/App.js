import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";

export default function App() {
  const produtos = [
    { id: "1", nome: "Notebook", preco: 4500, categoria: "Eletrônicos" },
    { id: "2", nome: "Celular", preco: 2500, categoria: "Eletrônicos" },
    { id: "3", nome: "Geladeira", preco: 3800, categoria: "Eletrodomésticos" },
    { id: "4", nome: "Fogão", preco: 2200, categoria: "Eletrodomésticos" },
    { id: "5", nome: "Camisa", preco: 120, categoria: "Vestuário" },
    { id: "6", nome: "Calça Jeans", preco: 200, categoria: "Vestuário" }
  ];

  const categorias = [
    { title: "Eletrônicos", data: produtos.filter(p => p.categoria === "Eletrônicos") },
    { title: "Eletrodomésticos", data: produtos.filter(p => p.categoria === "Eletrodomésticos") },
    { title: "Vestuário", data: produtos.filter(p => p.categoria === "Vestuário") }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Produtos</Text>
      <SectionList
        sections={categorias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.categoria}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#f9f9f9"
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  categoria: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#ddd",
    padding: 8,
    borderRadius: 5,
    marginTop: 10
  },
  item: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  nome: {
    fontSize: 16
  },
  preco: {
    fontSize: 14,
    color: "#555"
  }
});
