# jsPsych Tasks

## How to run the tasks

You can run the tasks by opening the HTML files in the browser.
Recommended browser is Google Chrome.
There are some tasks that are not compatible with Safari.

Currently, the tasks are not hosted on a server.
Additionally, it is not possible to export the result data to any server or local storage.
When using the tasks in an experiment, you need to prepare a server to store the result data.
Or, if the tasks is conducted in a lab, you can save the result data to local storage.
Anyways, the function to save and export the result data is not implemented now.

## About jsPsych

jsPsych is a JavaScript (JS) framework for setting up behavioral experiments in a web browser.
So, the tasks are written in JS.
JS is a language that is used in web development and pretty easy to learn.
Check jsPsych's official website for more information: [jsPsych](https://www.jspsych.org/).

The entire task is divided into several blocks and is controlled by the timeline.
For example, in Go/No-Go task, the instruction part is defined as below:

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

In this code, `enter_fullscreen`, `welcome`, `instructions`, and `beginTask` are blocks.
Each block is defined as an object.
The `timeline.push()` function (it is JS's built-in function, not jsPsych specific) is used to add the blocks to the timeline.
As the result, the blocks are executed in the order they are added to the timeline.
So, if you run Go/No-Go task, you see the fullscreen message, welcome message, instruction message, and begin message.

For more information, check the official website of jsPsych for tutorials.

### Common functions

There are some common functions that are used in the tasks (except for the OSS tasks).

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

Instruction part and end part are common in all tasks.
Just only the text is different.
As you can see, the `type` parameter is `jsPsychHtmlButtonResponse`.
This is a function that displays a text and a button.
The text is defined in the `stimulus` parameter and the button text is defined in the `choices` parameter.
When the button is clicked, the next block is executed.

It is possible to change the type to other types of functions.
For example, `jsPsychHtmlKeyboardResponse` is a function that requires keyboard input.
It may be useful for laptop or desktop environments.

As this project is focused on daily data collection, the tasks are designed to be run on a tablet or smartphone.
Because of this, button input is used.

## Tasks - OSS

### Stop Signal Task

Modify number of trials, intervals in `STOP-IT/configuration/experiment_variables.js`.
You can also modify displayed text in `STOP-IT/configuration/text_variables.js`.

### N-Back Task

You can modify durations in `N-back/shared/parameters.js`.
You can also modify displayed text in `N-back/shared/languages.js`.

As you finish or quit the task, the result will be outputted as a CSV file.
It may be useful for other tasks as well, when the experiment is conducted via web and the result is needed to be saved in such database.

### Keep Track Task

There are several places in the program to modify the task.
Read the comments in the code to understand how to modify the task.
Most variables are declared in the above of the code, so you can easily find them.
Texts displayed in the task are declared from Line 96.

## Tasks - Other

Parameters are declared in `config/variables.js`.
You can easily find the parameters you want to modify for each task.

You can switch languages by changing which script file to load in HTML file.
Modify text in `config/en.js` and `config/jp.js`.
Also, in the HTML file, check the code below and modify the script file to load.
In most HTML files, the code should be at Line 10.

```html
<script src="./config/en.js"></script> 
```

### Common

Tasks are enabled to be in fullscreen mode.
In Safari, fullscreen mode will be disabled when user is required to use keyboard input.
Because of this, Safari is not recommended to use.

## Sampling methods

There are also sampling methods that can be used to select a set of trials from the timeline_variables. Sampling is declared by creating a sample parameter. The sample parameter is given an object of arguments. The type parameter in this object controls the type of sampling that is done. Valid values for type are

- "with-replacement": Sample size items from the timeline variables with the possibility of choosing the same item multiple time.
- "without-replacement": Sample size itesm from timeline variables, with each item being selected a maximum of 1 time.
- "fixed-repetitons": Repeat each item in the timeline variables size times, in a random order. Unlike using the repetitons parameter, this method allows for consecutive trials to use the same timeline variable set.
- "alternate-groups": Sample in an alternating order based on a declared group membership. Groups are defined by the groups parameter. This parameter takes an array of arrays, where each inner array is a group and the items in the inner array are the indices of the timeline variables in the timeline_variables array that belong to that group.
- "custom": Write a function that returns a custom order of the timeline variables.
