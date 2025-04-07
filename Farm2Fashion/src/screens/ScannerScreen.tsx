import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, ImageBackground } from 'react-native';
// import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Locker: undefined;
  Footprint: undefined;
  Home: undefined;
  Welcome: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ScannerScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  // const [camera, setCamera] = useState<RNCamera | null>(null);

  // const takePicture = async () => {
  //   if (camera) {
  //     try {
  //       const options = { quality: 0.5, base64: true };
  //       const data = await camera.takePictureAsync(options);
  //       console.log('Picture taken:', data);
  //       navigation.navigate('Footprint');
  //     } catch (error) {
  //       console.error('Error taking picture:', error);
  //     }
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <ImageBackground 
          source={require('../assets/images/scanPage.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleLine1}>Farm-2</Text>
              <Text style={styles.titleLine2}>Fashion</Text>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
      
      <View style={styles.bottomHalf}>
        <View style={styles.cameraContainer}>
          <View style={styles.cameraPlaceholder} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Footprint')}
          >
            <Text style={styles.buttonText}>SCAN TAG</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Locker')}
          >
            <Text style={styles.buttonText}>LOCKER</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.signOutButton}
            onPress={() => navigation.navigate('Welcome')}
          >
            <Text style={styles.signOutText}>SIGN OUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const cameraSize = Math.min(width * 0.6, height * 0.3);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    flex: 1,
    backgroundColor: '#000000',
  },
  bottomHalf: {
    flex: 1,
    backgroundColor: '#CCFFD0',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
  },
  titleContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  titleLine1: {
    fontFamily: 'Limelight',
    fontSize: 72,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  titleLine2: {
    fontFamily: 'Limelight',
    fontSize: 72,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  cameraContainer: {
    position: 'absolute',
    top: -cameraSize / 2,
    left: '50%',
    transform: [{ translateX: -cameraSize / 2 }],
    width: cameraSize,
    height: cameraSize,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    backgroundColor: '#000000',
  },
  cameraPlaceholder: {
    flex: 1,
    backgroundColor: '#000000',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  button: {
    backgroundColor: '#000000',
    height: 50,
    width: '100%',
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
  signOutButton: {
    marginTop: 20,
    marginBottom: 40,
    paddingVertical: 10,
  },
  signOutText: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Limelight',
  },
});

export default ScannerScreen; 