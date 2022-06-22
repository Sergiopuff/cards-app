import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {join, split, upperCase} from 'lodash';
import {colors, normalize} from 'react-native-elements';
import moment from 'moment';
import PropTypes from 'prop-types';

const deviceWidth = Dimensions.get('window').width;

function CardView({item}) {
  return (
    <View style={[styles.container, {backgroundColor: item.color}]}>
      <View style={styles.topContent}>
        <Text style={styles.issuer}>{item.issuer}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.number}>
          {join(split(item.card_number, '-'), ' ')}
        </Text>
      </View>
      <Text style={styles.name}>{upperCase(item.full_name)}</Text>
      <Text style={styles.date}>{moment(item.expires).format('MM/YY')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: normalize(10),
    width: deviceWidth - normalize(40),
    height: normalize(170),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(8),
    marginHorizontal: normalize(10),
    marginVertical: normalize(10),
    shadowColor: colors.black,
    shadowOpacity: normalize(0.2),
    shadowRadius: normalize(8),
  },
  topContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: normalize(7),
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  issuer: {
    color: 'rgba(70, 57, 0, 1)',
    fontWeight: '500',
  },
  number: {
    paddingVertical: normalize(10),
    fontWeight: '700',
    fontSize: normalize(15),
  },
  name: {
    fontWeight: '500',
    fontSize: normalize(14),
    paddingBottom: normalize(6),
  },
  date: {
    fontWeight: '400',
    fontSize: normalize(10),
  },
});

CardView.propTypes = {
  item: PropTypes.shape({
    color: PropTypes.string,
    issuer: PropTypes.string,
    card_number: PropTypes.string,
    full_name: PropTypes.string,
    expires: PropTypes.string,
  }),
};

CardView.defaultProps = {
  item: {
    color: '',
    issuer: '',
    card_number: '',
    full_name: '',
    expires: '',
  },
};

export default CardView;
