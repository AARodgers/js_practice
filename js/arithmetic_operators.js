<script>
  var numberSeven = Number(prompt('Enter the number 7'));
  var birthMonth = Number(prompt('Enter your birth month'));
  var calculation = numberSeven * birthMonth;
  calculation = calculation -1;
  calculation = calculation * 13;
  var birthDay = Number(prompt('Enter the day of your birht'));
  calculation = calculation + birthDay;
  calculation = calculation + 3;
  calculation = calculation * 11;
  calculation = calculation - birthMonth;
  calculation = calculation - birthDay;
  calculation = calculation / 10;
  calculation = calculation + 11;
  calculation = calculation / 10;
  document.write("Your birthday is " + calculation);
</script>
