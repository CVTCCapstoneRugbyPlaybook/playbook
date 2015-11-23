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
                            rect: ['37px', '290px', '30px', '30px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'smallJerseyCopy',
                            type: 'image',
                            rect: ['111px', '300px', '30px', '30px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'smallJerseyCopy2',
                            type: 'image',
                            rect: ['259px', '290px', '30px', '30px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'smallJerseyCopy4',
                            type: 'image',
                            rect: ['185px', '430px', '30px', '30px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'smallJerseyCopy3',
                            type: 'image',
                            rect: ['333px', '75px', '30px', '30px', 'auto', 'auto'],
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
                            rect: ['178px', '289px', '16px', '12px', 'auto', 'auto'],
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
                            "eid336",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy}",
                            '440px',
                            '340px'
                        ],
                        [
                            "eid342",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '340px',
                            '300px'
                        ],
                        [
                            "eid348",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '300px',
                            '250px'
                        ],
                        [
                            "eid355",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '250px',
                            '200px'
                        ],
                        [
                            "eid360",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '200px',
                            '150px'
                        ],
                        [
                            "eid367",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '150px',
                            '100px'
                        ],
                        [
                            "eid372",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '100px',
                            '75px'
                        ],
                        [
                            "eid335",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy4}",
                            '430px',
                            '330px'
                        ],
                        [
                            "eid341",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${smallJerseyCopy4}",
                            '330px',
                            '280px'
                        ],
                        [
                            "eid347",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${smallJerseyCopy4}",
                            '280px',
                            '230px'
                        ],
                        [
                            "eid353",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${smallJerseyCopy4}",
                            '230px',
                            '180px'
                        ],
                        [
                            "eid359",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${smallJerseyCopy4}",
                            '180px',
                            '130px'
                        ],
                        [
                            "eid365",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${smallJerseyCopy4}",
                            '130px',
                            '80px'
                        ],
                        [
                            "eid371",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${smallJerseyCopy4}",
                            '80px',
                            '75px'
                        ],
                        [
                            "eid322",
                            "left",
                            0,
                            0,
                            "linear",
                            "${smallJerseyCopy4}",
                            '185px',
                            '185px'
                        ],
                        [
                            "eid324",
                            "left",
                            0,
                            0,
                            "linear",
                            "${smallJersey}",
                            '37px',
                            '37px'
                        ],
                        [
                            "eid321",
                            "left",
                            0,
                            0,
                            "linear",
                            "${smallJerseyCopy2}",
                            '259px',
                            '259px'
                        ],
                        [
                            "eid337",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJersey}",
                            '450px',
                            '350px'
                        ],
                        [
                            "eid343",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${smallJersey}",
                            '350px',
                            '290px'
                        ],
                        [
                            "eid349",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${smallJersey}",
                            '290px',
                            '240px'
                        ],
                        [
                            "eid356",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${smallJersey}",
                            '240px',
                            '190px'
                        ],
                        [
                            "eid361",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${smallJersey}",
                            '190px',
                            '140px'
                        ],
                        [
                            "eid368",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${smallJersey}",
                            '140px',
                            '90px'
                        ],
                        [
                            "eid373",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${smallJersey}",
                            '90px',
                            '75px'
                        ],
                        [
                            "eid334",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy2}",
                            '420px',
                            '320px'
                        ],
                        [
                            "eid340",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${smallJerseyCopy2}",
                            '320px',
                            '290px'
                        ],
                        [
                            "eid346",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${smallJerseyCopy2}",
                            '290px',
                            '240px'
                        ],
                        [
                            "eid352",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${smallJerseyCopy2}",
                            '240px',
                            '190px'
                        ],
                        [
                            "eid358",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${smallJerseyCopy2}",
                            '190px',
                            '140px'
                        ],
                        [
                            "eid366",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${smallJerseyCopy2}",
                            '140px',
                            '100px'
                        ],
                        [
                            "eid370",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${smallJerseyCopy2}",
                            '100px',
                            '75px'
                        ],
                        [
                            "eid344",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${smallRugbyBall}",
                            '324px',
                            '178px'
                        ],
                        [
                            "eid362",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '178px',
                            '178px'
                        ],
                        [
                            "eid375",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${smallRugbyBall}",
                            '178px',
                            '32px'
                        ],
                        [
                            "eid320",
                            "left",
                            0,
                            0,
                            "linear",
                            "${smallJerseyCopy3}",
                            '333px',
                            '333px'
                        ],
                        [
                            "eid332",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy3}",
                            '410px',
                            '310px'
                        ],
                        [
                            "eid338",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '310px',
                            '260px'
                        ],
                        [
                            "eid345",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '260px',
                            '210px'
                        ],
                        [
                            "eid351",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '210px',
                            '160px'
                        ],
                        [
                            "eid357",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '160px',
                            '110px'
                        ],
                        [
                            "eid364",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '110px',
                            '75px'
                        ],
                        [
                            "eid323",
                            "left",
                            0,
                            0,
                            "linear",
                            "${smallJerseyCopy}",
                            '111px',
                            '111px'
                        ],
                        [
                            "eid333",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallRugbyBall}",
                            '420px',
                            '320px'
                        ],
                        [
                            "eid339",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '320px',
                            '289px'
                        ],
                        [
                            "eid350",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '289px',
                            '239px'
                        ],
                        [
                            "eid354",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '239px',
                            '190px'
                        ],
                        [
                            "eid363",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '190px',
                            '150px'
                        ],
                        [
                            "eid369",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '150px',
                            '100px'
                        ],
                        [
                            "eid374",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '100px',
                            '85px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("doubleMiss_edgeActions.js");
})("EDGE-4135780");
