import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {TCardPair} from '../types/types';

type TProps = {
  cardPair: TCardPair;
  setCardPairs: React.Dispatch<React.SetStateAction<TCardPair[]>>;

  recentlyClicked: TCardPair[];
  setRecentlyClicked: React.Dispatch<React.SetStateAction<TCardPair[]>>;
};

const Card = ({
  cardPair,
  setCardPairs,
  recentlyClicked,
  setRecentlyClicked,
}: TProps) => {
  console.log('>>', cardPair);

  return (
    <TouchableWithoutFeedback
      style={styles.card}
      onPress={() => {
        setCardPairs(alreadySelectedPairs => [
          ...alreadySelectedPairs.map(p => {
            if (p.id === cardPair.id) {
              return {...p, isOpen: !cardPair.isOpen};
            }
            return p;
          }),
        ]);

        if (recentlyClicked.length === 2) {
          if (recentlyClicked[0].number === recentlyClicked[1].number) {
            setCardPairs(recentlyClicked);
          } else {
            setCardPairs(alreadySelectedPairs => [
              ...alreadySelectedPairs.map(p => {
                if (p.id === recentlyClicked[0].id) {
                  return {...p, isOpen: !p.isOpen};
                }

                if (p.id === recentlyClicked[1].id) {
                  return {...p, isOpen: !p.isOpen};
                }

                return p;
              }),
            ]);
          }
        } else {
          setRecentlyClicked(alreadySelected => [
            ...alreadySelected.map(p => {
              if (p.id === cardPair.id) {
                return {...p, isOpen: !cardPair.isOpen};
              }
              return p;
            }),
          ]);
        }
      }}>
      <View style={styles.card}>
        <Text style={styles.number}>
          {cardPair.isOpen ? cardPair.number : '?'}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  number: {
    fontSize: 32,
    textAlign: 'center',
  },
});

export default Card;
