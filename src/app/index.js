import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🥐</Text>
      <Text style={styles.title}>Pão Docas</Text>
      <Text style={styles.subtitle}>O seu aplicativo de delícias está online!</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => alert('Em breve mais funcionalidades!')}
      >
        <Text style={styles.buttonText}>Ver Cardápio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0', // Cor de fundo quentinha (creme)
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5C3A21', // Marrom café
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#8C6239',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#D97706', // Laranja dourado pão
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3, // Sombrinha no Android
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
