import { PropsWithChildren } from 'react';
import { ImageBackground } from 'react-native';

import { styles } from './styles';

import backgroundImage from '../../assets/background-galaxy.png'

export function Background({ children }: PropsWithChildren) {
  return (
    <ImageBackground 
      source={backgroundImage}
      defaultSource={backgroundImage}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}