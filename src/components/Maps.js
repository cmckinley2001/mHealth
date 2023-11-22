import React, { useEffect } from 'react';
import './MapsStyles.css'; // Make sure to include your CSS file

const MapWithAutocomplete = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=ENTER-THE-KEY-HERE&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setTimeout(() => {
        initAutocomplete();
      }, 100);
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initAutocomplete = () => {
    const darkMapStyle = [
      {
        elementType: 'geometry',
        stylers: [{ color: '#242f3e' }],
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#242f3e' }],
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#746855' }],
      },
      // Add more styles as needed
    ];
    
  
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 39.1031, lng: -84.5120 },
      zoom: 13,
      mapTypeId: 'roadmap',
      styles: darkMapStyle, // Apply the dark theme styles
    });
  
    const input = document.createElement('input'); // Create the input element
  
    // Ensure that the search-box-container element is available before appending
const searchBoxContainer = document.getElementById('search-box-container');
  if (searchBoxContainer) {
    input.className = 'custom-search-box'; 

    searchBoxContainer.appendChild(input);
  
      map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(searchBoxContainer);
  
      const searchBox = new window.google.maps.places.SearchBox(input);
  
      map.addListener('bounds_changed', () => {
        searchBox.setBounds(map.getBounds());
      });
  
      let markers = [];
  
      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();
  
        if (places.length === 0) {
          return;
        }
  
        markers.forEach((marker) => {
          marker.setMap(null);
        });
        markers = [];
  
        const bounds = new window.google.maps.LatLngBounds();
  
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log('Returned place contains no geometry');
            return;
          }
  
          const icon = {
            url: place.icon,
            size: new window.google.maps.Size(71, 71),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(17, 34),
            scaledSize: new window.google.maps.Size(25, 25),
          };
  
          markers.push(
            new window.google.maps.Marker({
              map,
              icon,
              title: place.name,
              position: place.geometry.location,
            })
          );
  
          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      });
    }
  };

  return (
    <div>
      <div id="search-box-container">
      </div>
      <div id="map" style={{ height: '600px' }}></div>
    </div>
  );
};

export default MapWithAutocomplete;
