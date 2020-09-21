import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components';

const Texto = styled.Text`
  color: ${(props) => props.cor};
  font-size: ${(props) => props.tamanho};
  font-weight: bold;
`;
const Back = styled.View`
  background-color: #071019;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.TextInput`
  width: 200px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #085a88;
  margin-top: 10px;
  color: white;
`;
const App = () => {
  const [visivel, alteraVisivel] = useState(false);
  const [gorjeta, alteraGorjeta] = useState();
  const [valor, alteraValor] = useState();
  const [percentual, alteraPercentual] = useState();

  const visibilidade = () => {
    alteraGorjeta(
      valor.replace(',', '.') * (percentual.replace(',', '.') / 100),
    );
    alteraVisivel(true);
  };

  return (
    <Back>
      {visivel === true && (
        <View>
          <Texto cor="#088A08" tamanho="18">
            Valor da gorjeta= R${gorjeta.toFixed(2)}
          </Texto>
          <Texto cor="#088A08" tamanho="18">
            Valor da gorjeta= R$
            {(parseFloat(valor) + parseFloat(gorjeta)).toFixed(2)}
          </Texto>
        </View>
      )}

      <Texto cor="#085A88" tamanho="25">
        Calculadora de Gorjeta
      </Texto>
      <View style={estilo.viewInput}>
        <Texto cor="#085A88" tamanho="14">
          Valor da conta
        </Texto>
        <Input
          value={valor}
          onChangeText={(valorInput) => alteraValor(valorInput)}
          keyboardType={'numeric'}
        />
        <Texto cor="#085A88" tamanho="14">
          Percentual da gorjeta (%)
        </Texto>
        <Input
          value={percentual}
          onChangeText={(percentualInput) => alteraPercentual(percentualInput)}
          keyboardType={'numeric'}
        />
      </View>
      <TouchableOpacity style={estilo.botao} onPress={visibilidade}>
        <Text style={estilo.textBotao}>Calcular</Text>
      </TouchableOpacity>
    </Back>
  );
};
export default App;

const estilo = StyleSheet.create({
  botao: {
    width: '40%',
    height: 50,
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: '#088A08',
    borderRadius: 30,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBotao: {
    color: '#088A08',
    fontSize: 23,
    fontWeight: 'bold',
  },
  viewInput: {
    marginTop: 15,
    marginBottom: 30,
  },
});
