# jsPsych 認知テスト

## テストの実行方法

ブラウザでHTMLを開くことでタスクを実行できます。
推奨ブラウザはGoogle Chromeです。
一部のタスクはSafariと互換性がありません。

現在、タスクはサーバーにホストされていません。
また、タスクの結果をサーバーまたはローカルストレージにエクスポートすることができません。
実験でタスクを使用する場合、結果を保存するためのサーバーを準備する必要があります。
タスクがラボで実施される場合には、結果をローカルストレージに保存するようにしなければいけません。
兎にも角にも、結果を保存してエクスポートする機能は現在実装されておらず、別途実装が必要になります。

## About jsPsych

jsPsychは、ウェブブラウザで行動実験を設定するためのJavaScript（JS）フレームワークです。
したがって、タスクはJSで書かれています。
JSは、ウェブ開発で使用される言語であり、非常に簡単に学ぶことができます。
詳細については、jsPsychの公式ウェブサイトを参照してください：[jsPsych](https://www.jspsych.org/)。

タスク全体は、複数のブロックに分割され、タイムラインで制御されています。
たとえば、Go/No-Goタスクの指示部分は以下のように定義されています。

```javascript
const enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true,
  message: lang.fullscreen,
  button_label: lang.utils.next
}

const welcome = {
  type: jsPsychHtmlButtonResponse,
  stimulus: lang.welcome,
  choices: [lang.utils.next]
};

const instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus: lang.instructions.gonogo,
  choices: [lang.utils.next]
};

const beginTask = {
  type: jsPsychHtmlButtonResponse,
  stimulus: lang.begin,
  choices: [lang.utils.next],
  post_trial_gap: interstimuli_interval.instructions
};
timeline.push(enter_fullscreen, welcome, instructions, beginTask);
```

このコードでは、`enter_fullscreen`、`welcome`、`instructions`、`beginTask`はブロックです。
各ブロックはオブジェクトとして定義されています。
`timeline.push()`関数（これはjsPsych固有の関数ではなく、JSの組み込み関数）を使用して、ブロックをタイムラインに追加します。
その結果、ブロックはタイムラインに追加された順序で実行されます。
したがって、Go/No-Goタスクを実行すると、フルスクリーンメッセージ、ウェルカムメッセージ、指示メッセージ、開始メッセージが表示されます。

詳細については、jsPsychの公式ウェブサイトでチュートリアルを確認してください。

タスクは[The contribution of latent factors of executive functioning to mind wandering: an experience sampling study](https://doi.org/10.1186/s41235-022-00383-9)をもとに作成されました。
一部の複雑なタスクはOpen Source Software（OSS）としてGitHubに公開されているものを使用しています。

### Common functions

OSSのプログラムを除く、各タスクで使用されている共通の関数がいくつかあります。

```javascript
const end = {
  type: jsPsychHtmlButtonResponse,
  stimulus: lang.end,
  choices: [lang.utils.finish]
};

const exit_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: false,
  delay_after: 0
}
timeline.push(end, exit_fullscreen);
```

指示部分と終了部分はすべてのタスクで共通です。
ただし、テキストのみが異なります。
上記例を見ると、`type`パラメータが`jsPsychHtmlButtonResponse`になっています。
これは、テキストとボタンを表示する関数です。
テキストは`stimulus`パラメータで定義され、ボタンのテキストは`choices`パラメータで定義されます。
ボタンがクリックされると、次のブロックが実行されます。

`type`を他のタイプの関数に変更することも可能です。
たとえば、`jsPsychHtmlKeyboardResponse`はキーボード入力を必要とする関数です。
ラップトップやデスクトップ環境で使用する場合に便利です。

このプロジェクトは日常のデータ収集に焦点を当てているため、タスクはタブレットやスマートフォンで実行するように設計されています。
そのため、ボタン入力が使用されています。

## OSSタスク

### Stop Signal Task

試行数、間隔を`STOP-IT/configuration/experiment_variables.js`で変更できます。
表示されるテキストも`STOP-IT/configuration/text_variables.js`で変更できます。

### N-Back Task

刺激提示時間は`N-back/shared/parameters.js`で変更できます。
表示されるテキストも`N-back/shared/languages.js`で変更できます。

タスクを終了する・途中で中断すると、結果がCSVファイルとして出力されます。
この実装は、ウェブで実験を行い、その結果をデータベースに保存する必要がある場合に応用できるかもしれません。

### Keep Track Task

プログラム内でタスクを調整するパラメータがいくつかあります。
コード内のコメントを読んでタスクの変更方法を理解してください。
多くの変数はコードの上部で宣言されているため、簡単に見つけることができます。
タスクで表示されるテキストは96行目から宣言されています。

## Tasks - Other

パラメータは`config/variables.js`で宣言されています。
各タスクを変更したいパラメータを簡単に見つけることができます。

HTMLファイルで読み込むスクリプトファイルを変更することで、言語を切り替えることができます。
`config/en.js`と`config/jp.js`を変更してください。
また、HTMLファイルで、以下のコードを確認して、読み込むスクリプトファイルを変更してください。

```html
<script src="./config/en.js"></script> 
```

### 共通の注意点

タスクはフルスクリーンモードで実行されるように設定されています。
Safariでは、キーボード入力が必要な場合にフルスクリーンモードが無効になります。
そのため、Safariは使用をお勧めしません。

## サンプリング方法

jsPsych公式ドキュメントからサンプリング方法についての抜粋です。

There are also sampling methods that can be used to select a set of trials from the timeline_variables. Sampling is declared by creating a sample parameter. The sample parameter is given an object of arguments. The type parameter in this object controls the type of sampling that is done. Valid values for type are

- "with-replacement": Sample size items from the timeline variables with the possibility of choosing the same item multiple time.
- "without-replacement": Sample size itesm from timeline variables, with each item being selected a maximum of 1 time.
- "fixed-repetitons": Repeat each item in the timeline variables size times, in a random order. Unlike using the repetitons parameter, this method allows for consecutive trials to use the same timeline variable set.
- "alternate-groups": Sample in an alternating order based on a declared group membership. Groups are defined by the groups parameter. This parameter takes an array of arrays, where each inner array is a group and the items in the inner array are the indices of the timeline variables in the timeline_variables array that belong to that group.
- "custom": Write a function that returns a custom order of the timeline variables.
