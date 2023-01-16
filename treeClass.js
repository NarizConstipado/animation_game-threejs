import * as THREE from './libs/three.module.js';
import { LineSegments2 } from './libs/lines/LineSegments2.js';
import { LineSegmentsGeometry } from './libs/lines/LineSegmentsGeometry.js';
import { LineMaterial } from './libs/lines/LineMaterial.js';


export default class Tree {
            //materials
            materialTronk = new THREE.MeshBasicMaterial({color: 'rgb(78,53,36)'},{ wireframe: false }, {shading: THREE.FlatShading});
            materialFolhas = new THREE.MeshBasicMaterial({color: 'rgb(0,154,23)'},{ wireframe: false }, {shading: THREE.FlatShading});

            //tronco
            pivot = new THREE.Object3D();
            geometryTronk1 = new THREE.CylinderGeometry(0.1,0.15,1.5,7)
            treeTronk = new THREE.Mesh(this.geometryTronk1, this.materialTronk);
            geometryTronk2 = new THREE.CylinderGeometry(0.09,0.1,1,5)
            treeTronk2 = new THREE.Mesh(this.geometryTronk2, this.materialTronk);
            geometryTronk3 = new THREE.CylinderGeometry(0.04,0.08,1.2, 5)
            treeTronk3 = new THREE.Mesh(this.geometryTronk3, this.materialTronk);
            geometryTreeGalho = new THREE.CylinderGeometry(0.03,0.07,0.9,7)
            treeGalho = new THREE.Mesh(this.geometryTreeGalho, this.materialTronk)
            pivotTreeGalho1 = new THREE.Object3D();
            geometryTreeGalho2 = new THREE.CylinderGeometry(0.04,0.07,0.9,7)
            treeGalho2 = new THREE.Mesh(this.geometryTreeGalho2, this.materialTronk)
            pivotTreeGalho2 = new THREE.Object3D()
            geometryTreeGalho3 = new THREE.CylinderGeometry(0.03,0.04,0.55,7)
            treeGalho3 = new THREE.Mesh(this.geometryTreeGalho3, this.materialTronk)
            pivotTreeGalho3 = new THREE.Object3D()
            // folhas
            geometryTreeFolhas = new THREE.IcosahedronBufferGeometry(1, 0);
            treeFolhas = new THREE.Mesh(this.geometryTreeFolhas, this.materialFolhas)
            geometryTreeFolhas2 = new THREE.IcosahedronBufferGeometry(0.7, 0);
            treeFolhas2 = new THREE.Mesh(this.geometryTreeFolhas2, this.materialFolhas)
            geometryTreeFolhas3 = new THREE.IcosahedronBufferGeometry(0.75, 0);
            treeFolhas3 = new THREE.Mesh(this.geometryTreeFolhas3, this.materialFolhas)
            geometryTreeFolhas4 = new THREE.IcosahedronBufferGeometry(0.85, 0);
            treeFolhas4 = new THREE.Mesh(this.geometryTreeFolhas4, this.materialFolhas)
            geometryTreeFolhas5 = new THREE.IcosahedronBufferGeometry(0.65, 0);
            treeFolhas5 = new THREE.Mesh(this.geometryTreeFolhas5, this.materialFolhas)
            geometryTreeFolhas6 = new THREE.IcosahedronBufferGeometry(0.5, 0);
            treeFolhas6 = new THREE.Mesh(this.geometryTreeFolhas6, this.materialFolhas)
            geometryTreeFolhas7 = new THREE.IcosahedronBufferGeometry(0.65, 0);
            treeFolhas7 = new THREE.Mesh(this.geometryTreeFolhas7, this.materialFolhas)
            geometryTreeFolhas8 = new THREE.IcosahedronBufferGeometry(0.5, 0);
            treeFolhas8 = new THREE.Mesh(this.geometryTreeFolhas8, this.materialFolhas)
            
            geometryFolhas = [
                this.treeFolhas, this.treeFolhas2, this.treeFolhas3, this.treeFolhas4,
                this.treeFolhas5, this.treeFolhas6, this.treeFolhas7, this.geometryTreeFolhas8
            ]
            
