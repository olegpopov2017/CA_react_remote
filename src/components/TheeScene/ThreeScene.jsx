import './ThreeScene.css'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import {
  endTime,
  readMouseMove,
  createDraggableCargoPlaceholder,
  isPlaceholder,
} from './ThreeFunctionsJS/dragObjectsFunctions'
import {
  createSceneAndLight,
  createAndAddingGroups,
  createCamera,
  createRenderer,
  createControls,
  clearScene,
} from './ThreeFunctionsJS/sceneInitialization'
import { cargo_area_adding } from './ThreeFunctionsJS/cargoAreaFunctions'
import { createCargos } from './ThreeFunctionsJS/cargoFuctions'

// export let draggable_cargo = createDraggableCargoPlaceholder()
// export let backup_draggable_cargo = createDraggableCargoPlaceholder()

const ThreeScene = ({ cargos, setCargos, cargoArea, setCargoArea }) => {
  const mountRef = useRef(null) // Ссылка на контейнер для сцены
  let draggable_cargo = useRef('') //ref on count for drag cargo.
  let backup_draggable_cargo = useRef('') //ref on count for drag cargo.

  useEffect(() => {
    //Scene initialization

    let scene = createSceneAndLight()
    let camera = createCamera()
    let renderer = createRenderer()
    let controls = createControls(camera, renderer)
    //Adding groups to scene
    let [
      cargo_area_group,
      cargo_group,
      group_of_cargo_area_floor,
      group_of_cargo_area_attribute,
    ] = createAndAddingGroups()
    scene.add(cargo_area_group)
    scene.add(cargo_group)
    scene.add(group_of_cargo_area_floor)
    scene.add(group_of_cargo_area_attribute)
    if (mountRef.current) {
      mountRef.current.innerHTML = ''
      mountRef.current.appendChild(renderer.domElement)
    }

    // createAndAddingGroups(scene)

    //////////// Raycaster mouse moving cargos and Check the collisions of draggable cargo and other cargos. If collision is detected,cargo come back to start position.

    let raycaster = new THREE.Raycaster() // Create once for dragging cargos
    let moveMouse = new THREE.Vector2() // Create once for dragging cargo according mouse position
    let clickMouse = new THREE.Vector2() // create once
    draggable_cargo.current = createDraggableCargoPlaceholder()
    backup_draggable_cargo.current = createDraggableCargoPlaceholder()
    let canvasBounds = renderer.getContext().canvas.getBoundingClientRect() //Using for only checking mouse coordinstes in canvas.

    //Find delay bettwen mousedown and mouse up. If delay < 200 mlsec, calling function "catch draggable".
    let start_time = new Date()
    let end_time = new Date()
    let time_diff = new Date()

    let onMouseMove = (event) => readMouseMove(event, renderer, moveMouse)
    let onMouseDown = (event) => (start_time = new Date())

    let onMouseUp = (event) =>
      endTime(
        event,
        end_time,
        time_diff,
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
      )

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    //Create function drag object. If mouse catch draggable cargo,create array of floors for draggable,which consist of all other cargos and cargo area floor.
    //Draggable cargo moving only upperfaces of this array objects (face index = 4 or 5)
    function dragObject() {
      raycaster.setFromCamera(moveMouse, camera)
      // console.log('3', draggable_cargo)
      if (!isPlaceholder(draggable_cargo.current)) {
        // console.log('qqqqq', isPlaceholder(draggable_cargo))
        let array_of_floors_for_draggable = [
          ...group_of_cargo_area_floor.children,
          ...cargo_group.children,
        ]

        const cargos_on_ray = raycaster.intersectObjects(
          array_of_floors_for_draggable,
          false
        )

        if (cargos_on_ray.length > 0) {
          let found = cargos_on_ray[0]
          // testfunc()
          // updateTable(draggable_cargo)
          // console.log(found)
          //Condition for cargo moving only upper faces of cargo (upper faces consist of two triangles with numbers 4 and 5).
          if (found.faceIndex == 4 || found.faceIndex == 5) {
            if (
              found.point.x <=
              Number(draggable_cargo.current.geometry.parameters.width) / 2
            ) {
              //MIN X axis limitation draggable object according ti cargo area
              draggable_cargo.current.position.x =
                Number(draggable_cargo.current.geometry.parameters.width) / 2
            } else if (
              found.point.x +
                Number(draggable_cargo.current.geometry.parameters.width) / 2 >=
              cargo_area_group.children[0].scale.x * 2
            ) {
              //MAX X axis limitation draggable object according ti cargo area
              draggable_cargo.current.position.x =
                cargo_area_group.children[0].scale.x * 2 -
                Number(draggable_cargo.current.geometry.parameters.width) / 2
            } else {
              draggable_cargo.current.position.x = found.point.x
            }

            if (
              found.point.z <=
              Number(draggable_cargo.current.geometry.parameters.depth) / 2
            ) {
              //MIN Z axis limitation draggable object according ti cargo area
              draggable_cargo.current.position.z =
                Number(draggable_cargo.current.geometry.parameters.depth) / 2
            } else if (
              found.point.z +
                Number(draggable_cargo.current.geometry.parameters.depth) / 2 >=
              cargo_area_group.children[0].scale.z * 2
            ) {
              //MAX Z axis limitation draggable object according ti cargo area
              draggable_cargo.current.position.z =
                cargo_area_group.children[0].scale.z * 2 -
                Number(draggable_cargo.current.geometry.parameters.depth) / 2
            } else {
              draggable_cargo.current.position.z = found.point.z
            }
            // console.log('qqqqq!!!', isPlaceholder(draggable_cargo))
            draggable_cargo.current.position.y =
              found.point.y +
              Number(draggable_cargo.current.geometry.parameters.height) / 2 //Set Y position of dragable object.
          }
        }
      }
      // console.log('qqqqq', isPlaceholder(draggable_cargo))
    }

    //Create cargo area
    if (cargoArea) {
      cargo_area_adding(
        cargoArea,
        cargo_area_group,
        group_of_cargo_area_attribute,
        group_of_cargo_area_floor,
        camera,
        controls
      )
      // console.log('create cargo area')
    }
    if (cargos.length > 0) {
      createCargos(cargos, cargo_group)
      // console.log('create cargos')
    }

    //Create function to animation with request animation frame 60 fps
    let animationFrameId //Need to clear resources
    function animate() {
      // 1. Обновление контролов (например, OrbitControls)
      controls.update()

      // 2. Логика перемещения объектов (если есть)
      dragObject()

      // 3. Рендеринг сцены
      renderer.render(scene, camera)

      // 4. Запрос следующего кадра (в самом конце!)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()
    // Очистка ресурсов при размонтировании компонента
    return () => {
      if (renderer) {
        renderer.dispose() // Dispose of the WebGL context

        const gl = renderer.getContext()
        gl.getExtension('WEBGL_lose_context')?.loseContext()
      }
      if (scene) {
        clearScene(scene)
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }

      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }) // массив зависимостей

  return <div className="ThreeScene-container" ref={mountRef} /> // Контейнер для сцены
}

export default ThreeScene
