import AOS from 'aos';

let initialized = false;

// AOS.init installs global scroll/resize listeners every time it is called.
// Route changes only need to refresh the elements, not add another listener set.
export default {
  ...AOS,
  init(options = {}) {
    if (!initialized) {
      AOS.init(options);
      initialized = true;
      return;
    }
    for (const key of ['duration', 'delay', 'easing']) {
      if (options[key] !== undefined) document.body.setAttribute(`data-aos-${key}`, options[key]);
    }
    AOS.refreshHard();
  },
};
