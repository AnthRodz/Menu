import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SalarioScreen = () => {
  const [salarioMensual, setSalarioMensual] = useState('');
  const [seguroSocial, setSeguroSocial] = useState(null);
  const [seguroEducativo, setSeguroEducativo] = useState(null);
  const [salarioFinalMensual, setSalarioFinalMensual] = useState(null);
  const [salarioFinalQuincenal, setSalarioFinalQuincenal] = useState(null);

  const calcularSalario = () => {
    const salario = parseFloat(salarioMensual);
    if (!isNaN(salario)) {
      const seguroSocialCalculado = salario * 0.0975;
      const seguroEducativoCalculado = salario * 0.0125;
      const salarioFinal = salario - seguroSocialCalculado - seguroEducativoCalculado;
      const salarioQuincenal = salarioFinal / 2;

      setSeguroSocial(seguroSocialCalculado);
      setSeguroEducativo(seguroEducativoCalculado);
      setSalarioFinalMensual(salarioFinal);
      setSalarioFinalQuincenal(salarioQuincenal);
    } else {
      setSeguroSocial(null);
      setSeguroEducativo(null);
      setSalarioFinalMensual(null);
      setSalarioFinalQuincenal(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo de Salario Final</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el salario mensual"
        keyboardType="numeric"
        value={salarioMensual}
        onChangeText={setSalarioMensual}
      />
      <Button class="btn" title="Calcular" onPress={calcularSalario} />
      <Text style={styles.label}>Seguro Social: {seguroSocial ? `$${seguroSocial.toFixed(2)}` : ''} $</Text>
      <Text style={styles.label}>Seguro Educativo: {seguroEducativo ? `$${seguroEducativo.toFixed(2)}` : ''} $</Text>
      <Text style={styles.label}>Salario Final Mensual: {salarioFinalMensual ? `$${salarioFinalMensual.toFixed(2)}` : ''} $</Text>
      <Text style={styles.label}>Salario Final Quincenal: {salarioFinalQuincenal ? `$${salarioFinalQuincenal.toFixed(2)}` : ''} $</Text>
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
    borderColor: '#DCE4F2',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius:5,
    color:'#DCE4F2',
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
    color:'#DCE4F2',
  },
  
});

export default SalarioScreen;