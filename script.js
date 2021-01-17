<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/tensorflow/2.8.4/tf.min.js%22%3E</script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js%22%3E</script>

    <script src="script.js"></script>
  </body>
</html>
console.log("model is slolasda");
console.log("model is slolasda");

async function loadModel(){




  model = undefined;
  model = await tf.loadLayersModel("https://github.com/ibrahimeatspie/COVID-Classifier/blob/main/model.json%22);

  console.log("Model is loaded");





}
loadModel();
