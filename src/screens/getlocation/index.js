import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, PermissionsAndroid, Button} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {getDistance} from 'geolib';
import Icons from '../../component/Icons';
import styles from './styles';
import {icons} from '../../constants';
const MapScreen = ({navigation}) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [markers, setMarkers] = useState([
    {
      id: 1,
      latitude: 22.742973,
      longitude: 75.911882,
      title: 'Branch 1',
      description: 'Vijay Nagar',
    },
    {
      id: 2,
      latitude: 22.727378,
      longitude: 75.88991,
      title: 'Branch 2',
      description: 'Old Palasia',
    },
    {
      id: 3,
      latitude: 22.755499,
      longitude: 75.877025,
      title: 'Branch 3',
      description: 'MR 10',
    },
    {
      id: 4,
      latitude: 22.771956,
      longitude: 75.896794,
      title: 'Branch 4',
      description: 'Sch 114',
    },
    {
      id: 5,
      latitude: 22.723403,
      longitude: 75.870844,
      title: 'Branch 5',
      description: 'SGSITS',
    },
    // Add more markers as needed
  ]);
  const [nearestMarker, setNearestMarker] = useState(null);
  const [nearestMarkerDistance, setNearestMarkerDistance] = useState(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const fineLocationGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        const coarseLocationGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        );

        if (
          fineLocationGranted === PermissionsAndroid.RESULTS.GRANTED &&
          coarseLocationGranted === PermissionsAndroid.RESULTS.GRANTED
        ) {
          getCurrentLocation();
        } else {
          alert('Location permission denied. Please enable it in settings.');
        }
      } catch (error) {
        console.error('Error requesting location permission:', error);
      }
    };

    requestLocationPermission();
  }, []);

  // useEffect(() => {
  //   const requestLocationPermission = async () => {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       );

  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         getCurrentLocation();
  //       } else {
  //         alert('Location permission denied. Please enable it in settings.');
  //       }
  //     } catch (error) {
  //       console.error('Error requesting location permission:', error);
  //     }
  //   };

  //   requestLocationPermission();
  // }, []);

  useEffect(() => {
    if (currentLocation && markers.length > 0) {
      // Find the nearest marker
      const nearest = markers.reduce((nearestMarker, marker) => {
        const distance = getDistance(currentLocation, marker);
        if (!nearestMarker || distance < nearestMarker.distance) {
          return {marker, distance};
        }
        return nearestMarker;
      }, null);

      setNearestMarker(nearest.marker);
      setNearestMarkerDistance(nearest.distance);
    }
  }, [currentLocation, markers]);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentLocation({latitude, longitude});
      },
      error => {
        console.error('Error getting current location:', error);
        alert('Error getting current location. Please try again.');
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const handleback = () => {
    return navigation.navigate('Register', {branch: nearestMarker});
  };

  return (
    <View style={styles.container}>
      {currentLocation && (
        <MapView
          showsMyLocationButton={true}
          showsUserLocation={true}
          style={styles.map}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {markers.map(marker => (
            <Marker
              key={marker.id}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.title}
              description={marker.description}
            />
          ))}
          {currentLocation && (
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              title="Your Location"
              description="You are here!"
            />
          )}
        </MapView>
      )}
      <View style={styles.buttonContainer}>
        <Button title="Get Nearest Branch" onPress={handleback} />
        {nearestMarker && (
          <Text style={styles.nearestMarkerText}>
            Nearest Branch: {nearestMarker.description}
            {/* , Distance:{' '}
            {nearestMarkerDistance} meters */}
          </Text>
        )}
      </View>
    </View>
  );
};

export default MapScreen;
