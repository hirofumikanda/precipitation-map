import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import { Protocol } from "pmtiles";

export const useMap = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  // 地図の初期化
  useEffect(() => {
    const protocol = new Protocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);

    const map = new maplibregl.Map({
      container: mapContainerRef.current!,
      style: "styles/style.json",
      center: [139, 36],
      zoom: 3,
      minZoom: 3,
      pitch: 0,
      hash: true,
    });

    mapRef.current = map;

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    // 地図が読み込まれた後の処理
    map.on("load", async () => {
      // 地図の読み込み完了
      map.setProjection({type: 'globe'});
    });

    return () => {
      map.remove();
    };
  }, []);

  return { mapContainerRef, mapRef };
};
