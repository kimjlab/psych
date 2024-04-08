const lang = {
  fullscreen: '<div class="text"><p>Tap <b>Next</b> to enter full screen mode.</p></div>',
  welcome: '<div class="text"><p>Welcome to the experiment.</p><p>Tap <b>Next</b> to begin.</p></div>',
  begin: '<div class="text"><p>Now, the experiment will begin.</p><p>When ready, tap <b>Next</b>!</p></div>',
  end: '<div class="text"><p>The experiment has ended.</p><p>Thank you for your participation.</p></div>',
  instructions: {
    gonogo: '<div class="text"><p>Press <b>SPACE</b> if you see a number.</p><p>Do not press anything if you see the number <b>3</b>.</p></div>',
    stroop: '<div class="text"><p>Press the key that corresponds to the color of the word.</p><p>Do not think about the meaning of the word.</p></div>',
    flanker: '<div class="text"><p>You will see 5 arrows.</p><p>See the arrow in the middle.</p><p>Press <b>F</b> for left arrow, and otherwise <b>J</b>.</p></div>',
    letter_memory: (askTarget) => {
      return `<div class="text"><p>In this experiment, you will see a series of letters appear one at a time in the center of the screen.</p><p>Remember the last <b>${askTarget}</b> letters that you see.</p><p>After the last letter disappears, you will be asked to type in the letters that you remember.</p></div>`
    },
    number_letter: '<div class="text"><p>You will see a pair of letter and a  number (e.g., G7).</p><p>When the pair is in the <b>upper</b> area, press 1 if the letter is <b>consonant</b>, and 2 for <b>vowel</b>.</p><p>When the pair is in the <b>lower</b> area, press 1 if the number is <b>odd</b>, and 2 for <b>even</b>.</p></div>',
    local_global: '<div class="text"><p>When the border is <b>BLUE</b>, then look at the large letter. If it is <b>S</b> press 1, <b>H</b> press 2.</p><p>When the border is <b>GREEN</b>, then look at the small letter. If it is <b>S</b> press 1, <b>H</b> press 2.</p></div>',
    color_shape: '<div class="text"><p>When cue word is <b>SHAPE</b>, press 1 if Circle, and 2 for Triangle.</p><p>When cue word is <b>COLOR</b>, press 1 if Blue, and 2 for Green.</p></div>'
  },
  utils: {
    next: 'Next',
    finish: 'Finish'
  },
  stroop: {
    red: 'Red',
    blue: 'Blue'
  }
}

function feedback (acc) {
  return `<div class="text"><p>You responded correctly on <b>${acc}%</b> of the trials.</p>
  <p>Thank you for your participation!</p></div>`
}
