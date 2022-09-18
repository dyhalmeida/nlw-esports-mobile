import React, { useState } from "react";
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import {MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native'
import * as ClipBoard from 'expo-clipboard'

import { styles } from "./styles";
import { THEME } from "../../theme";
import { Heading } from "../Heading";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void
}

export function DuoMatch({ discord, onClose ,...otherProps }: Props) {

  const [isCopying, setIsCopying] = useState(false)

  const handleCopyDiscordToClipBoard = async () => {
    setIsCopying(true)
    await ClipBoard.setStringAsync(discord)
    setIsCopying(false)
    Alert.alert('Discord', 'Usuário copiado')
  }

  return (
    <Modal transparent statusBarTranslucent {...otherProps}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons name="close" size={20} color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>
          <CheckCircle 
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          />
          <Heading
            style={{ alignItems: 'center', marginTop: 24 }}
            title="Let's Play!"
            subtitle="Agora é só começar a jogar"
          />
          <Text style={styles.label}>
            Adicione no Discord
          </Text>
          <TouchableOpacity
            disabled={isCopying}
            style={styles.discordButton} 
            onPress={handleCopyDiscordToClipBoard}
          >
            <Text style={styles.discord}>
              {isCopying ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
