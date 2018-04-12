var amountSlider = $("#amount-slider").bootstrapSlider();
var periodSlider = $("#period-slider").bootstrapSlider();
var calculatedAmount = $("#calculated-amount");

function formula (amount, period) {
  var result = amount/100*period;
  return result;
};

amountSlider.on("slide", function(slideEvt) {
  var amount = slideEvt.value;
  calculatedAmount.text(formula(amount, period));
});

amountSlider.on("change", function(slideEvt) {
  var amount = slideEvt.value;
  calculatedAmount.text(formula(amount, period));
});


periodSlider.on("slide", function(slideEvt) {
  var period = slideEvt.value;
  return period;
});

periodSlider.on("change", function(slideEvt) {
  var period = slideEvt.value;
  return period;
});

//
// var amountSlider = $("#amount-slider").bootstrapSlider({
//     step: 1,
//     min: 1000,
//     max: 4000,
//     value: 1500,
//     change: function(event, ui){
//         console.log($(this).bootstrapSlider(ui.value));
//         console.log('ashfiaf');
//     },
//     slide: function(event, ui){
//         var currval = ui.value;
//         console.log(currval);
//     }
// });

// $("#period-slider").bootstrapSlider({
//     step: 1,
//     min: 1,
//     max: 4,
//     value: 3,
//     change: function(event, ui){
//         console.log($(this).bootstrapSlider('value', ui.value));
//         console.log('ashfiaf');
//     },
//     slide: function(event, ui){
//         var currval = ui.value;
//         console.log(currval);
//     }
// });
