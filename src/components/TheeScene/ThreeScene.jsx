import './ThreeScene.css'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls'

const ThreeScene = () => {
  const mountRef = useRef(null) // Ссылка на контейнер для сцены

  useEffect(() => {
    // Инициализация сцены, камеры и рендерера
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf0ecf3)
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const light = new THREE.AmbientLight(0xffffbb, 0x080820, 1)
    light.position.set(30, 30, 30).normalize()
    scene.add(light)
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(600, 300) // Устанавливаем размеры канваса

    //Adding groups for objects and another for pallets.
    let cargo_area_group = new THREE.Group()
    let cargo_group = new THREE.Group()
    let group_of_cargo_area_floor = new THREE.Group() //Need for drag cargos and check collisions.
    let group_of_cargo_area_attribute = new THREE.Group() //Contain rgb helpers,pictures and others visual atributes.

    scene.add(cargo_area_group)
    scene.add(cargo_group)
    scene.add(group_of_cargo_area_floor)
    scene.add(group_of_cargo_area_attribute)

    //Rotation camera with orbit controls.
    let controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.zoomSpeed = 6

    // Добавляем canvas только один раз
    if (!mountRef.current.hasChildNodes()) {
      mountRef.current.appendChild(renderer.domElement) // Добавляем новый canvas
    }

    // Добавляем куб
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // Устанавливаем камеру
    camera.position.z = 5

    // Функция анимации
    const animate = () => {
      requestAnimationFrame(animate) // Запрашиваем следующий кадр

      renderer.render(scene, camera) // Рендерим сцену
    }

    animate() // Запуск анимации

    // Очистка ресурсов при размонтировании компонента
    return () => {
      // Останавливаем анимацию
      renderer.dispose() // Освобождаем ресурсы рендерера

      // Удаляем canvas элемент
      if (mountRef.current) {
        mountRef.current.innerHTML = '' // Удаляем старый canvas
      }
    }
  }, []) // Пустой массив зависимостей — эффект выполнится только один раз

  return <div className="ThreeScene-container" ref={mountRef} /> // Контейнер для сцены
}

export default ThreeScene
