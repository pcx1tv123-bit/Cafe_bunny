/* MODEL FILE: เฉพาะ หัว ไฟล์นี้ */
window.MODEL_LIBRARY = window.MODEL_LIBRARY || {};
window.MODEL_LIBRARY.head_only = (id) => {
        return { "format_version": "1.21.0",
  "minecraft:geometry": [
    {
      "description": {
        "identifier": "geometry.bunny_1",
        "texture_width": 64,
        "texture_height": 64,
        "visible_bounds_width": 5,
        "visible_bounds_height": 4,
        "visible_bounds_offset": [
          0,
          1,
          0
        ]
      },
      "bones": [
        {
          "name": "root",
          "pivot": [
            0,
            0,
            0
          ]
        },
        {
          "name": "waist",
          "parent": "root",
          "pivot": [
            0,
            12,
            0
          ]
        },
        {
          "name": "body",
          "parent": "waist",
          "pivot": [
            0,
            24,
            0
          ]
        },
        {
          "name": "head",
          "parent": "body",
          "pivot": [
            0,
            24,
            0
          ],
          "cubes": [
            {
              "origin": [
                -4,
                24,
                -4
              ],
              "size": [
                8,
                8,
                8
              ],
              "uv": {
                "north": {
                  "uv": [
                    8,
                    8
                  ],
                  "uv_size": [
                    8,
                    8
                  ]
                },
                "east": {
                  "uv": [
                    0,
                    8
                  ],
                  "uv_size": [
                    8,
                    8
                  ]
                },
                "south": {
                  "uv": [
                    24,
                    8
                  ],
                  "uv_size": [
                    8,
                    8
                  ]
                },
                "west": {
                  "uv": [
                    16,
                    8
                  ],
                  "uv_size": [
                    8,
                    8
                  ]
                },
                "up": {
                  "uv": [
                    8,
                    0
                  ],
                  "uv_size": [
                    8,
                    8
                  ]
                },
                "down": {
                  "uv": [
                    16,
                    8
                  ],
                  "uv_size": [
                    8,
                    -8
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "hat",
          "parent": "head",
          "pivot": [
            0,
            24,
            0
          ],
          "cubes": [
            {
              "origin": [
                -4,
                24,
                -4
              ],
              "size": [
                8,
                8,
                8
              ],
              "inflate": 0.5,
              "uv": {
                "north": {
                  "uv": [
                    40,
                    8
                  ],
                  "uv_size": [
                    8,
                    8
                  ]
                },
                "east": {
                  "uv": [
                    32,
                    8
                  ],
                  "uv_size": [
                    8,
                    8
                  ]
                },
                "south": {
                  "uv": [
                    56,
                    8
                  ],
                  "uv_size": [
                    8,
                    8
                  ]
                },
                "west": {
                  "uv": [
                    48,
                    8
                  ],
                  "uv_size": [
                    8,
                    8
                  ]
                },
                "up": {
                  "uv": [
                    40,
                    0
                  ],
                  "uv_size": [
                    8,
                    8
                  ]
                },
                "down": {
                  "uv": [
                    48,
                    8
                  ],
                  "uv_size": [
                    8,
                    -8
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Eye",
          "parent": "head",
          "pivot": [
            0,
            27.125,
            -4.03125
          ],
          "cubes": [
            {
              "origin": [
                0.5,
                25,
                -4.03125
              ],
              "size": [
                2.9,
                1.7,
                0
              ],
              "uv": {
                "north": {
                  "uv": [
                    11.80469,
                    13.10156
                  ],
                  "uv_size": [
                    0.58203,
                    0.50391
                  ]
                }
              }
            },
            {
              "origin": [
                -3.5,
                25,
                -4.03125
              ],
              "size": [
                2.9,
                1.7,
                0
              ],
              "uv": {
                "north": {
                  "uv": [
                    12.38672,
                    13.35156
                  ],
                  "uv_size": [
                    -0.45703,
                    0.37891
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Hair",
          "parent": "head",
          "pivot": [
            0,
            24,
            4
          ],
          "cubes": [
            {
              "origin": [
                -4,
                12,
                3.75
              ],
              "size": [
                8,
                12,
                0
              ],
              "inflate": 0.25,
              "uv": {
                "south": {
                  "uv": [
                    32,
                    36
                  ],
                  "uv_size": [
                    8,
                    12
                  ]
                },
                "down": {
                  "uv": [
                    28,
                    36
                  ],
                  "uv_size": [
                    8,
                    -4
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "jacket",
          "parent": "body",
          "pivot": [
            0,
            24,
            0
          ]
        },
        {
          "name": "cape",
          "parent": "body",
          "pivot": [
            0,
            24,
            -3
          ]
        }
      ]
    }
  ]
}};