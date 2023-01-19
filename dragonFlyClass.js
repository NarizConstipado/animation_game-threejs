import * as THREE from './libs/three.module.js';

export default class DragonFly {
    backgroundTexture = new THREE.TextureLoader().load('./textures/bg.webp')
    wingTexture = new THREE.TextureLoader().load('./textures/wing2_0.jpg')
    winePaper = new THREE.TextureLoader().load('./textures/wine_paper.jpg')

    materialBottle = new THREE.MeshBasicMaterial({ color: '#092E20',  transparent: true, opacity: 0.955/* , map: winePaper */ })
    materialWings = new THREE.MeshBasicMaterial({map : this.wingTexture, transparent : true, opacity : 0.5 })
    materialLegs = new THREE.MeshBasicMaterial({ color: '#B2BEB5'})
    materialTopper = new THREE.MeshBasicMaterial({ color: '#8D918D'})
    
    body = new THREE.Object3D();

    bottle = new THREE.CylinderGeometry(1,1,3,32)
    staticBottle = new THREE.Mesh(this.bottle, this.materialBottle)
    sphere = new THREE.SphereGeometry(1.19,64,32,0,Math.PI*2,0,1)
    staticSphere = new THREE.Mesh(this.sphere, this.materialBottle)
    bottleNeck = new THREE.CylinderGeometry(0.3, 0.3, 2, 32)
    staticNeck = new THREE.Mesh(this.bottleNeck, this.materialBottle)
    bottleTop = new THREE.TorusGeometry(0.3,0.09,30,50)
    staticTop = new THREE.Mesh(this.bottleTop, this.materialTopper)
    coverTop = new THREE.CylinderGeometry(0.3,0.3,0.18,32)
    staticCover = new THREE.Mesh(this.coverTop, this.materialTopper)
    wing1 = new THREE.CircleGeometry(2,32)
    staticWing1 = new THREE.Mesh(this.wing1, this.materialWings)
    wing2 = new THREE.CircleGeometry(2,32)
    staticWing2 = new THREE.Mesh(this.wing2, this.materialWings)
    wing3 = new THREE.CircleGeometry(2,32)
    staticWing3 = new THREE.Mesh(this.wing3, this.materialWings)
    wing4 = new THREE.CircleGeometry(2,32)
    staticWing4 = new THREE.Mesh(this.wing4, this.materialWings)
    topLeg1 = new THREE.CylinderGeometry(0.06, 0.12, 0.6, 32)
    staticTopLeg1 = new THREE.Mesh(this.topLeg1, this.materialLegs)
    topLeg2 = new THREE.CylinderGeometry(0.06, 0.12, 0.6, 32)
    staticTopLeg2 = new THREE.Mesh(this.topLeg2, this.materialLegs)
    topLeg3 = new THREE.CylinderGeometry(0.08, 0.14, 1, 32)
    staticTopLeg3 = new THREE.Mesh(this.topLeg3, this.materialLegs)
    medLeg1 = new THREE.CylinderGeometry(0.06, 0.03, 0.4, 32)
    staticMedLeg1 = new THREE.Mesh(this.medLeg1, this.materialLegs)
    medLeg2 = new THREE.CylinderGeometry(0.06, 0.03, 0.4, 32)
    staticMedLeg2 = new THREE.Mesh(this.medLeg2, this.materialLegs)
    medLeg3 = new THREE.CylinderGeometry(0.06, 0.03, 0.7, 32)
    staticMedLeg3 = new THREE.Mesh(this.medLeg3, this.materialLegs)
    botLeg1 = new THREE.CylinderGeometry(0.03, 0.01, 0.2, 32)
    staticBotLeg1 = new THREE.Mesh(this.botLeg1, this.materialLegs)
    botLeg2 = new THREE.CylinderGeometry(0.03, 0.01, 0.2, 32)
    staticBotLeg2 = new THREE.Mesh(this.botLeg2, this.materialLegs)
    botLeg3 = new THREE.CylinderGeometry(0.03, 0.01, 0.4, 32)
    staticBotLeg3 = new THREE.Mesh(this.botLeg3, this.materialLegs)
    topLeg4 = new THREE.CylinderGeometry(0.06, 0.12, 0.6, 32)
    staticTopLeg4 = new THREE.Mesh(this.topLeg4, this.materialLegs)
    topLeg5 = new THREE.CylinderGeometry(0.06, 0.12, 0.6, 32)
    staticTopLeg5 = new THREE.Mesh(this.topLeg5, this.materialLegs)
    topLeg6 = new THREE.CylinderGeometry(0.08, 0.14, 1, 32)
    staticTopLeg6 = new THREE.Mesh(this.topLeg6, this.materialLegs)
    medLeg4 = new THREE.CylinderGeometry(0.06, 0.03, 0.4, 32)
    staticMedLeg4 = new THREE.Mesh(this.medLeg4, this.materialLegs)
    medLeg5 = new THREE.CylinderGeometry(0.06, 0.03, 0.4, 32)
    staticMedLeg5 = new THREE.Mesh(this.medLeg5, this.materialLegs)
    medLeg6 = new THREE.CylinderGeometry(0.06, 0.03, 0.7, 32)
    staticMedLeg6 = new THREE.Mesh(this.medLeg6, this.materialLegs)
    botLeg4 = new THREE.CylinderGeometry(0.03, 0.01, 0.2, 32)
    staticBotLeg4 = new THREE.Mesh(this.botLeg4, this.materialLegs)
    botLeg5 = new THREE.CylinderGeometry(0.03, 0.01, 0.2, 32)
    staticBotLeg5 = new THREE.Mesh(this.botLeg5, this.materialLegs)
    botLeg6 = new THREE.CylinderGeometry(0.03, 0.01, 0.4, 32)
    staticBotLeg6 = new THREE.Mesh(this.botLeg6, this.materialLegs)

