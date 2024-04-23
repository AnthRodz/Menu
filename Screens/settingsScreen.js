import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const DecimosScreen = () => {
  const [salarioBase, setSalarioBase] = useState('');
  const [decimoTercer, setDecimoTercer] = useState(null);

  const calcularDecimoTercer = () => {
    const salario = parseFloat(salarioBase);
    if (!isNaN(salario)) {
      const decimoTercerMes = (salario * 4) / 12;
      setDecimoTercer(decimoTercerMes);
    } else {
      setDecimoTercer(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo del Décimo Tercer Mes</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el salario base"
        keyboardType="numeric"
        value={salarioBase}
        onChangeText={setSalarioBase}
      />
      <Button title="Calcular" onPress={calcularDecimoTercer} />
      {decimoTercer !== null && (
        <Text style={styles.result}>
          El décimo tercer mes es: {decimoTercer.toFixed(2)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#394159',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#DCE4F2',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius:5,
    color:'#DCE4F2',
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    color:'#DCE4F2',
   
  },
});

export default DecimosScreen;







