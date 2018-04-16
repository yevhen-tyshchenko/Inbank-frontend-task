$( document ).ready(function () {
  var amountSlider = $("#amount-slider").bootstrapSlider({
    formatter: function(value) {
      return value + ' eur';
    }
  });
  var periodSlider = $("#period-slider").bootstrapSlider({
    formatter: function (value) {
      return value + ' month';
    }
  });
  var amountValue = amountSlider.bootstrapSlider("getValue");
  var periodValue = periodSlider.bootstrapSlider("getValue");

  function formula(amount, period) {
      console.log(amount);
      console.log(period);
      return (Math.round(amount/period))+" EUR";
  }

  $("#result-amount").text(formula(amountValue, periodValue));

  amountSlider.on("change", function (changeEvt) {
    var amountValue = changeEvt.value.newValue;
    var periodValue = periodSlider.bootstrapSlider("getValue");
    var calculatedAmount = $("#result-amount").text(formula(amountValue, periodValue));
  });

  periodSlider.on("change", function (changeEvt) {
    var amountValue = amountSlider.bootstrapSlider("getValue");
    var periodValue = changeEvt.value.newValue;
    var calculatedAmount = $("#result-amount").text(formula(amountValue, periodValue));
  });
});
