import { useEffect, useRef } from "react";

export default function AboutCharacter({ variant = "hero" }) {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    let disposed = false;
    let cleanup = () => {};

    const loadScene = () => import("three").then((THREE) => {
      if (disposed) return;

      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      } catch {
        return;
      }

      const coarse = matchMedia("(pointer: coarse)");
      const reduced = matchMedia("(prefers-reduced-motion: reduce)");
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, coarse.matches ? 1 : 1.5));
      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.setAttribute("aria-hidden", "true");
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
      camera.position.set(0, 0.1, 8.4);

      const person = new THREE.Group();
      person.position.y = variant === "culture" ? -0.1 : -0.2;
      scene.add(person);

      const skin = new THREE.MeshStandardMaterial({ color: 0xc99170, roughness: 0.62, metalness: 0.02 });
      const skinWarm = new THREE.MeshStandardMaterial({ color: 0xb97f61, roughness: 0.68 });
      const hair = new THREE.MeshStandardMaterial({ color: 0x17171d, roughness: 0.74 });
      const hairSoft = new THREE.MeshStandardMaterial({ color: 0x29252a, roughness: 0.82 });
      const shirt = new THREE.MeshStandardMaterial({ color: 0x171f2b, roughness: 0.5 });
      const shirtLight = new THREE.MeshStandardMaterial({ color: 0xaec7d1, roughness: 0.48 });
      const white = new THREE.MeshStandardMaterial({ color: 0xfffdfa, roughness: 0.32 });
      const iris = new THREE.MeshStandardMaterial({ color: 0x5d3b28, roughness: 0.28 });
      const pupil = new THREE.MeshBasicMaterial({ color: 0x08080a });

      // half body
      const torso = new THREE.Mesh(new THREE.CapsuleGeometry(1.18, 1.55, 10, 24), shirt);
      torso.position.set(0, -1.62, -0.08);
      torso.scale.set(1.18, 1, 0.72);
      person.add(torso);

      const shoulderLeft = new THREE.Mesh(new THREE.SphereGeometry(0.7, 22, 14), shirt);
      shoulderLeft.position.set(-1.18, -0.86, -0.02);
      shoulderLeft.scale.set(1.05, 0.66, 0.72);
      person.add(shoulderLeft);

      const shoulderRight = shoulderLeft.clone();
      shoulderRight.position.x = 1.18;
      person.add(shoulderRight);

      const shirtPanel = new THREE.Mesh(new THREE.CapsuleGeometry(0.48, 1.32, 8, 18), shirtLight);
      shirtPanel.position.set(0, -1.48, 0.73);
      shirtPanel.scale.set(0.7, 1, 0.12);
      person.add(shirtPanel);

      // neck
      const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.43, 0.5, 0.78, 28), skin);
      neck.position.set(0, -0.38, 0);
      neck.scale.z = 0.92;
      person.add(neck);

      const neckShadow = new THREE.Mesh(new THREE.TorusGeometry(0.43, 0.055, 8, 28), skinWarm);
      neckShadow.position.set(0, -0.7, 0.1);
      neckShadow.rotation.x = Math.PI / 2;
      neckShadow.scale.set(1, 0.72, 1);
      person.add(neckShadow);

      // head: shaped face with a jaw and cheek planes
      const head = new THREE.Mesh(new THREE.SphereGeometry(1.02, 36, 28), skin);
      head.position.set(0, 0.63, 0.02);
      head.scale.set(0.88, 1.12, 0.82);
      person.add(head);

      const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.86, 28, 20), skin);
      jaw.position.set(0, 0.18, 0.04);
      jaw.scale.set(0.76, 0.75, 0.74);
      person.add(jaw);

      const cheekGeometry = new THREE.SphereGeometry(0.3, 20, 12);
      [-0.62, 0.62].forEach((x) => {
        const cheek = new THREE.Mesh(cheekGeometry, skin);
        cheek.position.set(x, 0.48, 0.46);
        cheek.scale.set(1.1, 0.78, 0.42);
        person.add(cheek);
      });

      // ears
      [-1, 1].forEach((side) => {
        const ear = new THREE.Mesh(new THREE.SphereGeometry(0.19, 18, 12), skin);
        ear.position.set(side * 0.91, 0.58, 0);
        ear.scale.set(0.62, 1.08, 0.38);
        person.add(ear);
        const earInner = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.018, 6, 16), skinWarm);
        earInner.position.set(side * 0.98, 0.58, 0.08);
        earInner.rotation.y = side * Math.PI / 2;
        person.add(earInner);
      });

      // nose
      const noseBridge = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.34, 6, 12), skinWarm);
      noseBridge.position.set(0, 0.62, 0.87);
      noseBridge.scale.set(1, 1, 0.62);
      person.add(noseBridge);
      const noseTip = new THREE.Mesh(new THREE.SphereGeometry(0.17, 18, 12), skin);
      noseTip.position.set(0, 0.42, 0.93);
      noseTip.scale.set(1.05, 0.78, 0.66);
      person.add(noseTip);
      [-0.14, 0.14].forEach((x) => {
        const nostril = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), skinWarm);
        nostril.position.set(x, 0.39, 1.01);
        nostril.scale.set(1.3, 0.5, 0.28);
        person.add(nostril);
      });

      // detailed eyes
      const eyeParts = [];
      [-0.34, 0.34].forEach((x) => {
        const eyeRoot = new THREE.Group();
        eyeRoot.position.set(x, 0.79, 0.79);
        person.add(eyeRoot);

        const eyeball = new THREE.Mesh(new THREE.SphereGeometry(0.145, 22, 14), white);
        eyeball.scale.set(1.32, 0.72, 0.28);
        eyeRoot.add(eyeball);

        const irisMesh = new THREE.Mesh(new THREE.SphereGeometry(0.068, 18, 12), iris);
        irisMesh.position.z = 0.035;
        eyeRoot.add(irisMesh);

        const pupilMesh = new THREE.Mesh(new THREE.SphereGeometry(0.032, 14, 10), pupil);
        pupilMesh.position.z = 0.058;
        eyeRoot.add(pupilMesh);

        const upperLid = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.27, 5, 12), skinWarm);
        upperLid.position.set(0, 0.1, 0.02);
        upperLid.rotation.z = Math.PI / 2;
        upperLid.scale.set(1, 1, 0.25);
        eyeRoot.add(upperLid);

        const lashMaterial = new THREE.MeshBasicMaterial({ color: 0x121116 });
        for (let i = 0; i < 4; i++) {
          const lash = new THREE.Mesh(new THREE.CapsuleGeometry(0.006, 0.075, 3, 6), lashMaterial);
          lash.position.set(-0.11 + i * 0.074, 0.115 - Math.abs(i - 1.5) * 0.01, 0.03);
          lash.rotation.z = -0.7 + i * 0.46;
          eyeRoot.add(lash);
        }
        eyeParts.push({ eyeRoot, irisMesh, pupilMesh, upperLid });
      });

      const browGeometry = new THREE.CapsuleGeometry(0.035, 0.38, 6, 12);
      [-0.34, 0.34].forEach((x) => {
        const brow = new THREE.Mesh(browGeometry, hair);
        brow.position.set(x, 1.02, 0.83);
        brow.rotation.z = Math.PI / 2;
        brow.scale.set(1, 1, 0.25);
        person.add(brow);
      });

      // mouth with lips and teeth
      const lowerLip = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.055, 10, 30, Math.PI), skinWarm);
      lowerLip.position.set(0, 0.15, 0.91);
      lowerLip.rotation.z = Math.PI;
      lowerLip.scale.set(1.15, 0.7, 0.35);
      person.add(lowerLip);

      const upperLip = new THREE.Mesh(new THREE.TorusGeometry(0.21, 0.045, 8, 28, Math.PI), skinWarm);
      upperLip.position.set(0, 0.19, 0.92);
      upperLip.scale.set(1.12, 0.55, 0.35);
      person.add(upperLip);

      const mouth = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.28, 8, 18), new THREE.MeshStandardMaterial({ color: 0x7a3038, roughness: 0.58 }));
      mouth.position.set(0, 0.14, 0.94);
      mouth.rotation.z = Math.PI / 2;
      mouth.scale.set(1.05, 0.54, 0.34);
      person.add(mouth);

      const teeth = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.09, 0.035), white);
      teeth.position.set(0, 0.2, 1.02);
      teeth.scale.set(1.05, 0.7, 0.5);
      person.add(teeth);

      const tongue = new THREE.Mesh(new THREE.SphereGeometry(0.14, 18, 10), new THREE.MeshStandardMaterial({ color: 0xc76a73, roughness: 0.7 }));
      tongue.position.set(0, 0.08, 1.02);
      tongue.scale.set(1.15, 0.36, 0.24);
      person.add(tongue);

      // hair cap and detailed locks
      const hairCap = new THREE.Mesh(new THREE.SphereGeometry(1.01, 32, 20, 0, Math.PI * 2, 0, Math.PI * 0.58), hair);
      hairCap.position.set(0, 0.98, -0.05);
      hairCap.scale.set(0.93, 1.03, 0.91);
      person.add(hairCap);

      for (let i = 0; i < 19; i++) {
        const x = -0.82 + i * 0.092;
        const y = 1.34 - Math.abs(i - 9) * 0.018;
        const z = 0.18 + (i % 3) * 0.04;
        const lock = new THREE.Mesh(new THREE.CapsuleGeometry(0.095 + (i % 4) * 0.012, 0.28 + (i % 5) * 0.035, 6, 10), i % 3 ? hair : hairSoft);
        lock.position.set(x, y, z);
        lock.rotation.z = -0.36 + i * 0.04;
        lock.rotation.x = -0.16;
        lock.scale.z = 0.68;
        person.add(lock);
      }

      // side hair
      [-1, 1].forEach((side) => {
        for (let i = 0; i < 5; i++) {
          const sideLock = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.52 + i * 0.04, 6, 10), i % 2 ? hair : hairSoft);
          sideLock.position.set(side * (0.84 + i * 0.025), 0.82 - i * 0.16, 0.16);
          sideLock.rotation.z = side * (-0.18 - i * 0.08);
          sideLock.scale.z = 0.72;
          person.add(sideLock);
        }
      });

      // arms and separate hands/fingers
      [-1, 1].forEach((side) => {
        const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 1.42, 7, 14), shirt);
        arm.position.set(side * 1.26, -1.1, 0.02);
        arm.rotation.z = side * -0.18;
        person.add(arm);

        if (side === 1) {
          const palm = new THREE.Mesh(new THREE.SphereGeometry(0.28, 18, 12), skin);
          palm.position.set(1.55, 1.18, 0.26);
          palm.scale.set(0.78, 1.08, 0.42);
          person.add(palm);
          for (let i = 0; i < 4; i++) {
            const finger = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.34 - i * 0.025, 5, 8), skin);
            finger.position.set(1.36 + i * 0.13, 1.43 + (i === 0 ? -0.03 : i === 3 ? 0.02 : 0), 0.29);
            finger.rotation.z = -0.1 + i * 0.06;
            person.add(finger);
          }
          const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.052, 0.24, 5, 8), skin);
          thumb.position.set(1.27, 1.08, 0.34);
          thumb.rotation.z = 0.72;
          person.add(thumb);
        }
      });

      scene.add(new THREE.HemisphereLight(0xeafcff, 0x07101b, 2.3));
      const key = new THREE.DirectionalLight(0xffffff, 4.5);
      key.position.set(4, 5, 6);
      scene.add(key);
      const rim = new THREE.DirectionalLight(0x53c8ed, 5);
      rim.position.set(-4, 1, 3);
      scene.add(rim);

      let frame = 0;
      let visible = true;
      let last = 0;
      let time = 0;
      let pointerX = 0;
      let pointerY = 0;
      let blinkUntil = 0;
      let speakingUntil = 0;

      const render = () => {
        person.rotation.y += (pointerX * 0.16 - person.rotation.y) * 0.07;
        person.rotation.x += (-pointerY * 0.07 - person.rotation.x) * 0.07;
        person.position.y += ((variant === "culture" ? -0.1 : -0.2) + Math.sin(time * 1.7) * 0.018 - person.position.y) * 0.08;

        eyeParts.forEach(({ irisMesh, pupilMesh, upperLid }) => {
          const eyeX = pointerX * 0.045;
          const eyeY = pointerY * 0.025;
          irisMesh.position.x += (eyeX - irisMesh.position.x) * 0.12;
          pupilMesh.position.x += (eyeX - pupilMesh.position.x) * 0.12;
          irisMesh.position.y += (-eyeY - irisMesh.position.y) * 0.12;
          pupilMesh.position.y += (-eyeY - pupilMesh.position.y) * 0.12;

          const blinking = time < blinkUntil;
          upperLid.scale.y += ((blinking ? 2.8 : 1) - upperLid.scale.y) * 0.38;
          upperLid.position.y += ((blinking ? 0.02 : 0.1) - upperLid.position.y) * 0.38;
        });

        if (time > blinkUntil && Math.sin(time * 0.83) > 0.995) blinkUntil = time + 0.14;
        if (Math.sin(time * 0.4) > 0.985) speakingUntil = time + 0.9;
        const speaking = time < speakingUntil;
        mouth.scale.y += ((speaking ? 0.9 : 0.54) - mouth.scale.y) * 0.24;
        mouth.position.y += ((speaking ? 0.12 : 0.14) - mouth.position.y) * 0.2;
        teeth.scale.y = speaking ? 0.95 : 0.7;

        renderer.render(scene, camera);
      };

      const tick = (now) => {
        frame = 0;
        if (!visible || document.hidden) return;
        if (now - last >= 1000 / 30) {
          time += Math.min(now - last, 80) / 1000;
          last = now;
          render();
        }
        if (!reduced.matches) frame = requestAnimationFrame(tick);
      };

      const sync = () => {
        cancelAnimationFrame(frame);
        frame = 0;
        if (!visible || document.hidden) return;
        last = performance.now();
        render();
        if (!reduced.matches) frame = requestAnimationFrame(tick);
      };

      const resize = () => {
        const width = host.clientWidth;
        const height = host.clientHeight;
        if (!width || !height) return;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        render();
        host.dataset.ready = "true";
      };

      const pointer = (event) => {
        if (coarse.matches) return;
        const bounds = host.getBoundingClientRect();
        pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
        pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      };
      const leave = () => { pointerX = 0; pointerY = 0; };

      const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
      observer.observe(host);
      const sizeObserver = new ResizeObserver(resize);
      sizeObserver.observe(host);
      host.addEventListener("pointermove", pointer, { passive: true });
      host.addEventListener("pointerleave", leave);
      reduced.addEventListener("change", sync);
      resize();

      cleanup = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        sizeObserver.disconnect();
        host.removeEventListener("pointermove", pointer);
        host.removeEventListener("pointerleave", leave);
        reduced.removeEventListener("change", sync);
        scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
            else object.material.dispose();
          }
        });
        renderer.dispose();
        renderer.domElement.remove();
        delete host.dataset.ready;
      };
    }).catch(() => {});

    const preload = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      preload.disconnect();
      loadScene();
    }, { rootMargin: "350px" });
    preload.observe(host);

    return () => {
      disposed = true;
      preload.disconnect();
      cleanup();
    };
  }, [variant]);

  return (
    <div className={`about-character about-character--${variant}`} ref={hostRef} aria-hidden="true">
      <div className="about-character__fallback"><span>Hi!</span></div>
    </div>
  );
}
