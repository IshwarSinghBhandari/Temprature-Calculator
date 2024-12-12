// document.querySelector('#type1').addEventListener('change', function () {
//     let opt = this.value;
//     document.querySelector('#celsius').addEventListener('keyup', function (e) {
//         let celsius = parseFloat(e.target.value);
//         let out1 = document.querySelector('#out1');

//         if (isNaN(celsius)) {
//             out1.textContent = 'Please enter a valid number';
//             out1.style.cssText = 'font-size: 1.2rem; color: red !important;';
//             return;
//         }

//         let result;
//         if (opt === '1') {
//             result = `${((celsius * 9) / 5 + 32).toFixed(2)} °F`;
//         } else if (opt === '2') {
//             result = `${(celsius + 273.15).toFixed(2)} K`;
//         } else {
//             out1.textContent = 'Please select an option';
//             out1.style.cssText = 'font-size: 1.2rem; color:  red !important;';
//             return;
//         }

//         out1.textContent = result; 
//         out1.style.cssText = 'font-size: 2rem; color:  green !important;';

//     });
// });


// document.querySelector('#type2').addEventListener('change', function () {
//     let opt = this.value;
//     console.log(opt)
//     document.querySelector('#Fahrenheit').addEventListener('keyup', function (e) {
//         let Fahrenheit = parseFloat(e.target.value);
//         let out2 = document.querySelector('#out2');

//         if (isNaN(Fahrenheit)) {
//             out2.textContent = 'Please enter a valid number';
//             out2.style.cssText = 'font-size: 1.2rem; color: red !important;';
//             return;
//         }

//         let result;
//         if (opt === '1') {
//             result = `${((Fahrenheit - 32) * (5/9)).toFixed(2)} °C`;
//         } else if (opt === '2') {
//             result = `${((Fahrenheit + 459.67) * (5/9)).toFixed(2)} K`;
//         } else {
//             out2.textContent = 'Please select an option';
//             out2.style.cssText = 'font-size: 1.2rem; color:  red !important;';
//             return;
//         }

//         out2.textContent = result; 
//         out2.style.cssText = 'font-size: 2rem; color:  green !important;';
//     });
// });

// document.querySelector('#type3').addEventListener('change', function () {
//     let opt = this.value;
//     console.log(opt);
//     document.querySelector('#Kelvin').addEventListener('keyup', function (e) {
//         let Kelvin = parseFloat(e.target.value);
//         let out3 = document.querySelector('#out3');

//         if (isNaN(Kelvin)) {
//             out3.textContent = 'Please enter a valid number';
//             out3.style.cssText = 'font-size: 1.2rem; color: red !important;';
//             return;
//         }

//         let result;
//         if (opt === '1') {
//             result = `${(Kelvin - 273.15).toFixed(2)} °C`;
//             console.log(result)
//         } else if (opt === '2') {
//             result = `${((Kelvin  * (9/5)) - 459.67).toFixed(2)} °F`;
//         } else {
//             out3.textContent = 'Please select an option';
//             out3.style.cssText = 'font-size: 1.2rem; color:  red !important;';
//             return;
//         }

//         out3.textContent = result; 
//         out3.style.cssText = 'font-size: 2rem; color:  green !important;';
//     });
// });




function setupConversion(inputSelector, outputSelector, typeSelector, conversions) {
    document.querySelector(typeSelector).addEventListener('change', function () {
        let option = this.value;

        document.querySelector(inputSelector).addEventListener('keyup', function (e) {
            let value = parseFloat(e.target.value);
            let output = document.querySelector(outputSelector);

            if (isNaN(value)) {
                output.textContent = 'Please enter a valid number';
                output.style.cssText = 'font-size: 1.2rem; color: red !important;';
                return;
            }

            let result = conversions[option]?.(value);

            if (result !== undefined) {
                output.textContent = result;
                output.style.cssText = 'font-size: 2rem; color: green !important;';
            } else {
                output.textContent = 'Please select an option';
                output.style.cssText = 'font-size: 1.2rem; color: red !important;';
            }
        });
    });
}

// Define conversion functions for each input
const celsiusConversions = {
    1: (c) => `${((c * 9) / 5 + 32).toFixed(2)} °F`,
    2: (c) => `${(c + 273.15).toFixed(2)} K`,
};

const fahrenheitConversions = {
    1: (f) => `${((f - 32) * (5 / 9)).toFixed(2)} °C`,
    2: (f) => `${((f + 459.67) * (5 / 9)).toFixed(2)} K`,
};

const kelvinConversions = {
    1: (k) => `${(k - 273.15).toFixed(2)} °C`,
    2: (k) => `${((k * (9 / 5)) - 459.67).toFixed(2)} °F`,
};

// Set up event listeners for each input
setupConversion('#celsius', '#out1', '#type1', celsiusConversions);
setupConversion('#Fahrenheit', '#out2', '#type2', fahrenheitConversions);
setupConversion('#Kelvin', '#out3', '#type3', kelvinConversions);
