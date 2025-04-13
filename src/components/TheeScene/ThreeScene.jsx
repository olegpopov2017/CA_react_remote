import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeScene = () => {
  const mountRef = useRef(null) // Ссылка на контейнер для сцены

  useEffect(() => {
    // Инициализация сцены, камеры и рендерера
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight) // Устанавливаем размеры канваса

    // Очистка контейнера перед добавлением нового canvas
    // if (mountRef.current) {
    mountRef.current.innerHTML = '' // Удаляем старый canvas, если он есть
    mountRef.current.appendChild(renderer.domElement) // Добавляем новый canvas
    // }

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

      cube.rotation.x += 0.01 // Вращение куба по оси X
      cube.rotation.y += 0.01 // Вращение куба по оси Y

      renderer.render(scene, camera) // Рендерим сцену
    }

    animate() // Запуск анимации

    // Очистка ресурсов при размонтировании компонента
    return () => {
      renderer.dispose()
    }
  }, []) // Пустой массив зависимостей — эффект выполнится только один раз

  return <div ref={mountRef} /> // Контейнер для сцены
}

export default ThreeScene
