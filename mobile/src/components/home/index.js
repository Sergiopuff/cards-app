import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, normalize} from 'react-native-elements';
import {BACKGROUND_COLOR, BUTTON_COLOR} from '../../../assets/colors';
import {fetchCards} from '../../redux/slices/cards';
import {useDispatch} from 'react-redux';

function Home({navigation}) {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('collection');
          dispatch(fetchCards());
        }}
        style={[styles.button, styles.shadow]}>
        <Text style={[styles.label]}>See collection</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: BUTTON_COLOR,
    borderRadius: 12,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(12),
    paddingVertical: normalize(20),
  },
  shadow: {
    shadowColor: colors.grey4,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  label: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 1.2,
    color: colors.black,
    textTransform: 'capitalize',
  },
});

export default Home;
