import { StatusBar } from "expo-status-bar";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import "./locales/locale";
import { useState } from "react";
import i18next from "./locales/locale";

export default function App() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const changeLng = (lng: any) => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };
  return (
    <View style={styles.container}>
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <View style={styles.languageList}>
          <Text onPress={() => changeLng("en")}>English</Text>
          <Text onPress={() => changeLng("fr")}>French</Text>
        </View>
      </Modal>
      <Text>{t("welcome")}</Text>
      <Button title={t("change-language")} onPress={() => setVisible(true)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  languageList: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    gap: 10,
    backgroundColor: "#dddddd",
  },
});
