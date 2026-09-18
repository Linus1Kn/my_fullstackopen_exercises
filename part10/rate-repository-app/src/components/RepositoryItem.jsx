import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 4,
    gap: 10,
  },
  stat: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  statContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    gap: 15,
  },
  lang: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    marginLeft: 60,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  profileImg: {
    width: 50, 
    height: 50, 
    borderRadius: 4,
  },
});

const formatNumber = (number) => {
  if (number >= 1_000_000) {
    return `${(number / 1_000_000).toFixed(1)}M`
  }

  if (number >= 1_000) {
    return `${(number / 1_000).toFixed(1)}k`
  }

  return number.toString()
};

const Stat = ({ text, number }) => {
  return (
    <View style={styles.stat}>
      <Text fontWeight="bold" fontSize="subheading">{formatNumber(number)}</Text>
      <Text color="textSecondary">{text}</Text>
    </View>
  );
};

const RepositoryItem = ({ repo }) => {
  return (
    <View style={styles.container}>
      <View style={{display: "flex", flexDirection: "row", gap: 10}}>
        <Image
          source={{ uri: `${repo.ownerAvatarUrl}` }}
          style={styles.profileImg}
          resizeMode="cover"
        />
        <View>
          <Text fontSize="subheading" fontWeight="bold">{repo.fullName}</Text>
          <Text>{repo.description}</Text>
        </View>
      </View>

      <View style={styles.lang}>
        <Text color="textWhite" fontWeight="bold">{repo.language}</Text>
      </View>


      <View style={styles.statContainer}>
        <Stat text="Stars"   number={repo.stargazersCount} />
        <Stat text="Forks"   number={repo.forksCount} />
        <Stat text="Reviews" number={repo.reviewCount} />
        <Stat text="Rating"  number={repo.ratingAverage} />
      </View>
        
    </View>
  );
};

export default RepositoryItem;