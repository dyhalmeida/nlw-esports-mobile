import { 
  TouchableOpacity, 
  TouchableOpacityProps, 
  ImageBackground, 
  ImageSourcePropType, 
  Text
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardProps {
  id: number
  title: string
  _count: { ads: number }
  bannerUrl: string
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps
}
export function GameCard({ data, ...otherProps }: Props) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      {...otherProps}
    >
      <ImageBackground 
        style={styles.cover} 
        source={{ uri: data.bannerUrl }} 
      >
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.title}
          </Text>
          <Text style={styles.ads}>
            {data._count.ads > 1 ? `${data._count.ads} anúncios` : `${data._count.ads} anúncio`}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}