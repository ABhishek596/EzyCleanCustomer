import React, { useRef, useState, useEffect } from 'react';
import {
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Icons from '../../component/Icons';
import styles from './styles';
import { icons } from '../../constants';
import { PermissionsAndroid } from 'react-native';
const Location = ({ navigation, route }) => {
  const mapRef = useRef(null);

  const [coordinates, setCoordinates] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });



  // ...

useEffect(() => {
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location to provide a better experience.',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permission granted, now get the current position
        Geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCoordinates({
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
    
            // Center the map on the user's location
            mapRef.current.animateToRegion({
              latitude,
              longitude,
              latitudeDelta: 0.0006,
              longitudeDelta: 0.0023,
            });
          },
          (error) => {
            console.error(error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  requestLocationPermission();

  // Subscribe to location updates (optional)
  const watchId = Geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      setCoordinates({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    },
    (error) => {
      console.error(error);
    },
    { enableHighAccuracy: true, distanceFilter: 10 } // Assuming 10 meters, adjust as needed
  );

  return () => {
    // Clear the watch when the component is unmounted
    Geolocation.clearWatch(watchId);
  };
}, []);

// ...


  const recenterToUserLocation = () => {
    mapRef.current.animateToRegion({
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      latitudeDelta: 0.0006,
      longitudeDelta: 0.0023,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          zoomTapEnabled={true}
          zoomEnabled={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.0006,
            longitudeDelta: 0.0023,
          }}>
          <Marker
            coordinate={coordinates}
            title={'User is Here'}
            description={'This is user location.'}
          />
        </MapView>
        <TouchableOpacity
          onPress={recenterToUserLocation}
          activeOpacity={0.7}
          style={styles.locateBtn}>
          <Image source={icons.locateme} style={styles.locateme} />
          <Text style={styles.locateTxt}>LOCATE USER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Location;
