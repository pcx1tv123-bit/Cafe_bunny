/* MODEL FILE: เฉพาะตัว ไม่มีหัว ไฟล์นี้ */
window.MODEL_LIBRARY = window.MODEL_LIBRARY || {};
window.MODEL_LIBRARY.body_no_head = (id) => {
        return { "format_version": "1.21.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.bunny_3",
				"texture_width": 64,
				"texture_height": 64,
				"visible_bounds_width": 5,
				"visible_bounds_height": 4,
				"visible_bounds_offset": [0, 1, 0]
			},
			"bones": [
				{
					"name": "root",
					"pivot": [0, 0, 0]
				},
				{
					"name": "waist",
					"parent": "root",
					"pivot": [0, 12, 0]
				},
				{
					"name": "body",
					"parent": "waist",
					"pivot": [0, 24, 0],
					"cubes": [
						{
							"origin": [-4, 12, -2],
							"size": [8, 12, 4],
							"uv": {
								"north": {"uv": [20, 20], "uv_size": [8, 12]},
								"east": {"uv": [16, 20], "uv_size": [4, 12]},
								"south": {"uv": [32, 20], "uv_size": [8, 12]},
								"west": {"uv": [28, 20], "uv_size": [4, 12]},
								"up": {"uv": [20, 16], "uv_size": [8, 4]},
								"down": {"uv": [28, 20], "uv_size": [8, -4]}
							}
						}
					]
				},
				{
					"name": "jacket",
					"parent": "body",
					"pivot": [0, 24, 0]
				},
				{
					"name": "cape",
					"parent": "body",
					"pivot": [0, 24, -3]
				},
				{
					"name": "leftArm",
					"parent": "body",
					"pivot": [5, 21.5, 0],
					"cubes": [
						{"origin": [4, 11.5, -2], "size": [3, 12, 4], "uv": [32, 48]}
					]
				},
				{
					"name": "leftSleeve2",
					"parent": "leftArm",
					"pivot": [5, 21.5, 0],
					"cubes": [
						{"origin": [4, 11.5, -2], "size": [3, 12, 4], "inflate": 0.25, "uv": [48, 48]}
					]
				},
				{
					"name": "leftItem2",
					"parent": "leftArm",
					"pivot": [6, 14.5, 1]
				},
				{
					"name": "rightArm",
					"parent": "body",
					"pivot": [-5, 21.5, 0],
					"cubes": [
						{"origin": [-7, 11.5, -2], "size": [3, 12, 4], "uv": [40, 16]}
					]
				},
				{
					"name": "rightSleeve2",
					"parent": "rightArm",
					"pivot": [-5, 21.5, 0],
					"cubes": [
						{"origin": [-7, 11.5, -2], "size": [3, 12, 4], "inflate": 0.25, "uv": [40, 32]}
					]
				},
				{
					"name": "rightItem2",
					"parent": "rightArm",
					"pivot": [-6, 14.5, 1],
					"locators": {
						"lead_hold": [-6, 14.5, 1]
					}
				},
				{
					"name": "rightLeg",
					"parent": "root",
					"pivot": [-1.9, 12, 0],
					"cubes": [
						{
							"origin": [-3.9, 0, -2],
							"size": [4, 12, 4],
							"uv": {
								"north": {"uv": [4, 20], "uv_size": [4, 12]},
								"east": {"uv": [0, 20], "uv_size": [4, 12]},
								"south": {"uv": [12, 20], "uv_size": [4, 12]},
								"west": {"uv": [8, 20], "uv_size": [4, 12]},
								"up": {"uv": [4, 16], "uv_size": [4, 4]},
								"down": {"uv": [8, 20], "uv_size": [4, -4]}
							}
						}
					]
				},
				{
					"name": "rightPants",
					"parent": "rightLeg",
					"pivot": [-1.9, 12, 0],
					"cubes": [
						{
							"origin": [-3.9, 0, -2],
							"size": [4, 12, 4],
							"inflate": 0.25,
							"uv": {
								"north": {"uv": [4, 36], "uv_size": [4, 12]},
								"east": {"uv": [0, 36], "uv_size": [4, 12]},
								"south": {"uv": [12, 36], "uv_size": [4, 12]},
								"west": {"uv": [8, 36], "uv_size": [4, 12]},
								"up": {"uv": [4, 32], "uv_size": [4, 4]},
								"down": {"uv": [8, 36], "uv_size": [4, -4]}
							}
						}
					]
				},
				{
					"name": "leftLeg",
					"parent": "root",
					"pivot": [1.9, 12, 0],
					"cubes": [
						{
							"origin": [1.9, 0, 0],
							"size": [4, 12, 4],
							"pivot": [2, 0, 2],
							"rotation": [0, 87.5, 0],
							"uv": {
								"north": {"uv": [20.125, 52], "uv_size": [-4, 12]},
								"east": {"uv": [27.625, 52], "uv_size": [4, 12]},
								"south": {"uv": [24.25, 52], "uv_size": [-4, 12]},
								"west": {"uv": [20.125, 52], "uv_size": [4, 12]},
								"up": {"uv": [24.375, 48], "uv_size": [-4, 4]},
								"down": {"uv": [28.375, 52], "uv_size": [-4, -4]}
							}
						}
					]
				},
				{
					"name": "leftPants",
					"parent": "leftLeg",
					"pivot": [1.9, 12, 0],
					"cubes": [
						{
							"origin": [-0.1, 0, -2],
							"size": [4, 12, 4],
							"inflate": 0.25,
							"uv": {
								"north": {"uv": [4, 52], "uv_size": [4, 12]},
								"east": {"uv": [0, 52], "uv_size": [4, 12]},
								"south": {"uv": [12, 52], "uv_size": [4, 12]},
								"west": {"uv": [8, 52], "uv_size": [4, 12]},
								"up": {"uv": [4, 48], "uv_size": [4, 4]},
								"down": {"uv": [8, 52], "uv_size": [4, -4]}
							}
						}
					]
				}
			]
		}
	]
}};