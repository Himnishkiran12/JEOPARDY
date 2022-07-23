Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("capturer");
Webcam.attach('#capturer');

function snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("displayer").innerHTML = '<img id="captured" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uw5tcPhsv/model.json', modelLoaded);