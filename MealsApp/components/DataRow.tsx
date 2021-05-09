import React from 'react';
import { View, Text } from 'react-native';

type TProps = {
  title: string;
  data: string;
  isListItem?: boolean;
};

const DataRow = ({ title, data, isListItem }: TProps): JSX.Element => {
  return (
    <View
      style={{
        padding: 12,
        borderWidth: 1,
        marginTop: isListItem ? 2 : 12,
        marginBottom: isListItem ? 2 : 12,
        marginRight: 12,
        marginLeft: 12,
        borderColor: '#bdc3c7',
      }}
    >
      <Text>
        {title}: {data}
      </Text>
    </View>
  );
};

export default DataRow;
