import { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'
import { Heading } from "../../components/Heading";
import { GameCard, GameCardProps } from "../../components/GameCard";

import logoImage from "../../assets/logo-nlw-esports.png";
import { styles } from "./styles";
import { Background } from "../../components/Background";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation()

  const handleOpenGame = ({ id, title, bannerUrl }: GameCardProps) => {
    navigation.navigate('game', {
      id, title, bannerUrl
    })
  }

  useEffect(() => {
    fetch("http://192.168.0.102:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImage} style={styles.logo} />
        <Heading
          title="Encontre o seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <GameCard data={item} onPress={() => handleOpenGame(item)} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
