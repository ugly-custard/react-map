import React from 'react';

const defaultTooltipStyle: React.CSSProperties = {
  position: 'fixed',
  backgroundColor: '#1f2937',
  color: 'white',
  padding: '6px 10px',
  borderRadius: 6,
  fontSize: 13,
  fontWeight: 500,
  pointerEvents: 'none',
  zIndex: 1000,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  whiteSpace: 'nowrap',
};

interface DefaultTooltipProps {
  state: string | null;
  position: { x: number; y: number };
}

/**
 * Default tooltip component that displays the hovered region name
 */
const DefaultTooltip = ({ state, position }: DefaultTooltipProps) => {
  if (!state) return null;

  return (
    <div
      style={{
        ...defaultTooltipStyle,
        left: position.x + 10,
        top: position.y + 10,
      }}
    >
      {state}
    </div>
  );
};

export default DefaultTooltip;
