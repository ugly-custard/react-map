import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { drawPath, stateCode, constants } from './constants';
import useMousePosition from './hooks/mouseTrack';
import { useId } from 'react';

interface CityColorMap {
  [key: string]: string;
}

// Tooltip render prop types
export interface TooltipRenderProps {
  state: string | null;
  position: { x: number; y: number };
  isHovered: boolean;
  isSelected: boolean;
}

// Zoom/pan control position options
export type ControlsPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

// Control button styles
const controlButtonStyle: React.CSSProperties = {
  width: 28,
  height: 28,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  border: '1px solid #e2e8f0',
  borderRadius: 4,
  cursor: 'pointer',
  fontSize: 14,
  fontWeight: 500,
  color: '#374151',
  transition: 'background-color 0.15s ease',
};

const controlButtonHoverStyle: React.CSSProperties = {
  backgroundColor: '#f3f4f6',
};

const controlsContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 28px)',
  gridTemplateRows: 'repeat(3, 28px)',
  gap: 2,
  padding: 4,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: 6,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
};

const hintStyleBase = {
  position: 'fixed' as React.CSSProperties['position'],
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: 5,
  border: '1px solid #ccc',
  pointerEvents: 'none' as React.CSSProperties['pointerEvents'],
  zIndex: 1000,
};

type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'dash-dot' | 'dash-double-dot';

const getStrokeProperties = (borderStyle?: BorderStyle) => {
  switch (borderStyle) {
    case 'dashed':
      return { strokeDasharray: '8 4' };
    case 'dotted':
      return { strokeDasharray: '2 2' };
    case 'dash-dot':
      return { strokeDasharray: '8 4 2 4' };
    case 'dash-double-dot':
      return { strokeDasharray: '8 4 2 4 2 4' };
    default:
      return { strokeDasharray: 'none' };
  }
};

export interface IndiaProps {
  type: 'select-single' | 'select-multiple';
  size?: number;
  mapColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  hoverColor?: string;
  selectColor?: string;
  hints?: boolean;
  hintTextColor?: string;
  hintBackgroundColor?: string;
  hintPadding?: string;
  hintBorderRadius?: number;
  onSelect?: (state: string | null, selectedStates?: string[]) => void;
  cityColors?: CityColorMap;
  disableClick?: boolean;
  disableHover?: boolean;
  borderStyle?: BorderStyle;
  // New props for enhanced functionality
  onHover?: (stateId: string | null) => void;
  renderTooltip?: (props: TooltipRenderProps) => React.ReactNode;
  enableZoom?: boolean;
  showControls?: boolean;
  controlsPosition?: ControlsPosition;
  minZoom?: number;
  maxZoom?: number;
  zoomStep?: number;
  panStep?: number;
}

const India = ({
  type,
  size = constants.WIDTH,
  mapColor = constants.MAPCOLOR,
  strokeColor = constants.STROKE_COLOR,
  strokeWidth = constants.STROKE_WIDTH,
  hoverColor,
  selectColor,
  hints,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  onSelect,
  cityColors = {},
  disableClick = false,
  disableHover = false,
  borderStyle,
  // New props
  onHover,
  renderTooltip,
  enableZoom = false,
  showControls = false,
  controlsPosition = 'bottom-right',
  minZoom = 1,
  maxZoom = 3,
  zoomStep = 0.25,
  panStep = 20,
}: IndiaProps) => {
  if (type === 'select-single') {
    return (
      <IndiaSingle
        type="select-single"
        size={size}
        mapColor={mapColor}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        hoverColor={hoverColor}
        selectColor={selectColor}
        hints={hints}
        hintTextColor={hintTextColor}
        hintBackgroundColor={hintBackgroundColor}
        hintPadding={hintPadding}
        hintBorderRadius={hintBorderRadius}
        onSelect={onSelect}
        cityColors={cityColors}
        disableClick={disableClick}
        disableHover={disableHover}
        borderStyle={borderStyle}
        onHover={onHover}
        renderTooltip={renderTooltip}
        enableZoom={enableZoom}
        showControls={showControls}
        controlsPosition={controlsPosition}
        minZoom={minZoom}
        maxZoom={maxZoom}
        zoomStep={zoomStep}
        panStep={panStep}
      />
    );
  } else if (type === 'select-multiple') {
    return (
      <IndiaMultiple
        type="select-multiple"
        size={size}
        mapColor={mapColor}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        hoverColor={hoverColor}
        selectColor={selectColor}
        hints={hints}
        hintTextColor={hintTextColor}
        hintBackgroundColor={hintBackgroundColor}
        hintPadding={hintPadding}
        hintBorderRadius={hintBorderRadius}
        onSelect={onSelect}
        cityColors={cityColors}
        disableClick={disableClick}
        disableHover={disableHover}
        borderStyle={borderStyle}
        onHover={onHover}
        renderTooltip={renderTooltip}
        enableZoom={enableZoom}
        showControls={showControls}
        controlsPosition={controlsPosition}
        minZoom={minZoom}
        maxZoom={maxZoom}
        zoomStep={zoomStep}
        panStep={panStep}
      />
    );
  } else {
    return null;
  }
};

