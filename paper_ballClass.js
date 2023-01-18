import * as THREE from './libs/three.module.js';

export default class PaperBall {
    materialKnot = new THREE.MeshNormalMaterial({ wireframe: false })
    torus1 = new THREE.TorusKnotGeometry(1,0.4,64,8,10.36,2.26)
    body = new THREE.Mesh(this.torus1, this.materialKnot)
    torus2 = new THREE.TorusKnotGeometry(1,0.4,64,8,10.16,2.26)
    staticTorus2 = new THREE.Mesh(this.torus2, this.materialKnot)
    torus3 = new THREE.TorusKnotGeometry(1,0.4,64,8,10.16,2.26)
    staticTorus3 = new THREE.Mesh(this.torus3, this.materialKnot)
    torus4 = new THREE.TorusKnotGeometry(1,0.4,64,8,10.16,2.26)
    staticTorus4 = new THREE.Mesh(this.torus4, this.materialKnot)
    topperLeg1 = new THREE.BoxGeometry(0.5,1.2,0.5)
    staticTopperLeg1 = new THREE.Mesh(this.topperLeg1, this.materialKnot)
    topperLeg2 = new THREE.BoxGeometry(0.5,1.2,0.5)
    staticTopperLeg2 = new THREE.Mesh(this.topperLeg2, this.materialKnot)
    bottomLeg1 = new THREE.BoxGeometry(0.5,1.2,0.5)
    staticBottomLeg1 = new THREE.Mesh(this.bottomLeg1, this.materialKnot)
    bottomLeg2 = new THREE.BoxGeometry(0.5,1.2,0.5)
    staticBottomLeg2 = new THREE.Mesh(this.bottomLeg2, this.materialKnot)
    arm1 = new THREE.BoxGeometry(0.5,2.5,0.5)
    staticArm1 = new THREE.Mesh(this.arm1, this.materialKnot)
    arm2 = new THREE.BoxGeometry(0.5,2.5,0.5)
    staticArm2 = new THREE.Mesh(this.arm2, this.materialKnot)

    constructor(position, scale, rotation, velocity) {
        this.legMovement1 = 0
        this.cont1 = 0
        this.cont2 = 0
        this.velocity = velocity
        this.animationStart = false
        this.animationFall = false
        //TORUS 1
        this.body.position.set(position.x, position.y, position.z)
        this.body.scale.set(scale.x, scale.y, scale.z)
        this.body.rotation.set(rotation.x, rotation.y, rotation.z)
        
        this.body.add(this.staticTorus2)
        this.body.add(this.staticTorus3)
        this.body.add(this.staticTorus4)
        this.body.add(this.staticTopperLeg1)
        this.body.add(this.staticTopperLeg2)
        this.staticTopperLeg1.add(this.staticBottomLeg1)
        this.staticTopperLeg2.add(this.staticBottomLeg2)
        this.body.add(this.staticArm1)
        this.body.add(this.staticArm2)
        //TORUS 2
        this.staticTorus2.position.set(0,0,0)
        this.staticTorus2.rotation.x = 90 * Math.PI / 180 
        //TORUS 3
        this.staticTorus3.position.set(0,0,0)
        this.staticTorus3.rotation.x = 45 * Math.PI / 180 
        //TORUS 4
        this.staticTorus4.position.set(0,0,0)
        this.staticTorus4.rotation.x = -45 * Math.PI / 180 
        //LEGS
        //TOPPER
        this.staticTopperLeg1.position.set(-1,-1.3,0)
        this.staticTopperLeg2.position.set(1,-1.3,0)
        //BOTTOM
        this.staticBottomLeg1.position.set(0,-0.8,0)
        this.staticBottomLeg2.position.set(0,-0.8,0)
        //ARMS
        this.staticArm1.position.set(-2,0,0)
        this.staticArm1.rotation.z = -50 * Math.PI / 180
        this.staticArm2.position.set(2,0,0)
        this.staticArm2.rotation.z = 50 * Math.PI / 180
    }
    animation() {
        if(this.legMovement1 == 0){
            this.staticBottomLeg1.position.z -= 0.07 * this.velocity
            this.staticBottomLeg1.rotation.x += 18 * Math.PI / 180  * this.velocity
            this.cont1 += 1
            if(this.cont1 == 4 && this.legMovement2 == undefined) {
                this.legMovement2 = 0
            }
    
            if(this.armMovement == undefined && this.cont1 != 5){
                this.staticArm1.position.x += 0.1 * this.velocity
                this.staticArm1.position.z -= 0.1 * this.velocity
                this.staticArm2.position.x -= 0.1 * this.velocity
                this.staticArm2.position.z -= 0.1 * this.velocity
                this.staticArm1.rotation.y -= 10 * Math.PI / 180 * this.velocity
                this.staticArm2.rotation.y += 10 * Math.PI / 180 * this.velocity
            } else {
                this.armMovement = 1
            }
            if(this.cont1 == 5) {
                this.legMovement1 = 1
                this.cont1 = 0
            }
        }
        if(this.legMovement1 == 1) {
            this.staticBottomLeg1.position.z += 0.07 * this.velocity
            this.staticBottomLeg1.rotation.x -= 18 * Math.PI / 180 * this.velocity
            this.cont1 += 1
            if(this.cont1 == 5) {
                this.legMovement1 = 0
                this.cont1 = 0
            }
        }
        if(this.legMovement2 == 0) {
            this.staticBottomLeg2.position.z -= 0.07 * this.velocity
            this.staticBottomLeg2.rotation.x += 18 * Math.PI / 180 * this.velocity
            this.cont2 += 1
            if(this.cont2 == 5){
                this.legMovement2 = 1
                this.cont2 = 0
            }
        }
        if(this.legMovement2 == 1) {
            this.staticBottomLeg2.position.z += 0.07 * this.velocity
            this.staticBottomLeg2.rotation.x -= 18 * Math.PI / 180 * this.velocity
            this.cont2 += 1
            if(this.cont2 == 5){
                this.legMovement2 = 0
                this.cont2 = 0
            }
        }
    }
}