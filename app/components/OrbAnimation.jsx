"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function OrbAnimation() {
  const mountRef = useRef(null);

  useEffect(() => {
    let width = mountRef.current.clientWidth;
    let height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 1, 1000);
    camera.position.z = 150;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(35, 64, 64);
    const material = new THREE.MeshNormalMaterial({
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.004;
      sphere.rotation.y += 0.005;
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full"></div>;
}
