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
                            rect: ['29px', '200px', '50px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'smallJerseyCopy',
                            type: 'image',
                            rect: ['123px', '95px', '50px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'smallJerseyCopy2',
                            type: 'image',
                            rect: ['222px', '416px', '50px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'smallJerseyCopy3',
                            type: 'image',
                            rect: ['325px', '180px', '50px', '51px', 'auto', 'auto'],
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
                            type: 'image',
                            rect: ['17px', '123px', '25px', '15px', 'auto', 'auto'],
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
                    duration: 3500,
                    autoPlay: true,
                    data: [
                        [
                            "eid254",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy}",
                            '429px',
                            '330px'
                        ],
                        [
                            "eid261",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '330px',
                            '290px'
                        ],
                        [
                            "eid266",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '290px',
                            '195px'
                        ],
                        [
                            "eid274",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '195px',
                            '120px'
                        ],
                        [
                            "eid283",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '120px',
                            '95px'
                        ],
                        [
                            "eid287",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '95px',
                            '85px'
                        ],
                        [
                            "eid253",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy2}",
                            '416px',
                            '315px'
                        ],
                        [
                            "eid262",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${smallJerseyCopy2}",
                            '315px',
                            '275px'
                        ],
                        [
                            "eid265",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${smallJerseyCopy2}",
                            '275px',
                            '190px'
                        ],
                        [
                            "eid276",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${smallJerseyCopy2}",
                            '190px',
                            '110px'
                        ],
                        [
                            "eid281",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${smallJerseyCopy2}",
                            '110px',
                            '85px'
                        ],
                        [
                            "eid272",
                            "left",
                            0,
                            2500,
                            "linear",
                            "${smallJersey}",
                            '29px',
                            '25px'
                        ],
                        [
                            "eid256",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${smallRugbyBall}",
                            '316px',
                            '317px'
                        ],
                        [
                            "eid258",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '317px',
                            '117px'
                        ],
                        [
                            "eid269",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '117px',
                            '116px'
                        ],
                        [
                            "eid270",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '116px',
                            '20px'
                        ],
                        [
                            "eid286",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '20px',
                            '17px'
                        ],
                        [
                            "eid289",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '17px',
                            '15px'
                        ],
                        [
                            "eid282",
                            "left",
                            0,
                            3000,
                            "linear",
                            "${smallJerseyCopy2}",
                            '222px',
                            '221px'
                        ],
                        [
                            "eid275",
                            "left",
                            0,
                            2500,
                            "linear",
                            "${smallJerseyCopy}",
                            '123px',
                            '122px'
                        ],
                        [
                            "eid278",
                            "left",
                            0,
                            2500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '325px',
                            '324px'
                        ],
                        [
                            "eid280",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '324px',
                            '323px'
                        ],
                        [
                            "eid252",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy3}",
                            '398px',
                            '300px'
                        ],
                        [
                            "eid263",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '300px',
                            '260px'
                        ],
                        [
                            "eid264",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '260px',
                            '180px'
                        ],
                        [
                            "eid277",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '180px',
                            '103px'
                        ],
                        [
                            "eid279",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '103px',
                            '78px'
                        ],
                        [
                            "eid255",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJersey}",
                            '442px',
                            '340px'
                        ],
                        [
                            "eid260",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${smallJersey}",
                            '340px',
                            '300px'
                        ],
                        [
                            "eid267",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${smallJersey}",
                            '300px',
                            '200px'
                        ],
                        [
                            "eid273",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${smallJersey}",
                            '200px',
                            '129px'
                        ],
                        [
                            "eid284",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${smallJersey}",
                            '129px',
                            '103px'
                        ],
                        [
                            "eid288",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${smallJersey}",
                            '103px',
                            '86px'
                        ],
                        [
                            "eid257",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallRugbyBall}",
                            '416px',
                            '319px'
                        ],
                        [
                            "eid259",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '319px',
                            '307px'
                        ],
                        [
                            "eid268",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '307px',
                            '212px'
                        ],
                        [
                            "eid271",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '212px',
                            '146px'
                        ],
                        [
                            "eid285",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '146px',
                            '123px'
                        ],
                        [
                            "eid290",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '123px',
                            '104px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("passBehind_edgeActions.js");
})("EDGE-4135780");
