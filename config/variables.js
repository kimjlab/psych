const interstimuli_interval = {
  instructions: 1000
}

const gonogo = {
  trial_length: 30,
  trial_target: 3,
  trial_target_probability: 0.2,
  trial_duration: 2000,
  interstimuli_interval: 1000,
}

const stroop = {
  trial_length: 2,
  trial_duration: 2000,
  interstimuli_interval: 1000
}

const letter_memory = {
  letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  trial_length: 5,
  trial_target: 3,
  trial_duration: 1000,
  recall_duration: 5000
}

const letter_number = {
  letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '123456789',
  quadrants: ['top-right', 'top-left', 'bottom-left', 'bottom-right'],
  trial_length: 5,
  choices: [1, 2]
}

const local_global = {
  images: ["./img/big_s_blue.svg", "./img/big_h_blue.svg", "./img/big_s_green.svg", "./img/big_h_green.svg"],
  cue: ["LARGE", "SMALL"],
  choices: [1, 2],
  image_height: 200,
  trial_duration: 4000,
  interstimuli_interval: 500,
  trial_length: 2
}

const color_shape = {
  images: ["./img/green_circle.svg", "./img/blue_triangle.svg", "./img/blue_circle.svg", "./img/green_triangle.svg"],
  cue: ["SHAPE", "COLOR"],
  choices: [1, 2],
  cue_duration: 200,
  cue_interstimuli_interval: 200,
  trial_duration: 2000,
  interstimuli_interval: 600,
  trial_length: 2
}