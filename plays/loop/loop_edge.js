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
                            rect: ['41px', '445px', '50px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'smallJerseyCopy',
                            type: 'image',
                            rect: ['131px', '155px', '50px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'smallJerseyCopy2',
                            type: 'image',
                            rect: ['287px', '104px', '50px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallJersey.png",'0px','0px']
                        },
                        {
                            id: 'smallJerseyCopy3',
                            type: 'image',
                            rect: ['201px', '112px', '50px', '51px', 'auto', 'auto'],
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
                            rect: ['279px', '242px', '25px', '15px', 'auto', 'auto'],
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
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid145",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy}",
                            '425px',
                            '375px'
                        ],
                        [
                            "eid152",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${smallJerseyCopy}",
                            '375px',
                            '365px'
                        ],
                        [
                            "eid181",
                            "top",
                            1250,
                            750,
                            "linear",
                            "${smallJerseyCopy}",
                            '365px',
                            '256px'
                        ],
                        [
                            "eid190",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '256px',
                            '222px'
                        ],
                        [
                            "eid197",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '222px',
                            '155px'
                        ],
                        [
                            "eid202",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '155px',
                            '124px'
                        ],
                        [
                            "eid209",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '124px',
                            '111px'
                        ],
                        [
                            "eid217",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '111px',
                            '78px'
                        ],
                        [
                            "eid144",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy2}",
                            '405px',
                            '355px'
                        ],
                        [
                            "eid153",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${smallJerseyCopy2}",
                            '355px',
                            '343px'
                        ],
                        [
                            "eid169",
                            "top",
                            1250,
                            250,
                            "linear",
                            "${smallJerseyCopy2}",
                            '343px',
                            '325px'
                        ],
                        [
                            "eid172",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${smallJerseyCopy2}",
                            '325px',
                            '293px'
                        ],
                        [
                            "eid176",
                            "top",
                            1750,
                            250,
                            "linear",
                            "${smallJerseyCopy2}",
                            '293px',
                            '224px'
                        ],
                        [
                            "eid185",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${smallJerseyCopy2}",
                            '224px',
                            '186px'
                        ],
                        [
                            "eid192",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${smallJerseyCopy2}",
                            '186px',
                            '124px'
                        ],
                        [
                            "eid200",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${smallJerseyCopy2}",
                            '124px',
                            '104px'
                        ],
                        [
                            "eid206",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${smallJerseyCopy2}",
                            '104px',
                            '91px'
                        ],
                        [
                            "eid214",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${smallJerseyCopy2}",
                            '91px',
                            '78px'
                        ],
                        [
                            "eid183",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${smallJersey}",
                            '41px',
                            '40px'
                        ],
                        [
                            "eid146",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJersey}",
                            '445px',
                            '395px'
                        ],
                        [
                            "eid151",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${smallJersey}",
                            '395px',
                            '385px'
                        ],
                        [
                            "eid184",
                            "top",
                            1250,
                            750,
                            "linear",
                            "${smallJersey}",
                            '385px',
                            '267px'
                        ],
                        [
                            "eid191",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${smallJersey}",
                            '267px',
                            '237px'
                        ],
                        [
                            "eid199",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${smallJersey}",
                            '237px',
                            '175px'
                        ],
                        [
                            "eid205",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${smallJersey}",
                            '175px',
                            '142px'
                        ],
                        [
                            "eid211",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${smallJersey}",
                            '142px',
                            '117px'
                        ],
                        [
                            "eid219",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${smallJersey}",
                            '117px',
                            '78px'
                        ],
                        [
                            "eid182",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${smallJerseyCopy}",
                            '131px',
                            '121px'
                        ],
                        [
                            "eid189",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '121px',
                            '111px'
                        ],
                        [
                            "eid198",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '111px',
                            '112px'
                        ],
                        [
                            "eid210",
                            "left",
                            3000,
                            1000,
                            "linear",
                            "${smallJerseyCopy}",
                            '112px',
                            '111px'
                        ],
                        [
                            "eid218",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${smallJerseyCopy}",
                            '111px',
                            '112px'
                        ],
                        [
                            "eid148",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${smallRugbyBall}",
                            '302px',
                            '303px'
                        ],
                        [
                            "eid149",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${smallRugbyBall}",
                            '303px',
                            '212px'
                        ],
                        [
                            "eid170",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${smallRugbyBall}",
                            '212px',
                            '263px'
                        ],
                        [
                            "eid174",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${smallRugbyBall}",
                            '263px',
                            '289px'
                        ],
                        [
                            "eid179",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${smallRugbyBall}",
                            '289px',
                            '279px'
                        ],
                        [
                            "eid187",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '279px',
                            '188px'
                        ],
                        [
                            "eid203",
                            "left",
                            2500,
                            1000,
                            "linear",
                            "${smallRugbyBall}",
                            '188px',
                            '105px'
                        ],
                        [
                            "eid212",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '105px',
                            '35px'
                        ],
                        [
                            "eid161",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy3}",
                            '315px',
                            '316px'
                        ],
                        [
                            "eid166",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '316px',
                            '270px'
                        ],
                        [
                            "eid163",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${smallJerseyCopy3}",
                            '270px',
                            '220px'
                        ],
                        [
                            "eid167",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${smallJerseyCopy3}",
                            '220px',
                            '201px'
                        ],
                        [
                            "eid195",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${smallJerseyCopy3}",
                            '201px',
                            '200px'
                        ],
                        [
                            "eid159",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallJerseyCopy3}",
                            '385px',
                            '335px'
                        ],
                        [
                            "eid160",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${smallJerseyCopy3}",
                            '335px',
                            '325px'
                        ],
                        [
                            "eid162",
                            "top",
                            1250,
                            250,
                            "linear",
                            "${smallJerseyCopy3}",
                            '325px',
                            '290px'
                        ],
                        [
                            "eid164",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${smallJerseyCopy3}",
                            '290px',
                            '285px'
                        ],
                        [
                            "eid165",
                            "top",
                            1750,
                            250,
                            "linear",
                            "${smallJerseyCopy3}",
                            '285px',
                            '249px'
                        ],
                        [
                            "eid186",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '249px',
                            '205px'
                        ],
                        [
                            "eid194",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '205px',
                            '137px'
                        ],
                        [
                            "eid201",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '137px',
                            '112px'
                        ],
                        [
                            "eid208",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '112px',
                            '98px'
                        ],
                        [
                            "eid216",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${smallJerseyCopy3}",
                            '98px',
                            '78px'
                        ],
                        [
                            "eid168",
                            "left",
                            0,
                            1250,
                            "linear",
                            "${smallJerseyCopy2}",
                            '220px',
                            '221px'
                        ],
                        [
                            "eid180",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${smallJerseyCopy2}",
                            '221px',
                            '270px'
                        ],
                        [
                            "eid173",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${smallJerseyCopy2}",
                            '270px',
                            '295px'
                        ],
                        [
                            "eid177",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${smallJerseyCopy2}",
                            '295px',
                            '287px'
                        ],
                        [
                            "eid193",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${smallJerseyCopy2}",
                            '287px',
                            '286px'
                        ],
                        [
                            "eid207",
                            "left",
                            3000,
                            1000,
                            "linear",
                            "${smallJerseyCopy2}",
                            '286px',
                            '287px'
                        ],
                        [
                            "eid215",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${smallJerseyCopy2}",
                            '287px',
                            '286px'
                        ],
                        [
                            "eid147",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${smallRugbyBall}",
                            '403px',
                            '353px'
                        ],
                        [
                            "eid150",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${smallRugbyBall}",
                            '353px',
                            '361px'
                        ],
                        [
                            "eid171",
                            "top",
                            1250,
                            250,
                            "linear",
                            "${smallRugbyBall}",
                            '361px',
                            '341px'
                        ],
                        [
                            "eid175",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${smallRugbyBall}",
                            '341px',
                            '311px'
                        ],
                        [
                            "eid178",
                            "top",
                            1750,
                            250,
                            "linear",
                            "${smallRugbyBall}",
                            '311px',
                            '242px'
                        ],
                        [
                            "eid188",
                            "top",
                            2000,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '242px',
                            '222px'
                        ],
                        [
                            "eid196",
                            "top",
                            2500,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '222px',
                            '155px'
                        ],
                        [
                            "eid204",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '155px',
                            '142px'
                        ],
                        [
                            "eid213",
                            "top",
                            3500,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '142px',
                            '134px'
                        ],
                        [
                            "eid220",
                            "top",
                            4000,
                            500,
                            "linear",
                            "${smallRugbyBall}",
                            '134px',
                            '96px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("loop_edgeActions.js");
})("EDGE-4135780");