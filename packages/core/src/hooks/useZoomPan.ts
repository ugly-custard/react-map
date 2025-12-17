import React, { useState, useCallback, useEffect } from 'react';
import type { ZoomPanControls } from '../types';

interface UseZoomPanOptions {
  enableZoom: boolean;
  minZoom: number;
  maxZoom: number;
  zoomStep: number;
  panStep: number;
  onZoomPanChange?: (controls: ZoomPanControls) => void;
}

interface UseZoomPanReturn {
  wrapperStyle: React.CSSProperties;
  controls: ZoomPanControls;
}

/**
 * Hook that manages zoom and pan state for a map component
 */
const useZoomPan = ({
  enableZoom,
  minZoom,
  maxZoom,
  zoomStep,
  panStep,
  onZoomPanChange,
}: UseZoomPanOptions): UseZoomPanReturn => {
  const [zoom, setZoom] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);

  const zoomIn = useCallback(() => {
    setZoom((z) => Math.min(z + zoomStep, maxZoom));
  }, [zoomStep, maxZoom]);

  const zoomOut = useCallback(() => {
    setZoom((z) => Math.max(z - zoomStep, minZoom));
  }, [zoomStep, minZoom]);

  const reset = useCallback(() => {
    setZoom(1);
    setPanX(0);
    setPanY(0);
  }, []);

  const pan = useCallback(
    (direction: 'up' | 'down' | 'left' | 'right') => {
      const delta = panStep;
      switch (direction) {
        case 'up':
          setPanY((p) => p + delta);
          break;
        case 'down':
          setPanY((p) => p - delta);
          break;
        case 'left':
          setPanX((p) => p + delta);
          break;
        case 'right':
          setPanX((p) => p - delta);
          break;
      }
    },
    [panStep]
  );

  const setZoomValue = useCallback(
    (value: number) => setZoom(Math.min(Math.max(value, minZoom), maxZoom)),
    [minZoom, maxZoom]
  );

  const setPanValue = useCallback((x: number, y: number) => {
    setPanX(x);
    setPanY(y);
  }, []);

  const controls: ZoomPanControls = {
    zoom,
    panX,
    panY,
    zoomIn,
    zoomOut,
    reset,
    pan,
    setZoom: setZoomValue,
    setPan: setPanValue,
    minZoom,
    maxZoom,
  };

  useEffect(() => {
    if (onZoomPanChange && enableZoom) {
      onZoomPanChange(controls);
    }
  }, [
    zoom,
    panX,
    panY,
    zoomIn,
    zoomOut,
    reset,
    pan,
    setZoomValue,
    setPanValue,
    minZoom,
    maxZoom,
    onZoomPanChange,
    enableZoom,
  ]);

  const wrapperStyle: React.CSSProperties = enableZoom
    ? {
        transform: `scale(${zoom}) translate(${panX}px, ${panY}px)`,
        transformOrigin: 'center center',
        transition: 'transform 0.15s ease-out',
      }
    : {};

  return { wrapperStyle, controls };
};

export default useZoomPan;
