import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Scanner: undefined;
  Footprint: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const { width } = Dimensions.get('window');
const boxSize = width - 120; // Smaller size with more margin

const AlternativesScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>{'←'}</Text>
        </TouchableOpacity>
        <ScrollView style={styles.scrollView}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleLine1}>Farm-2</Text>
            <Text style={styles.titleLine2}>Fashion</Text>
          </View>

          <Text style={styles.subtitle}>checkout these brands {'>>>'}</Text>

          <View style={styles.firstBoxContainer}>
            <View style={styles.box}>
              <View style={styles.boxContent}>
                {/* Box content will go here */}
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>LEARN MORE</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.boxContainer}>
            <View style={styles.box}>
              <View style={styles.boxContent}>
                {/* Box content will go here */}
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>LEARN MORE</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.boxContainer}>
            <View style={styles.box}>
              <View style={styles.boxContent}>
                {/* Box content will go here */}
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>LEARN MORE</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCFFD0',
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 40,
    paddingLeft: 20,
  },
  titleLine1: {
    fontFamily: 'Limelight',
    fontSize: 72,
    color: '#000000',
    fontWeight: 'bold',
  },
  titleLine2: {
    fontFamily: 'Limelight',
    fontSize: 72,
    color: '#000000',
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: 'Limelight',
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  firstBoxContainer: {
    marginHorizontal: 20,
    marginBottom: 60,
    marginTop: 40,
    alignItems: 'center',
  },
  boxContainer: {
    marginHorizontal: 20,
    marginBottom: 60,
    alignItems: 'center',
  },
  box: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#000000',
    borderRadius: 10,
    width: boxSize,
    height: boxSize,
    marginBottom: 20,
  },
  boxContent: {
    flex: 1,
    padding: 20,
  },
  button: {
    backgroundColor: '#000000',
    height: 50,
    width: boxSize,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Limelight',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 2,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 32,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default AlternativesScreen; 