import React, {memo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, StyleSheet, View} from 'react-native';
import {BACKGROUND_COLOR} from '../../../assets/colors';
import {fetchCards} from '../../redux/slices/cards';
import parseInt from 'lodash/parseInt';
import get from 'lodash/get';
import Item from './item';
import Search from './search';
import Skeleton from '../common/skeleton';

function Collection({navigation}) {
  const dispatch = useDispatch();
  const {collection, isLoading, meta, params} = useSelector(
    state => state.cards,
  );

  const loadMore = info => {
    if (
      info.distanceFromEnd < 100 &&
      collection.length < parseInt(get(meta, 'total_count')) &&
      !isLoading
    ) {
      console.log('load more!');
      dispatch(
        fetchCards({
          page: parseInt(get(meta, 'page')) + 1,
          search: params.search,
        }),
      );
    }
  };

  return (
    <View style={styles.container}>
      <Search />
      <FlatList
        contentContainerStyle={styles.list}
        data={collection}
        onRefresh={() => dispatch(fetchCards({page: 1}))}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={(data, index) => `cards-${data._id}-${index}`}
        refreshing={isLoading}
        ListFooterComponent={() => isLoading && <Skeleton count={5} />}
        ListEmptyComponent={() => isLoading && <Skeleton count={10} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: 10,
  },
});

export default memo(Collection);
