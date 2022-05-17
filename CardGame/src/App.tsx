import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Card from './components/Card';
import {TCardPair} from './types/types';

const App = (): JSX.Element => {
  const [cardPairs, setCardPairs] = useState<TCardPair[]>([]);
  const [recentlyClicked, setRecentlyClicked] = useState<TCardPair[]>([]);

  useEffect(() => {
    for (let i = 1; i <= 6; i++) {
      const randomNumber = Math.floor(Math.random() * 90 + 10);

      setCardPairs(cardNumberPair => [
        ...cardNumberPair,
        {
          id: `${randomNumber}-key-1`,
          number: randomNumber,
          isOpen: false,
        },
        {
          id: `${randomNumber}-key-2`,
          number: randomNumber,
          isOpen: false,
        },
      ]);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cardPairs}
        renderItem={({item}) => (
          <Card
            cardPair={item}
            setCardPairs={setCardPairs}
            recentlyClicked={recentlyClicked}
            setRecentlyClicked={setRecentlyClicked}
          />
        )}
        keyExtractor={numberPair => numberPair.id}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
