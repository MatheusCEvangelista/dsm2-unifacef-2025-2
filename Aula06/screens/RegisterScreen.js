import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');

  const [errors, setErrors] = useState({});

  const validar = () => {
    let valid = true;
    let newErrors = {};

    if (!nome.trim()) {
      newErrors.nome = 'O nome é obrigatório';
      valid = false;
    }
    if (!email.includes('@')) {
      newErrors.email = 'E-mail inválido';
      valid = false;
    }
    if (senha.length < 6) {
      newErrors.senha = 'A senha deve ter pelo menos 6 caracteres';
      valid = false;
    }
    if (senha !== confirmarSenha) {
      newErrors.confirmarSenha = 'As senhas não coincidem';
      valid = false;
    }
    if (!telefone.match(/^[0-9]+$/)) {
      newErrors.telefone = 'O telefone deve conter apenas números';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validar()) {
      navigation.navigate('Result', {
        nome,
        email,
        telefone,
      });
    } else {
      Alert.alert('Erro', 'Verifique os campos e tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />
      {errors.nome && <Text style={styles.error}>{errors.nome}</Text>}

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      {errors.senha && <Text style={styles.error}>{errors.senha}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />
      {errors.confirmarSenha && <Text style={styles.error}>{errors.confirmarSenha}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="numeric"
      />
      {errors.telefone && <Text style={styles.error}>{errors.telefone}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});
