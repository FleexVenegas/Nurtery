import "./Map.scss";
import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const Map = () => {
    return (
        <div className="Map">
            <MapContainer
                center={[20.6773351636339, -103.34703562737509]}
                zoom={20}
                scrollWheelZoom={false}
                className="container_map"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* <Marker position={[20.677150666375383, -103.34691598417177]}>
                    <Popup className="m_popup">
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            </MapContainer>
        </div>
    );
};

export default Map;
