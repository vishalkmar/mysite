import { useEffect, useRef } from 'react';

export default function Scene3D() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    let disposed = false;
    let cleanup = () => {};
    import('three').then(THREE => {
      if (disposed) return;
      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
      } catch { return; }
      const motion = matchMedia('(prefers-reduced-motion: reduce)');
      const coarse = matchMedia('(pointer: coarse)');
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, coarse.matches ? 1 : 1.5));
      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.setAttribute('aria-hidden', 'true');
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, 1, .1, 100);
      camera.position.z = 7.7;
      const assembly = new THREE.Group();
      scene.add(assembly);
      const core = new THREE.Mesh(
        new THREE.TorusKnotGeometry(1.05, .34, coarse.matches ? 100 : 160, 20, 2, 3),
        new THREE.MeshStandardMaterial({ color: 0x67caff, metalness: .72, roughness: .22 }),
      );
      core.rotation.set(.2, -.3, .15);
      assembly.add(core);
      const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x358bdf, transparent: true, opacity: .5 });
      for (let i = 0; i < 2; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(2.04 + i * .22, .007, 6, 100), ringMaterial);
        ring.rotation.set(1.1 + i * .8, .4 + i, .4);
        assembly.add(ring);
      }
      const satelliteMaterial = new THREE.MeshStandardMaterial({ color: 0xc7f5ff, metalness: .5, roughness: .18 });
      const satellite = new THREE.Mesh(new THREE.IcosahedronGeometry(.13, 2), satelliteMaterial);
      assembly.add(satellite);
      scene.add(new THREE.HemisphereLight(0xcceaff, 0x07101b, 2.4));
      const key = new THREE.DirectionalLight(0xffffff, 5);
      key.position.set(3, 4, 5); scene.add(key);
      const blue = new THREE.DirectionalLight(0x1689ff, 6);
      blue.position.set(-4, -1, 2); scene.add(blue);
      const rim = new THREE.DirectionalLight(0xa2ffff, 4);
      rim.position.set(1, -3, -2); scene.add(rim);
      let visible = false;
      let frame = 0;
      let last = 0;
      let time = 0;
      let x = 0;
      let y = 0;
      let progress = 0;
      let lost = false;
      const hero = host.closest('section');

      function render() {
        assembly.rotation.y += (x * .35 + progress * .7 - assembly.rotation.y) * .07;
        assembly.rotation.x += (y * .2 - assembly.rotation.x) * .07;
        core.rotation.y = time * .18;
        core.rotation.z = .15 + Math.sin(time * .25) * .15;
        satellite.position.set(Math.cos(time * .5) * 2.2, Math.sin(time * .5) * 1.1, Math.sin(time * .5) * 1.4);
        renderer.render(scene, camera);
      }
      function tick(now) {
        frame = 0;
        if (!visible || document.hidden || lost || motion.matches) return;
        if (now - last >= 1000 / 30) {
          time += Math.min(now - last, 80) / 1000;
          last = now;
          render();
        }
        frame = requestAnimationFrame(tick);
      }
      function sync() {
        cancelAnimationFrame(frame); frame = 0;
        if (!visible || document.hidden || lost) return;
        last = performance.now(); render();
        if (!motion.matches) frame = requestAnimationFrame(tick);
      }
      function resize() {
        const width = host.clientWidth;
        const height = host.clientHeight;
        if (!width || !height || lost) return;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        render();
        host.dataset.ready = 'true';
      }
      function pointer(event) {
        if (motion.matches || coarse.matches) return;
        const bounds = host.getBoundingClientRect();
        x = (event.clientX - bounds.left) / bounds.width - .5;
        y = (event.clientY - bounds.top) / bounds.height - .5;
      }
      function leave() { x = 0; y = 0; }
      function scroll() { progress = Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / innerHeight)); }
      function onLost(event) { event.preventDefault(); lost = true; delete host.dataset.ready; sync(); }
      const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
      observer.observe(host);
      const sizeObserver = new ResizeObserver(resize); sizeObserver.observe(host);
      host.addEventListener('pointermove', pointer, { passive: true });
      host.addEventListener('pointerleave', leave);
      window.addEventListener('scroll', scroll, { passive: true });
      document.addEventListener('visibilitychange', sync);
      motion.addEventListener('change', sync);
      renderer.domElement.addEventListener('webglcontextlost', onLost);
      resize();
      cleanup = () => {
        cancelAnimationFrame(frame); observer.disconnect(); sizeObserver.disconnect();
        host.removeEventListener('pointermove', pointer); host.removeEventListener('pointerleave', leave);
        window.removeEventListener('scroll', scroll); document.removeEventListener('visibilitychange', sync);
        motion.removeEventListener('change', sync); renderer.domElement.removeEventListener('webglcontextlost', onLost);
        const geometries = new Set(); const materials = new Set();
        scene.traverse(object => { if (object.geometry) geometries.add(object.geometry); if (object.material) materials.add(object.material); });
        geometries.forEach(geometry => geometry.dispose()); materials.forEach(material => material.dispose());
        renderer.dispose(); renderer.domElement.remove(); delete host.dataset.ready;
      };
    }).catch(() => { /* The CSS sculpture remains visible when WebGL is unavailable. */ });
    return () => { disposed = true; cleanup(); };
  }, []);

  return <div className="h2-scene" ref={hostRef} aria-hidden="true">
    <div className="h2-scene-fallback"><i /><i /><i /></div>
  </div>;
}
