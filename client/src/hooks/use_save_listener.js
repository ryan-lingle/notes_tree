import React, { useState, useEffect, useRef } from 'react';

function useSaveListener(callback, ) {
  const [pressed, setPressed] = useState([]);
  const cache = useRef();

  useEffect(() => {
    function addChar(char) {
      setPressed(pressed => { cache.current = pressed; return pressed.concat([char]) });
    };

    function removeChar(char) {
      setPressed(pressed => pressed.filter(l => l != char));
    };

    document.addEventListener('keydown', ({ key }) => addChar(key));
    document.addEventListener('keyup', ({ key }) => removeChar(key));
    document.addEventListener('keydown', function(e) {
      if (cache.current.includes("Meta") && e.key === "s") {
        e.preventDefault();
        callback();
      };
    });
  }, []);

};

export default useSaveListener;
