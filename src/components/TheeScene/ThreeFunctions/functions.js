import * as THREE from 'three'

export function createCargoArea(cargoArea) {
  let geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(geometry, material)
  cube.scale.x = Number(cargoArea.Xwidth)
  cube.scale.y = Number(cargoArea.Yheight)
  cube.scale.z = Number(cargoArea.Zdepth)
  return cube
}
