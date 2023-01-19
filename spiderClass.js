import * as THREE from './libs/three.module.js';

export default class Spider {
    
    spiderFur = new THREE.TextureLoader().load("./textures/fur.jpg")
    canCola = new THREE.TextureLoader().load("./textures/cola_unfold.jpg")

    materialSpider = new THREE.MeshBasicMaterial({map: this.spiderFur})
    materialCan = new THREE.MeshBasicMaterial({map: this.canCola})
    
    body = new THREE.Object3D();

    CAN = new THREE.CylinderGeometry(1,1,4,32)
    canStatic = new THREE.Mesh(this.CAN, this.materialCan);
    
    spiderSuperiorLeg1 = new THREE.CylinderGeometry(0.15,0.25,1,32)
    SuperiorLeg1 = new THREE.Mesh(this.spiderSuperiorLeg1, this.materialSpider)
    spiderSuperiorLeg2 = new THREE.CylinderGeometry(0.15,0.25,1,32)
    SuperiorLeg2 = new THREE.Mesh(this.spiderSuperiorLeg2, this.materialSpider) 
    spiderSuperiorLeg3 = new THREE.CylinderGeometry(0.15,0.25,1,32)
    SuperiorLeg3 = new THREE.Mesh(this.spiderSuperiorLeg2, this.materialSpider) 
    spiderSuperiorLeg4 = new THREE.CylinderGeometry(0.15,0.25,1,32)
    SuperiorLeg4 = new THREE.Mesh(this.spiderSuperiorLeg2, this.materialSpider) 
    spiderSuperiorLeg5 = new THREE.CylinderGeometry(0.15,0.25,1,32)
    SuperiorLeg5 = new THREE.Mesh(this.spiderSuperiorLeg1, this.materialSpider)
    spiderSuperiorLeg6 = new THREE.CylinderGeometry(0.15,0.25,1,32)
    SuperiorLeg6 = new THREE.Mesh(this.spiderSuperiorLeg1, this.materialSpider)
    spiderSuperiorLeg7 = new THREE.CylinderGeometry(0.15,0.25,1,32)
    SuperiorLeg7 = new THREE.Mesh(this.spiderSuperiorLeg2, this.materialSpider) 
    spiderSuperiorLeg8 = new THREE.CylinderGeometry(0.15,0.25,1,32)
    SuperiorLeg8 = new THREE.Mesh(this.spiderSuperiorLeg2, this.materialSpider) 
    spiderInferiorLeg1 = new THREE.CylinderGeometry(0.12, 0.03, 1.8, 32)
    InferiorLeg1 = new THREE.Mesh(this.spiderInferiorLeg1, this.materialSpider)
    spiderInferiorLeg2 = new THREE.CylinderGeometry(0.12, 0.03, 1.8, 32)
    InferiorLeg2 = new THREE.Mesh(this.spiderInferiorLeg2, this.materialSpider)
    spiderInferiorLeg3 = new THREE.CylinderGeometry(0.12, 0.03, 1.8, 32)
    InferiorLeg3 = new THREE.Mesh(this.spiderInferiorLeg2, this.materialSpider)
    spiderInferiorLeg4 = new THREE.CylinderGeometry(0.12, 0.03, 1.8, 32)
    InferiorLeg4 = new THREE.Mesh(this.spiderInferiorLeg2, this.materialSpider)
    spiderInferiorLeg5 = new THREE.CylinderGeometry(0.12, 0.03, 1.8, 32)
    InferiorLeg5 = new THREE.Mesh(this.spiderInferiorLeg1, this.materialSpider)
    spiderInferiorLeg6 = new THREE.CylinderGeometry(0.12, 0.03, 1.8, 32)
    InferiorLeg6 = new THREE.Mesh(this.spiderInferiorLeg1, this.materialSpider)
    spiderInferiorLeg7 = new THREE.CylinderGeometry(0.12, 0.03, 1.8, 32)
    InferiorLeg7 = new THREE.Mesh(this.spiderInferiorLeg2, this.materialSpider)
    spiderInferiorLeg8 = new THREE.CylinderGeometry(0.12, 0.03, 1.8, 32)
    InferiorLeg8 = new THREE.Mesh(this.spiderInferiorLeg2, this.materialSpider)
    
