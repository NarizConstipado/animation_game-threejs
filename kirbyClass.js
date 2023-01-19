import * as THREE from './libs/three.module.js';
import { LineSegments2 } from './libs/lines/LineSegments2.js';
import { LineSegmentsGeometry } from './libs/lines/LineSegmentsGeometry.js';
import { LineMaterial } from './libs/lines/LineMaterial.js';

const wall_hit = new Audio('./sounds/wall_hit.mp3')
const sword_swing = new Audio('./sounds/sword_swing.mp3')
const inhale_sound = new Audio('./sounds/inhale_sound.mp3')

export default class Kirby {
    //MATERIAL
    material_body = new THREE.MeshToonMaterial({ color: "rgb(254,133,230)", wireframe: false, side: 2 });
    material_inside_body = new THREE.MeshToonMaterial({ color: "rgb(200,3,64)", wireframe: false });
    material_eye = new THREE.MeshToonMaterial({ color: "rgb(0,0,0)", wireframe: false });
    material_leg = new THREE.MeshToonMaterial({ color: "rgb(175,3,64)", wireframe: false });

    character = new THREE.Group();
    character_up = new THREE.Group();
    body = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16, 0, Math.PI * 2, 0, Math.PI / 180 * 175), this.material_body);
    inside_body = new THREE.Mesh(new THREE.CircleGeometry(0.78, 32), this.material_inside_body)
    eye_right = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16, 0, Math.PI * 2, 0, Math.PI), this.material_eye);
    eye_left = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16, 0, Math.PI * 2, 0, Math.PI), this.material_eye);
    arm_right_pivot = new THREE.Mesh();
    arm_right = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16, 0, Math.PI * 2, 0, Math.PI), this.material_body);
    arm_left = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16, 0, Math.PI * 2, 0, Math.PI), this.material_body);
    leg_right = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16, 0, Math.PI * 2, 0, Math.PI), this.material_leg);
    leg_left = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16, 0, Math.PI * 2, 0, Math.PI), this.material_leg);

    tornado = {};
    points_tornado = []

    move = { "max": 0.7, "min": -0.1, "in_out": true, "velocity": 1, "hit": false, "hit_out": false }

    eat_count = 0

    constructor(color = "rgb(254,133,230)", npc = false, equipe_sword = true,) {
        //KIRBY
        this.material_body.color.set(color)

        this.character.add(this.character_up)
        this.character_up.add(this.body)
        this.character_up.add(this.inside_body)
        this.character_up.add(this.eye_right)
        this.character_up.add(this.eye_left)
        this.arm_right_pivot.add(this.arm_right)
        this.character_up.add(this.arm_right_pivot)
        this.character_up.add(this.arm_left)
        this.character.add(this.leg_right)
        this.character.add(this.leg_left)


        //TORNADO
        if (!npc) {
            for (let i = 50; i < 200; i++) {
                this.points_tornado.push(i / 10 * Math.sin(Math.PI / 16 * i), i / 10 * Math.cos(Math.PI / 16 * i), i / 5)
            }
            this.tornado = new LineSegments2(
                new LineSegmentsGeometry().setPositions(this.points_tornado),
                new LineMaterial({ color: 0xffffff, linewidth: 0.005 }));
            this.tornado.scale.set(0.1, 0.1, 0.1)
            this.tornado.position.z = 0
            this.tornado.visible = false
            this.character_up.add(this.tornado)
        }

        //SWORD
        if (equipe_sword) {
            this.sword = new THREE.Mesh();
            this.material_sword = new THREE.MeshToonMaterial({ color: 0xdd7744, wireframe: false })

            this.grip = new THREE.Mesh(new THREE.CylinderGeometry(), this.material_sword);
            this.grip.scale.set(0.15, 1, 0.15)

            this.cross_guard = new THREE.Mesh(new THREE.BoxGeometry(), this.material_sword);
            this.cross_guard.scale.set(1, 0.2, 0.6)
            this.cross_guard.position.y = 0.6

            this.lower_end = new THREE.Mesh(new THREE.CylinderGeometry(1, 0.6, 1, 4), this.material_sword)
            this.lower_end.scale.set(0.5, 2, 0.2)
            this.lower_end.position.y = 1.7

            this.lower_up = new THREE.Mesh(new THREE.CylinderGeometry(0, 1, 1, 4), this.material_sword)
            this.lower_up.scale.set(0.5, 1, 0.2)
            this.lower_up.position.y = 3.2

            this.sword.add(this.grip)
            this.sword.add(this.cross_guard)
            this.sword.add(this.lower_end)
            this.sword.add(this.lower_up)
            this.sword.position.x = -0.6
            this.sword.rotation.set(Math.PI / 180 * -30, Math.PI / 180 * 70, Math.PI / 180 * 30)
            this.sword.scale.set(1, 0.7, 1)
            
            this.arm_right_pivot.add(this.sword)
        }
    }
    
    walk(clicked_keys, objects_eat) {
        this.check_limit()
        let aready_walk = false
        if (clicked_keys.includes("w")) {
            this.character.position.z -= -Math.cos(this.character.rotation.y) * 0.1 * this.move.velocity
            this.character.position.x -= -Math.sin(this.character.rotation.y) * 0.1 * this.move.velocity
            this.position_walk()
            aready_walk = true
        }
        if (clicked_keys.includes("s")) {
            this.character.position.z += -Math.cos(this.character.rotation.y) * 0.1 * this.move.velocity
            this.character.position.x += -Math.sin(this.character.rotation.y) * 0.1 * this.move.velocity
            if (!aready_walk) {
                aready_walk = true
                this.position_walk()
            }
            else aready_walk = false
        }
        if (clicked_keys.includes("a")) {
            this.character.rotation.y += Math.PI / 36
            if (!aready_walk) {
                aready_walk = true
                this.position_walk()
            }
            else aready_walk = false
        }
        if (clicked_keys.includes("d")) {
            this.character.rotation.y -= Math.PI / 36
            if (!aready_walk) {
                aready_walk = true
                this.position_walk()
            }
            else aready_walk = false
        }
        if (clicked_keys.includes("e")) {this.position_eat(objects_eat); inhale_sound.play()} else {inhale_sound.pause(); inhale_sound.currentTime = 0.5}
        if (clicked_keys.includes(" ")) this.move.velocity = 3;
        else this.move.velocity = 1;
        if (clicked_keys.includes("f")) this.position_hit();
        this.animation_hit();
    }

    check_limit() {
        if ((Math.pow(30, 2)) <= Math.pow(this.character.position.x, 2) + Math.pow(this.character.position.z, 2)) {
            // let a = Math.acos(((this.character.position.x * 1) + (this.character.position.z * 0)) / (Math.sqrt(Math.pow(this.character.position.x, 2) + Math.pow(this.character.position.z, 2))) * (Math.sqrt(Math.pow(1, 2) + Math.pow(0, 2)))) * 180 / Math.PI;
            this.character.rotation.y += Math.PI
            this.character.position.z -= -Math.cos(this.character.rotation.y) * 0.5
            this.character.position.x -= -Math.sin(this.character.rotation.y) * 0.5
            wall_hit.play()
        }
    }

    position_default() {
        this.character_up.rotation.set(0, 0, 0)


        this.body.geometry = new THREE.SphereGeometry(1, 32, 16, 0, Math.PI * 2, 0, Math.PI / 180 * 175)
        this.body.rotation.x = -80 * Math.PI / 180;

        this.inside_body.position.set(0, -0.1, 0.6)
        this.inside_body.rotation.x = 10 * Math.PI / 180;

        this.eye_right.position.set(-0.2, 0.3, 0.85)
        this.eye_right.rotation.x = -18.4 * Math.PI / 180
        this.eye_right.scale.set(0.1, 0.3, 0.12)

        this.eye_left.position.set(0.2, 0.3, 0.85)
        this.eye_left.rotation.x = -18.4 * Math.PI / 180
        this.eye_left.scale.set(0.1, 0.3, 0.12)

        this.arm_right_pivot.position.set(-0.6, 0.122, 0)
        this.arm_right_pivot.rotation.set(0, 0, 0)
        this.arm_right.scale.set(0.88, 0.5, 0.35)

        this.arm_left.position.set(0.6, 0.122, 0)
        this.arm_left.rotation.set(0, 0, 0)
        this.arm_left.scale.set(0.88, 0.5, 0.35)

        this.leg_right.position.set(-0.5, -0.9, 0.1)
        this.leg_right.rotation.set(0, 0, 0)
        this.leg_right.scale.set(0.4, 0.3, 0.7)

        this.leg_left.position.set(0.5, -0.9, 0.1)
        this.leg_left.rotation.set(0, 0, 0)
        this.leg_left.scale.set(0.4, 0.3, 0.7)

        this.tornado.visible = false;
    }

    position_eat(objects) {
        let eye_position = [this.eye_left.position.y, this.eye_left.position.z, this.eye_left.rotation.x]
        this.eye_right.position.set(-0.2, (0.033 + eye_position[0]), (eye_position[1] - 0.02))
        this.eye_right.rotation.x = eye_position[2] - (3 * Math.PI / 180)
        this.eye_left.position.set(0.2, (0.033 + eye_position[0]), (eye_position[1] - 0.02))
        this.eye_left.rotation.x = eye_position[2] - (3 * Math.PI / 180)
        let mouth = this.body.geometry.parameters.thetaLength += Math.PI / 180 * -3;
        if (mouth <= Math.PI / 180 * 130) {
            this.tornado.visible = true;
            this.eye_right.position.set(-0.2, 0.8, 0.5)
            this.eye_right.rotation.x = -58.4 * Math.PI / 180
            this.eye_left.position.set(0.2, 0.8, 0.5)
            this.eye_left.rotation.x = -58.4 * Math.PI / 180
            mouth = Math.PI / 180 * 130
            this.eating(objects)
        }
        this.body.geometry = new THREE.SphereGeometry(1, 32, 16, 0, Math.PI * 2, 0, mouth)
    }

    eating(objects) {
        for (let object of objects) {
            let tornadoBox = new THREE.Box3().setFromObject(this.tornado);
            let objectBox = new THREE.Box3().setFromObject(object);
            let bodyBox = new THREE.Box3().setFromObject(this.body);
            if (objectBox.intersectsBox(tornadoBox)) {
                object.position.x -= Math.sin(this.character.rotation.y) * 0.1
                object.position.z -= Math.cos(this.character.rotation.y) * 0.1
                if (objectBox.intersectsBox(bodyBox)) {
                    object.visible = false
                }
            }
        }
    }

    position_walk() {
        if (this.move.in_out) {

            if (this.leg_left.position.z < this.move.min) this.move.in_out = false

            this.arm_left.rotation.y += 0.04 * this.move.velocity
            this.arm_right_pivot.rotation.y += 0.04 * this.move.velocity

            this.leg_left.position.set(0.5, -0.9, this.leg_left.position.z - 0.06 * this.move.velocity)
            this.leg_left.rotation.x += 0.1 * this.move.velocity

            this.leg_right.position.set(-0.5, -0.9, this.leg_right.position.z + 0.06 * this.move.velocity)
            this.leg_right.rotation.x -= 0.1 * this.move.velocity

        } else {
            if (this.leg_left.position.z > this.move.max) this.move.in_out = true

            this.arm_left.rotation.y -= 0.04 * this.move.velocity
            this.arm_right_pivot.rotation.y -= 0.04 * this.move.velocity

            this.leg_left.position.set(0.5, -0.9, this.leg_left.position.z + 0.06 * this.move.velocity)
            this.leg_left.rotation.x -= 0.1 * this.move.velocity

            this.leg_right.position.set(-0.5, -0.9, this.leg_right.position.z - 0.06 * this.move.velocity)
            this.leg_right.rotation.x += 0.1 * this.move.velocity
        }
    }
    position_hit() {
        this.character_up.rotation.y = Math.PI / 180 * -45;
        this.sword.rotation.set(Math.PI / 180 * 30, Math.PI / 180 * 10, Math.PI / 180 * 50)
        this.move.hit = true;
    }

    animation_hit() {
        if (this.move.hit) {
            this.character_up.rotation.y += Math.PI / 24
            if (this.character_up.rotation.y > 2 * Math.PI / 3) {
                this.move.hit = false
                sword_swing.play()
                this.move.hit_out = true
            }
        }
        if (this.move.hit_out) {
            this.character_up.rotation.y -= Math.PI / 12
            if (this.character_up.rotation.y < 0) {
                this.move.hit_out = false
                this.sword.rotation.set(Math.PI / 180 * -30, Math.PI / 180 * 70, Math.PI / 180 * 30)
                this.position_default()
            }
        }
    }
}