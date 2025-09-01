import * as THREE from 'three'

import { create_conteiner_picture_from_cargo_area_cuboid } from './cargoAreaImageConteiner'
import { create_RGB_axes_helper_with_symbols } from './cargoAreaRGBHelper'

export function cargo_area_adding(
  cargoAreaProp,
  cargo_area_group,
  group_of_cargo_area_attribute,
  group_of_cargo_area_floor,
  camera,
  controls,
  cameraState
) {
  cargo_area_group.clear()
  group_of_cargo_area_floor.clear()
  group_of_cargo_area_attribute.clear()

  let x = Number(cargoAreaProp[0].Xwidth)
  let y = Number(cargoAreaProp[0].Yheight)
  let z = Number(cargoAreaProp[0].Zdepth)

  //Create/adding cargo area to scene.
  //
  const area = new THREE.Box3()
  area.setFromCenterAndSize(
    new THREE.Vector3(x / 2, y / 2, z / 2),
    new THREE.Vector3(x, y, z)
  )
  const cargo_area = new THREE.Box3Helper(area, 0xdf0707)
  cargo_area_group.add(cargo_area)

  //Create/adding transparent yellow floor for reading mouse moving position
  let boxGeometry = new THREE.BoxGeometry(x, 0, z)
  let cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
  let cargo_area_floor = new THREE.Mesh(boxGeometry, cubeMaterial)
  cargo_area_floor.position.x = x / 2
  cargo_area_floor.position.z = z / 2
  cargo_area_floor.userData.isFloor = true //this use for cargo jumping
  group_of_cargo_area_floor.add(cargo_area_floor)

  //Creating RGB helper and picture of container.
  let cube = {
    width_X: x,
    height_Y: y,
    depth_Z: z,
  }

  create_conteiner_picture_from_cargo_area_cuboid(
    cube,
    group_of_cargo_area_attribute
  )
  create_RGB_axes_helper_with_symbols(x, y, z, group_of_cargo_area_attribute)

  //Camera look at control target
  if (!cameraState) {
    camera.position.set(x * 1.4, y * 1.4, z)
  }
  controls.target.set(x / 2, 0, z / 2)
  return cargo_area
}
