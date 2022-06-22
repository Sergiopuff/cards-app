import React from 'react';
import {Button} from 'react-native-elements';
import {SvgXml} from 'react-native-svg';
import {StyleSheet} from 'react-native';
import {backArrow} from '../../../assets/svg/backArrow';

function HeaderBackButton({navigation}) {
  return (
    <Button
      containerStyle={styles.buttonLeft}
      type="clear"
      onPress={() => navigation.goBack()}
      icon={<SvgXml xml={backArrow} />}
    />
  );
}

const styles = StyleSheet.create({
  buttonLeft: {
    marginLeft: 10,
  },
});

export default HeaderBackButton;
