// levels and enemies definitions
var levels = {
    1: {
            enemiesNo: 15,
            poster: "background/vaison-la-romaine.jpg",
            sfx: "sfx/34538__erdie__sheep.mp3",
            enemy: [
                // stena vpravo nahore
                {id:"a1", x:850, y:85, axis:"y", speed:-0.4, howMany:110, scale:0.2, texture:"gfx/sheep.png", mask:"813.92857,-6.4285714 807.85714,17.857143 803.57143,31.071429 809.28571,43.571429 816.07143,52.857143 825.35714,61.428571 846.42857,58.214286 868.92857,56.071429 875,50.357143 884.64286,45.714286 895.35714,43.571429 903.57143,43.214286 911.07143,38.571429 920,36.785714 926.78571,-3.5714286"},
                // stena vpravo nahore mirne nalevo
                {id:"a2", x:628, y:170, axis:"y", speed:-0.6, howMany:90, scale:0.2, texture:"gfx/sheep.png", mask:"606.07143,152.5 649.28571,109.64286 660.07143,71.428571 561.07143,80"},
                // okno vez napravo
                {id:"a3", x:510, y:195, axis:"x", speed:0.4, howMany:50, scale:0.1, texture:"gfx/sheep.png", mask:"520,176.42857 523.92857,204.28571 540.71429,201.78571 536.42857,172.14286 523.92857,172.5"},
                // zed vpravo zboku
                {id:"a4", x:658, y:348, axis:"x", speed:-0.5, howMany:120, scale:0.3, texture:"gfx/sheep.png", mask:"622.14286,303.92857 631.42857,361.07143 638.21429,366.42857 631.42857,372.85714 631.07143,384.64286 560,388.57143 560,308"},
                // kanal
                {id:"a5", x:352, y:530, axis:"y", speed:-0.4, howMany:135, scale:0.25, texture:"gfx/sheep.png", mask:"318.21429,487.14286 321.42857,492.5 338.92857,494.28571 356.78571,493.21429 373.92857,489.64286 383.21429,485 383.92857,479.28571 387.85714,424.64286 295.71429,425.35714"},
                // okno nade dvermi
                {id:"a6", x:330, y:280, axis:"y", speed:-0.3, howMany:90, scale:0.11, texture:"gfx/sheep.png", mask:"318.92857,221.07143 317.5,266.07143 340.71429,262.5 342.14286,216.42857 331.07143,216.07143"},
                // okno v kulate vezi
                {id:"a7", x:492, y:257, axis:"x", speed:-0.4, howMany:50, scale:0.09, texture:"gfx/sheep.png", mask:"462.85714,239.64286 464.28571,266.07143 481.07143,265.71429 477.85714,239.64286"},
                // strecha kostela mirne vpravo
                {id:"a8", x:375, y:170, axis:"y", speed:-0.4, howMany:85, scale:0.15, texture:"gfx/sheep.png", mask:"348.92857,146.42857 399.64286,150 410.35714,98.571429 346.42857,96.785714"},
                // strecha kostela mirne vlevo
                {id:"a9", x:292, y:190, axis:"y", speed:-0.4, howMany:90, scale:0.14, texture:"gfx/sheep.png", mask:"275.35714,175.35714 311.78571,153.57143 315,110 259.64286,121.42857"},
                // zed vlevo zboku
                {id:"a10", x:170, y:390, axis:"x", speed:0.42, howMany:120, scale:0.21, texture:"gfx/sheep.png", mask:"202.5,359.28571 195.71429,415.71429 240,415 251.42857,342.85714"},
                // okno vlevo nahore
                {id:"a11", x:165, y:235, axis:"x", speed:0.4, howMany:80, scale:0.15, texture:"gfx/sheep.png", mask:"186.07143,203.21429 178.92857,246.42857 208.92857,249.64286 221.07143,205"},
                // okno vlevo dole
                {id:"a12", x:70, y:365, axis:"x", speed:0.6, howMany:100, scale:0.3, texture:"gfx/sheep.png", mask:"121.42857,303.92857 103.57143,386.42857 170,389.28571 180,308.92857"},
                // strecha veze vpravo
                {id:"a13", x:503, y:175, axis:"y", speed:-0.5, howMany:50, scale:0.1, texture:"gfx/sheep.png", mask:"490,160 514.28571,155 522.14286,116.78571 478.21429,129.64286"},
                // zespodu dole
                {id:"a14", x:780, y:680, axis:"y", speed:-1.5, howMany:150, scale:1.1, texture:"gfx/sheep.png", mask:""}
            ]
        },
    2: {
            enemiesNo: 15,
            poster: "background/pont-du-gard.jpg",
            sfx: "sfx/41528__jamius__pig.mp3",
            enemy: [
                // stredni oblouk vpravo
                {id:"b1", x:460, y:410, axis:"x", speed:-0.4, howMany:120, scale:0.17, texture:"gfx/rabbit.png", mask:"428.2,460.4 432.1,457.5 436.4,446.1 435.7,422.1 429.3,421.8 426.8,417.1 436.4,415 436.8,395.4 427.9,392.9 427.1,384.6 437.1,384.6 437.1,362.9 357.9,362.1 357.9,456.8"},
                // stredni oblouk druhy zprava
                {id:"b2", x:360, y:350, axis:"x", speed:-0.4, howMany:90, scale:0.13, texture:"gfx/rabbit.png", mask:"340.4,380.7 341.1,364.3 334.6,363.9 334.6,358.6 341.8,358.6 341.1,347.9 341.4,345.4 332.9,344.6 333.6,338.2 341.8,337.9 340.7,322.1 292.9,323.2 292.9,380"},
                // stredni oblouk uplne vlevo 
                {id:"b3", x:310, y:324, axis:"x", speed:-0.4, howMany:80, scale:0.09, texture:"gfx/rabbit.png", mask:"287.9,343.2 288.2,332.1 282.5,331.8 282.5,326.8 290,326.4 289.6,315.7 283.6,315.7 283.9,311.4 288.9,311.1 288.9,300 251.1,299.6 250,343.6"},
                // sloup dole na brehu
                {id:"b4", x:290, y:456, axis:"x", speed:-0.3, howMany:110, scale:0.09, texture:"gfx/rabbit.png", mask:"272.1,473.6 271.8,438.6 227.1,437.5 227.9,475"},
                // horni oblouk uplne vlevo
                {id:"b5", x:390, y:190, axis:"x", speed:-0.3, howMany:80, scale:0.08, texture:"gfx/rabbit.png", mask:"354.3,202.1 373.6,202.1 375,196.4 374.6,192.5 368.9,188.9 368.9,186.8 373.6,186.1 373.2,175.4 370,166.8 345.7,167.1 345,201.4"},
                // horni oblouk stredni vlevo
                {id:"b6", x:520, y:176, axis:"x", speed:-0.35, howMany:90, scale:0.1, texture:"gfx/rabbit.png", mask:"451.4,140.4 495,141.1 501.1,150.7 503.6,164.6 504.3,169.3 498.9,169.3 498.2,172.1 504.6,178.6 504.6,189.6 446.4,193.6"},
                // horni oblouk stredni vpravo
                {id:"b7", x:688, y:158, axis:"x", speed:-0.4, howMany:130, scale:0.14, texture:"gfx/rabbit.png", mask:"660.7,177.5 661.1,160.4 655,153.6 661.4,148.9 660.4,128.9 658.2,128.2 646.1,110.4 577.9,109.6 575,184.6"},
                // horni oblouk vpravo
                {id:"b8", x:777, y:200, axis:"y", speed:-0.6, howMany:90, scale:0.15, texture:"gfx/rabbit.png", mask:"751.8,120 751.1,138.2 750.4,149.3 757.9,151.4 748.2,160.7 748.6,172.5 800.7,168.6 800,120 787.1,120"},
                // horni obruba vpravo
                {id:"b9", x:620, y:80, axis:"y", speed:-0.45, howMany:125, scale:0.14, texture:"gfx/rabbit.png", mask:"594.3,-0.7143 593.9,48.21 682.9,18.21 681.8,-0.7143"},
                // horni obruba vlevo
                {id:"b10", x:370, y:150, axis:"y", speed:-0.4, howMany:100, scale:0.08, texture:"gfx/rabbit.png", mask:"353.9,92.5 400.7,74.29 404.3,107.9 354.3,128.2"},
                // stredni oblouk vprostred na druhou stranu vlevo 
                {id:"b11", x:375, y:368, axis:"x", speed:0.4, howMany:90, scale:-0.1, texture:"gfx/rabbit.png", mask:"400.7,320 399.6,359.3 407.1,361.1 407.1,363.2 400.7,365.7 399.6,386.1 436.8,384.6 436.1,363.6 429.6,358.6 437.1,355.4 436.8,338.2 432.5,334.3 437.1,330 436.1,322.5 427.5,318.9"},
                // stredni oblouk vprostred na druhou stranu vpravo
                {id:"b12", x:500, y:440, axis:"x", speed:0.45, howMany:100, scale:-0.12, texture:"gfx/rabbit.png", mask:"525.7,400 526.4,461.8 588.2,458.9 586.4,398.6"},
                // zespodu dole vlevo
                {id:"b13", x:90, y:610, axis:"y", speed:-1.2, howMany:115, scale:-1, texture:"gfx/rabbit.png", mask:""}
            ]
        },
    3: {
            enemiesNo: 15,
            poster: "background/vaison-la-romaine2.jpg",
            sfx: "sfx/57181__erdie__camel.mp3",
            dieStyle: true,
            enemy: [
                // kasna dole 
                {id:"c1", x:140, y:520, axis:"x", speed:0.8, howMany:120, scale:0.5, texture:"gfx/dromebody.png", mask:"314.3,455 229.3,463.6 229.3,497.9 195,502.1 192.9,533.6 322.9,567.1"},
                // strom vlevo
                {id:"c2", x:30, y:460, axis:"x", speed:0.8, howMany:140, scale:0.9, texture:"gfx/dromebody.png", mask:"273.6,355.7 132.9,355.7 123.6,426.4 130,446.4 129.3,462.1 122.1,474.3 126.4,495 139.3,508.6 190,532.9 329.3,520"},
                // okno uprostred
                {id:"c3", x:450, y:247, axis:"x", speed:-0.25, howMany:100, scale:-0.18, texture:"gfx/drome.png", mask:"415,226.4 434.3,231.4 433.6,260.7 414.3,255"},
                // dvere uprostred
                {id:"c4", x:585, y:390, axis:"x", speed:-0.31, howMany:90, scale:-0.2, texture:"gfx/dromebody.png", mask:"534.3,364.3 535.7,409.3 565.7,407.9 562.1,361.4"},
                // dvere schodiste vpravo
                {id:"c5", x:720, y:315, axis:"x", speed:0.4, howMany:85, scale:0.3, texture:"gfx/drome.png", mask:"767.1,287.1 783.6,342.1 746.4,325.7 737.1,290.7"},
                // okno s muskaty
                {id:"c6", x:804, y:244, axis:"y", speed:-0.4, howMany:90, scale:0.25, texture:"gfx/drome.png", mask:"792.9,225 825.7,213.6 815,186.4 781.4,197.1"},
                // velka vrata
                {id:"c7", x:593, y:390, axis:"x", speed:0.4, howMany:80, scale:0.24, texture:"gfx/dromebody.png", mask:"619.3,350.7 627.9,419.3 662.9,420.7 653.6,361.4"},
                // komin napravo
                {id:"c8", x:920, y:90, axis:"x", speed:-0.5, howMany:60, scale:-0.35, texture:"gfx/drome.png", mask:"838.6,61 889.3,61.43 909.3,104.3 855.7,128.6"},
                // strecha napravo 
                {id:"c9", x:720, y:159, axis:"y", speed:-0.4, howMany:90, scale:0.3, texture:"gfx/drome.png", mask:"685.7,80 688.6,125.7 750,141.4 739.3,107.9 737.1,81.43"},
                // strecha nad oknem
                {id:"c10", x:600, y:204, axis:"y", speed:-0.4, howMany:110, scale:-0.28, texture:"gfx/drome.png", mask:"626.4,112.9 632.1,151.4 580,187.9 575.7,145.7"},
                // roh domu uprostred zleva
                {id:"c11", x:470, y:395, axis:"x", speed:0.4, howMany:85, scale:0.2, texture:"gfx/dromebody.png", mask:"502.9,369.3 503.6,422.9 547.9,424.3 545.7,367.1"},
                // zespodu dole vpravo
                {id:"c12", x:881, y:610, axis:"y", speed:-1.5, howMany:115, scale:-1.5, texture:"gfx/drome.png", mask:""}
            ]
        }
};
