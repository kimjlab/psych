const lang = {
  fullscreen: '<div class="text"><p>次へを押してフルスクリーンモードに入ってください。</p></div>',
  welcome: '<div class="text"><p>実験へようこそ。</p><p>準備ができたら次へを押してください。</p></div>',
  begin: '<div class="text"><p>実験を開始します。</p><p>準備ができたら次へを押してください。</p></div>',
  end: '<div class="text"><p>これで実験を終了します。</p><p>ありがとうございました。</p></div>',
  instructions: {
    gonogo: "<div class='text'><p>数字が表示されたら<b>スペースキー</b>を押してください。</p><p>数字<b>3</b>が表示されたら何も押さないでください。</p></div>",
    stroop: '<div class="text"><p>文字の色に対応するボタンを押してください。</p><p>単語の意味については考えないでください。</p></div>',
    flanker: '<div class="text"><p>5つの矢印が表示されます。</p><p>真ん中の矢印を見てください。</p><p>左向きの矢印が表示されたら<b>F</b>、それ以外は<b>J</b>を押してください。</p></div>',
    letter_memory: (askTarget) => {
      return `<div class="text"><p>この実験では、画面の中央に1つずつ文字が表示されます。</p><p>最後の<b>${askTarget}</b>つの文字を覚えてください。</p><p>最後の文字が消えた後、覚えている文字を入力してください。</p></div>`
    },
    number_letter: '<div class="text"><p>文字と数字のペアが表示されます（例：G7）。</p><p>ペアが<b>上半分</b>にある場合、文字が<b>子音</b>なら1、<b>母音</b>なら2を押してください。</p><p>ペアが<b>下半分</b>にある場合、数字が<b>奇数</b>なら1、<b>偶数</b>なら2を押してください。</p></div>',
    local_global: '<div class="text"><p>枠が<b>青</b>の場合、大きな文字を見てください。Sなら1、Hなら2を押してください。</p><p>枠が<b>緑</b>の場合、小さな文字を見てください。Sなら1、Hなら2を押してください。</p></div>',
    color_shape: '<div class="text"><p>キューが<b>SHAPE</b>の場合、円なら1、三角形なら2を押してください。</p><p>キューが<b>COLOR</b>の場合、青なら1、緑なら2を押してください。</p></div>'
  },
  utils: {
    next: '次へ',
    finish: '終了'
  },
  stroop: {
    red: 'あか',
    blue: 'あお'
  }
}

function feedback (acc) {
  return `<div class="text"><p>あなたの正答率は ${acc}% でした。</p>
  <p>テストを終了します。ありがとうございました。</p></div>`
}
