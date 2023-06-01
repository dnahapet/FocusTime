import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { fontSizes, spacing } from '../utils/Sizes';
import { colors } from '../utils/Colors';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={styles.emptyTitle}>We haven't focused on anything yet!</Text>
    );

  const renderItem = ({ item }) => <Text style={styles.item}> - {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
  emptyTitle: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    padding: spacing.md,
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
  },
});
