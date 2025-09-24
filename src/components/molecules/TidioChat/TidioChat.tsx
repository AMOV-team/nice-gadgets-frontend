import { useEffect } from 'react';

const TidioChat: React.FC = () => {
  useEffect(() => {
    if (!document.getElementById('tidio-script')) {
      const script = document.createElement('script');
      script.src = '//code.tidio.co/cx2deikfi9ge0mebr9grjwe2v85xqlyd.js';
      script.async = true;
      script.id = 'tidio-script';
      document.body.appendChild(script);
    }
  }, []);

  return null;
};

export default TidioChat;
