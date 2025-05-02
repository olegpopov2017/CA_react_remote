import * as THREE from 'three'
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls'

//Intialization scene,camera,plane,renderer
export function createSceneAndLight() {
  let scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf0ecf3)

  const light = new THREE.AmbientLight(0xffffbb, 0x080820, 1)
  light.position.set(30, 30, 30).normalize()
  scene.add(light)
  return scene
}

export function createAndAddingGroups() {
  let cargo_area_group = new THREE.Group()
  let cargo_group = new THREE.Group()
  let group_of_cargo_area_floor = new THREE.Group() //Need for drag cargos and check collisions.
  let group_of_cargo_area_attribute = new THREE.Group() //Contain rgb helpers,pictures and others visual atributes.

  // refScene.add(cargo_area_group)
  // refScene.add(cargo_group)
  // refScene.add(group_of_cargo_area_floor)
  // refScene.add(group_of_cargo_area_attribute)
  return [
    cargo_area_group,
    cargo_group,
    group_of_cargo_area_floor,
    group_of_cargo_area_attribute,
  ]
}

export function createCamera() {
  let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    5000
  )
  camera.position.x = 7
  camera.position.z = 7
  camera.position.y = 7
  return camera
}
export function createRenderer() {
  let renderer = new THREE.WebGLRenderer()
  renderer.setSize(600, 300)
  return renderer
}
// Rotation camera with orbit controls.
export function createControls(camera, renderer) {
  let controls = new OrbitControls(camera, renderer.domElement)

  controls.enableDamping = true
  controls.dampingFactor = 0.1 // плавность при вращении
  controls.zoomSpeed = 2 // скорость приближения/отдаления
  controls.rotateSpeed = 0.5 // скорость вращения
  controls.panSpeed = 1 // скорость панорамирования (если включено)
  controls.enableZoom = true
  controls.enablePan = true
  return controls
}

export function clearScene(sce) {
  // Проходим по всем объектам в сцене и очищаем их
  if (!sce) {
    console.error('Сцена не инициализирована')
    return
  }
  sce.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      // Очищаем геометрию
      if (object.geometry) {
        object.geometry.dispose()
      }
      // Очищаем материалы
      if (object.material) {
        // Если материал имеет текстуру, очищаем её
        if (object.material.map) {
          object.material.map.dispose()
        }
        object.material.dispose()
      }
    }

    if (object instanceof THREE.Light) {
      // Если объект - свет, очищаем его ресурсы
      if (object.isPointLight || object.isDirectionalLight) {
        // Пример для точечных и направленных источников света
        if (object.shadow) {
          object.shadow.dispose()
        }
      }
    }

    if (object instanceof THREE.Texture) {
      // Если объект является текстурой
      object.dispose()
    }
  })

  // Очистка всей сцены
  sce.clear()
}
// npm run build
// npm run preview
