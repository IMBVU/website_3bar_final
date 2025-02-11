export const playLoadingSound = () => {
    const audio = new Audio('src/components/Videos/whoosh-vortex-243128.mp3');
    audio.volume = 0.5; // Reduce volume to 30%
    
    // Only play if user has interacted with the page
    if (document.documentElement.hasAttribute('data-user-interacted')) {
      audio.play().catch(() => {
        // Silently handle autoplay restrictions
      });
    }
  };
  
  export const setUserInteracted = () => {
    document.documentElement.setAttribute('data-user-interacted', 'true');
  };