/* ANIMATION SOURCE: fly
 * โค้ดต้นทางของอนิเมชัน fly == ผม ; ระบบส่งออกจะรวม/บันทึกแต่ละชุดครั้งเดียวต่อ RP
 */
window.ANIMATION_LIBRARY = window.ANIMATION_LIBRARY || {};
window.ANIMATION_LIBRARY.fly = {"format_version": "1.8.0",
	"animations": {
		"animation.cafebunny.fly": {
			"loop": true,
			"bones": {
				"Hair": {
					"relative_to": {
						"rotation": "entity"
					},
					"rotation": [
						"-math.clamp(math.lerp(0, -110, query.cape_flap_amount) - (13 * query.modified_move_speed), -90, 0)+query.eye_target_y_rotation",
						"query.target_y_rotation",
						0
					],
					"position": ["-math.clamp(query.target_y_rotation, -45, 45) / 45 * 0.4", 0, 0]
				},
				"head": {
					"rotation": ["v.smoothHeadX * 0.6", "v.smoothHeadY * 0.6", "v.smoothHeadZ * 0.6"]
				}
				}
			}
		}
	}
};
