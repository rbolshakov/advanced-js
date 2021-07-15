function regxpText() {
  let str = document.getElementById('source').value; //присваиваем переменной str значение в поле ввода textarea
  let regexpAllPoints = new RegExp('\'', 'gm'); //создаем переменную с регулярным выражением, которое ищит все одинарные ковычки в тексте. 
  let regexpReturnApostroph = /\b\"\b/gm;//создаем переменную которая находит все двойные кавычки перед границами слов
  let newstr = str.replace(regexpAllPoints, '"');  //создаем метод, который меняет все найденные одинарные кавычки на двойные
  newstr = newstr.replace(regexpReturnApostroph, '\''); //потом пробегаемся по результату и проверяем на возможные варианты aren't && doesn't
  document.getElementById('output').value = newstr; //присваиваем в нижнее поле ввода полученные значения после проверок
}
document.getElementById('source').addEventListener("keyup", regxpText); //вешаем оброботчик событий после которого срабатывает наш код.