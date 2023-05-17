# JavaScript Проект - «Вычислитель отличий»

## Описание

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

## Установка приложения и запуска игр

1. Убедитесь, что у вас установлена Node.js версии 13 и вышe, иначе установите эту платформу.
2. Установите пакет (npm link), убедитесь что он работает, запустив gendiff -h в терминале.
   Важно! Команду npm link необходимо запускать из корневой директории проекта.
3. Пример использования:
   - формат plain - $ gendiff --format plain path/to/file.yml another/path/file.json
   - формат stylish - $ gendiff filepath1.json filepath2.json

### Hexlet tests and linter status:

[![Actions Status](https://github.com/bea00811/backend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/bea00811/backend-project-46/actions)

[![Actions Status](https://github.com/bea00811/backend-project-46/workflows/test-check/badge.svg)](https://github.com/bea00811/backend-project-46/actions)

<a href="https://codeclimate.com/github/bea00811/backend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/c52c72e0fc0292e7640e/maintainability" /></a>

<a href="https://codeclimate.com/github/bea00811/backend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/c52c72e0fc0292e7640e/test_coverage" /></a>

<a href="https://asciinema.org/a/77v30EOfXsWxqKsJZViWHOAIN" target="_blank"><img src="https://asciinema.org/a/77v30EOfXsWxqKsJZViWHOAIN.svg" /></a>

<a href="https://asciinema.org/a/7ZIPg7drAmxqYxm21MrTTdknM" target="_blank"><img src="https://asciinema.org/a/7ZIPg7drAmxqYxm21MrTTdknM.svg" /></a>

<a href="https://asciinema.org/a/U0IDQJWxzsNl4qdtCoTk5XX06" target="_blank"><img src="https://asciinema.org/a/U0IDQJWxzsNl4qdtCoTk5XX06.svg" /></a>

<a href="https://asciinema.org/a/bjjTY1lrwS9OHZPnbN2jVzTuU" target="_blank"><img src="https://asciinema.org/a/bjjTY1lrwS9OHZPnbN2jVzTuU.svg" /></a>

<a href="https://asciinema.org/a/ekHm2Z0fAhjiHYzgghW4mr4EX" target="_blank"><img src="https://asciinema.org/a/ekHm2Z0fAhjiHYzgghW4mr4EX.svg" /></a>
