TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 60,
  "hfov": 360,
  "partial": false,
  "id": "panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624",
  "hfovMax": 120,
  "pitch": 0,
  "frames": [
   {
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_88FBA8E7_847E_C19C_41D8_82AF0D65B5F6",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 38,
           "url": "media/panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 123.87,
        "hfov": 16.27,
        "pitch": -9.09
       }
      ],
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_8E0770E8_8472_C195_41D6_D41B9CE2A8A2, this.camera_8A6CDDD8_8493_43B4_41DA_86F1AD93C43E); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 123.87,
        "pitch": -9.09,
        "roll": 0,
        "hfov": 16.27,
        "image": {
         "levels": [
          {
           "height": 1627,
           "width": 312,
           "url": "media/panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8A2661A6_8476_C39C_41CD_0D65320EB0DF",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 74,
           "width": 74,
           "url": "media/panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 20.92,
        "hfov": 7.6,
        "pitch": -14.64
       }
      ],
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_8D207037_8473_40FC_4179_FA0F6D557D90, this.camera_8A67FDE9_8493_4394_41DC_07EF1218A1F6); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 20.92,
        "pitch": -14.64,
        "hfov": 7.6,
        "image": {
         "levels": [
          {
           "height": 148,
           "width": 149,
           "url": "media/panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8A034560_8472_C094_41C8_FE22E4DDF0D7",
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 89,
           "width": 82,
           "url": "media/panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 122.46,
        "hfov": 8.55,
        "pitch": -6.45
       }
      ],
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 122.46,
        "pitch": -6.45,
        "hfov": 8.55,
        "image": {
         "levels": [
          {
           "height": 179,
           "width": 164,
           "url": "media/panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3437,
       "width": 6874,
       "url": "media/panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624_t.jpg"
   }
  ],
  "vfov": 180,
  "class": "Panorama",
  "label": "tu09tpc-a-large-bed-in-a-room",
  "thumbnailUrl": "media/panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624_t.jpg",
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMin": 60,
     "hfov": 360,
     "partial": false,
     "id": "panorama_8E0770E8_8472_C195_41D6_D41B9CE2A8A2",
     "hfovMax": 120,
     "pitch": 0,
     "frames": [
      {
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_89C17726_8471_C09D_41A3_12D558E53027",
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 188,
              "width": 69,
              "url": "media/panorama_8E0770E8_8472_C195_41D6_D41B9CE2A8A2_0_HS_0_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 56.93,
           "hfov": 24.7,
           "pitch": -6.45
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 56.93,
           "pitch": -6.45,
           "roll": 0,
           "hfov": 24.7,
           "image": {
            "levels": [
             {
              "height": 377,
              "width": 139,
              "url": "media/panorama_8E0770E8_8472_C195_41D6_D41B9CE2A8A2_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_8AE37971_8471_C377_41DE_EC28A92952DD",
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 28,
              "width": 32,
              "url": "media/panorama_8E0770E8_8472_C195_41D6_D41B9CE2A8A2_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 53.52,
           "hfov": 11.57,
           "pitch": -5.3
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624, this.camera_8A531DC6_8493_439C_41C1_B49643CC7FE0); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 53.52,
           "pitch": -5.3,
           "hfov": 11.57,
           "image": {
            "levels": [
             {
              "height": 57,
              "width": 64,
              "url": "media/panorama_8E0770E8_8472_C195_41D6_D41B9CE2A8A2_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "height": 1000,
          "width": 2000,
          "url": "media/panorama_8E0770E8_8472_C195_41D6_D41B9CE2A8A2_hq.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_8E0770E8_8472_C195_41D6_D41B9CE2A8A2_t.jpg"
      }
     ],
     "vfov": 180,
     "class": "Panorama",
     "label": "sd21f4o-a-bedroom-with-a-bed-and-a-mirror-in-a-room",
     "thumbnailUrl": "media/panorama_8E0770E8_8472_C195_41D6_D41B9CE2A8A2_t.jpg",
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624",
       "class": "AdjacentPanorama",
       "yaw": 53.52,
       "backwardYaw": 123.87,
       "distance": 1
      }
     ]
    },
    "class": "AdjacentPanorama",
    "yaw": 123.87,
    "backwardYaw": 53.52,
    "distance": 1
   },
   {
    "panorama": {
     "hfovMin": 60,
     "hfov": 360,
     "partial": false,
     "id": "panorama_8D207037_8473_40FC_4179_FA0F6D557D90",
     "hfovMax": 120,
     "pitch": 0,
     "frames": [
      {
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_8A5DA8AE_848E_C1EC_41BC_E909215B8FFB",
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 54,
              "width": 57,
              "url": "media/panorama_8D207037_8473_40FC_4179_FA0F6D557D90_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 82.77,
           "hfov": 9.89,
           "pitch": -16.48
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624, this.camera_8A7D0DF8_8493_4374_41C3_517F8DCD1A8E); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 82.77,
           "pitch": -16.48,
           "hfov": 9.89,
           "image": {
            "levels": [
             {
              "height": 109,
              "width": 114,
              "url": "media/panorama_8D207037_8473_40FC_4179_FA0F6D557D90_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           }
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "height": 2000,
          "width": 4000,
          "url": "media/panorama_8D207037_8473_40FC_4179_FA0F6D557D90_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_8D207037_8473_40FC_4179_FA0F6D557D90.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_8D207037_8473_40FC_4179_FA0F6D557D90_t.jpg"
      }
     ],
     "vfov": 180,
     "class": "Panorama",
     "label": "xl1n5ms-a-living-room-filled-with-furniture-and-a-fireplace",
     "thumbnailUrl": "media/panorama_8D207037_8473_40FC_4179_FA0F6D557D90_t.jpg",
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624",
       "class": "AdjacentPanorama",
       "yaw": 82.77,
       "backwardYaw": 20.92,
       "distance": 1
      }
     ]
    },
    "class": "AdjacentPanorama",
    "yaw": 20.92,
    "backwardYaw": 82.77,
    "distance": 1
   }
  ]
 },
 {
  "preloadEnabled": false,
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "touchControlMode": "drag_rotation",
  "gyroscopeVerticalDraggingEnabled": true,
  "viewerArea": "this.MainViewer"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 53.53,
   "pitch": -14.72
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_8E0770E8_8472_C195_41D6_D41B9CE2A8A2",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_8E0770E8_8472_C195_41D6_D41B9CE2A8A2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_8D207037_8473_40FC_4179_FA0F6D557D90",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "panorama_8D207037_8473_40FC_4179_FA0F6D557D90_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 90,
   "yaw": -27.84,
   "pitch": -3.63
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624",
    "camera": "this.panorama_8D2716E1_8472_C194_41CF_F99B5B7C1624_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_8E0770E8_8472_C195_41D6_D41B9CE2A8A2",
    "camera": "this.panorama_8E0770E8_8472_C195_41D6_D41B9CE2A8A2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_8D207037_8473_40FC_4179_FA0F6D557D90",
    "camera": "this.panorama_8D207037_8473_40FC_4179_FA0F6D557D90_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_8A531DC6_8493_439C_41C1_B49643CC7FE0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -56.13,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_8A6CDDD8_8493_43B4_41DA_86F1AD93C43E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -126.48,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_8A67FDE9_8493_4394_41DC_07EF1218A1F6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 90,
   "yaw": -97.23,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "id": "camera_8A7D0DF8_8493_4374_41C3_517F8DCD1A8E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -159.08,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 }
], "children": [
 {
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBorderSize": 0,
  "playbackBarRight": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "progressBarBorderSize": 0,
  "playbackBarLeft": 0,
  "progressBarBorderRadius": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "toolTipTextShadowOpacity": 0,
  "progressRight": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressOpacity": 1,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "minHeight": 50,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipPaddingRight": 6,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontStyle": "normal",
  "transitionMode": "blending",
  "playbackBarBorderRadius": 0,
  "paddingTop": 0,
  "toolTipPaddingBottom": 4,
  "minWidth": 100,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "paddingRight": 0,
  "toolTipFontColor": "#606060",
  "paddingBottom": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadow": true,
  "progressLeft": 0,
  "progressBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressOpacity": 1,
  "height": "100%",
  "playbackBarHeadBorderColor": "#000000",
  "progressBorderColor": "#000000",
  "width": "100%",
  "playbackBarBottom": 5,
  "toolTipOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarOpacity": 1,
  "shadow": false,
  "borderRadius": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBorderSize": 0,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "paddingLeft": 0,
  "toolTipFontFamily": "Arial",
  "progressBarOpacity": 1,
  "id": "MainViewer",
  "toolTipShadowColor": "#333333",
  "toolTipShadowVerticalLength": 0,
  "progressBottom": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipBorderColor": "#767676",
  "class": "ViewerArea",
  "playbackBarBackgroundOpacity": 1,
  "progressHeight": 10,
  "playbackBarHeadWidth": 6,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipBorderRadius": 3,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "playbackBarHeight": 10
 }
], 
 "paddingRight": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "vrPolyfillScale": 0.5,
 "overflow": "visible",
 "width": "100%",
 "gap": 10,
 "scripts": {
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getKey": function(key){  return window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "existsKey": function(key){  return key in window; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } }
 },
 "shadow": false,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "minHeight": 20,
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "horizontalAlign": "left",
 "contentOpaque": false,
 "class": "Player",
 "paddingTop": 0,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true
})