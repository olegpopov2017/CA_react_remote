import * as THREE from 'three'
// import { draggable_cargo, backup_draggable_cargo } from '../ThreeScene'
export let createDraggableCargoPlaceholder = () => {
  let placeholder = new THREE.Object3D() // Просто пустой Object3D
  placeholder.name = '__placeholder__'
  placeholder.userData.isPlaceholder = true
  return placeholder
}
export function isPlaceholder(object) {
  return object?.userData?.isPlaceholder === true
}

export function startTime(event, time) {
  time = new Date()
}

export function endTime(
  event,
  endTime,
  timeDiff,
  start_time,
  controls,
  cargo_group,
  clickMouse,
  canvasBounds,
  raycaster,
  camera,
  scene,
  draggable_cargo,
  backup_draggable_cargo,
  cargos,
  setCargos
) {
  endTime = null
  timeDiff = null

  endTime = new Date()
  timeDiff = endTime - start_time
  if (timeDiff < 200) {
    catch_draggable(
      controls,
      cargo_group,
      clickMouse,
      canvasBounds,
      raycaster,
      camera,
      scene,
      draggable_cargo,
      backup_draggable_cargo,
      cargos,
      setCargos
    )
  }
}

export function readMouseMove(event, renderer, moveMouse) {
  const canvas = renderer.domElement
  const rect = canvas.getBoundingClientRect()

  moveMouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  moveMouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
}

//Realtime catching object after mouse clicking on canvas and save values in variable "draggable".Use in raycaster dragging objects
function catch_draggable(
  controls,
  cargo_group,
  clickMouse,
  canvasBounds,
  raycaster,
  camera,
  scene,
  draggable_cargo,
  backup_draggable_cargo,
  cargos,
  setCargos
) {
  if (!isPlaceholder(draggable_cargo.current)) {
    controls.enabled = false
    if (
      check_collision_of_draggable_cargo_and_other_cargos(
        draggable_cargo,
        backup_draggable_cargo,
        cargo_group,
        cargos,
        setCargos
      )
    ) {
      refreshCargosInReact(draggable_cargo, cargos, setCargos)
    }

    draggable_cargo.current.material.opacity = 1
    draggable_cargo.current.material.transparent = false
    draggable_cargo.current.children[0].material.color.set('black')

    draggable_cargo.current.removeFromParent() //Need for jumping cargos after mouse moving  and intersect mouse with other object
    cargo_group.add(draggable_cargo.current) //Need for jumping cargos after mouse moving  and intersect mouse with other object

    draggable_cargo.current = createDraggableCargoPlaceholder()
    backup_draggable_cargo.current = createDraggableCargoPlaceholder()

    if (isPlaceholder(draggable_cargo.current)) {
      //If we will picking cargo for dragging
      controls.enabled = true
      return
    }
  }

  //Founding ClickMouse position and set this parameters to variable "raycaster".Use in raycaster dragging object
  clickMouse.x =
    ((event.clientX - canvasBounds.left) /
      (canvasBounds.right - canvasBounds.left)) *
      2 -
    1
  clickMouse.y =
    -(
      (event.clientY - canvasBounds.top) /
      (canvasBounds.bottom - canvasBounds.top)
    ) *
      2 +
    1

  //Create array "found" from intersection raycast and cargos. Set value from first element of array to variable "draggable".Replace draggable from "cargo_group" to scene.
  raycaster.setFromCamera(clickMouse, camera)

  if (
    event.clientX > canvasBounds.left &&
    event.clientX < canvasBounds.right &&
    event.clientY < canvasBounds.bottom &&
    event.clientY > canvasBounds.top
  ) {
    //Condition for pick objects when mouse clc only on canvas.
    let found = raycaster.intersectObjects(cargo_group.children, false)

    if (found.length > 0 && found[0].object.userData.isFloor == false) {
      draggable_cargo.current = found[0].object
      backup_draggable_cargo.current = found[0].object.clone()

      draggable_cargo.current.userData.intersecteble = false
      draggable_cargo.current.userData.isPlaceholder = false

      draggable_cargo.current.removeFromParent() //Need for jumping cargos after mouse moving  and intersect mouse with other object

      draggable_cargo.current.material.opacity = 0.2
      draggable_cargo.current.material.transparent = true
      draggable_cargo.current.children[0].material.color.set('GREEN')

      scene.add(draggable_cargo.current) //Need for jumping cargos after mouse moving  and intersect mouse with other object
    }
  }
}

//Create function for check collision after user dragging cargo.If collision is detected, cargo comeback to start position.
function check_collision_of_draggable_cargo_and_other_cargos(
  draggable_cargo,
  backup_draggable_cargo,
  cargo_group,
  setCargos
) {
  const box1 = new THREE.Box3().setFromObject(draggable_cargo.current) //Create box1 type of "box3" becose "box3" have metod "intersectsBox" for detect collisions.
  box1.min.x = box1.min.x + 0.01 //Need for correct cheching intersection bettween 2 near cargos
  box1.min.y = box1.min.y + 0.01 //Need for correct cheching intersection bettween 2 near cargos
  box1.min.z = box1.min.z + 0.01 //Need for correct cheching intersection bettween 2 near cargos

  box1.max.x = box1.max.x - 0.01 //Need for correct cheching intersection bettween 2 near cargos
  box1.max.y = box1.max.y - 0.01 //Need for correct cheching intersection bettween 2 near cargos
  box1.max.z = box1.max.z - 0.01 //Need for correct cheching intersection bettween 2 near cargos

  if (cargo_group.children.length > 0) {
    for (let i = 0; i < cargo_group.children.length; i++) {
      let box2 = new THREE.Box3().setFromObject(cargo_group.children[i])
      if (box1.intersectsBox(box2)) {
        draggable_cargo.current.position.x =
          backup_draggable_cargo.current.position.x //Need for backup cargo position to start when collision is exist
        draggable_cargo.current.position.y =
          backup_draggable_cargo.current.position.y //Need for backup cargo position to start when collision is exist
        draggable_cargo.current.position.z =
          backup_draggable_cargo.current.position.z //Need for backup cargo position to start when collision is exist
        return false
      } else {
        return true
      }
    }
  }
}
function refreshCargosInReact(draggable_cargo, cargos, setCargos) {
  let uuid = draggable_cargo.current.uuid
  let x =
    draggable_cargo.current.position.x -
    draggable_cargo.current.geometry.parameters.width / 2
  let y =
    draggable_cargo.current.position.y -
    draggable_cargo.current.geometry.parameters.height / 2
  let z =
    draggable_cargo.current.position.z -
    draggable_cargo.current.geometry.parameters.depth / 2
  let xPos = parseFloat(x.toFixed(2))
  let yPos = parseFloat(y.toFixed(2))
  let zPos = parseFloat(z.toFixed(2))
  // Создаём новый массив с обновлёнными координатами
  let newCargos = cargos.map((cargo) => {
    if (cargo.uuid === uuid) {
      return { ...cargo, Xposition: xPos, Yposition: yPos, Zposition: zPos }
    }
    return cargo // Возвращаем неизменённые объекты, которые не соответствуют uuid
  })

  // Обновляем состояние
  setCargos(newCargos)
}

// { ...cargo.position, x: x, y: y, z: z }
