var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "ENTRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.6872249032412814,
        "pitch": 0.16300387662512428,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 2.650020107854381,
          "pitch": 0.12804298399053238,
          "rotation": 5.497787143782138,
          "target": "2-pasillo"
        },
        {
          "yaw": -2.0876404723527298,
          "pitch": 0.1771120586231678,
          "rotation": 0.7853981633974483,
          "target": "1-saln"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-saln",
      "name": "SALÓN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.23450276916605617,
        "pitch": 0.058043773872398674,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 2.7140795265636726,
          "pitch": 0.0529082354194621,
          "rotation": 0,
          "target": "2-pasillo"
        },
        {
          "yaw": 2.578885519727895,
          "pitch": 0.15173661611987477,
          "rotation": 5.497787143782138,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pasillo",
      "name": "PASILLO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5979106660549895,
        "pitch": 0.024042116198568664,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 2.7869669201662663,
          "pitch": 0.1575156134786262,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": 0.05225639744319999,
          "pitch": 0.14611945372815427,
          "rotation": 0,
          "target": "3-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-comedor",
      "name": "COMEDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.46687884197612917,
        "pitch": 0.03524263255865989,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 2.8534882962554624,
          "pitch": 0.10222008677588335,
          "rotation": 0,
          "target": "2-pasillo"
        },
        {
          "yaw": -1.7330612444367102,
          "pitch": 0.045345973231754044,
          "rotation": 0,
          "target": "4-cocina"
        },
        {
          "yaw": -0.5833345952863098,
          "pitch": 0.04357317780548442,
          "rotation": 0.7853981633974483,
          "target": "5-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cocina",
      "name": "COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.480838760000154,
        "pitch": 0.08511147196094626,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 1.4645077013291665,
          "pitch": 0.16893333256455279,
          "rotation": 0,
          "target": "3-comedor"
        },
        {
          "yaw": 0.4696079824324144,
          "pitch": 0.09069282602792228,
          "rotation": 5.497787143782138,
          "target": "5-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-patio",
      "name": "PATIO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.1814929893562436,
        "pitch": -0.015598401837969789,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -3.1115437782514963,
          "pitch": 0.059583386015500395,
          "rotation": 0,
          "target": "3-comedor"
        },
        {
          "yaw": 2.388800487405529,
          "pitch": 0.1143837807800363,
          "rotation": 11.780972450961727,
          "target": "6-bao"
        },
        {
          "yaw": -0.04534394889824611,
          "pitch": 0.16966675600247072,
          "rotation": 0,
          "target": "7-dormitorio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bao",
      "name": "BAÑO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.140871556955844,
        "pitch": 0.2976778779019291,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -0.1019207180453936,
          "pitch": 0.13420355083960267,
          "rotation": 0,
          "target": "5-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dormitorio",
      "name": "DORMITORIO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.3084060296176965,
        "pitch": 0.3107577368629926,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -1.20151080916761,
          "pitch": 0.12471122362804365,
          "rotation": 0,
          "target": "5-patio"
        },
        {
          "yaw": -2.3391313242423166,
          "pitch": 0.1627673841909587,
          "rotation": 0,
          "target": "8-aseo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-aseo",
      "name": "ASEO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9246088294510386,
        "pitch": 0.9833226464012128,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 1.0238141890306132,
          "pitch": 0.2913381911430619,
          "rotation": 0,
          "target": "7-dormitorio"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
