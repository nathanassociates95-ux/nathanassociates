"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

/**
 * LocationMap — self-hosted map section for the contact page.
 *
 * Why not a Google Maps embed: this location has no Google Business Profile,
 * so Google's embed cannot label the pin with a business name (a name query
 * is silently stripped to a coordinate pin) and its place-info panel fails
 * with "Place info couldn't load" in real browsers. No Maps API key is
 * configured for this project, so the Maps JavaScript API was not an option.
 *
 * This component renders OpenStreetMap tiles with Leaflet and drops a red
 * landmark marker whose visible label reads "Nathan Associates". The whole
 * marker (pin + label) is a real <a> element that opens the supplied Google
 * Maps short link, so it is keyboard-accessible and redirects to the map.
 */
const LocationMap = ({
  center,
  openUrl,
  label = "Nathan Associates",
  className = "",
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    let disposed = false;
    let map;

    (async () => {
      const L = (await import("leaflet")).default;
      if (disposed || !containerRef.current) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      map = L.map(containerRef.current, {
        center,
        zoom: 17,
        scrollWheelZoom: false,
        zoomAnimation: !reduced,
        fadeAnimation: !reduced,
        markerZoomAnimation: false,
        attributionControl: true,
      });

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Marker: a real anchor so clicking (or pressing Enter on) the red
      // landmark opens the supplied Google Maps destination.
      const pinIcon = L.divIcon({
        className: "nm-marker",
        iconSize: [44, 56],
        iconAnchor: [22, 56],
        html: `<a class="nm-marker-link" href="${openUrl}" target="_blank" rel="noopener noreferrer" aria-label="${label} - open in Google Maps" title="${label} - open in Google Maps">
            <span class="nm-marker-label">${label}</span>
            <span class="nm-marker-pin" aria-hidden="true"></span>
          </a>`,
      });

      L.marker(center, {
        icon: pinIcon,
        keyboard: false,
        title: `${label} - open in Google Maps`,
        alt: `${label} red location marker`,
        riseOnHover: true,
      }).addTo(map);

      // Keep the tile layer correctly sized after layout shifts.
      setTimeout(() => map && map.invalidateSize(), 250);
    })();

    return () => {
      disposed = true;
      if (map) {
        map.remove();
        map = null;
      }
    };
  }, [center, openUrl, label]);

  return (
    <div
      ref={containerRef}
      className={`nm-map ${className}`}
      role="region"
      aria-label={`${label} location map`}
    />
  );
};

export default LocationMap;
