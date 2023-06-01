import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onTimingChange }) => {
  return (
    <>
      <View style={styles.container}>
        <RoundedButton
          size={75}
          title="10"
          onPress={() => onTimingChange(10)}
        />
      </View>
      <View style={styles.container}>
        <RoundedButton
          size={75}
          title="15"
          onPress={() => onTimingChange(15)}
        />
      </View>
      <View style={styles.container}>
        <RoundedButton
          size={75}
          title="20"
          onPress={() => onTimingChange(20)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
