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
                            rect: ['42px', '351px', '50px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'smallJerseyCopy',
                            type: 'image',
                            rect: ['132px', '135px', '50px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'smallJerseyCopy2',
                            type: 'image',
                            rect: ['221px', '130px', '50px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'smallJerseyCopy3',
                            type: 'image',
                            rect: ['311px', '160px', '50px', '51px', 'auto', 'auto'],
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
                            rect: ['35px', '158px', '25px', '15px', 'auto', 'auto'],
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
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid87",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy}",
                            '320px',
                            '280px'
                        ],
                        [
                            "eid98",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${smallJerseyCopy}",
                            '280px',
                            '210px'
                        ],
                        [
                            "eid103",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${smallJerseyCopy}",
                            '210px',
                            '135px'
                        ],
                        [
                            "eid112",
                            "top",
                            3000,
                            250,
                            "linear",
                            "${smallJerseyCopy}",
                            '135px',
                            '115px'
                        ],
                        [
                            "eid117",
                            "top",
                            3250,
                            750,
                            "linear",
                            "${smallJerseyCopy}",
                            '115px',
                            '50px'
                        ],
                        [
                            "eid84",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy2}",
                            '320px',
                            '270px'
                        ],
                        [
                            "eid97",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${smallJerseyCopy2}",
                            '270px',
                            '210px'
                        ],
                        [
                            "eid102",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${smallJerseyCopy2}",
                            '210px',
                            '130px'
                        ],
                        [
                            "eid113",
                            "top",
                            3000,
                            250,
                            "linear",
                            "${smallJerseyCopy2}",
                            '130px',
                            '110px'
                        ],
                        [
                            "eid116",
                            "top",
                            3250,
                            750,
                            "linear",
                            "${smallJerseyCopy2}",
                            '110px',
                            '50px'
                        ],
                        [
                            "eid64",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${smallJersey}",
                            '42px',
                            '42px'
                        ],
                        [
                            "eid88",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJersey}",
                            '351px',
                            '325px'
                        ],
                        [
                            "eid99",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${smallJersey}",
                            '325px',
                            '240px'
                        ],
                        [
                            "eid104",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${smallJersey}",
                            '240px',
                            '160px'
                        ],
                        [
                            "eid111",
                            "top",
                            3000,
                            250,
                            "linear",
                            "${smallJersey}",
                            '160px',
                            '140px'
                        ],
                        [
                            "eid118",
                            "top",
                            3250,
                            750,
                            "linear",
                            "${smallJersey}",
                            '140px',
                            '50px'
                        ],
                        [
                            "eid67",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${smallJerseyCopy2}",
                            '221px',
                            '221px'
                        ],
                        [
                            "eid68",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${smallJerseyCopy3}",
                            '311px',
                            '311px'
                        ],
                        [
                            "eid81",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${smallJerseyCopy3}",
                            '311px',
                            '311px'
                        ],
                        [
                            "eid100",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${smallRugbyBall}",
                            '300px',
                            '124px'
                        ],
                        [
                            "eid109",
                            "left",
                            3000,
                            250,
                            "linear",
                            "${smallRugbyBall}",
                            '124px',
                            '35px'
                        ],
                        [
                            "eid82",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy3}",
                            '271px',
                            '230px'
                        ],
                        [
                            "eid96",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${smallJerseyCopy3}",
                            '230px',
                            '160px'
                        ],
                        [
                            "eid101",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${smallJerseyCopy3}",
                            '160px',
                            '110px'
                        ],
                        [
                            "eid114",
                            "top",
                            3000,
                            250,
                            "linear",
                            "${smallJerseyCopy3}",
                            '110px',
                            '90px'
                        ],
                        [
                            "eid115",
                            "top",
                            3250,
                            750,
                            "linear",
                            "${smallJerseyCopy3}",
                            '90px',
                            '50px'
                        ],
                        [
                            "eid66",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${smallJerseyCopy}",
                            '132px',
                            '132px'
                        ],
                        [
                            "eid94",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallRugbyBall}",
                            '287px',
                            '248px'
                        ],
                        [
                            "eid95",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${smallRugbyBall}",
                            '248px',
                            '225px'
                        ],
                        [
                            "eid107",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${smallRugbyBall}",
                            '225px',
                            '153px'
                        ],
                        [
                            "eid110",
                            "top",
                            3000,
                            250,
                            "linear",
                            "${smallRugbyBall}",
                            '153px',
                            '158px'
                        ],
                        [
                            "eid119",
                            "top",
                            3250,
                            750,
                            "linear",
                            "${smallRugbyBall}",
                            '158px',
                            '68px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("missPass_edgeActions.js");
})("EDGE-4135780");
