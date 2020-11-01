## Вводная задача
- форкнуть репу
- настроить лерну и package.json - добавив воркспейсы для фронта или для бэка - в зависимости от вашей специализации
- пофиксить сломанные места
- запустить проект

## Было сделано 

- workspaces (frontend), в lerna.json + "useWorkspaces": true, tsconfig.json + "jsx": "react"
- в пакет frontend/dashboard добавил в зависимости другие пакеты и заменил импорты 
- в пакет frontend/auth в package.json добавил поле main (точка входа для импортов)
- в пакет frontend/dashboard в package.json изменил хост и порт для сервера
