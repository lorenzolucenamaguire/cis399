// Set up Paper.js canvas
paper.install(window);



window.onload = function () {
    // Get a reference to the canvas object
    var canvas = document.getElementById('myCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);

    // Both share the mouseDown event:
    var path;
    function onMouseDown(event) {
        if (event.event.button === 2) {
            // Handle the right-click event 
            var circle = new Path.Circle({
                center: event.middlePoint,
                radius: 40
            });
            circle.strokeColor = 'black';
            circle.fillColor = 'white';
            event.stopPropagation();
            return event.preventDefault();
        }

        path = new Path();
        path.add(event.point);
    }

    tool1 = new Tool();
    tool1.onMouseDown = onMouseDown;
    tool.maxDistance = 20;

    tool1.onMouseDrag = function (event) {
        if (event.event.button === 2) {
            event.preventDefault();
            return event.stopPropagation();
        }

        var circle = new Path.Circle({
            center: event.middlePoint,
            radius: event.delta.length / 2
        });
        circle.fillColor = 'magenta';
    }

    tool2 = new Tool();
    tool2.minDistance = 20;
    tool2.onMouseDown = onMouseDown;

    tool2.onMouseDrag = function (event) {
        if (event.event.button === 2) {
            event.preventDefault();
            return event.stopPropagation();
        }
        var circle = new Path.Circle({
            center: event.middlePoint,
            radius: event.delta.length / 2
        });
        circle.fillColor = 'blue';
    }

    // Draw the view now:
    paper.view.draw();
}
