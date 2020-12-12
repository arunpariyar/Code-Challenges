const camelCase = function (arg) {
  const words = arg.split("_");
  console.log(words[0] + words[1][0].toUpperCase() + words[1].slice(1));
  // return firstWord + secondWord;
};

camelCase("underscore_case");
camelCase("first_name");
camelCase("Some_Variable");
camelCase("calculate_Age");
camelCase("delayed_departure");