    constructor(position, scale, rotation, velocity){      
        this.legMovement = 0
        this.velocity = velocity
        this.body.position.set(position.x, position.y, position.z)
        this.body.scale.set(scale.x, scale.y, scale.z)
        this.body.rotation.set(rotation.x, rotation.y, rotation.z)
        this.animationStart = false
        this.animationFall = false

        this.body.add(this.canStatic)
        this.canStatic.add(this.SuperiorLeg1)
        this.canStatic.add(this.SuperiorLeg2)
        this.canStatic.add(this.SuperiorLeg3)
        this.canStatic.add(this.SuperiorLeg4)
        this.canStatic.add(this.SuperiorLeg5)
        this.canStatic.add(this.SuperiorLeg6)
        this.canStatic.add(this.SuperiorLeg7)
        this.canStatic.add(this.SuperiorLeg8)
        this.SuperiorLeg1.add(this.InferiorLeg1)
        this.SuperiorLeg2.add(this.InferiorLeg2)
        this.SuperiorLeg3.add(this.InferiorLeg3)
        this.SuperiorLeg4.add(this.InferiorLeg4)
        this.SuperiorLeg5.add(this.InferiorLeg5)
        this.SuperiorLeg6.add(this.InferiorLeg6)
        this.SuperiorLeg7.add(this.InferiorLeg7)
        this.SuperiorLeg8.add(this.InferiorLeg8)
        //CANsTATIC
        this.canStatic.rotation.z = 180 * Math.PI / 180
        this.canStatic.rotation.x = -90 * Math.PI / 180
        //SUPERIOR LEGS
        this.SuperiorLeg1.position.set(-1,1.011,0)
        this.SuperiorLeg1.rotation.x = 220 * Math.PI / 180
        this.SuperiorLeg1.rotation.y = 160 * Math.PI / 180
        this.SuperiorLeg1.rotation.z = 223.40 * Math.PI / 180
        this.SuperiorLeg2.position.set(-1.154,0.4,0.05)
        this.SuperiorLeg2.rotation.x = 220 * Math.PI / 180
        this.SuperiorLeg2.rotation.y = 158 * Math.PI / 180
        this.SuperiorLeg2.rotation.z = 250 * Math.PI / 180
        this.SuperiorLeg3.position.set(-1.154,-0.2,0.05)
        this.SuperiorLeg3.rotation.x = 165 * Math.PI / 180
        this.SuperiorLeg3.rotation.y = 156 * Math.PI / 180
        this.SuperiorLeg4.position.set(-1.154,-0.9,0.05)
        this.SuperiorLeg3.rotation.z = 280 * Math.PI / 180
        this.SuperiorLeg4.rotation.x = 165 * Math.PI / 180
        this.SuperiorLeg4.rotation.y = 156 * Math.PI / 180
        this.SuperiorLeg4.rotation.z = 300 * Math.PI / 180
            // OTHER SIDE
        this.SuperiorLeg5.position.set(1,1.011,0)
        this.SuperiorLeg5.rotation.x = 40 * Math.PI / 180
        this.SuperiorLeg5.rotation.y = -20 * Math.PI / 180
        this.SuperiorLeg5.rotation.z = 313 * Math.PI / 180
        this.SuperiorLeg6.position.set(1.154,0.4,0.05)
        this.SuperiorLeg6.rotation.x = 40 * Math.PI / 180
        this.SuperiorLeg6.rotation.y = -22 * Math.PI / 180
        this.SuperiorLeg6.rotation.z = 290 * Math.PI / 180
        this.SuperiorLeg7.position.set(1.154,-0.2,0.05)
        this.SuperiorLeg7.rotation.x = -15 * Math.PI / 180
        this.SuperiorLeg7.rotation.y = -24 * Math.PI / 180
        this.SuperiorLeg7.rotation.z = 260 * Math.PI / 180
        this.SuperiorLeg8.position.set(1.154,-0.9,0.05)
        this.SuperiorLeg8.rotation.x = -15 * Math.PI / 180
        this.SuperiorLeg8.rotation.y = -24 * Math.PI / 180
        this.SuperiorLeg8.rotation.z = 240 * Math.PI / 180
        //INFERIOR LEGS
        this.InferiorLeg1.position.set(-0.25,0.35,-0.8)
        this.InferiorLeg1.rotation.x = 50 * Math.PI / 180
        this.InferiorLeg1.rotation.y = -60 * Math.PI / 180
        this.InferiorLeg1.rotation.z = -31.40 * Math.PI / 180 
        this.InferiorLeg2.position.set(-0.4,0.65,-0.7)
        this.InferiorLeg2.rotation.x = 60 * Math.PI / 180
        this.InferiorLeg2.rotation.y = -50 * Math.PI / 180
        this.InferiorLeg2.rotation.z = -50.40 * Math.PI / 180
        this.InferiorLeg3.position.set(0.05,0.70,-0.8)
        this.InferiorLeg3.rotation.y = -96 * Math.PI / 180
        this.InferiorLeg3.rotation.x = 60 * Math.PI / 180
        this.InferiorLeg3.rotation.z = -45 * Math.PI / 180 
        this.InferiorLeg4.position.set(-0.155,0.8,-0.8)
        this.InferiorLeg4.rotation.x = 60 * Math.PI / 180
        this.InferiorLeg4.rotation.y = -75 * Math.PI / 180
        this.InferiorLeg4.rotation.z = -50.40 * Math.PI / 180 
        //OTHER SIDE
        this.InferiorLeg5.position.set(0.25,0.35,-0.8)
        this.InferiorLeg5.rotation.x = 50 * Math.PI / 180
        this.InferiorLeg5.rotation.y = -120 * Math.PI / 180
        this.InferiorLeg5.rotation.z = -31.40 * Math.PI / 180 
        this.InferiorLeg6.position.set(0.4,0.65,-0.7)
        this.InferiorLeg6.rotation.x = 60 * Math.PI / 180
        this.InferiorLeg6.rotation.y = -130 * Math.PI / 180
        this.InferiorLeg6.rotation.z = -50.40 * Math.PI / 180 
        this.InferiorLeg7.position.set(-0.03,0.70,-0.8)
        this.InferiorLeg7.rotation.x = 60 * Math.PI / 180
        this.InferiorLeg7.rotation.y = -85 * Math.PI / 180
        this.InferiorLeg7.rotation.z = -45 * Math.PI / 180 
        this.InferiorLeg8.position.set(0.155,0.8,-0.8)
        this.InferiorLeg8.rotation.x = 60 * Math.PI / 180
        this.InferiorLeg8.rotation.y = -105 * Math.PI / 180
        this.InferiorLeg8.rotation.z = -50.40 * Math.PI / 180 
    }    
    
