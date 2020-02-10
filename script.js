
$(function () {

    $('button').on('click', function(event) {
        // Preventing the refresh behaviour
        event.preventDefault();

        // Setting/Getting value from the inputs, changing it to a number

        // Is the parseInt needed though?
        //?  Is there a way to do multiple variables as they all have similar code?
        const gradeOne = parseInt($('#gradeOne').val());
        const gradeTwo = parseInt($('#gradeTwo').val());
        const gradeThree = parseInt($('#gradeThree').val());

        const weightOne = parseInt($('#weightOne').val());
        const weightTwo = parseInt($('#weightTwo').val());
        const weightThree = parseInt($('#weightThree').val());

        // Math Time
        // Made a function to reduce lines of code

        //? Anyway to have the function fire on all three without writing it out to reduce code?

        const gradeAfterWeight = function(grade,weight) {
            return((weight / 100) * grade);
        };

        const gradeWeightOne = gradeAfterWeight(gradeOne,weightOne);
        const gradeWeightTwo = gradeAfterWeight(gradeTwo,weightTwo);
        const gradeWeightThree = gradeAfterWeight(gradeThree,weightThree);

        const overallMark = gradeWeightOne + gradeWeightTwo + gradeWeightThree;

        console.log(overallMark);

    });    
});