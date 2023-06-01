import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/Sizes';
import { colors } from '../utils/Colors';
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();

  const [isStarted, setIsStarted] = React.useState(false);
  const [progress, setProgress] = React.useState(1);
  const [minutes, setMinutes] = React.useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setProgress(1);
    setIsStarted(false);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={styles.textsContainer}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={styles.progressBar}>
        <ProgressBar progress={progress} color={colors.progressBar} />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onTimingChange={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={!isStarted ? 'Start' : 'Pause'}
          onPress={() => setIsStarted(!isStarted)}
        />
      </View>
      <View style={styles.clearButton}>
        <RoundedButton title={'-'} size={50} onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.md,
  },
  timingWrapper: {
    flex: 0.15,
    flexDirection: 'row',
    paddingTop: spacing.xxl,
  },
  clearButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textsContainer: {
    paddingTop: spacing.lg,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
  },
  task: {
    textAlign: 'center',
    color: colors.white,
  },
  progressBar: {
    paddingTop: spacing.sm,
    paddingLeft: spacing.lg,
    paddingRight: spacing.lg,
  },
});
