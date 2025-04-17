import * as THREE from 'three'
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls'

//Initialization scene
export function createScene() {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf0ecf3)
  return scene
}

//Initialization camera
export function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  camera.position.z = 5
  return camera
}

//Initialization light
export function createLight() {
  const light = new THREE.AmbientLight(0xffffbb, 0x080820, 1)
  light.position.set(30, 30, 30).normalize()
  return light
}
