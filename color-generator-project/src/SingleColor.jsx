import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ index, color }) => {
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${color.hex}`);
        toast.success("Copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy the color to clipboard");
      }
    } else {
      toast.error("Clipboard is not available now");
    }
  };

  return (
    <article
      onClick={saveToClipboard}
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${color.hex}` }}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">#{color.hex}</p>
    </article>
  );
};

export default SingleColor;
