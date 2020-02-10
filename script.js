
$(function () {

    $('button').on('click', function(event) {
        // Preventing the refresh behaviour
        event.preventDefault();

        // Setting/Getting value from the inputs, changing it to a number

        const gradeOne = parseInt($('#gradeOne').val());
        const gradeTwo = parseInt($('#gradeTwo').val());
        const gradeThree = parseInt($('#gradeThree').val());

        const weightOne = parseInt($('#weightOne').val());
        const weightTwo = parseInt($('#weightTwo').val());
        const weightThree = parseInt($('#weightThree').val());

        // Checking to make sure that the weights add up to 100% before the code progresses 

        if (weightOne + weightTwo + weightThree === 100) {

            // Turn weight into a decimal and then multiply by the grade
            const gradeAfterWeight = function(grade,weight) {
                return((weight / 100) * grade);
            };
            
            const gradeWeightOne = gradeAfterWeight(gradeOne,weightOne);
            const gradeWeightTwo = gradeAfterWeight(gradeTwo,weightTwo);
            const gradeWeightThree = gradeAfterWeight(gradeThree,weightThree);
    
            // Add the multiplied grades to get the final overall mark
            // ? When there's only one input, even if it equals 100%, Marky-Mark is still mad. 
            const overallMark = gradeWeightOne + gradeWeightTwo + gradeWeightThree;
    
            $('.results').text(`${overallMark}%`);
            
        } else {
            // Alert user that their weight doesn't equal 100% 
            alert('Please check your weights, they need to add up to 100%');
        };

    });    
});