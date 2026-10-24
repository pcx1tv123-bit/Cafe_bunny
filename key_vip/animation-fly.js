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
				"eyelid": {
					"scale": {
						"2.5": [1, 0, 1],
						"3.0": [1, 1, 1],
						"3.5": [1, 0, 1]
					}
				},
				"Hair": {
					"rotation": [
						"-math.clamp(math.lerp(0, -110, query.cape_flap_amount) - (13 * query.modified_move_speed), -90, 0)+query.eye_target_y_rotation",
						"query.target_y_rotation",
						0
					]
				}
			}
		}
	}
};
