import { useState, ReactNode } from "react";

type TooltipProps = {
  children: ReactNode;
  content: string;
};

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
}): React.JSX.Element => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && (
        <div className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-xs rounded shadow-md">
          {content}
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
