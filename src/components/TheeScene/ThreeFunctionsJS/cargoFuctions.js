import * as THREE from 'three'

export function createCargos(cargosProps, cargo_group) {
  let quantityCargos = cargosProps.length
  // let x, y, z, width, height, depth

  for (let i = 0; i < quantityCargos; i++) {
    let x = Number(cargosProps[i].Xposition)
    let y = Number(cargosProps[i].Yposition)
    let z = Number(cargosProps[i].Zposition)
    let width = Number(cargosProps[i].Xwidth)
    let height = Number(cargosProps[i].Yheight)
    let depth = Number(cargosProps[i].Zdepth)

    let random_color_index = Math.floor(Math.random() * colors.length)
    let boxGeometry = new THREE.BoxGeometry(width, height, depth)
    let cubeMaterial = new THREE.MeshBasicMaterial({
      color: colors[random_color_index],
    })
    let uuid = cargosProps[i].uuid

    let box1 = new THREE.Mesh(boxGeometry, cubeMaterial)
    box1.material.side = THREE.DoubleSide

    //Adding edge frame for a box
    let edges = new THREE.EdgesGeometry(boxGeometry)
    let line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 'black' })
    )
    box1.add(line)

    box1.position.x = x + width / 2
    box1.position.y = y + height / 2
    box1.position.z = z + depth / 2

    box1.userData.isFloor = false //Need for jumping cargos
    box1.uuid = uuid

    cargo_group.add(box1)
    // return box1
  }
}

export let colors = [
  'aqua',
  'antiquewhite',
  'coral',
  'cornflowerblue',
  'chocolate',
  'azure',
  'beige',
  'bisque',
  'blanchedalmond',
  'blueviolet',
  'brown',
]
