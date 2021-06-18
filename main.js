Webcam.set({
    width: 310,
    height: 300,
    image_format: "png",
    png_quality: 90,
    constraints: {
        facingMode: "environment"
    }
});

Webcam.attach("#camera");

function take_pic() {
    Webcam.snap(function (Data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + Data_uri + '"/>';
    });
}

console.log('ml5version is', ml5.version);

var classifier = ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded() {
    console.log("modelloaded");
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("obj_name").innerHTML = results[0].label;

    }
}