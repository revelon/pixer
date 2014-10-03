// levels and enemies definitions
var levels = {
    1: {
            enemiesNo: 15,
            poster: "background/vaison-la-romaine.JPG",
            music: "",
            enemy: [
                // stena vpravo nahore
                {id:"a1", x:850, y:80, axis:"y", speed:-0.4, howMany:130, scale:0.4, texture:"gfx/sheep.png", mask:"813.92857,-6.4285714 807.85714,17.857143 803.57143,31.071429 809.28571,43.571429 816.07143,52.857143 825.35714,61.428571 846.42857,58.214286 868.92857,56.071429 875,50.357143 884.64286,45.714286 895.35714,43.571429 903.57143,43.214286 911.07143,38.571429 920,36.785714 926.78571,-3.5714286"},
                // stena vpravo nahore mirne nalevo
                {id:"a2", x:625, y:140, axis:"y", speed:-0.6, howMany:55, scale:0.4, texture:"gfx/sheep.png", mask:"606.07143,152.5 649.28571,109.64286 660.07143,71.428571 561.07143,80"},
                // okno vez napravo
                {id:"a3", x:510, y:185, axis:"x", speed:0.4, howMany:40, scale:0.2, texture:"gfx/sheep.png", mask:"520,176.42857 523.92857,204.28571 540.71429,201.78571 536.42857,172.14286 523.92857,172.5"},
                // zed vpravo zboku
                {id:"a4", x:660, y:340, axis:"x", speed:-0.5, howMany:120, scale:0.6, texture:"gfx/sheep.png", mask:"622.14286,303.92857 631.42857,361.07143 638.21429,366.42857 631.42857,372.85714 631.07143,384.64286 560,388.57143 560,308"},
                // kanal
                {id:"a5", x:352, y:520, axis:"y", speed:-0.4, howMany:160, scale:0.5, texture:"gfx/sheep.png", mask:"318.21429,487.14286 321.42857,492.5 338.92857,494.28571 356.78571,493.21429 373.92857,489.64286 383.21429,485 383.92857,479.28571 387.85714,424.64286 295.71429,425.35714"},
                // okno nade dvermi
                {id:"a6", x:325, y:280, axis:"y", speed:-0.4, howMany:90, scale:0.25, texture:"gfx/sheep.png", mask:"318.92857,221.07143 317.5,266.07143 340.71429,262.5 342.14286,216.42857 331.07143,216.07143"},
                // okno v kulate vezi
                {id:"a7", x:490, y:255, axis:"x", speed:-0.4, howMany:50, scale:0.2, texture:"gfx/sheep.png", mask:"462.85714,239.64286 464.28571,266.07143 481.07143,265.71429 477.85714,239.64286"},
                // strecha kostela mirne vpravo
                {id:"a8", x:375, y:170, axis:"y", speed:-0.4, howMany:100, scale:0.3, texture:"gfx/sheep.png", mask:"348.92857,146.42857 399.64286,150 410.35714,98.571429 346.42857,96.785714"},
                // strecha kostela mirne vlevo
                {id:"a9", x:295, y:182, axis:"y", speed:-0.4, howMany:90, scale:0.25, texture:"gfx/sheep.png", mask:"275.35714,175.35714 311.78571,153.57143 315,110 259.64286,121.42857"},
                // zed vlevo zboku
                {id:"a10", x:170, y:385, axis:"x", speed:0.4, howMany:120, scale:0.4, texture:"gfx/sheep.png", mask:"202.5,359.28571 195.71429,415.71429 240,415 251.42857,342.85714"},
                // okno vlevo nahore
                {id:"a11", x:160, y:224, axis:"x", speed:0.4, howMany:85, scale:0.3, texture:"gfx/sheep.png", mask:"186.07143,203.21429 178.92857,246.42857 208.92857,249.64286 221.07143,205"},
                // okno vlevo dole
                {id:"a12", x:60, y:340, axis:"x", speed:0.6, howMany:130, scale:0.6, texture:"gfx/sheep.png", mask:"121.42857,303.92857 103.57143,386.42857 170,389.28571 180,308.92857"},
                // strecha veze vpravo
                {id:"a13", x:503, y:170, axis:"y", speed:-0.5, howMany:50, scale:0.2, texture:"gfx/sheep.png", mask:"490,160 514.28571,155 522.14286,116.78571 478.21429,129.64286"},
                // zespodu dole
                {id:"a14", x:590, y:610, axis:"y", speed:-1.2, howMany:115, scale:1.2, texture:"gfx/sheep.png", mask:""}
            ]
        },
    2: {
            enemiesNo: 5,
            poster: "background/IMG_1165.JPG",
            music: "",
            enemy: [
                {id:3,x:200, y:-60, axis:"y", speed:0.2, howMany:800, rotate:-.01, texture:"gfx/sheep.png"},
                {id:4,x:480, y:420, axis:"x", speed:-0.2, howMany:500, rotate:-.01, texture:"gfx/sheep.png"},
                {id:5,x:880, y:200, axis:"x", speed:-0.4, howMany:500, scale:2, texture:"gfx/sheep.png"},
                {id:6,x:-80, y:300, axis:"x", speed:0.2, howMany:700, rotate:.01, texture:"gfx/sheep.png"},
                {id:7,x:300, y:560, axis:"y", speed:-0.2, howMany:500, rotate:.01, texture:"gfx/sheep.png"}
            ]
        },
    3: {
            enemiesNo: 5,
            poster: "background/IMG_6210.JPG",
            music: "",
            enemy: [
                {id:8,x:200, y:-60, axis:"y", speed:0.2, howMany:800, texture:"gfx/cdf-soldier.png"},
                {id:9,x:480, y:420, axis:"x", speed:-0.2, howMany:500, texture:"gfx/cdf-soldier.png"},
                {id:10,x:880, y:200, axis:"x", speed:-0.4, howMany:500, scale:2, texture:"gfx/cdf-soldier.png"},
                {id:11,x:-80, y:300, axis:"x", speed:0.2, howMany:700, texture:"gfx/cdf-soldier.png"},
                {id:12,x:300, y:560, axis:"y", speed:-0.2, howMany:500, texture:"gfx/cdf-soldier.png"}
            ]
        }
};
