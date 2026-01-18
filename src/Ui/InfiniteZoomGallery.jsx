import React, { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import * as THREE from "three";

const InfiniteZoomGallery = ({ isDarkMode }) => {
  // ✅ Pinned scroll refs (component stays fixed, only gallery moves)
  const virtualScrollRef = useRef(0); // pinned mode scroll value
  const baseOffsetRef = useRef(0); // unpin ke baad continuity
  const isPinnedRef = useRef(false); // pinned state
  const pinYRef = useRef(0); // scrollY at pin moment
  const PIN_DISTANCE = 2500; // ✅ kitna "gallery scroll" ke baad unpin ho (adjust)

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const contentRef = useRef(null);

  // Store refs for cleanup and animation
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const segmentsRef = useRef([]);
  const scrollPosRef = useRef(0);

  // --- CONFIGURATION ---
  const TUNNEL_WIDTH = 24;
  const TUNNEL_HEIGHT = 16;
  const SEGMENT_DEPTH = 6;
  const NUM_SEGMENTS = 14;

  // Grid Divisions
  const FLOOR_COLS = 6;
  const WALL_ROWS = 4;

  // Derived dimensions
  const COL_WIDTH = TUNNEL_WIDTH / FLOOR_COLS;
  const ROW_HEIGHT = TUNNEL_HEIGHT / WALL_ROWS;

  // Unsplash images
  const imageUrls = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1488161628813-99c974c76949?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1521119989659-a83eee488058?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&fit=crop",
  ];

  // Helper: Populate images in a segment
  const populateImages = (group, w, h, d) => {
    const textureLoader = new THREE.TextureLoader();
    const cellMargin = 0.4;

    const addImg = (pos, rot, wd, ht) => {
      const url = imageUrls[Math.floor(Math.random() * imageUrls.length)];
      const geom = new THREE.PlaneGeometry(wd - cellMargin, ht - cellMargin);
      const mat = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
      });

      textureLoader.load(url, (tex) => {
        tex.minFilter = THREE.LinearFilter;
        mat.map = tex;
        mat.needsUpdate = true;
        gsap.to(mat, { opacity: 0.85, duration: 1 });
      });

      const m = new THREE.Mesh(geom, mat);
      m.position.copy(pos);
      m.rotation.copy(rot);
      m.name = "slab_image";
      group.add(m);
    };

    // Floor
    let lastFloorIdx = -999;
    for (let i = 0; i < FLOOR_COLS; i++) {
      if (i > lastFloorIdx + 1) {
        if (Math.random() > 0.8) {
          addImg(
            new THREE.Vector3(-w + i * COL_WIDTH + COL_WIDTH / 2, -h, -d / 2),
            new THREE.Euler(-Math.PI / 2, 0, 0),
            COL_WIDTH,
            d
          );
          lastFloorIdx = i;
        }
      }
    }

    // Ceiling
    let lastCeilIdx = -999;
    for (let i = 0; i < FLOOR_COLS; i++) {
      if (i > lastCeilIdx + 1) {
        if (Math.random() > 0.88) {
          addImg(
            new THREE.Vector3(-w + i * COL_WIDTH + COL_WIDTH / 2, h, -d / 2),
            new THREE.Euler(Math.PI / 2, 0, 0),
            COL_WIDTH,
            d
          );
          lastCeilIdx = i;
        }
      }
    }

    // Left Wall
    let lastLeftIdx = -999;
    for (let i = 0; i < WALL_ROWS; i++) {
      if (i > lastLeftIdx + 1) {
        if (Math.random() > 0.8) {
          addImg(
            new THREE.Vector3(-w, -h + i * ROW_HEIGHT + ROW_HEIGHT / 2, -d / 2),
            new THREE.Euler(0, Math.PI / 2, 0),
            d,
            ROW_HEIGHT
          );
          lastLeftIdx = i;
        }
      }
    }

    // Right Wall
    let lastRightIdx = -999;
    for (let i = 0; i < WALL_ROWS; i++) {
      if (i > lastRightIdx + 1) {
        if (Math.random() > 0.8) {
          addImg(
            new THREE.Vector3(w, -h + i * ROW_HEIGHT + ROW_HEIGHT / 2, -d / 2),
            new THREE.Euler(0, -Math.PI / 2, 0),
            d,
            ROW_HEIGHT
          );
          lastRightIdx = i;
        }
      }
    }
  };

  // Helper: Create a segment with grid lines and filled cells
  const createSegment = (zPos) => {
    const group = new THREE.Group();
    group.position.z = zPos;

    const w = TUNNEL_WIDTH / 2;
    const h = TUNNEL_HEIGHT / 2;
    const d = SEGMENT_DEPTH;

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xb0b0b0,
      transparent: true,
      opacity: 0.5,
    });

    const lineGeo = new THREE.BufferGeometry();
    const vertices = [];

    // Floor & Ceiling (varying X)
    for (let i = 0; i <= FLOOR_COLS; i++) {
      const x = -w + i * COL_WIDTH;
      vertices.push(x, -h, 0, x, -h, -d);
      vertices.push(x, h, 0, x, h, -d);
    }

    // Walls (varying Y)
    for (let i = 1; i < WALL_ROWS; i++) {
      const y = -h + i * ROW_HEIGHT;
      vertices.push(-w, y, 0, -w, y, -d);
      vertices.push(w, y, 0, w, y, -d);
    }

    // Ring at z=0
    vertices.push(-w, -h, 0, w, -h, 0);
    vertices.push(-w, h, 0, w, h, 0);
    vertices.push(-w, -h, 0, -w, h, 0);
    vertices.push(w, -h, 0, w, h, 0);

    lineGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const lines = new THREE.LineSegments(lineGeo, lineMaterial);
    group.add(lines);

    populateImages(group, w, h, d);

    return group;
  };

  // --- INITIAL SETUP ---
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
    camera.position.set(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // ✅ PIN helpers
    const lockPage = () => {
      if (isPinnedRef.current) return;
      isPinnedRef.current = true;
      pinYRef.current = window.scrollY;

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      // start driving gallery
      scrollPosRef.current = baseOffsetRef.current + virtualScrollRef.current;
    };

    const unlockPage = () => {
      if (!isPinnedRef.current) return;
      isPinnedRef.current = false;

      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";

      // continuity: virtual added into base
      baseOffsetRef.current = baseOffsetRef.current + virtualScrollRef.current;
      virtualScrollRef.current = 0;

      scrollPosRef.current = baseOffsetRef.current + window.scrollY;
    };

    // ✅ Wheel/touch when pinned: page doesn't move, only gallery moves
    const onWheel = (e) => {
      if (!isPinnedRef.current) return;
      e.preventDefault();

      virtualScrollRef.current += e.deltaY;
      if (virtualScrollRef.current < 0) virtualScrollRef.current = 0;

      scrollPosRef.current = baseOffsetRef.current + virtualScrollRef.current;

      // ✅ unpin after enough gallery scroll
      if (virtualScrollRef.current >= PIN_DISTANCE) {
        unlockPage();
        window.scrollTo(0, pinYRef.current + 1);
      }
    };

    let touchStartY = 0;
    const onTouchStart = (e) => {
      if (!isPinnedRef.current) return;
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (!isPinnedRef.current) return;
      e.preventDefault();

      const y = e.touches[0].clientY;
      const delta = touchStartY - y;
      touchStartY = y;

      virtualScrollRef.current += delta;
      if (virtualScrollRef.current < 0) virtualScrollRef.current = 0;

      scrollPosRef.current = baseOffsetRef.current + virtualScrollRef.current;

      if (virtualScrollRef.current >= PIN_DISTANCE) {
        unlockPage();
        window.scrollTo(0, pinYRef.current + 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    // ✅ Pin when component reaches top of viewport (and is tall enough)
    const checkPin = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      // component top hits viewport top AND section still covers viewport
      const shouldPin = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (shouldPin && !isPinnedRef.current) lockPage();
      if (!shouldPin && isPinnedRef.current) unlockPage();

      // pinned mode: keep page fixed at pinY
      if (isPinnedRef.current) {
        window.scrollTo(0, pinYRef.current);
      }
    };

    window.addEventListener("scroll", checkPin);

    // Generate segments
    const segments = [];
    for (let i = 0; i < NUM_SEGMENTS; i++) {
      const z = -i * SEGMENT_DEPTH;
      const segment = createSegment(z);
      scene.add(segment);
      segments.push(segment);
    }
    segmentsRef.current = segments;

    // Animation Loop
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!cameraRef.current || !sceneRef.current || !rendererRef.current)
        return;

      const targetZ = -scrollPosRef.current * 0.05;
      const currentZ = cameraRef.current.position.z;
      cameraRef.current.position.z += (targetZ - currentZ) * 0.1;

      const tunnelLength = NUM_SEGMENTS * SEGMENT_DEPTH;
      const camZ = cameraRef.current.position.z;

      segmentsRef.current.forEach((segment) => {
        // forward recycle
        if (segment.position.z > camZ + SEGMENT_DEPTH) {
          let minZ = 0;
          segmentsRef.current.forEach(
            (s) => (minZ = Math.min(minZ, s.position.z))
          );
          segment.position.z = minZ - SEGMENT_DEPTH;

          const toRemove = [];
          segment.traverse((c) => {
            if (c.name === "slab_image") toRemove.push(c);
          });
          toRemove.forEach((c) => {
            segment.remove(c);
            if (c instanceof THREE.Mesh) {
              c.geometry.dispose();
              if (c.material && c.material.map) c.material.map.dispose();
              if (c.material) c.material.dispose();
            }
          });

          const w = TUNNEL_WIDTH / 2;
          const h = TUNNEL_HEIGHT / 2;
          const d = SEGMENT_DEPTH;
          populateImages(segment, w, h, d);
        }

        // backward recycle
        if (segment.position.z < camZ - tunnelLength - SEGMENT_DEPTH) {
          let maxZ = -999999;
          segmentsRef.current.forEach(
            (s) => (maxZ = Math.max(maxZ, s.position.z))
          );
          segment.position.z = maxZ + SEGMENT_DEPTH;

          const toRemove = [];
          segment.traverse((c) => {
            if (c.name === "slab_image") toRemove.push(c);
          });
          toRemove.forEach((c) => {
            segment.remove(c);
            if (c instanceof THREE.Mesh) {
              c.geometry.dispose();
              if (c.material && c.material.map) c.material.map.dispose();
              if (c.material) c.material.dispose();
            }
          });

          const w = TUNNEL_WIDTH / 2;
          const h = TUNNEL_HEIGHT / 2;
          const d = SEGMENT_DEPTH;
          populateImages(segment, w, h, d);
        }
      });

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animate();

    // ✅ Normal scroll sync (when not pinned)
    const onScroll = () => {
      if (!isPinnedRef.current) {
        scrollPosRef.current = baseOffsetRef.current + window.scrollY;
      }
    };
    window.addEventListener("scroll", onScroll);

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", checkPin);
      window.removeEventListener("resize", handleResize);

      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);

      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";

      cancelAnimationFrame(frameId);
      renderer.dispose();
    };
  }, []); // Run once on mount

  // --- THEME UPDATE EFFECT ---
  useEffect(() => {
    if (!sceneRef.current) return;

    const bgHex = isDarkMode ? 0x0a1a2e : 0x0a1a2e;
    const fogHex = isDarkMode ? 0x0a1a2e : 0x0a1a2e;

    const lineHex = isDarkMode ? 0x555555 : 0xb0b0b0;
    const lineOp = isDarkMode ? 0.35 : 0.5;

    sceneRef.current.background = new THREE.Color(bgHex);
    if (sceneRef.current.fog) {
      sceneRef.current.fog.color.setHex(fogHex);
    }

    segmentsRef.current.forEach((segment) => {
      segment.children.forEach((child) => {
        if (child instanceof THREE.LineSegments) {
          const mat = child.material;
          mat.color.setHex(lineHex);
          mat.opacity = lineOp;
          mat.needsUpdate = true;
        }
      });
    });
  }, [isDarkMode]);

  // Text Entrance Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[10000vh] transition-colors duration-700`}
      style={{
        background: 'linear-gradient(135deg, "#020617" 0%)'
      }}
    >
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      <div className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none"></div>
    </div>
  );
};

export default InfiniteZoomGallery;
