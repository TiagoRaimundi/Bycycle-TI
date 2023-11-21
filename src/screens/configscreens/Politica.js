import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const PoliticaPrivacidade = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Política de Privacidade</Text>
      <Text style={styles.text}>
        Bem-vindo ao Aplicativo Bycycle! Sua privacidade é importante para nós.

        {"\n\n"}1. Informações Coletadas
        {"\n"}Nós coletamos informações para fornecer melhores serviços aos nossos usuários. Isso inclui: 
        - Informações que você fornece ao criar uma conta, como seu nome e e-mail.
        - Informações geradas pelo uso do aplicativo, como preferências e histórico de uso.

        {"\n\n"}2. Uso das Informações
        {"\n"}As informações coletadas são usadas para:
        - Melhorar o desempenho e a funcionalidade do aplicativo.
        - Comunicar atualizações, ofertas e outras informações relevantes.

        {"\n\n"}3. Compartilhamento de Informações
        {"\n"}Não compartilhamos suas informações pessoais com empresas, organizações ou indivíduos externos ao Aplicativo Bycycle, exceto nas seguintes circunstâncias:
        - Com sua permissão.
        - Por motivos legais, quando acreditamos de boa fé que o acesso ou uso, preservação ou divulgação das informações é razoavelmente necessário.

        {"\n\n"}4. Segurança
        {"\n"}Estamos comprometidos em proteger a segurança dos seus dados pessoais e usamos uma variedade de medidas de segurança para evitar perda ou acesso não autorizado.

        {"\n\n"}5. Alterações
        {"\n"}Nossa Política de Privacidade pode mudar de tempos em tempos. Publicaremos quaisquer alterações de política nesta página.

        {"\n\n"}Se você tiver alguma dúvida sobre esta política, não hesite em nos contatar.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default PoliticaPrivacidade;
