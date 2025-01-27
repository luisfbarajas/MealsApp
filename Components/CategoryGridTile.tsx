import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color }: { title: string; color: string }) {
  return (
    <View style={{ ...styles.gridItem, backgroundColor: color }}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => 
          [styles.buttons, pressed ? styles.buttonsPressed : null]
        }
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    backgroundColor: "white",
    shadowOpacity: 0.26,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
  },
  buttons: {
    flex: 1,
  },
  buttonsPressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
