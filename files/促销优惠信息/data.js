﻿$axure.loadCurrentPage({
  "url":"促销优惠信息.html",
  "generationDate":new Date(1429794606113.03),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"56a5d33a183c409692de814eb3d626fb",
    "type":"Axure:Page",
    "name":"促销优惠信息",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"5715cc7643774c48a1bfde8ddda74970",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "size":{
              "width":320,
              "height":568}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"1f50155c4fcf484cba74835556b6c8fd",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "size":{
                  "width":320,
                  "height":568}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/促销优惠信息/u0.png"}},
{
          "id":"59e6aad18a7e4a8b99f2ee01a63e0542",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":15,
              "y":36},
            "size":{
              "width":22,
              "height":12}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"ff287584eea242779ec0a9347c7468be",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":15,
                  "y":36},
                "size":{
                  "width":22,
                  "height":12}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 左侧边栏",
                      "target":{
                        "targetType":"page",
                        "url":"左侧边栏.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/左侧边栏/u2.png"}},
{
          "id":"e7ec1d8c32b84796b55d7abd848b1896",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "opacity":"0",
            "location":{
              "x":270,
              "y":25},
            "size":{
              "width":43,
              "height":35}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"139e9232d31a4583a7f0e3011b58f113",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "opacity":"0",
                "location":{
                  "x":270,
                  "y":25},
                "size":{
                  "width":43,
                  "height":35}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示 买卖时间 向下滑动 500 毫秒,<br>(Image) 向下滑动 500 毫秒",
                      "objectsToFades":[{
                          "objectPath":["9fde0233e2dd4868ab78bcf99ed2a5ed"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "easing":"slideDown",
                              "duration":500,
                              "showType":"none"}}},
{
                          "objectPath":["bf317eee6f4941d4a2b405355e88289f"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "easing":"slideDown",
                              "duration":500,
                              "showType":"none"}}}]}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"a36aff71922c4a8d989d62a5dfb041ae",
          "label":"ButtonBigSecondary",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":false,
          "style":{
            "fontSize":"18px",
            "baseStyle":"75622e06d7204397b5590f0ada6b0c32",
            "opacity":"0.6",
            "location":{
              "x":189,
              "y":64},
            "size":{
              "width":130,
              "height":76},
            "visible":false,
            "borderWidth":"3"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"cc3bb4deb5014af1b59baa1885a9ce94",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":false,
              "style":{
                "fontSize":"18px",
                "baseStyle":"75622e06d7204397b5590f0ada6b0c32",
                "opacity":"0.6",
                "location":{
                  "x":189,
                  "y":64},
                "size":{
                  "width":130,
                  "height":76},
                "visible":false,
                "borderWidth":"3"},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/买时间/buttonbigsecondary_u6.png"}},
{
          "id":"9fde0233e2dd4868ab78bcf99ed2a5ed",
          "label":"买卖时间",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":false,
          "style":{
            "location":{
              "x":189,
              "y":64},
            "size":{
              "width":130,
              "height":76},
            "visible":false},
          "adaptiveStyles":{
},
          "scrollbars":"verticalAsNeeded",
          "fitToContent":false,
          "propagate":false,
          "diagrams":[{
              "id":"1526b1ca572b4652903390344ba49c45",
              "label":"State1",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"bf317eee6f4941d4a2b405355e88289f",
                  "label":"",
                  "parentDynamicPanel":"9fde0233e2dd4868ab78bcf99ed2a5ed",
                  "type":"imageBox",
                  "styleType":"imageBox",
                  "visible":true,
                  "style":{
                    "size":{
                      "width":130,
                      "height":76}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"df7a4505230143d1aa2ed0ea145fde58",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"9fde0233e2dd4868ab78bcf99ed2a5ed",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "size":{
                          "width":130,
                          "height":76}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"images/买时间/u9.png"}},
{
                  "id":"b6b01e473d9c4e37a0c3109769d53907",
                  "label":"",
                  "parentDynamicPanel":"9fde0233e2dd4868ab78bcf99ed2a5ed",
                  "type":"buttonShape",
                  "styleType":"buttonShape",
                  "visible":true,
                  "style":{
                    "opacity":"0",
                    "location":{
                      "x":0,
                      "y":1},
                    "size":{
                      "width":130,
                      "height":35}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"38e8473adcb04b1cbefc5c977c998eda",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"9fde0233e2dd4868ab78bcf99ed2a5ed",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "opacity":"0",
                        "location":{
                          "x":0,
                          "y":1},
                        "size":{
                          "width":130,
                          "height":35}},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onClick":{
                      "description":"OnClick",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"linkWindow",
                              "description":"在 当前窗口 打开 发起出售请求页",
                              "target":{
                                "targetType":"page",
                                "url":"发起出售请求页.html",
                                "includeVariables":true},
                              "linkType":"current"}]}]}},
                  "tabbable":true,
                  "images":{
                    "normal~":"resources/images/transparent.gif"}},
{
                  "id":"19d94e2bf07d4df6a89e03e545b4d858",
                  "label":"",
                  "parentDynamicPanel":"9fde0233e2dd4868ab78bcf99ed2a5ed",
                  "type":"buttonShape",
                  "styleType":"buttonShape",
                  "visible":true,
                  "style":{
                    "opacity":"0",
                    "location":{
                      "x":0,
                      "y":41},
                    "size":{
                      "width":130,
                      "height":35}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"cb55c42ba0434bec94ee2b8306073105",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"9fde0233e2dd4868ab78bcf99ed2a5ed",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "opacity":"0",
                        "location":{
                          "x":0,
                          "y":41},
                        "size":{
                          "width":130,
                          "height":35}},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onClick":{
                      "description":"OnClick",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"linkWindow",
                              "description":"在 当前窗口 打开 发起购买请求页",
                              "target":{
                                "targetType":"page",
                                "url":"发起购买请求页.html",
                                "includeVariables":true},
                              "linkType":"current"}]}]}},
                  "tabbable":true,
                  "images":{
                    "normal~":"resources/images/transparent.gif"}}],
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "image":null,
                "imageHorizontalAlignment":"near",
                "imageVerticalAlignment":"near",
                "imageRepeat":"auto"},
              "adaptiveStyles":{
}}]},
{
          "id":"1218e5d33e8742b1a5d5e8865580057f",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "opacity":"0",
            "location":{
              "x":23,
              "y":197},
            "size":{
              "width":60,
              "height":62}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"f8b2ece954c1426f85bbde1982ec65c8",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "opacity":"0",
                "location":{
                  "x":23,
                  "y":197},
                "size":{
                  "width":60,
                  "height":62}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 通知页面",
                      "target":{
                        "targetType":"page",
                        "url":"通知页面.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"d4563ed5923c4bbba929fe180d88dffc",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":96,
              "y":197},
            "size":{
              "width":61,
              "height":62}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"18410a869e484d2586d18dac9b615999",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":96,
                  "y":197},
                "size":{
                  "width":61,
                  "height":62}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 课程页面",
                      "target":{
                        "targetType":"page",
                        "url":"课程页面.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/商户详情页（交易中）/u25.png"}},
{
          "id":"d5e24ce4cfdc4dbe82ac5462d06d1239",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":171,
              "y":196},
            "size":{
              "width":61,
              "height":62}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"3166514f33ff4f4295e09ee37c6eac5f",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":171,
                  "y":196},
                "size":{
                  "width":61,
                  "height":62}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 促销优惠信息",
                      "target":{
                        "targetType":"page",
                        "url":"促销优惠信息.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/促销优惠信息/u19.png"}},
{
          "id":"d0404f9f75d54eeb835c12513eaa32eb",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":245,
              "y":197},
            "size":{
              "width":61,
              "height":62}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"6b09448ef6164168876ec8dc6ff495a7",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":245,
                  "y":197},
                "size":{
                  "width":61,
                  "height":62}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 评价页面",
                      "target":{
                        "targetType":"page",
                        "url":"评价页面.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/促销优惠信息/u21.png"}}]}},
  "masters":{
},
  "objectPaths":{
    "5715cc7643774c48a1bfde8ddda74970":{
      "scriptId":"u0"},
    "1f50155c4fcf484cba74835556b6c8fd":{
      "scriptId":"u1"},
    "59e6aad18a7e4a8b99f2ee01a63e0542":{
      "scriptId":"u2"},
    "ff287584eea242779ec0a9347c7468be":{
      "scriptId":"u3"},
    "e7ec1d8c32b84796b55d7abd848b1896":{
      "scriptId":"u4"},
    "139e9232d31a4583a7f0e3011b58f113":{
      "scriptId":"u5"},
    "a36aff71922c4a8d989d62a5dfb041ae":{
      "scriptId":"u6"},
    "cc3bb4deb5014af1b59baa1885a9ce94":{
      "scriptId":"u7"},
    "9fde0233e2dd4868ab78bcf99ed2a5ed":{
      "scriptId":"u8"},
    "bf317eee6f4941d4a2b405355e88289f":{
      "scriptId":"u9"},
    "df7a4505230143d1aa2ed0ea145fde58":{
      "scriptId":"u10"},
    "b6b01e473d9c4e37a0c3109769d53907":{
      "scriptId":"u11"},
    "38e8473adcb04b1cbefc5c977c998eda":{
      "scriptId":"u12"},
    "19d94e2bf07d4df6a89e03e545b4d858":{
      "scriptId":"u13"},
    "cb55c42ba0434bec94ee2b8306073105":{
      "scriptId":"u14"},
    "1218e5d33e8742b1a5d5e8865580057f":{
      "scriptId":"u15"},
    "f8b2ece954c1426f85bbde1982ec65c8":{
      "scriptId":"u16"},
    "d4563ed5923c4bbba929fe180d88dffc":{
      "scriptId":"u17"},
    "18410a869e484d2586d18dac9b615999":{
      "scriptId":"u18"},
    "d5e24ce4cfdc4dbe82ac5462d06d1239":{
      "scriptId":"u19"},
    "3166514f33ff4f4295e09ee37c6eac5f":{
      "scriptId":"u20"},
    "d0404f9f75d54eeb835c12513eaa32eb":{
      "scriptId":"u21"},
    "6b09448ef6164168876ec8dc6ff495a7":{
      "scriptId":"u22"}}});