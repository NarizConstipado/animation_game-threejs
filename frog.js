import * as THREE from './libs/three.module.js';

export default class Frog {
    materialBox = new THREE.MeshToonMaterial({ wireframe: false })
    materialBoxTopper = new THREE.MeshToonMaterial({ wireframe: false })
    
    pivot = new THREE.Object3D();
    
    box = new THREE.BoxGeometry(3, 2, 5)
    body = new THREE.Mesh(this.box, this.materialBox)
    topper1 = new THREE.PlaneGeometry(3, 1)
    staticTopper1 = new THREE.Mesh(this.topper1, this.materialBoxTopper)
    topper2 = new THREE.PlaneGeometry(3, 1)
    staticTopper2 = new THREE.Mesh(this.topper2, this.materialBoxTopper)
    topper3 = new THREE.PlaneGeometry(5, 1)
    staticTopper3 = new THREE.Mesh(this.topper3, this.materialBoxTopper)
    topper4 = new THREE.PlaneGeometry(5, 1)
    staticTopper4 = new THREE.Mesh(this.topper4, this.materialBoxTopper)
    topperLeg2 = new THREE.CylinderGeometry(0.3,0.2,1)
    staticTopperLeg2 = new THREE.Mesh(this.topperLeg2, this.materialBox)
    topperLeg1 = new THREE.CylinderGeometry(0.3,0.2,1)
    staticTopperLeg1 = new THREE.Mesh(this.topperLeg1, this.materialBox)
    topperLeg3 = new THREE.CylinderGeometry(0.4,0.7,1.5)
    staticTopperLeg3 = new THREE.Mesh(this.topperLeg3, this.materialBox)
    topperLeg4 = new THREE.CylinderGeometry(0.4,0.7,1.5)
    staticTopperLeg4 = new THREE.Mesh(this.topperLeg4, this.materialBox)
    bottomLeg1 = new THREE.CylinderGeometry(0.1, 0.2, 0.85)
    staticBottomLeg1 = new THREE.Mesh(this.bottomLeg1, this.materialBox)
    bottomLeg2 = new THREE.CylinderGeometry(0.1, 0.2, 0.95)
    staticBottomLeg2 = new THREE.Mesh(this.bottomLeg2, this.materialBox)
    bottomLeg3 = new THREE.CylinderGeometry(0.2, 0.4, 2)
    staticBottomLeg3 = new THREE.Mesh(this.bottomLeg3, this.materialBox)
    bottomLeg4 = new THREE.CylinderGeometry(0.2, 0.4, 2)
    staticBottomLeg4 = new THREE.Mesh(this.bottomLeg4, this.materialBox)
    foot1 = new THREE.BoxGeometry(0.2,0.1,0.3)
    staticFoot1 = new THREE.Mesh(this.foot1, this.materialBox)
    foot2 = new THREE.BoxGeometry(0.2,0.1,0.3)
    staticFoot2 = new THREE.Mesh(this.foot2, this.materialBox)
    foot3 = new THREE.BoxGeometry(0.5,0.3,0.5)
    staticFoot3 = new THREE.Mesh(this.foot3, this.materialBox)
    foot4 = new THREE.BoxGeometry(0.5,0.3,0.5)
    staticFoot4 = new THREE.Mesh(this.foot4, this.materialBox)
    finger1 = new THREE.CylinderGeometry(0.05,0.05,0.09);
    staticFinger1 = new THREE.Mesh(this.finger1, this.materialBox)
    finger2 = new THREE.CylinderGeometry(0.05,0.05,0.09);
    staticFinger2 = new THREE.Mesh(this.finger2, this.materialBox)
    finger3 = new THREE.CylinderGeometry(0.05,0.05,0.09);
    staticFinger3 = new THREE.Mesh(this.finger3, this.materialBox)
    finger4 = new THREE.CylinderGeometry(0.05,0.05,0.09);
    staticFinger4 = new THREE.Mesh(this.finger4, this.materialBox)
    finger5 = new THREE.CylinderGeometry(0.05,0.05,0.09);
    staticFinger5 = new THREE.Mesh(this.finger5, this.materialBox)
    finger6 = new THREE.CylinderGeometry(0.05,0.05,0.09);
    staticFinger6 = new THREE.Mesh(this.finger6, this.materialBox)
    finger7 = new THREE.CylinderGeometry(0.15,0.15,0.5);
    staticFinger7 = new THREE.Mesh(this.finger7, this.materialBox)
    finger8 = new THREE.CylinderGeometry(0.15,0.15,0.5);
    staticFinger8 = new THREE.Mesh(this.finger8, this.materialBox)
    finger9 = new THREE.CylinderGeometry(0.15,0.15,0.5);
    staticFinger9 = new THREE.Mesh(this.finger9, this.materialBox)
    finger10 = new THREE.CylinderGeometry(0.15,0.15,0.5);
    staticFinger10 = new THREE.Mesh(this.finger10, this.materialBox)
    finger11 = new THREE.CylinderGeometry(0.15,0.15,0.5);
    staticFinger11 = new THREE.Mesh(this.finger11, this.materialBox)
    finger12 = new THREE.CylinderGeometry(0.15,0.15,0.5);
    staticFinger12 = new THREE.Mesh(this.finger12, this.materialBox)

