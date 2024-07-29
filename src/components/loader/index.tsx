import React from 'react';
import {Heading, HStack, Spinner} from 'native-base';

import {themeColors} from '../../config/theme';

const Loader = ({color = themeColors.white}: {color?: string}) => {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" color={color} />
      <Heading color={color} fontSize="sm" fontWeight={'500'} mt={0.9}>
        Loading
      </Heading>
    </HStack>
  );
};

export default Loader;
