/* MODEL FILE: เต็มตัว ไฟล์นี้ */
window.MODEL_LIBRARY = window.MODEL_LIBRARY || {};
window.MODEL_LIBRARY.full_body = (id) => {
        return {
	"format_version": "1.12.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": `geometry.${id}`,
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
					"name": "head",
					"parent": "body",
					"pivot": [0, 24, 0],
					"cubes": [
						{
							"origin": [-4, 24, -4],
							"size": [8, 8, 8],
							"uv": {
								"north": {"uv": [8, 8], "uv_size": [8, 8]},
								"east": {"uv": [0, 8], "uv_size": [8, 8]},
								"south": {"uv": [24, 8], "uv_size": [8, 8]},
								"west": {"uv": [16, 8], "uv_size": [8, 8]},
								"up": {"uv": [8, 0], "uv_size": [8, 8]},
								"down": {"uv": [16, 8], "uv_size": [8, -8]}
							}
						}
					]
				},
				{
					"name": "hat",
					"parent": "head",
					"pivot": [0, 24, 0],
					"cubes": [
						{
							"origin": [-4, 24, -4],
							"size": [8, 8, 8],
							"inflate": 0.5,
							"uv": {
								"north": {"uv": [40, 8], "uv_size": [8, 8]},
								"east": {"uv": [32, 8], "uv_size": [8, 8]},
								"south": {"uv": [56, 8], "uv_size": [8, 8]},
								"west": {"uv": [48, 8], "uv_size": [8, 8]},
								"up": {"uv": [40, 0], "uv_size": [8, 8]},
								"down": {"uv": [48, 8], "uv_size": [8, -8]}
							}
						}
					]
				},
				{
					"name": "Eye",
					"parent": "head",
					"pivot": [0, 27.125, -4.03125],
					"cubes": [
						{
							"origin": [0.5, 25, -4.03125],
							"size": [2.9, 1.7, 0],
							"uv": {
								"north": {"uv": [11.80469, 13.10156], "uv_size": [0.58203, 0.50391]}
							}
						},
						{
							"origin": [-3.5, 25, -4.03125],
							"size": [2.9, 1.7, 0],
							"uv": {
								"north": {"uv": [12.38672, 13.35156], "uv_size": [-0.45703, 0.37891]}
							}
						}
					]
				},
				{
					"name": "Hair",
					"parent": "head",
					"pivot": [0, 24, 4],
					"cubes": [
						{
							"origin": [-4, 12, 3.75],
							"size": [8, 12, 0],
							"inflate": 0.25,
							"uv": {
								"south": {"uv": [32, 36], "uv_size": [8, 12]},
								"down": {"uv": [28, 36], "uv_size": [8, -4]}
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
					"name": "Hair2",
					"parent": "body",
					"pivot": [0, 24, 0],
					"cubes": [
						{
							"origin": [-4, 12, -2],
							"size": [8, 12, 0],
							"inflate": 0.25,
							"uv": {
								"north": {"uv": [20, 36], "uv_size": [8, 12]},
								"east": {"uv": [16, 36], "uv_size": [4, 12]},
								"west": {"uv": [28, 36], "uv_size": [4, 12]},
								"down": {"uv": [28, 36], "uv_size": [8, -4]}
							}
						}
					]
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
}
};