
console.log("model is slolasda");
console.log("model is slolasda");

async function loadModel(){




  model = undefined;
  model = await tf.loadLayersModel("https://github.com/ArjSan1/Covid-Classifier/blob/main/model.json");

  console.log("Model is loaded");





}
loadModel();
