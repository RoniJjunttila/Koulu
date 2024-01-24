// CustomMap.js
import React, { useEffect, useState } from "react";
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

//character+ - location{x,y}- name, _D: "2023-12-19T18:39:58.770Z"

const CustomMap = () => {
  const PUBG_API_KEY =
  "";
const PUBG_API_KEY_2 =
  "";
  const [playerData, setPlayerData] = useState(null);
  const [matchesArray, setMatchesArray] = useState([]);
  const [matchData, setMatchData] = useState(null);
  const [selectedGame, setSeletedGame] = useState(0);
  const [selectedPlayer, setSeletedPlayer] = useState(0);
  const playerNames = [
    "E1_Duderino",
    "MunatonEpaemies",
    "HlGHLANDER",
    "bold_moves_bob",
  ];
  const mapNames = {
    Baltic_Main: "Erangel",
    Chimera_Main: "Paramo",
    Desert_Main: "Miramar",
    DihorOtok_Main: "Vikendi",
    Erangel_Main: "Erangel",
    Heaven_Main: "Haven",
    Kiki_Main: "Deston",
    Range_Main: "Camp Jackal",
    Savage_Main: "Sanhok",
    Summerland_Main: "Karakin",
    Tiger_Main: "Taego",
    Neon_Main: "Rondo",
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const playerResponse = await fetch(
          `https://api.pubg.com/shards/steam/players?filter[playerNames]=${playerNames[selectedPlayer]}`,
          {
            headers: {
              Authorization: `Bearer ${PUBG_API_KEY}`,
              Accept: "application/vnd.api+json",
            },
          }
        );

        const matches = [];
        const playerData = await playerResponse.json();
        setPlayerData(playerData);

        for (let i = 0; i < 19; i++) {
          matches.push(playerData.data[0].relationships.matches.data[i].id);
        }
        setMatchesArray([...matches]);
      } catch (error) {
        console.error("Error fetching player data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedPlayer]);

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        setLoading(true);

        if (matchesArray.length > 0) {
          const matchId = matchesArray[selectedGame];

          const matchResponse = await fetch(
            `https://api.pubg.com/shards/steam/matches/${matchId}`,
            {
              headers: {
                Authorization: `Bearer ${PUBG_API_KEY_2}`,
                Accept: "application/vnd.api+json",
              },
            }
          );

          const matchData = await matchResponse.json();
          setMatchData(matchData);

          matchData.included = matchData.included.filter(
            (item) => item.type !== "roster"
          );

          const telemetryId = matchData.data.relationships.assets.data[0].id;
          const telemetryURL = matchData.included.find(
            (item) => item.type === "asset" && item.id === telemetryId
          ).attributes.URL;
          const telemetryResponse = await fetch(telemetryURL, {
            headers: {
              Accept: "application/vnd.api+json",
              "Accept-Encoding": "gzip",
            },
          });
//some((participant) => participant.type === "participant")
          const telemetryData = await telemetryResponse.json();
          const filteredCharacters = telemetryData
          .filter(item => item.character) // Filter items where character exists
          .map(item => item.character.location); // Map to extract the character object
        
        console.log(filteredCharacters);
          const searchValue = "LogMatchStart";
          const result = telemetryData.filter(
            (item) => item._T === searchValue
          );
        }
      } catch (error) {
        console.error("Error fetching match data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatchData();
  }, [matchesArray, selectedGame]);

  // Custom tile layer URL
  const customTileLayerUrl = 'https://i.imgur.com/QZazUv6.jpg';


  // Custom icon for the marker
  const customIcon = new L.Icon({
    iconUrl: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  const customIcon2 = new L.Icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Color-blue.JPG',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  // Horizontal boundaries for the map (X-axis)
  const imageAspectRatio = 2000 / 2000; // replace with the actual aspect ratio of your image

  // Calculate the width of the map based on the height and aspect ratio
  const mapWidth = 800 * imageAspectRatio;
  
  // Coordinates for the marker (assuming (0,0) is at the top-left corner)
  const markerPosition = [979632.25, 447521.59375];
  const markerPosition2 = [0, 0];
  //  979632.25 447521.59375
  // Set bounds for the ImageOverlay
  const mapBounds = [
    [0, 0],                      // Top-left corner (min Y, min X)
    [816000, 816000] // Bottom-right corner (max Y, max X)
  ];
  
  return (
    <MapContainer center={markerPosition} zoom={10} style={{ height: '800px', width: `100%` }}>
      {/* Add a single ImageOverlay with the custom image */}
      <ImageOverlay
        url={customTileLayerUrl}
        bounds={mapBounds} // Set the bounds for the image
      />
  
      {/* Add the first marker with the custom icon */}
      <Marker position={markerPosition} icon={customIcon}>
        <Popup>A custom marker with a custom icon!</Popup>
      </Marker>
  
      {/* Add the second marker at [0, 0] with the same custom icon */}
      <Marker position={markerPosition2} icon={customIcon2}>
        <Popup>Another marker at [0, 0]</Popup>
      </Marker>
    </MapContainer>
  );
};

export default CustomMap;