    constructor(position, scale, rotation, velocity) {
        this.materialWings.side = THREE.DoubleSide
        this.wingMovement = 0
        this.body.position.set(position.x, position.y, position.z)
        this.body.scale.set(scale.x, scale.y, scale.z)
        this.body.rotation.set(rotation.x, rotation.y, rotation.z)
        this.velocity = velocity
        this.animationStart = false
        this.animationFall = false

        this.body.add(this.staticBottle)
        this.staticBottle.add(this.staticSphere)
        this.staticSphere.add(this.staticNeck)
        this.staticNeck.add(this.staticTop)
        this.staticTop.add(this.staticCover)
        this.staticBottle.add(this.staticWing1)
        this.staticBottle.add(this.staticWing2)
        this.staticBottle.add(this.staticWing3)
        this.staticBottle.add(this.staticWing4)
        this.staticBottle.add(this.staticTopLeg1)
        this.staticBottle.add(this.staticTopLeg2)
        this.staticBottle.add(this.staticTopLeg3)
        this.staticTopLeg1.add(this.staticMedLeg1)
        this.staticTopLeg2.add(this.staticMedLeg2)
        this.staticTopLeg3.add(this.staticMedLeg3)
        this.staticMedLeg1.add(this.staticBotLeg1)
        this.staticMedLeg2.add(this.staticBotLeg2)
        this.staticMedLeg3.add(this.staticBotLeg3)
        this.staticBottle.add(this.staticTopLeg4)
        this.staticBottle.add(this.staticTopLeg5)
        this.staticBottle.add(this.staticTopLeg6)
        this.staticTopLeg4.add(this.staticMedLeg4)
        this.staticTopLeg5.add(this.staticMedLeg5)
        this.staticTopLeg6.add(this.staticMedLeg6)
        this.staticMedLeg4.add(this.staticBotLeg4)
        this.staticMedLeg5.add(this.staticBotLeg5)
        this.staticMedLeg6.add(this.staticBotLeg6)
        
        this.staticBottle.rotation.y = 90 * Math.PI / 180
        this.staticBottle.rotation.z = 90 * Math.PI / 180
        this.staticSphere.position.set(0,0.85,0)
        this.staticNeck.position.set(0,1,0)
        this.staticNeck.rotation.y = 90 * Math.PI / 180
        this.staticTop.position.set(0,1,0)
        this.staticTop.rotation.x = 90 * Math.PI / 180
        this.staticCover.position.set(0,0,0)
        this.staticCover.rotation.x = 90 * Math.PI / 180
        this.staticWing1.position.set(0.7,-0.7,-1.5)
        this.staticWing1.rotation.x = 180 * Math.PI / 180
        this.staticWing1.rotation.y = 90 * Math.PI / 180
        this.staticWing1.rotation.z = 90 * Math.PI / 180
        this.staticWing1.scale.set(0.200,0.800,1)
        this.staticWing2.position.set(0.7,0.3,-1.5)
        this.staticWing2.rotation.x = 180 * Math.PI / 180
        this.staticWing2.rotation.y = 90 * Math.PI / 180
        this.staticWing2.rotation.z = 90 * Math.PI / 180
        this.staticWing2.scale.set(0.200,0.800,1)
        this.staticWing3.position.set(0.7,-0.7,1.5)
        this.staticWing3.rotation.x = -180 * Math.PI / 180
        this.staticWing3.rotation.y = -90 * Math.PI / 180
        this.staticWing3.rotation.z = -90 * Math.PI / 180
        this.staticWing3.scale.set(0.200,0.800,1)
        this.staticWing4.position.set(0.7,0.3,1.5)
        this.staticWing4.rotation.x = -180 * Math.PI / 180
        this.staticWing4.rotation.y = -90 * Math.PI / 180
        this.staticWing4.rotation.z = -90 * Math.PI / 180
        this.staticWing4.scale.set(0.200,0.800,1)
        this.staticTopLeg1.position.set(-1,-1,0.4)
        this.staticTopLeg1.rotation.z = 45 * Math.PI / 180
        this.staticTopLeg2.position.set(-1,-0.5,0.4)
        this.staticTopLeg2.rotation.z = 45 * Math.PI / 180
        this.staticTopLeg3.position.set(-1,0,0.4)
        this.staticTopLeg3.rotation.z = 45 * Math.PI / 180
        this.staticMedLeg1.position.set(-0.2,0.18,0)
        this.staticMedLeg1.rotation.z = -70 * Math.PI / 180
        this.staticMedLeg2.position.set(-0.2,0.18,0)
        this.staticMedLeg2.rotation.z = -70 * Math.PI / 180
        this.staticMedLeg3.position.set(-0.3,0.34,0)
        this.staticMedLeg3.rotation.z = -70 * Math.PI / 180
        this.staticBotLeg1.position.set(-0.1,-0.12,0)
        this.staticBotLeg1.rotation.z = -120 * Math.PI / 180
        this.staticBotLeg2.position.set(-0.1,-0.12,0)
        this.staticBotLeg2.rotation.z = -120 * Math.PI / 180
        this.staticBotLeg3.position.set(-0.18,-0.22,0)
        this.staticBotLeg3.rotation.z = -120 * Math.PI / 180
        this.staticTopLeg4.position.set(-1,-1,-0.4)
        this.staticTopLeg4.rotation.z = 45 * Math.PI / 180
        this.staticTopLeg5.position.set(-1,-0.5,-0.4)
        this.staticTopLeg5.rotation.z = 45 * Math.PI / 180
        this.staticTopLeg6.position.set(-1,0,-0.4)
        this.staticTopLeg6.rotation.z = 45 * Math.PI / 180
        this.staticMedLeg4.position.set(-0.2,0.18,0)
        this.staticMedLeg4.rotation.z = -70 * Math.PI / 180
        this.staticMedLeg5.position.set(-0.2,0.18,0)
        this.staticMedLeg5.rotation.z = -70 * Math.PI / 180
        this.staticMedLeg6.position.set(-0.3,0.34,0)
        this.staticMedLeg6.rotation.z = -70 * Math.PI / 180
        this.staticBotLeg4.position.set(-0.1,-0.12,0)
        this.staticBotLeg4.rotation.z = -120 * Math.PI / 180
        this.staticBotLeg5.position.set(-0.1,-0.12,0)
        this.staticBotLeg5.rotation.z = -120 * Math.PI / 180
        this.staticBotLeg6.position.set(-0.18,-0.22,0)
        this.staticBotLeg6.rotation.z = -120 * Math.PI / 180
    }

