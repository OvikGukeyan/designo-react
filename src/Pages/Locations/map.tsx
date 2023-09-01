import React from "react";
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

type SimpleMapType = {
    center: {
        lat: number
        lng: number
    }
}

const SimpleMap: React.FC<SimpleMapType> = ({center}) =>{
  const defaultProps = {
    center: center,
    zoom: 9
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '325px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;