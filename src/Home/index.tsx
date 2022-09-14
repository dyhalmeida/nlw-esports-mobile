import { View, Image } from 'react-native';

import { styles } from './styles';

import logoImage from '../assets/logo-nlw-esports.png'
import { Heading } from '../components/Heading';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImage}
        style={styles.logo}
      />
      <Heading 
        title='Encontre o seu duo!'
        subtitle='Selecione o game que deseja jogar...'
      />
    </View>
  );
}