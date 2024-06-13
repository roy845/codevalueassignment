import { useState, ReactNode } from "react";

type TooltipProps = {
  children: ReactNode;
  content: string;
};

// If you're using children, you should do it like this:
type NewTooltipProps = React.PropsWithChildren<{
  content: string;
}>;

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
}): React.JSX.Element => {
  // Why not create a custom hook for this? useActivate or useToggle would be nice
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  // You should look on how to implement proper tooltips. It's more complicated from this.
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
