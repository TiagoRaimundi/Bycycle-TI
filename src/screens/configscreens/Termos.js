import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const TermosDeUso = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        Bem-vindo ao Bycycle! Ao usar nosso aplicativo, você concorda com os seguintes termos e condições:

        {"\n\n"}1. Uso do Aplicativo
        {"\n"}- O Aplicativo Bycycle é fornecido apenas para seu uso pessoal e não comercial.
        {"\n"}- Você concorda em não usar o Aplicativo para fins ilegais ou de maneira que possa interromper, danificar ou prejudicar o funcionamento do Aplicativo.

        {"\n\n"}2. Conteúdo e Propriedade Intelectual
        {"\n"}- Todo o conteúdo do Aplicativo, incluindo textos, gráficos, logotipos, ícones, imagens e software, é propriedade do Aplicativo Bycycle ou de seus fornecedores de conteúdo e não é protegido pelas leis de direitos autorais internacionais e nacionais.
 

        {"\n\n"}3. Contas de Usuário
        {"\n"}- Para acessar determinados recursos do Aplicativo, você pode ser solicitado a criar uma conta. 
        {"\n"}- Você é responsável por manter a confidencialidade das informações da sua conta.
        {"\n"}- Você concorda em fornecer informações verdadeiras, precisas, atuais e completas sobre você mesmo, conforme solicitado pelo processo de registro do Aplicativo.

        {"\n\n"}4. Veracidade das Informações
        {"\n"}- Fornecer informações verdadeiras, precisas, atuais e completas sobre si mesmo conforme solicitado pelo processo de registro do aplicativo (essas informações sendo os "Dados de Registro").
        {"\n"}- Manter e atualizar imediatamente os Dados de Registro para mantê-los verdadeiros, precisos, atuais e completos.

        {"\n\n"}5. Limitações de Responsabilidade
        {"\n"}- O Aplicativo Bycycle não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou incapacidade de usar o Aplicativo.

        {"\n\n"}6. Alterações nos Termos de Uso
        {"\n"}- O Aplicativo Bycycle reserva-se o direito de modificar estes Termos de Uso a qualquer momento. Qualquer alteração entrará em vigor imediatamente após a publicação no Aplicativo.

        {"\n\n"}A violação destes Termos pode resultar em suspensão ou encerramento da sua conta. Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco pelo e-mail suporte.bycycle@gmail.com.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white', // Escolha a cor de fundo apropriada
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24, // Ajuste para melhorar a legibilidade
    textAlign: 'justify',
  },
});

export default TermosDeUso;
