import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {BACKGROUND_COLOR} from '../../../assets/colors';
import {useSelector} from 'react-redux';
import {colors, normalize} from 'react-native-elements';
import CardView from '../common/cardView';
import Skeleton from '../common/skeleton';
import {map} from 'lodash';

const deviceWidth = Dimensions.get('window').width;

function Card() {
  const {object, isLoading} = useSelector(state => state.card);

  const InfoField = ({fieldName, info}) => (
    <View style={styles.infoField}>
      <Text style={styles.fieldName}>{fieldName}:</Text>
      <Text style={styles.fieldInfo}>{info}</Text>
    </View>
  );

  const infoMapper = {
    issuer: 'Account name',
    account: 'Account',
    account_name: 'Account name',
    amount: 'Amount',
    currency: 'Additional currency',
    cvv: 'CVV',
    description: 'Additional info',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isLoading && <Skeleton count={1} />}
      <CardView item={object} />
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Description</Text>
      </View>
      <View style={styles.info}>
        {map(infoMapper, (value, key) => {
          return <InfoField key={key} info={object[key]} fieldName={value} />;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: normalize(10),
    paddingBottom: normalize(30),
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
  },
  description: {
    marginTop: normalize(10),
    marginBottom: normalize(20),
  },
  descriptionText: {
    fontWeight: '600',
    fontSize: normalize(16),
    letterSpacing: 1.1,
  },
  info: {
    flex: 1,
    backgroundColor: colors.grey5,
    borderRadius: normalize(10),
    width: deviceWidth - normalize(40),
    minHeight: normalize(150),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(16),
    shadowColor: colors.black,
    shadowOpacity: normalize(0.2),
    shadowRadius: normalize(8),
  },
  infoField: {
    marginVertical: normalize(8),
  },
  fieldName: {
    fontWeight: '500',
    fontSize: normalize(14),
    marginBottom: normalize(3),
  },
  fieldInfo: {
    fontWeight: '400',
    fontSize: normalize(12),
  },
});

export default Card;
