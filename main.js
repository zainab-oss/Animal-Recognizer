function startClassifictaion()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/-n4WmuO7R/model.json", modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}