    animation() {
        if(this.wingMovement == 0){
            this.staticWing1.rotation.y += 10 * Math.PI / 180 * this.velocity
            this.staticWing4.rotation.y += 10 * Math.PI / 180 * this.velocity
            
            this.staticWing2.rotation.y -= 10 * Math.PI / 180 * this.velocity
            this.staticWing3.rotation.y -= 10 * Math.PI / 180 * this.velocity

            this.staticWing1.position.x += 0.2 * this.velocity
            this.staticWing4.position.x -= 0.2 * this.velocity

            this.staticWing2.position.x -= 0.2 * this.velocity
            this.staticWing3.position.x += 0.2 * this.velocity

        if(this.staticWing1.rotation.y == 2.4434609527920608){
            this.wingMovement = 1
        }
    }
    if(this.wingMovement == 1){
        this.staticWing1.rotation.y -= 10 * Math.PI / 180 * this.velocity
        this.staticWing2.rotation.y += 10 * Math.PI / 180 * this.velocity
        this.staticWing3.rotation.y += 10 * Math.PI / 180 * this.velocity
        this.staticWing4.rotation.y -= 10 * Math.PI / 180 * this.velocity

        this.staticWing1.position.x -= 0.2 * this.velocity
        this.staticWing2.position.x += 0.2 * this.velocity
        this.staticWing3.position.x -= 0.2 * this.velocity
        this.staticWing4.position.x += 0.2 * this.velocity
        
        if(this.staticWing1.rotation.y == 0.8726646259971644){
            this.wingMovement = 0
        }
    }
    }
}
