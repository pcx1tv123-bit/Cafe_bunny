/* ANIMATION SOURCE: fly
 * โค้ดต้นทางของอนิเมชัน fly == ผม ; ระบบส่งออกจะรวม/บันทึกแต่ละชุดครั้งเดียวต่อ RP
 */
window.ANIMATION_LIBRARY = window.ANIMATION_LIBRARY || {};
window.ANIMATION_LIBRARY.fly = {"format_version": "1.8.0",
  "animations": {
    "animation.cafebunny.fly": {
      "loop": true,
      "animation_length": 3.5,
      "bones": {
        "righteye": {
          "position": [
            "math.clamp(query.target_y_rotation,0,45)/-45",
            0,
            0
          ]
        },
        "eyelid": {
          "scale": {
            "2.5": [
              1,
              0,
              1
            ],
            "3.0": [
              1,
              1,
              1
            ],
            "3.5": [
              1,
              0,
              1
            ]
          }
        },
        "lefteye": {
          "position": [
            "math.clamp(query.target_y_rotation,-45,0)/-45",
            0,
            0
          ]
        }
      }
    }
  }
};
