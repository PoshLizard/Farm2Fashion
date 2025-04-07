import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Alternatives: undefined;
  Scanner: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const FootprintScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={styles.blackBackground} />
      <ImageBackground 
        source={require('../assets/images/footprint.png')}
        style={styles.backgroundImage}
        resizeMode="stretch"
      >
        <SafeAreaView style={styles.safeArea}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>FOOT</Text>
            <Text style={styles.subtitle}>PRINT</Text>
          </View>

          <View style={[styles.statsContainer, { top: height / 2 - 80 }]}>
            <View style={styles.statRow}>
              <Text style={styles.statText}>Water Usage</Text>
              <ImageBackground 
                source={require('../assets/images/water1.png')}
                style={styles.icon}
              />
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statText}>Pesticide Usage</Text>
              <ImageBackground 
                source={require('../assets/images/pesticide2.png')}
                style={styles.icon}
              />
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statText}>CO2 Emissions</Text>
              <ImageBackground 
                source={require('../assets/images/co3.png')}
                style={styles.icon}
              />
            </View>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Alternatives')}
          >
            <Text style={styles.buttonText}>ALTERNATIVES</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blackBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000000',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 2,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#000000',
    fontSize: 32,
    fontFamily: 'Limelight',
  },
  titleContainer: {
    position: 'absolute',
    top: 80,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontFamily: 'Limelight',
    fontSize: 72,
    color: '#000000',
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: 'Limelight',
    fontSize: 72,
    color: '#000000',
    fontWeight: 'bold',
  },
  statsContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    zIndex: 1,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  statText: {
    fontFamily: 'Limelight',
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  icon: {
    width: 60,
    height: 60,
  },
  button: {
    position: 'absolute',
    bottom: 140,
    left: 20,
    right: 20,
    backgroundColor: '#B3FFB6',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Limelight',
    fontWeight: 'bold',
  },
});

export default FootprintScreen; 