const IndiaSingle = ({
  size,
  mapColor,
  strokeColor,
  selectColor,
  strokeWidth,
  hoverColor,
  hints,
  onSelect,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  cityColors,
  disableClick,
  disableHover,
  borderStyle,
  // New props
  onHover,
  renderTooltip,
  enableZoom = false,
  showControls = false,
  controlsPosition = 'bottom-right',
  minZoom = 1,
  maxZoom = 3,
  zoomStep = 0.25,
  panStep = 20,
}: IndiaProps) => {
  const instanceId = useId().replace(/:/g, '');
  const { x, y } = useMousePosition();
  const [stateHovered, setStateHovered] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [viewBox, setViewBox] = useState<string>('0 0 100 100');
  const strokeProps = useMemo(() => getStrokeProperties(borderStyle), [borderStyle]);

  // Zoom/pan state
  const [zoom, setZoom] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);

  useEffect(() => {
    const svg = document.getElementById(`svg2-${instanceId}`) as SVGGraphicsElement | null;
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);

  const mapStyle = useMemo(
    () => ({
      width: size,
      stroke: strokeColor,
      strokeWidth,
      ...strokeProps,
    }),
    [size, strokeColor, strokeWidth, strokeProps]
  );

  const hintStyle = {
    ...hintStyleBase,
    backgroundColor: hintBackgroundColor || hintStyleBase.backgroundColor,
    padding: hintPadding || hintStyleBase.padding,
    borderRadius: hintBorderRadius || hintStyleBase.borderRadius,
    color: hintTextColor || 'black',
    top: y + 20,
    left: x + 20,
  };

  useEffect(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors![state] || (mapColor as string);
      }
    });
  }, [cityColors, mapColor, instanceId]);

  useEffect(() => {
    if (selectedState) {
      const path = document.getElementById(`${selectedState}-${instanceId}`);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    }
  }, [selectedState, selectColor, instanceId]);

  const handleMouseEnter = useCallback(
    (hoverStateId: string) => {
      const path = document.getElementById(`${hoverStateId}-${instanceId}`);
      setStateHovered(hoverStateId);
      onHover?.(hoverStateId);
      if (path && !disableHover) {
        path.style.fill =
          selectedState === hoverStateId ? selectColor || constants.SELECTED_COLOR : hoverColor || constants.HOVERCOLOR;
      }
    },
    [instanceId, disableHover, selectedState, selectColor, hoverColor, onHover]
  );

  const handleMouseLeave = useCallback(
    (hoverStateId: string) => {
      const path = document.getElementById(`${hoverStateId}-${instanceId}`);
      setStateHovered(null);
      onHover?.(null);
      if (path && !disableHover) {
        path.style.fill =
          selectedState === hoverStateId
            ? selectColor || constants.SELECTED_COLOR
            : cityColors![hoverStateId] || (mapColor as string);
      }
    },
    [instanceId, disableHover, selectedState, selectColor, cityColors, mapColor, onHover]
  );

  const handleClick = (stateCode: string) => {
    if (disableClick) return;

    if (selectedState === stateCode) {
      const path = document.getElementById(`${stateCode}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors![stateCode] || (mapColor as string);
      }
      setSelectedState(null);
      if (onSelect) {
        onSelect(null);
      }
    } else {
      if (selectedState) {
        const previousPath = document.getElementById(`${selectedState}-${instanceId}`);
        if (previousPath) {
          previousPath.style.fill = cityColors![selectedState] || (mapColor as string);
        }
      }
      setSelectedState(stateCode);
      if (onSelect) {
        onSelect(stateCode);
      }
    }
  };

  // Zoom/pan control handlers
  const handleZoomIn = useCallback(() => {
    setZoom((z) => Math.min(z + zoomStep, maxZoom));
  }, [zoomStep, maxZoom]);

  const handleZoomOut = useCallback(() => {
    setZoom((z) => Math.max(z - zoomStep, minZoom));
  }, [zoomStep, minZoom]);

  const handleZoomReset = useCallback(() => {
    setZoom(1);
    setPanX(0);
    setPanY(0);
  }, []);

  const handlePan = useCallback(
    (direction: 'up' | 'down' | 'left' | 'right') => {
      switch (direction) {
        case 'up':
          setPanY((p) => p + panStep);
          break;
        case 'down':
          setPanY((p) => p - panStep);
          break;
        case 'left':
          setPanX((p) => p + panStep);
          break;
        case 'right':
          setPanX((p) => p - panStep);
          break;
      }
    },
    [panStep]
  );

  // Control position styles
  const getControlsPositionStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = { position: 'absolute', zIndex: 10 };
    switch (controlsPosition) {
      case 'top-left':
        return { ...base, top: 8, left: 8 };
      case 'top-right':
        return { ...base, top: 8, right: 8 };
      case 'bottom-left':
        return { ...base, bottom: 8, left: 8 };
      case 'bottom-right':
      default:
        return { ...base, bottom: 8, right: 8 };
    }
  };

  // ControlButton component
  const ControlButton = ({
    onClick,
    children,
    disabled = false,
  }: {
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean;
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <button
        style={{
          ...controlButtonStyle,
          ...(isHovered && !disabled ? controlButtonHoverStyle : {}),
          ...(disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        disabled={disabled}
        type="button"
      >
        {children}
      </button>
    );
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    width: size,
  };

  const svgWrapperStyle: React.CSSProperties = enableZoom
    ? {
        transform: `scale(${zoom}) translate(${panX}px, ${panY}px)`,
        transformOrigin: 'center center',
        transition: 'transform 0.15s ease-out',
      }
    : {};

  return (
    <div style={containerStyle}>
      <div className="map" style={{ ...mapStyle, ...svgWrapperStyle }}>
        <svg version="1.1" id={`svg2-${instanceId}`} x="0px" y="0px" viewBox={viewBox}>
          {stateCode?.map((code, index) => (
            <path
              key={index}
              onClick={() => handleClick(code)}
              onMouseEnter={() => handleMouseEnter(code)}
              onMouseLeave={() => handleMouseLeave(code)}
              id={`${code}-${instanceId}`}
              d={drawPath[code as keyof typeof drawPath]}
              style={{
                fill: cityColors![code] || mapColor,
                cursor: disableClick ? 'default' : 'pointer',
                ...strokeProps,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Zoom/Pan Controls */}
      {showControls && enableZoom && (
        <div style={{ ...controlsContainerStyle, ...getControlsPositionStyle() }}>
          {/* Row 1 */}
          <div />
          <ControlButton onClick={() => handlePan('up')}>↑</ControlButton>
          <div />
          {/* Row 2 */}
          <ControlButton onClick={() => handlePan('left')}>←</ControlButton>
          <ControlButton onClick={handleZoomReset}>⟲</ControlButton>
          <ControlButton onClick={() => handlePan('right')}>→</ControlButton>
          {/* Row 3 */}
          <ControlButton onClick={handleZoomOut} disabled={zoom <= minZoom}>
            −
          </ControlButton>
          <ControlButton onClick={() => handlePan('down')}>↓</ControlButton>
          <ControlButton onClick={handleZoomIn} disabled={zoom >= maxZoom}>
            +
          </ControlButton>
        </div>
      )}

      {/* Built-in hints */}
      {hints && stateHovered && <div style={hintStyle}>{stateHovered}</div>}

      {/* Custom tooltip via render prop */}
      {renderTooltip?.({
        state: stateHovered,
        position: { x, y },
        isHovered: !!stateHovered,
        isSelected: !!selectedState && selectedState === stateHovered,
      })}
    </div>
  );
};

const IndiaMultiple = ({
  size,
  mapColor,
  strokeColor,
  selectColor,
  strokeWidth,
  hoverColor,
  hints,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  onSelect,
  cityColors,
  disableClick,
  disableHover,
  borderStyle,
  // New props
  onHover,
  renderTooltip,
  enableZoom = false,
  showControls = false,
  controlsPosition = 'bottom-right',
  minZoom = 1,
  maxZoom = 3,
  zoomStep = 0.25,
  panStep = 20,
}: IndiaProps) => {
  const instanceId = useId().replace(/:/g, '');
  const { x, y } = useMousePosition();
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [stateHovered, setStateHovered] = useState<string | null>(null);
  const [viewBox, setViewBox] = useState<string>('0 0 100 100');
  const strokeProps = useMemo(() => getStrokeProperties(borderStyle), [borderStyle]);

  // Zoom/pan state
  const [zoom, setZoom] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);

  useEffect(() => {
    const svg = document.getElementById(`svg2-${instanceId}`) as SVGGraphicsElement | null;
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);

  const mapStyle = useMemo(
    () => ({
      width: size,
      stroke: strokeColor,
      strokeWidth,
      ...strokeProps,
    }),
    [size, strokeColor, strokeWidth, strokeProps]
  );

  const hintStyle = {
    ...hintStyleBase,
    backgroundColor: hintBackgroundColor || hintStyleBase.backgroundColor,
    padding: hintPadding || hintStyleBase.padding,
    borderRadius: hintBorderRadius || hintStyleBase.borderRadius,
    color: hintTextColor || 'black',
    top: y + 20,
    left: x + 20,
  };

  useEffect(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors![state] || (mapColor as string);
      }
    });
  }, [cityColors, mapColor, instanceId]);

  useEffect(() => {
    selectedStates.forEach((selectedState: string) => {
      const path = document.getElementById(`${selectedState}-${instanceId}`);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    });
  }, [selectedStates, selectColor, instanceId]);

  const handleMouseEnter = useCallback(
    (hoverStateId: string) => {
      const path = document.getElementById(`${hoverStateId}-${instanceId}`);
      setStateHovered(hoverStateId);
      onHover?.(hoverStateId);
      if (path && !disableHover) {
        path.style.fill = selectedStates.includes(hoverStateId)
          ? selectColor || constants.SELECTED_COLOR
          : hoverColor || constants.HOVERCOLOR;
      }
    },
    [instanceId, disableHover, selectedStates, selectColor, hoverColor, onHover]
  );

  const handleMouseLeave = useCallback(
    (hoverStateId: string) => {
      const path = document.getElementById(`${hoverStateId}-${instanceId}`);
      setStateHovered(null);
      onHover?.(null);
      if (path && !disableHover) {
        path.style.fill = selectedStates.includes(hoverStateId)
          ? selectColor || constants.SELECTED_COLOR
          : cityColors![hoverStateId] || (mapColor as string);
      }
    },
    [instanceId, disableHover, selectedStates, selectColor, cityColors, mapColor, onHover]
  );

  const handleClick = (stateCode: string) => {
    if (disableClick) return;

    if (selectedStates.includes(stateCode)) {
      const updatedSelectedStates = selectedStates.filter((state: string) => state !== stateCode);
      const path = document.getElementById(`${stateCode}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors![stateCode] || (mapColor as string);
      }
      setSelectedStates(updatedSelectedStates);
      if (onSelect) {
        onSelect(stateCode, updatedSelectedStates);
      }
    } else {
      setSelectedStates((prevStates: string[]) => {
        const updatedStates = [...prevStates, stateCode];
        const path = document.getElementById(`${stateCode}-${instanceId}`);
        if (path) {
          path.style.fill = selectColor || constants.SELECTED_COLOR;
        }
        if (onSelect) {
          onSelect(stateCode, updatedStates);
        }
        return updatedStates;
      });
    }
  };

  // Zoom/pan control handlers
  const handleZoomIn = useCallback(() => {
    setZoom((z: number) => Math.min(z + zoomStep, maxZoom));
  }, [zoomStep, maxZoom]);

  const handleZoomOut = useCallback(() => {
    setZoom((z: number) => Math.max(z - zoomStep, minZoom));
  }, [zoomStep, minZoom]);

  const handleZoomReset = useCallback(() => {
    setZoom(1);
    setPanX(0);
    setPanY(0);
  }, []);

  const handlePan = useCallback(
    (direction: 'up' | 'down' | 'left' | 'right') => {
      switch (direction) {
        case 'up':
          setPanY((p: number) => p + panStep);
          break;
        case 'down':
          setPanY((p: number) => p - panStep);
          break;
        case 'left':
          setPanX((p: number) => p + panStep);
          break;
        case 'right':
          setPanX((p: number) => p - panStep);
          break;
      }
    },
    [panStep]
  );

  // Control position styles
  const getControlsPositionStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = { position: 'absolute', zIndex: 10 };
    switch (controlsPosition) {
      case 'top-left':
        return { ...base, top: 8, left: 8 };
      case 'top-right':
        return { ...base, top: 8, right: 8 };
      case 'bottom-left':
        return { ...base, bottom: 8, left: 8 };
      case 'bottom-right':
      default:
        return { ...base, bottom: 8, right: 8 };
    }
  };

  // ControlButton component
  const ControlButton = ({
    onClick,
    children,
    disabled = false,
  }: {
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean;
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <button
        style={{
          ...controlButtonStyle,
          ...(isHovered && !disabled ? controlButtonHoverStyle : {}),
          ...(disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        disabled={disabled}
        type="button"
      >
        {children}
      </button>
    );
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    width: size,
  };

  const svgWrapperStyle: React.CSSProperties = enableZoom
    ? {
        transform: `scale(${zoom}) translate(${panX}px, ${panY}px)`,
        transformOrigin: 'center center',
        transition: 'transform 0.15s ease-out',
      }
    : {};

  return (
    <div style={containerStyle}>
      <div className="map" style={{ ...mapStyle, ...svgWrapperStyle }}>
        <svg version="1.1" id={`svg2-${instanceId}`} x="0px" y="0px" viewBox={viewBox}>
          {stateCode?.map((code, index) => (
            <path
              key={index}
              onClick={() => handleClick(code)}
              onMouseEnter={() => handleMouseEnter(code)}
              onMouseLeave={() => handleMouseLeave(code)}
              id={`${code}-${instanceId}`}
              d={drawPath[code as keyof typeof drawPath]}
              style={{
                fill: cityColors![code] || mapColor,
                cursor: disableClick ? 'default' : 'pointer',
                ...strokeProps,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Zoom/Pan Controls */}
      {showControls && enableZoom && (
        <div style={{ ...controlsContainerStyle, ...getControlsPositionStyle() }}>
          {/* Row 1 */}
          <div />
          <ControlButton onClick={() => handlePan('up')}>↑</ControlButton>
          <div />
          {/* Row 2 */}
          <ControlButton onClick={() => handlePan('left')}>←</ControlButton>
          <ControlButton onClick={handleZoomReset}>⟲</ControlButton>
          <ControlButton onClick={() => handlePan('right')}>→</ControlButton>
          {/* Row 3 */}
          <ControlButton onClick={handleZoomOut} disabled={zoom <= minZoom}>
            −
          </ControlButton>
          <ControlButton onClick={() => handlePan('down')}>↓</ControlButton>
          <ControlButton onClick={handleZoomIn} disabled={zoom >= maxZoom}>
            +
          </ControlButton>
        </div>
      )}

      {/* Built-in hints */}
      {hints && stateHovered && <div style={hintStyle}>{stateHovered}</div>}

      {/* Custom tooltip via render prop */}
      {renderTooltip?.({
        state: stateHovered,
        position: { x, y },
        isHovered: !!stateHovered,
        isSelected: selectedStates.includes(stateHovered || ''),
      })}
    </div>
  );
};

export default India;