    constructor(position, scale, rotation, velocity) {
        this.frogMovement = 0
        this.cont = 0
        this.xFrogCont = 0
        this.animationStartItems = false
        this.animationFall = false
        this.animationStart = false

        this.appendix = [
            
        ]   

        this.pivot.position.set(position.x, position.y, position.z)
        this.pivot.scale.set(scale.x, scale.y, scale.z)
        this.pivot.rotation.set(rotation.x, rotation.y, rotation.z)
        this.velocity = velocity

        this.pivot.add(this.body)
        this.body.add(this.staticTopper1)
        this.body.add(this.staticTopper2)
        this.body.add(this.staticTopper3)
        this.body.add(this.staticTopper4)
        this.body.add(this.staticTopperLeg1)
        this.body.add(this.staticTopperLeg2)
        this.body.add(this.staticTopperLeg3)
        this.body.add(this.staticTopperLeg4)
        this.staticTopperLeg1.add(this.staticBottomLeg1)
        this.staticTopperLeg2.add(this.staticBottomLeg2)
        this.staticTopperLeg3.add(this.staticBottomLeg3)
        this.staticTopperLeg4.add(this.staticBottomLeg4)
        this.staticBottomLeg1.add(this.staticFoot1)
        this.staticBottomLeg2.add(this.staticFoot2)
        this.staticBottomLeg3.add(this.staticFoot3)
        this.staticBottomLeg4.add(this.staticFoot4)
        this.staticFoot1.add(this.staticFinger1)
        this.staticFoot1.add(this.staticFinger2)
        this.staticFoot1.add(this.staticFinger3)
        this.staticFoot2.add(this.staticFinger4)
        this.staticFoot2.add(this.staticFinger5)
        this.staticFoot2.add(this.staticFinger6)
        this.staticFoot3.add(this.staticFinger7)
        this.staticFoot3.add(this.staticFinger8)
        this.staticFoot3.add(this.staticFinger9)
        this.staticFoot4.add(this.staticFinger10)
        this.staticFoot4.add(this.staticFinger11)
        this.staticFoot4.add(this.staticFinger12)
        this.body.position.set(0,0,0)
        this.body.rotation.x = 0 * Math.PI / 180
        this.body.rotation.y = 0 * Math.PI / 180
        this.body.rotation.z = 0 * Math.PI / 180
        //TOPPER
        this.staticTopper1.position.set(0,1.258,-2.07)
        this.staticTopper1.rotation.x = 59 * Math.PI / 180
        this.staticTopper2.position.set(0,1.258,2.07)
        this.staticTopper2.rotation.x = -59 * Math.PI / 180
        this.staticTopper3.position.set(1.5,1.258,0)
        this.staticTopper3.rotation.y = -90 * Math.PI / 180
        this.staticTopper4.position.set(-1.5,1.258,0)
        this.staticTopper4.rotation.y = -90 * Math.PI / 180
        // FRONT LEGS
        // TOPPER LEG
        this.staticTopperLeg1.position.set(1.7,-0.5,2.32)
        this.staticTopperLeg1.rotation.y = -50 * Math.PI / 180
        this.staticTopperLeg1.rotation.z = 90 * Math.PI / 180
        this.staticTopperLeg2.position.set(-1.7,-0.5,2.32)
        this.staticTopperLeg2.rotation.y = 50 * Math.PI / 180
        this.staticTopperLeg2.rotation.z = -90 * Math.PI / 180
        this.staticTopperLeg3.position.set(1.5,0,-1.3)
        this.staticTopperLeg3.rotation.x = 70 * Math.PI / 180
        this.staticTopperLeg3.rotation.z = -40 * Math.PI / 180
        this.staticTopperLeg4.position.set(-1.5,0,-1.3)
        this.staticTopperLeg4.rotation.x = 250 * Math.PI / 180
        this.staticTopperLeg4.rotation.z = -220 * Math.PI / 180
        // BOTTOM LEG
        this.staticBottomLeg1.position.set(-0.2,-0.2,0.35)
        this.staticBottomLeg1.rotation.x = 85 * Math.PI / 180
        this.staticBottomLeg1.rotation.y = -60 * Math.PI / 180
        this.staticBottomLeg1.rotation.z = 60 * Math.PI / 180
        this.staticBottomLeg2.position.set(0.3,-0.2,0.35)
        this.staticBottomLeg2.rotation.x = 85 * Math.PI / 180
        this.staticBottomLeg2.rotation.y = 60 * Math.PI / 180
        this.staticBottomLeg2.rotation.z = -60 * Math.PI / 180
        this.staticBottomLeg3.position.set(0.4,-0.1,0.265)
        this.staticBottomLeg3.rotation.x = 160 * Math.PI / 180
        this.staticBottomLeg3.rotation.z = -30 * Math.PI / 180
        this.staticBottomLeg4.position.set(0.4,-0.1,-0.265)
        this.staticBottomLeg4.rotation.x = 190 * Math.PI / 180
        this.staticBottomLeg4.rotation.z = -30 * Math.PI / 180
        // FEET
        this.staticFoot1.position.set(0,0.4,0.05)
        this.staticFoot1.rotation.x = 65 * Math.PI / 180
        this.staticFoot1.rotation.y = 0 * Math.PI / 180
        this.staticFoot1.rotation.z = 7 * Math.PI / 180
        this.staticFoot2.position.set(0,0.4,0.05)
        this.staticFoot2.rotation.x = 65 * Math.PI / 180
        this.staticFoot2.rotation.y = 0 * Math.PI / 180
        this.staticFoot2.rotation.z = -7 * Math.PI / 180
        this.staticFoot3.position.set(0,0.8,-0.1)
        this.staticFoot3.rotation.x = -60 * Math.PI / 180
        this.staticFoot3.rotation.y = -90 * Math.PI / 180
        this.staticFoot3.rotation.z = 0 * Math.PI / 180
        this.staticFoot4.position.set(0,0.8,0.1)
        this.staticFoot4.rotation.x = 60 * Math.PI / 180
        this.staticFoot4.rotation.y = -90 * Math.PI / 180
        this.staticFoot4.rotation.z = 0 * Math.PI / 180
        //FINGERS
        this.staticFinger1.position.set(0.1,0,0)
        this.staticFinger1.rotation.z = 90 * Math.PI / 180
        this.staticFinger2.position.set(0.08,0,0.09)
        this.staticFinger2.rotation.x = 90 * Math.PI / 180
        this.staticFinger2.rotation.z = -45 * Math.PI / 180
        this.staticFinger3.position.set(0.08,0,-0.09)
        this.staticFinger3.rotation.x = 90 * Math.PI / 180
        this.staticFinger3.rotation.z = 45 * Math.PI / 180
        this.staticFinger4.position.set(-0.1,0,0)
        this.staticFinger4.rotation.z = 90 * Math.PI / 180
        this.staticFinger5.position.set(-0.08,0,0.09)
        this.staticFinger5.rotation.x = 90 * Math.PI / 180
        this.staticFinger5.rotation.z = 45 * Math.PI / 180
        this.staticFinger6.position.set(-0.08,0,-0.09)
        this.staticFinger6.rotation.x = 90 * Math.PI / 180
        this.staticFinger6.rotation.z = -45 * Math.PI / 180
        this.staticFinger7.position.set(-0.08,0,-0.09)
        this.staticFinger7.rotation.x = 90 * Math.PI / 180
        this.staticFinger7.rotation.z = -45 * Math.PI / 180
        this.staticFinger8.position.set(-0.08,0,0.09)
        this.staticFinger8.rotation.x = 90 * Math.PI / 180
        this.staticFinger8.rotation.z = 45 * Math.PI / 180
        this.staticFinger9.position.set(-0.08,0,0)
        this.staticFinger9.rotation.z = 90 * Math.PI / 180
        this.staticFinger10.position.set(0.08,0,-0.09)
        this.staticFinger10.rotation.x = 90 * Math.PI / 180
        this.staticFinger10.rotation.z = 45 * Math.PI / 180
        this.staticFinger11.position.set(0.08,0,0.09)
        this.staticFinger11.rotation.x = 90 * Math.PI / 180
        this.staticFinger11.rotation.z = -45 * Math.PI / 180
        this.staticFinger12.position.set(0.08,0,0)
        this.staticFinger12.rotation.z = 90 * Math.PI / 180
        this.materialBoxTopper.side = THREE.DoubleSide
    }
    animation() {
        if(this.frogMovement == 0) {
            if(this.xFrogCont != 3) {
            //BOX
            //BOX ROTATION
            this.body.rotation.x -= (10 * Math.PI / 180)

            //BOX POSITION
            this.body.position.y += 0.625

            } else {
                this.body.rotation.x = 0
            }
            
        //TOP LEGS
        //TOPPER LEG ROTATION
        this.staticTopperLeg3.rotation.z -= 16 * Math.PI / 180 
        
        this.staticTopperLeg3.rotation.y += 8 * Math.PI / 180

        this.staticTopperLeg4.rotation.z -= 16 * Math.PI / 180

        this.staticTopperLeg4.rotation.y += 8 * Math.PI / 180 

        //BOTTOM LEG ROTATION
        this.staticBottomLeg3.rotation.x -= 2 * Math.PI / 180

        this.staticBottomLeg4.rotation.x += 2 * Math.PI / 180     

        this.staticBottomLeg3.rotation.y += 6 * Math.PI / 180

        this.staticBottomLeg4.rotation.y -= 6 * Math.PI / 180

        this.staticBottomLeg3.rotation.z -= 18 * Math.PI / 180

        this.staticBottomLeg4.rotation.z -= 18 * Math.PI / 180

        //BOTTOM LEG POSITION
        this.staticBottomLeg3.position.x += 0.05
        this.staticBottomLeg3.position.y += 0.32
        this.staticBottomLeg3.position.z -= 0.023

        this.staticBottomLeg4.position.x += 0.05
        this.staticBottomLeg4.position.y += 0.32
        this.staticBottomLeg4.position.z -= 0.023

        //FOOT ROTATION
        this.staticFoot3.rotation.z -= 20 * Math.PI / 180

        this.staticFoot4.rotation.z += 20 * Math.PI / 180

        //FOOT POSITION
        this.staticFoot3.position.y += 0.06

        this.staticFoot4.position.y += 0.06

        //FRONT LEGS
        //BOTTOM LEG ROTATION
        this.staticBottomLeg1.rotation.x += 9 * Math.PI / 180
        this.staticBottomLeg2.rotation.x += 9 * Math.PI / 180

        //BOTTOM LEG POSITION
        this.staticBottomLeg1.position.y -= 0.04
        this.staticBottomLeg2.position.y -= 0.04

        this.xFrogCont  += 1
        this.cont += 1
        if(this.cont == 5){
            this.frogMovement = 1
            this.cont = 0
            this.xFrogCont = 0
        }
    }
    if(this.frogMovement == 1){
        if(this.xFrogCont != 3) {
            //BOX
            //BOX ROTATION
            this.body.rotation.x += 10 * Math.PI / 180

            //BOX POSITION
            this.body.position.y -= 0.625

            } else {
                this.body.rotation.x = 0
            }

        //TOP LEGS
        //TOPPER LEG ROTATION
        this.staticTopperLeg3.rotation.z += 16 * Math.PI / 180 
        
        this.staticTopperLeg3.rotation.y -= 8 * Math.PI / 180 

        this.staticTopperLeg4.rotation.z += 16 * Math.PI / 180

        this.staticTopperLeg4.rotation.y -= 8 * Math.PI / 180 

        //BOTTOM LEG ROTATION
        this.staticBottomLeg3.rotation.x += 2 * Math.PI / 180

        this.staticBottomLeg4.rotation.x -= 2 * Math.PI / 180              

        this.staticBottomLeg3.rotation.y -= 6 * Math.PI / 180

        this.staticBottomLeg4.rotation.y += 6 * Math.PI / 180

        this.staticBottomLeg3.rotation.z += 18 * Math.PI / 180

        this.staticBottomLeg4.rotation.z += 18 * Math.PI / 180

        //BOTTOM LEG POSITION
        this.staticBottomLeg3.position.x -= 0.05
        this.staticBottomLeg3.position.y -= 0.32
        this.staticBottomLeg3.position.z += 0.023

        this.staticBottomLeg4.position.x -= 0.05
        this.staticBottomLeg4.position.y -= 0.32
        this.staticBottomLeg4.position.z += 0.023

        //FOOT ROTATION
        this.staticFoot3.rotation.z += 20 * Math.PI / 180

        this.staticFoot4.rotation.z -= 20 * Math.PI / 180

        //FOOT POSITION
        this.staticFoot3.position.y -= 0.06

        this.staticFoot4.position.y -= 0.06

        //FRONT LEGS
        //BOTTOM LEG ROTATION
        this.staticBottomLeg1.rotation.x -= 9 * Math.PI / 180
        this.staticBottomLeg2.rotation.x -= 9 * Math.PI / 180

        //BOTTOM LEG POSITION
        this.staticBottomLeg1.position.y += 0.04
        this.staticBottomLeg2.position.y += 0.04

        this.xFrogCont += 1
        this.cont += 1
        if(this.cont == 5){
            this.frogMovement = 0
            this.cont = 0
            this.xFrogCont = 0
        }
    }
    }}