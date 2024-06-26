# Компонент поиска

## Как запустить проект

1. Выполнить в директории проекта

```bash
npm install
```

```bash
npm i react-error-boundary
```

2. Для запуска в режиме разработки выполнить

```bash
npm run dev
```

## О проекте
При запуске проекта, пользователь увидит поисковую строку, 3 кнопки для переключения между списками и сам список.
Кнопки реализованы для демонстрации поэтапной работы над поставленными зачадами. По умолчанию выбрана самая полная версия реализации.

Пользователь может самостоятельно ознакомиться со списком пользователей. Или воспользоваться поисковой строкой и найти всех пользователей, имена которых содерджат введенные значения.

## Поставленные задачи
- проверить и поправить функциональность (сейчас выведены mock данные, поиск не работает).
  На ввод в поисковую строку должен идти запрос к api для поиска пользователя.
  Для запроса к api используйте fetch api.
- реализовать поиск пользователей со стороннего ресурса https://dummyjson.com/users/search?q=John
  q - это поисковый запрос
- покрыть типизацией (будет плюсом)
- подумать над оптимизациями приложения (будет плюсом)

Предусмотрите все нюансы (обработка ошибок, оптимизация работы с сетью и т.д.), которые вы знаете и все потенциальные нештатные ситуации, но не тратьте на это слишком много времени (1-4 часа).
Удачи!

## Что сделано
- Поправлена функциональность поисковой строки. Налажена связь между вводимыми данными в строку и фильтрацией выводимого на экран списка пользователей.
- Добавлена возможность находить пользователей, в именах которых содержатся значения, которые вводятся в поисковую строку
- Реализовано 3 вида поиска по пользователям:
  1) по mock данным (для тестирования функционала)
  2) по пользователям со стороннего ресурса ( реализовано через fetch api)
  3) по пользователям со сторонннего ресурса использую поисковый запрос
- Покрытие типизацией большинства элементов
- Оптимизация:
  + во 2 виде поиска достигается засчет запроса к списку пользователей лишь единожды
  + в 3 виде поиска сведения запрашиваются только при измененнях в строке поиска, а не постоянно
- Обработка ошибок при проблемах с выводом списка пользователей

## Нюансы, требующие доработки
- У проекта есть нюанс: при работе с плохой сетью (при получение данных со стороннего ресурса) данные не всегда корректно отображаются при поиске пользователей по запросу, т.к. ответы обрабатываются в порядке получения. В будущем это можно исправить, например, путем прекращения обработки уже не актуальных запросов.
