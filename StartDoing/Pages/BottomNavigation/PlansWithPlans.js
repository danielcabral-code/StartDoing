import React from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

const Plans = () => {
  function onPressButton() {
    alert('You Pressed Me!');
  }

  return (
    <>
      <ScrollView style={styles.background}>
        <View style={styles.bg2}>
          <TouchableHighlight
            style={styles.createBtn}
            onPress={onPressButton}
            underlayColor="#F27A2999">
            <Text style={styles.createText}>CREATE NEW PLAN</Text>
          </TouchableHighlight>

          <View style={styles.customizeTextView}>
            <Text style={styles.customizeText}>CUSTOMIZE PLANS</Text>
          </View>

          <TouchableHighlight
            style={styles.createBtn}
            onPress={onPressButton}
            underlayColor="#F27A2999">
            <Text style={styles.createText}>PLAN1</Text>
          </TouchableHighlight>

          <TouchableWithoutFeedback>
            <View style={styles.unactiveBtn}>
              <Text style={styles.unactiveText}>TRY CREATING MORE PLANS</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={styles.unactiveBtn}>
              <Text style={styles.unactiveText}>TRY CREATING MORE PLANS</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: '#26282B',
  },
  bg2: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 72,
  },
  createBtn: {
    marginTop: 38,
    width: '85%',
    height: 90.9,
    borderRadius: 10,
    backgroundColor: '#F27A29',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  createText: {
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    textShadowRadius: 6,
  },
  customizeTextView: {
    width: '85%',
  },
  customizeText: {
    color: 'white',
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    marginTop: 36,
    marginBottom: -4,
    alignSelf: 'flex-start',
  },
  unactiveBtn: {
    marginTop: 40,
    width: '85%',
    height: 90.9,
    borderRadius: 10,
    backgroundColor: '#F27A2940',
    justifyContent: 'center',
  },
  unactiveText: {
    alignSelf: 'center',
    color: '#FFFFFF40',
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
  },
});

export default Plans;