import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, View, Image, FlatList, Text } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

import { styles } from "./styles";
import logoImg from '../../assets/logo-nlw-esports.png'

import { GameParams } from "../../@types/navigation";
import { THEME } from "../../theme";

import { Heading } from "../../components/Heading";
import { Background } from "../../components/Background";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";

export function Game() {

  const [duos, setDuos] = useState<DuoCardProps[]>([])

  const route = useRoute()
  const navigation = useNavigation()
  const game = route.params as GameParams

  useEffect(() => {
    fetch(`http://192.168.0.102:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuos(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo  
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image 
            source={logoImg}
            style={styles.logo}
          />
          <View style={styles.right} />
        </View>

        <Image 
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading 
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />

        <FlatList 
          data={duos}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <DuoCard data={item} onConnect={() => {}} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.containerLIst}
          contentContainerStyle={duos.length > 0 ? styles.contentList: styles.emptyListContent}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios plublicados para esse jogo
            </Text>
          )}

        />
      </SafeAreaView>
    </Background>
  );
}
