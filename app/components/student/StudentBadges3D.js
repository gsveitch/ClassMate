import Expo from 'expo';
import React from 'react';
import ExpoTHREE from 'expo-three';
import * as THREE from 'three';
import fontHelvetiker from 'three/examples/fonts/helvetiker_regular.typeface.json';

console.disableYellowBox = true;


export default class StudentBadges3D extends React.Component {
  constructor() {
    super();
    this.state = { text: '' };
    this._onGLContextCreate = this._onGLContextCreate.bind(this);
  }


  _onGLContextCreate = async (gl) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000,
    );
    const renderer = ExpoTHREE.createRenderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
    renderer.setClearColor('#ECA963');

    // let font = '';
    // const text = 'Hello!';
    // const loader = new THREE.FontLoader();
    // loader.load(fontHelvetiker, (response) => {
    //   font = response;
    // });

    // const geometryText = new THREE.TextGeometry(text, {
    //   font,
    //   size: 10,
    //   height: 10,
    //   curveSegments: 2,
    // });
    // const materialText = new THREE.MeshBasicMaterial({ color: 0xff0000, overdraw: 0.5 });
    // const textHello = new THREE.Mesh(geometryText, materialText);
    // textHello.position.x = 0;
    // textHello.position.y = 0;
    // textHello.position.z = 0;
    // const group = new THREE.Group();
    // group.add(textHello);
    // scene.add(group);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const materialClock = new THREE.MeshBasicMaterial({
      transparent: true,
      map: await ExpoTHREE.createTextureAsync({
        asset: Expo.Asset.fromModule(require('../../assets/clock.png')),
      }),
    });
    const materialCurious = new THREE.MeshBasicMaterial({
      transparent: true,
      map: await ExpoTHREE.createTextureAsync({
        asset: Expo.Asset.fromModule(require('../../assets/curious.png')),
      }),
    });
    const materialScience = new THREE.MeshBasicMaterial({
      transparent: true,
      map: await ExpoTHREE.createTextureAsync({
        asset: Expo.Asset.fromModule(require('../../assets/science.png')),
      }),
    });
    const materialABC = new THREE.MeshBasicMaterial({
      transparent: true,
      map: await ExpoTHREE.createTextureAsync({
        asset: Expo.Asset.fromModule(require('../../assets/abc.png')),
      }),
    });

    const cubesClock = Array(1)
      .fill()
      .map(() => {
        const cube = new THREE.Mesh(geometry, materialClock);
        scene.add(cube);
        cube.position.x = 1.5; // 3 - 6 * Math.random();
        cube.position.y = 2; // 3 - 6 * Math.random();
        cube.position.z = 0; // -5 * Math.random();
        return { cube };
      });

    const cubesCurious = Array(1)
      .fill()
      .map(() => {
        const cube = new THREE.Mesh(geometry, materialCurious);
        scene.add(cube);
        cube.position.x = -1.5; // 4 - 6 * Math.random();
        cube.position.y = 2; // 4 - 6 * Math.random();
        cube.position.z = 0; // -5 * Math.random();
        return { cube };
      });
    const cubesABC = Array(1)
      .fill()
      .map(() => {
        const cube = new THREE.Mesh(geometry, materialABC);
        scene.add(cube);
        cube.position.x = 1.5; // 2 - 6 * Math.random();
        cube.position.y = -1; // 2 - 6 * Math.random();
        cube.position.z = 0; // -2 * Math.random();
        return { cube };
      });
    const cubesScience = Array(1)
      .fill()
      .map(() => {
        const cube = new THREE.Mesh(geometry, materialScience);
        scene.add(cube);
        cube.position.x = -1.5; // - 6 * Math.random();
        cube.position.y = -1; // - 6 * Math.random();
        cube.position.z = 0; // - 2 * Math.random();
        return { cube };
      });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cubesABC.forEach(({ cube }) => {
        cube.rotation.x += 0.03;
        cube.rotation.y += 0.03;
      });
      cubesClock.forEach(({ cube }) => {
        cube.rotation.x += 0.03;
        cube.rotation.y += 0.03;
      });
      cubesCurious.forEach(({ cube }) => {
        cube.rotation.x += 0.03;
        cube.rotation.y += 0.03;
      });
      cubesScience.forEach(({ cube }) => {
        cube.rotation.x += 0.03;
        cube.rotation.y += 0.03;
      });
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    animate();
  };

  render() {
    return (
      <Expo.GLView
        style={{ flex: 1 }}
        onContextCreate={this._onGLContextCreate}
      />
    );
  }
}

