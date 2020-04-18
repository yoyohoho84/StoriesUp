export const formatDate = (date) => {
  if (typeof date == 'number') {
    // перевести секунды в миллисекунды и преобразовать к Date
    date = new Date(date * 1000);
  } else if (typeof date == 'string') {
    // строка в стандартном формате автоматически будет разобрана в дату
    date = new Date(date);
  } else if (Array.isArray(date)) {
    date = new Date(date[0], date[1], date[2], date[3], date[4]);
  }
  // преобразования для поддержки полиморфизма завершены,
  // теперь мы работаем с датой (форматируем её)

  return date.toLocaleString("ru", {day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit'});

}