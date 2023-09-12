import { useEffect, useState } from "react";

export const Card = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsVisible(true);
  };

  return (
    <div role="contentinfo">
      <h2>Card</h2>

      <button onClick={handleOpen}>open</button>

      {isVisible && (
        <main role="main">
          <p>Content</p>
        </main>
      )}
    </div>
  );
};
