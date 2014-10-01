// levels and enemies definitions
var levels = {
    1: {
            enemiesNo: 5,
            poster: "background/IMG_7259.JPG",
            music: "",
            enemy: [
                {id:1,x:324, y:274, axis:"y", speed:-0.5, howMany:80, rotate:-.01, scale:0.2, texture:"gfx/cdf-soldier.png", mask:"283.57143,220.57646 317.85714,219.14789 317.5,267.00504 340.71429,263.79075 342.14286,220.21932 365.35714,221.29075 365.71429,285.21932 366.42857,303.79075 282.85714,301.29075"},
                {id:2,x:-20, y:300, axis:"x", speed:0.5, howMany:70, rotate:.01, texture:"gfx/sheep.png"},
                {id:22,x:880, y:200, axis:"x", speed:-0.4, howMany:500, scale:2, texture:"gfx/sheep.png"}                
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
