import React from 'react';
import type { ZoomPanControls, ControlsPosition } from '../types';

const controlButtonStyle: React.CSSProperties = {
  width: 28,
  height: 28,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  fontSize: 14,
  color: '#374151',
  transition: 'background-color 0.15s ease',
  margin: 0,
  padding: 0,
};

const controlsContainerStyle: React.CSSProperties = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 4,
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  borderRadius: 8,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  zIndex: 10,
};

const controlsRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: 4,
};

const emptySlotStyle: React.CSSProperties = {
  width: 28,
  height: 28,
};

const getControlsPositionStyle = (position: ControlsPosition): React.CSSProperties => {
  switch (position) {
    case 'top-left':
      return { top: 10, left: 10 };
    case 'top-right':
      return { top: 10, right: 10 };
    case 'bottom-left':
      return { bottom: 10, left: 10 };
    case 'bottom-right':
    default:
      return { bottom: 10, right: 10 };
  }
};

interface DefaultControlsProps {
  controls: ZoomPanControls;
  position: ControlsPosition;
}

/**
 * Default zoom/pan controls component with grid layout
 */
const DefaultControls = ({ controls, position }: DefaultControlsProps) => {
  const { zoomIn, zoomOut, reset, pan } = controls;

  return (
    <div style={{ ...controlsContainerStyle, ...getControlsPositionStyle(position) }}>
      {/* Row 1: _, up, zoom+ */}
      <div style={controlsRowStyle}>
        <div style={emptySlotStyle} />
        <button type="button" style={controlButtonStyle} onClick={() => pan('up')} aria-label="Pan up">
          ↑
        </button>
        <button type="button" style={controlButtonStyle} onClick={zoomIn} aria-label="Zoom in">
          +
        </button>
      </div>

      {/* Row 2: left, reset, right */}
      <div style={controlsRowStyle}>
        <button type="button" style={controlButtonStyle} onClick={() => pan('left')} aria-label="Pan left">
          ←
        </button>
        <button type="button" style={controlButtonStyle} onClick={reset} aria-label="Reset">
          ⟲
        </button>
        <button type="button" style={controlButtonStyle} onClick={() => pan('right')} aria-label="Pan right">
          →
        </button>
      </div>

      {/* Row 3: _, down, zoom- */}
      <div style={controlsRowStyle}>
        <div style={emptySlotStyle} />
        <button type="button" style={controlButtonStyle} onClick={() => pan('down')} aria-label="Pan down">
          ↓
        </button>
        <button type="button" style={controlButtonStyle} onClick={zoomOut} aria-label="Zoom out">
          −
        </button>
      </div>
    </div>
  );
};

export default DefaultControls;
