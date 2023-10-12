AFRAME.registerComponent("ball", {
    init: function () {
      this.releaseBall();
    },
    releaseBall: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "r") {
          var ball = document.createElement("a-entity");

          ball.setAttribute("gltf-model", "./models/ball.glb"); 

          ball.setAttribute("scale", { x: 3, y: 3, z: 3});

          var cam = document.querySelector("#camera");
  
          pos = cam.getAttribute("position");
  
          ball.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
          });
  
          var camera = document.querySelector("#camera").object3D;
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
          ball.setAttribute("velocity", direction.multiplyScalar(-10));
  
          var scene = document.querySelector("#scene");
  
          scene.appendChild(ball);
        }
      });
    },
    removeBall:function(e){
      var element = e.detail.target.el
      var elementHit = e.detail.body.el

      if(elementHit.id.includes("pin")){
        var impluse = new CANNON.Vec3(0,1,-15)
        var worldPoint = new CANNON.Vec3().copy
        elementHit.getAttribute("position")
      }
      elementHit.body.applyForce(impluse,worldPoint)
      element.removeEventListener("collide",this.removeBall)

      var scene = document.querySelector("#scene")
      scene.removeChild(element)
    }
  });