import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import {useState} from 'react'

const Map = ({eventData, center, zoom}) => {
    const [locationInfo, sestLocationInfo] = useState(null)

    const markers = eventData.map(e => {
        if (e.categories[0].id === 8) {
            return <LocationMarker lat={e.geometries[0].coordinates[1]} lng={e.geometries[0].coordinates[0]}
            onClick={() => sestLocationInfo({ id: e.id, title: e.title})} />
        }
    })
    return (
        <div style={{ height: '100vh', width: '100%' }}>
                
                <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
            
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
