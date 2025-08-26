'use client';
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

// replace with your own imports, see the usage snippet for details
import cardGLB from "../../../assets/Home/Guarantee/Lanyard/card.glb";
import lanyard from "../../../assets/Home/Guarantee/Lanyard/lanyard.webp";

import * as THREE from 'three';
import { useMediaQuery } from 'react-responsive';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({ position = [0, 0, 30], gravity = [0, -40, 0], fov = 20, transparent = true }) {
  return (
    <div className="absolute z-0 flex justify-center items-center transform scale-100 origin-center w-[150%] h-[110%] sm:w-[160%] sm:h-[120%] md:w-[170%] md:h-[130%] lg:w-[170%] lg:h-[130%] xl:w-[180%] xl:h-[140%] -top-[35%] sm:-top-[45%] md:-top-[50%] lg:-top-[50%] md:translate-x-[24%] lg:translate-x-[24%]">
      <Canvas
        camera={{ position: position, fov: fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}
function Band({ maxSpeed = 50, minSpeed = 0 }) {
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef();
  const rotatingGroup = useRef(); // Ref baru untuk sub-group card + clamp
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  const { nodes, materials } = useGLTF(cardGLB);
  const texture = useTexture(lanyard);
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);
  const [isSmall, setIsSmall] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 1024
  );
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.50, 0]]);
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);
  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Position awal, tidak di-adjust untuk compensate (agar selalu shifted seperti behavior "correct" post-navigation)
  const [groupPosition] = useState([0, 0.1, 0]);
  const [modelOffset, setModelOffset] = useState([0, 0, 0]); // Offset untuk center tanpa mutate
  useEffect(() => {
    if (nodes.card && nodes.card.geometry && nodes.clip && nodes.clip.geometry && nodes.clamp && nodes.clamp.geometry) {
      // Buat temporary group dengan respect original transforms dari nodes
      const tempGroup = new THREE.Group();
      const cardTemp = new THREE.Mesh(nodes.card.geometry, undefined);
      cardTemp.position.copy(nodes.card.position || new THREE.Vector3(0, 0, 0));
      cardTemp.rotation.copy(nodes.card.rotation || new THREE.Euler(0, 0, 0));
      cardTemp.scale.copy(nodes.card.scale || new THREE.Vector3(1, 1, 1));
      const clipTemp = new THREE.Mesh(nodes.clip.geometry, undefined);
      clipTemp.position.copy(nodes.clip.position || new THREE.Vector3(0, 0, 0));
      clipTemp.rotation.copy(nodes.clip.rotation || new THREE.Euler(0, 0, 0));
      clipTemp.scale.copy(nodes.clip.scale || new THREE.Vector3(1, 1, 1));
      const clampTemp = new THREE.Mesh(nodes.clamp.geometry, undefined);
      clampTemp.position.copy(nodes.clamp.position || new THREE.Vector3(0, 0, 0));
      clampTemp.rotation.copy(nodes.clamp.rotation || new THREE.Euler(0, 0, 0));
      clampTemp.scale.copy(nodes.clamp.scale || new THREE.Vector3(1, 1, 1));
      tempGroup.add(cardTemp, clipTemp, clampTemp);
      tempGroup.updateMatrixWorld();
      const boundingBox = new THREE.Box3().setFromObject(tempGroup, true);
      const center = new THREE.Vector3();
      boundingBox.getCenter(center);
      // Set offset untuk shift model ke center (tanpa mutate geometry atau +center ke groupPosition)
      setModelOffset([-center.x, -center.y, -center.z]);
      // Cleanup
      tempGroup.remove(cardTemp, clipTemp, clampTemp);
    }
  }, [nodes]);
  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
    // Rotasi kontinu pada sub-group card + clamp (clip tidak ikut kontinu extra)
    if (rotatingGroup.current) {
      rotatingGroup.current.rotation.y += delta * 0.8; // Kecepatan 1 radian/detik; ubah jika perlu
    }
  });
  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} position={[0, 0, 0]}/> {/* Jika collider tidak pas setelah center, tambah position={[offsetX, offsetY, offsetZ]} */}
          <group
            scale={2.25}
            position={groupPosition}
            onPointerOver={() => isMobile ? "" : hover(true)}
            onPointerOut={() => isMobile ? "" : hover(false)}
            onPointerUp={(e) => isMobile ? "" : (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={(e) => isMobile ? "" : (e.target.setPointerCapture(e.pointerId), drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))}>
            <group position={modelOffset}>
              <group ref={rotatingGroup} position={[-0.0095,0,0]}>
                <mesh 
                  geometry={nodes.card.geometry}
                  position={nodes.card.position ? [nodes.card.position.x, nodes.card.position.y, nodes.card.position.z] : [0, 0, 0]}
                  rotation={nodes.card.rotation ? [nodes.card.rotation.x, nodes.card.rotation.y, nodes.card.rotation.z] : [0, 0, 0]}
                  scale={nodes.card.scale ? [nodes.card.scale.x, nodes.card.scale.y, nodes.card.scale.z] : [1, 1, 1]}>
                  <meshPhysicalMaterial map={materials.base.map} map-anisotropy={16} clearcoat={1} clearcoatRoughness={0.15} roughness={0.9} metalness={0.8} />
                </mesh>
                <mesh 
                  geometry={nodes.clamp.geometry} 
                  material={materials.metal}
                  position={nodes.clamp.position ? [nodes.clamp.position.x, nodes.clamp.position.y, nodes.clamp.position.z] : [0, 0, 0]}
                  rotation={nodes.clamp.rotation ? [nodes.clamp.rotation.x, nodes.clamp.rotation.y, nodes.clamp.rotation.z] : [0, 0, 0]}
                  scale={nodes.clamp.scale ? [nodes.clamp.scale.x, nodes.clamp.scale.y, nodes.clamp.scale.z] : [1, 1, 1]} />
              </group>
              <mesh 
                geometry={nodes.clip.geometry} 
                material={materials.metal} 
                material-roughness={0.3}
                position={nodes.clip.position ? [nodes.clip.position.x, nodes.clip.position.y, nodes.clip.position.z] : [0, 0, 0]}
                rotation={nodes.clip.rotation ? [nodes.clip.rotation.x, nodes.clip.rotation.y, nodes.clip.rotation.z] : [0, 0, 0]}
                scale={nodes.clip.scale ? [nodes.clip.scale.x, nodes.clip.scale.y, nodes.clip.scale.z] : [1, 1, 1]} />
            </group>
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isSmall ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-2, 1]}
          lineWidth={0.5}
        />
      </mesh>
    </>
  );
}