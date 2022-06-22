import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {fetchCardById} from '../../../redux/slices/card';
import CardView from '../../common/cardView';

function Item({item}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('collection/card');
    dispatch(fetchCardById(item._id));
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <CardView item={item} />
    </TouchableOpacity>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
