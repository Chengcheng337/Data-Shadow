let dataScore = 0;
let particles = [];
let message = "Choose an activity to begin.";

let buttons = [
  {
    x: 40,
    y: 150,
    w: 190,
    h: 55,
    label: "Watch a video",
    points: 8
  },
  {
    x: 40,
    y: 220,
    w: 190,
    h: 55,
    label: "Shop online",
    points: 12
  },
  {
    x: 40,
    y: 290,
    w: 190,
    h: 55,
    label: "Use navigation",
    points: 15
  },
  {
    x: 40,
    y: 360,
    w: 190,
    h: 55,
    label: "Post a photo",
    points: 10
  }
];

let particleColors = [
  [93, 225, 230],
  [255, 80, 190],
  [255, 195, 65],
  [155, 120, 255]
];

function setup() {
  createCanvas(900, 600);
  textFont("Arial");
}