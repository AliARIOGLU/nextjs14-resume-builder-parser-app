interface FlexboxSpacerProps {
  maxWidth: number;
  minWidth?: number;
  className?: string;
}

export const FlexboxSpacer: React.FC<FlexboxSpacerProps> = ({
  maxWidth,
  minWidth = 0,
  className = "",
}) => {
  return (
    <div
      className={`invisible shrink-[10000] grow ${className}`}
      style={{
        maxWidth: `${maxWidth}px`,
        minWidth: `${minWidth}px`,
      }}
    />
  );
};
