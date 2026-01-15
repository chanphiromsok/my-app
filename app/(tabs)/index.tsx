import { Image, ScrollView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { Galeria } from "@nandorojo/galeria";
const images = [
  "https://deview.tovtam.com/images/format=webp,quality=95,width=1083/assets/1882/01JYRC37JKKW5BDQBENKK04KM2.jpg",
  "https://deview.tovtam.com/images/format=webp,quality=95,width=360/assets/1883/01JYRC39AM2DX0RYZFCDRA5223.jpg",
  "https://deview.tovtam.com/images/format=webp,quality=95,width=360/assets/1884/01JYRC3AX1XYVHQMHXS94VPR1A.jpg",
  "https://deview.tovtam.com/images/format=webp,quality=95,width=360/assets/1885/01JYRC3CE7X5WEJV4XERC8XY7G.jpg",
  "https://deview.tovtam.com/images/format=webp,quality=95,width=360/assets/1886/01JYRC3EHTZPKFX10N2V40Q582.jpg",
  "https://deview.tovtam.com/images/format=webp,quality=95,width=360/assets/1887/01JYRC3GS6XD3TF7CAVVG4NBYB.jpg",
  "https://deview.tovtam.com/images/format=webp,quality=95,width=360/assets/1888/01JYRC3J1GWGCRPWN9X20934E1.jpg",
  "https://deview.tovtam.com/images/format=webp,quality=95,width=360/assets/1889/01JYRC3K4FRXX7XC8A3ZPZSW77.jpg",
  "https://deview.tovtam.com/images/format=webp,quality=95,width=360/assets/1890/01JYRC3MVQ16B5Z0WK7RRP9DRR.jpg",
  "https://deview.tovtam.com/images/format=webp,quality=95,width=360/assets/1891/01JYRC3PCCSMFN11HHB3ZJB87T.jpg",
  "https://deview.tovtam.com/images/format=webp,quality=95,width=360/assets/1892/01JYRC3RCGWBJFFAEERAQNWN0Y.jpg",
  "https://deview.tovtam.com/images/format=webp,quality=95,width=360/assets/1893/01JYRC3TKCYCWGYCVGJWTQ9BVV.jpg",
  "https://deview.tovtam.com/images/format=webp,quality=95,width=360/assets/1894/01JYRC3W09REN6ZT9717GS1KT0.jpg",
];
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Galeria urls={images}>
        <ScrollView horizontal>
          {images.map((image, index) => (
            <Galeria.Image  index={index} key={image}>
              <Image
                key={index}
                source={{ uri: image }}
                style={{ width: 200, height: 200, marginRight: 10 }}
              />
            </Galeria.Image>
          ))}
        </ScrollView>
      </Galeria>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
