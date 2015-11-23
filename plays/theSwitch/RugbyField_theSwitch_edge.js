/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'rugby-pitch',
                            type: 'image',
                            rect: ['-91px', '90px', '583px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rugby-pitch.gif",'0px','0px'],
                            transform: [[],['90']]
                        },
                        {
                            id: 'smallJersey',
                            type: 'image',
                            rect: ['50px', '351px', '50px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'smallJerseyCopy',
                            type: 'image',
                            rect: ['138px', '220px', '50px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'smallJerseyCopy2',
                            type: 'image',
                            rect: ['232px', '200px', '50px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'smallJerseyCopy3',
                            type: 'image',
                            rect: ['322px', '180px', '50px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'replay',
                            type: 'image',
                            rect: ['25px', '17px', '30px', '30px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"replay.png",'0px','0px']
                        },
                        {
                            id: 'smallRugbyBall',
                            display: 'none',
                            type: 'image',
                            rect: ['235px', '216px', '25px', '15px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0)",im+"smallRugbyBall.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '400px', '583px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid20",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy}",
                            '325px',
                            '220px'
                        ],
                        [
                            "eid45",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${smallJerseyCopy}",
                            '220px',
                            '143px'
                        ],
                        [
                            "eid55",
                            "top",
                            2000,
                            1000,
                            "easeInOutSine",
                            "${smallJerseyCopy}",
                            '143px',
                            '64px'
                        ],
                        [
                            "eid19",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy2}",
                            '299px',
                            '200px'
                        ],
                        [
                            "eid40",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${smallJerseyCopy2}",
                            '200px',
                            '143px'
                        ],
                        [
                            "eid58",
                            "top",
                            2000,
                            1000,
                            "easeInOutSine",
                            "${smallJerseyCopy2}",
                            '143px',
                            '64px'
                        ],
                        [
                            "eid61",
                            "left",
                            2000,
                            1000,
                            "easeInOutSine",
                            "${smallJersey}",
                            '50px',
                            '71px'
                        ],
                        [
                            "eid53",
                            "left",
                            2000,
                            1000,
                            "easeInOutSine",
                            "${smallJerseyCopy3}",
                            '322px',
                            '291px'
                        ],
                        [
                            "eid46",
                            "left",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${smallJerseyCopy}",
                            '138px',
                            '241px'
                        ],
                        [
                            "eid43",
                            "left",
                            1000,
                            1000,
                            "easeInOutSine",
                            "${smallJerseyCopy2}",
                            '232px',
                            '138px'
                        ],
                        [
                            "eid59",
                            "left",
                            2000,
                            1000,
                            "easeInOutSine",
                            "${smallJerseyCopy2}",
                            '138px',
                            '140px'
                        ],
                        [
                            "eid33",
                            "left",
                            750,
                            250,
                            "linear",
                            "${smallRugbyBall}",
                            '313px',
                            '224px'
                        ],
                        [
                            "eid41",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '224px',
                            '185px'
                        ],
                        [
                            "eid47",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '185px',
                            '235px'
                        ],
                        [
                            "eid57",
                            "left",
                            2000,
                            1000,
                            "easeInOutSine",
                            "${smallRugbyBall}",
                            '235px',
                            '236px'
                        ],
                        [
                            "eid35",
                            "display",
                            0,
                            0,
                            "linear",
                            "${smallRugbyBall}",
                            'none',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            750,
                            0,
                            "linear",
                            "${smallRugbyBall}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12",
                            "top",
                            0,
                            0,
                            "linear",
                            "${replay}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid17",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy3}",
                            '274px',
                            '180px'
                        ],
                        [
                            "eid49",
                            "top",
                            1000,
                            1000,
                            "easeInOutSine",
                            "${smallJerseyCopy3}",
                            '180px',
                            '135px'
                        ],
                        [
                            "eid54",
                            "top",
                            2000,
                            1000,
                            "easeInOutSine",
                            "${smallJerseyCopy3}",
                            '135px',
                            '64px'
                        ],
                        [
                            "eid21",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJersey}",
                            '351px',
                            '240px'
                        ],
                        [
                            "eid51",
                            "top",
                            1000,
                            1000,
                            "easeInOutSine",
                            "${smallJersey}",
                            '240px',
                            '150px'
                        ],
                        [
                            "eid60",
                            "top",
                            2000,
                            1000,
                            "easeInOutSine",
                            "${smallJersey}",
                            '150px',
                            '64px'
                        ],
                        [
                            "eid32",
                            "top",
                            750,
                            250,
                            "linear",
                            "${smallRugbyBall}",
                            '221px',
                            '216px'
                        ],
                        [
                            "eid42",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '216px',
                            '193px'
                        ],
                        [
                            "eid48",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '193px',
                            '161px'
                        ],
                        [
                            "eid56",
                            "top",
                            2000,
                            1000,
                            "easeInOutSine",
                            "${smallRugbyBall}",
                            '161px',
                            '82px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("RugbyField_theSwitch_edgeActions.js");
})("EDGE-4135780");