    animation() {
        //FORWARD SPIDER LEG 1
        if(this.legMovement == 0) { 
            this.SuperiorLeg1.rotation.x -= 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg1.rotation.y -= 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg8.rotation.x -= 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg8.rotation.z -= 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg4.rotation.x += 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg4.rotation.z += 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg5.rotation.x += 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg5.rotation.y += 5 * Math.PI / 180 * this.velocity

            if(this.legMovement2 == undefined && (this.SuperiorLeg1.rotation.x == 3.7524578917878086) && (this.SuperiorLeg1.rotation.y == 2.705260340591211)){
                this.legMovement2 = 0
            }

            if((this.SuperiorLeg1.rotation.x == 3.4906585039886595) && (this.SuperiorLeg1.rotation.y == 2.4434609527920617)){
                this.legMovement = 1
            }

            if((this.SuperiorLeg1.rotation.x == 3.577924966588376) && (this.SuperiorLeg1.rotation.y == 2.530727415391778)){
                this.legMovement3 = 1
            }
        }   
        if(this.legMovement == 1){
            this.SuperiorLeg1.rotation.x += 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg1.rotation.y += 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg8.rotation.x += 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg8.rotation.z += 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg4.rotation.x -= 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg4.rotation.z -= 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg5.rotation.x -= 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg5.rotation.y -= 5 * Math.PI / 180 * this.velocity

            if((this.SuperiorLeg1.rotation.x == 4.1887902047863905) && (this.SuperiorLeg1.rotation.y == 3.1415926535897927)){
                this.legMovement = 0
            }
        }

        //FORWARD SPIDER LEG 2
        if(this.legMovement2 == 0) { 
            this.SuperiorLeg2.rotation.x -= 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg2.rotation.y -= 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg7.rotation.x -= 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg7.rotation.z -= 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg3.rotation.x += 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg3.rotation.z += 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg6.rotation.x += 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg6.rotation.z += 5 * Math.PI / 180 * this.velocity

            if((this.SuperiorLeg2.rotation.x == 3.577924966588376) && (this.SuperiorLeg2.rotation.y == 2.4958208303518914)){
                this.legMovement2 = 1
            }
        }   

        if(this.legMovement2 == 1){
            this.SuperiorLeg2.rotation.x += 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg2.rotation.y += 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg7.rotation.x += 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg7.rotation.z += 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg3.rotation.x -= 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg3.rotation.z -= 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg6.rotation.x -= 5 * Math.PI / 180 * this.velocity
            this.SuperiorLeg6.rotation.z -= 5 * Math.PI / 180 * this.velocity

            if((this.SuperiorLeg2.rotation.x == 4.101523742186674) && (this.SuperiorLeg2.rotation.y == 3.0194196059501897)){
                this.legMovement2 = 0
            }
        }
    }
}