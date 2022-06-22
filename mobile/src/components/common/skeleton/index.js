import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Dimensions} from 'react-native';
import {normalize} from 'react-native-elements';
import {map, times} from 'lodash';
import PropTypes from 'prop-types';

const deviceWidth = Dimensions.get('window').width;

function Skeleton({count}) {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item alignItems="center">
        {map(times(count), index => (
          <SkeletonPlaceholder.Item
            key={index}
            height={170}
            width={deviceWidth - normalize(40)}
            borderRadius={10}
            marginTop={normalize(10)}
          />
        ))}
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}

Skeleton.propTypes = {
  count: PropTypes.number,
};

Skeleton.defaultProps = {
  count: 1,
};

export default Skeleton;
