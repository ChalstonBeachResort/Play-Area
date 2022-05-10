var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.00163450348893,
        "pitch": 0.091764369045638,
        "fov": 1.1991635784062282
      },
      "linkHotspots": [
        {
          "yaw": 2.222550484592821,
          "pitch": 0.02078065038882393,
          "rotation": 0,
          "target": "1-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2",
      "name": "2",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.319859579383783,
        "pitch": -0.04632024336816265,
        "fov": 1.1991635784062282
      },
      "linkHotspots": [
        {
          "yaw": -3.1105646724681275,
          "pitch": 0.0208019614286723,
          "rotation": 0,
          "target": "0-1"
        },
        {
          "yaw": 0.430103964343477,
          "pitch": 0.013748420290886187,
          "rotation": 0,
          "target": "2-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3",
      "name": "3",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.9192594269836327,
        "pitch": -0.0302056316978927,
        "fov": 1.1991635784062282
      },
      "linkHotspots": [
        {
          "yaw": -1.169190265622806,
          "pitch": -0.0009794757118868347,
          "rotation": 0,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Play Area",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