            constructor(velocity, positionX, positionZ, scale, rotation) {
                
                this.velocity = velocity
                this.materialFolhas.color.set('rgb(0,154,23)')
                this.materialTronk.color.set('rgb(78,53,36)')
                this.pivot.position.set(positionX, -1.1, positionZ)
                this.pivot.scale.set(scale,scale,scale)
                this.pivot.rotation.y = rotation

                this.pivot.add(this.treeTronk);
                this.treeTronk.add(this.treeTronk2)
                this.treeTronk2.add(this.treeTronk3)
                this.pivotTreeGalho1.add(this.treeGalho)
                this.treeTronk2.add(this.pivotTreeGalho1)
                this.pivotTreeGalho2.add(this.treeGalho2)
                this.treeTronk.add(this.pivotTreeGalho2)
                this.pivotTreeGalho3.add(this.treeGalho3)
                this.treeGalho2.add(this.pivotTreeGalho3)
                this.treeTronk3.add(this.treeFolhas)
                this.treeFolhas.add(this.treeFolhas2)
                this.treeFolhas.add(this.treeFolhas3)
                this.treeFolhas.add(this.treeFolhas4)
                this.treeFolhas.add(this.treeFolhas5)
                this.treeGalho.add(this.treeFolhas6)
                this.treeGalho3.add(this.treeFolhas7)
                this.treeFolhas7.add(this.treeFolhas8)

                this.treeTronk.position.set(0,0.7,0)
                this.treeTronk.rotation.z = 0.1
                this.treeTronk2.position.set(0.24,1.15,0)
                this.treeTronk2.rotation.z = -0.5
                this.treeTronk3.position.set(-0.12,1.05,0)
                this.treeTronk3.rotation.z = 0.2
                this.treeGalho.position.set(0,0.5,0)
                this.pivotTreeGalho1.position.set(0,0.3,0)
                this.pivotTreeGalho1.rotation.z = 1.2
                this.pivotTreeGalho1.rotation.y = -0.8
                this.treeGalho2.position.set(0,0.4,0)
                this.pivotTreeGalho2.position.set(0,0.55,0.1)
                this.pivotTreeGalho2.rotation.z = 1
                this.pivotTreeGalho2.rotation.y = 2.2
                this.treeGalho3.position.set(0,0.3,0)
                this.pivotTreeGalho3.position.set(-0.03,0.4,0)
                this.pivotTreeGalho3.rotation.z = -0.5
                this.treeFolhas.position.set(0,1,0)
                this.treeFolhas.rotation.z = 1
                this.treeFolhas.rotation.y = -0.6
                this.treeFolhas2.position.set(-0.7,0.4,0)
                this.treeFolhas2.rotation.z = 2.4
                this.treeFolhas3.position.set(-0.2,-0.6,-0.6)
                this.treeFolhas3.rotation.z = 0.4
                this.treeFolhas4.position.set(-0.7,0.4,0.7)
                this.treeFolhas4.rotation.z = -1.4
                this.treeFolhas5.position.set(-1.3,0.2,1.2)
                this.treeFolhas5.rotation.z = -2
                this.treeFolhas6.position.set(0,0.5,-0.2)
                this.treeFolhas6.rotation.z = -2
                this.treeFolhas7.position.set(0,0.5,0)
                this.treeFolhas7.rotation.z = -2
                this.treeFolhas8.position.set(0.2,0,-0.7)
                this.treeFolhas8.rotation.z = -1.4

                //animations
                this.animationTree = true
                this.animationGalho1 = true
                this.animationGalho2 = true
                this.animationGalho3 = true
                this.animationLeafs = true
            }
            
            animationsTree(){
                if(this.animationTree){
                    this.pivot.rotation.z += 0.00008 * this.velocity
                    if(this.pivot.rotation.z >= 0.01) this.animationTree = false;
                } 
                else {
                    this.pivot.rotation.z -= 0.00008 * this.velocity
                    if(this.pivot.rotation.z <= -0.01) this.animationTree = true
                }
    
                if(this.animationGalho3){
                    this.pivotTreeGalho3.rotation.x += 0.00001 * this.velocity
                    if(this.pivotTreeGalho3.rotation.x >= 0.03) this.animationGalho3 = false;
                } 
                else { 
                    this.pivotTreeGalho3.rotation.x -= 0.00001 * this.velocity
                    if(this.pivotTreeGalho3.rotation.x <= -0.05) this.animationGalho3 = true
                }
     
                if(this.animationGalho2){
                    this.pivotTreeGalho2.rotation.y += 0.0005 * this.velocity
                    if(this.pivotTreeGalho2.rotation.y >= 2.22) this.animationGalho2 = false;
                } 
                else {
                    this.pivotTreeGalho2.rotation.y -= 0.0005 * this.velocity
                    if(this.pivotTreeGalho2.rotation.y <= 2.18) this.animationGalho2 = true
                }
    
                if(this.animationGalho1){
                    this.pivotTreeGalho1.rotation.x += 0.0005 * this.velocity
                    if(this.pivotTreeGalho1.rotation.x >= 0.1) this.animationGalho1 = false;
                } 
                else {
                    this.pivotTreeGalho1.rotation.x -= 0.0005 * this.velocity
                    if(this.pivotTreeGalho1.rotation.x <= -0.1) this.animationGalho1 = true
                }
     
                if(this.animationLeafs){
                    this.geometryFolhas.forEach(treeFolha => {
                        treeFolha.scale.x += 0.0002
                    });
                    if(this.treeFolhas.scale.x >= 1.05) this.animationLeafs = false
                }
                else {
                    this.geometryFolhas.forEach(treeFolha =>{
                        treeFolha.scale.x -= 0.0002
                    })
                    if(this.treeFolhas.scale.x <= 0.95) this.animationLeafs = true
                }
            }
        }