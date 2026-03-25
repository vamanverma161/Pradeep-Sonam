import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Petals() {
  const count = 30;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 10,
      y: Math.random() * 10,
      z: (Math.random() - 0.5) * 5,
      speed: 0.005 + Math.random() * 0.01,
      rotSpeed: 0.01 + Math.random() * 0.02,
      wobble: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    particles.forEach((p, i) => {
      p.y -= p.speed;
      if (p.y < -5) p.y = 8;

      dummy.position.set(
        p.x + Math.sin(time + p.wobble) * 0.5,
        p.y,
        p.z
      );
      dummy.rotation.set(
        time * p.rotSpeed,
        time * p.rotSpeed * 0.5,
        time * p.rotSpeed * 0.3
      );
      dummy.scale.setScalar(0.15);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <planeGeometry args={[1, 0.6, 1]} />
      <meshStandardMaterial
        color="#f5b5c8"
        transparent
        opacity={0.7}
        side={THREE.DoubleSide}
      />
    </instancedMesh>
  );
}

function FloatingRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    groupRef.current.rotation.y = time * 0.3;
    groupRef.current.position.y = Math.sin(time * 0.5) * 0.3;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <mesh position={[-0.3, 0, 0]} rotation={[Math.PI / 2, 0, 0.2]}>
        <torusGeometry args={[0.4, 0.06, 16, 32]} />
        <meshStandardMaterial color="#d4a94c" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.3, 0, 0]} rotation={[Math.PI / 2, 0, -0.2]}>
        <torusGeometry args={[0.4, 0.06, 16, 32]} />
        <meshStandardMaterial color="#d4a94c" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Particles() {
  const count = 50;
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#d4a94c" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

const Scene3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <Petals />
        <FloatingRings />
        <Particles />
      </Canvas>
    </div>
  );
};

export default Scene3D;
