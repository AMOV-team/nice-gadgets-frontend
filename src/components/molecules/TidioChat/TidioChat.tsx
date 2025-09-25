import { useEffect } from 'react';
import { useBurgerMenu } from '@/hooks/useBurgerMenu.ts';

const TidioChat: React.FC = () => {
  const { isBurgerMenuActive } = useBurgerMenu();

  useEffect(() => {
    if (!document.getElementById('tidio-script')) {
      const script = document.createElement('script');
      script.src = '//code.tidio.co/cx2deikfi9ge0mebr9grjwe2v85xqlyd.js';
      script.async = true;
      script.id = 'tidio-script';
      document.body.appendChild(script);
    }

    const applyDisplay = () => {
      const root =
        document.getElementById('tidio-chat') ||
        document.getElementById('tidio-chat-root');
      if (root) {
        root.style.setProperty(
          'display',
          isBurgerMenuActive ? 'none' : 'block',
          'important',
        );
        root.style.setProperty('height', '70vh', 'important');
      }
    };

    // Apply immediately and observe mutations in case Tidio recreates the element
    applyDisplay();

    const observer = new MutationObserver(() => {
      applyDisplay();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [isBurgerMenuActive]);

  return null;
};

export default TidioChat;
