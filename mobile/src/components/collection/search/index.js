import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  Platform,
  SafeAreaView,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {fetchCards} from '../../../redux/slices/cards';
import {colors, normalize} from 'react-native-elements';

const deviceWidth = Dimensions.get('window').width;

function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.data}>
          <TextInput
            style={styles.input}
            onChangeText={text => {
              dispatch(fetchCards({search: text, page: 1}));
              setValue(text);
            }}
            value={value}
            placeholder="Search"
            placeholderTextColor={colors.grey5}
            autoCapitalize="none"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    backgroundColor: colors.white,
    height: normalize(60),
    justifyContent: 'center',
  },
  data: {
    flexDirection: 'row',
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    marginHorizontal: normalize(10),
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 5 : 0,
  },
  input: {
    marginLeft: normalize(10),
    marginRight: normalize(20),
    width: '100%',
    flex: 1,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: normalize(16),
    letterSpacing: -0.3,
    color: colors.black,
    paddingBottom: Platform.OS === 'ios' ? 0 : 5,
  },
});

export default Search;
