# Campers

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript) ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react) ![Vercel](https://img.shields.io/badge/deployed-Vercel-black?logo=vercel)

Вебзастосунок для оренди кемперів — клон TravelTrucks. Користувач переглядає каталог кемперів із фільтрацією та пагінацією, а на сторінці кемпера бачить галерею зображень, відгуки та може відправити заявку на бронювання.

**Демо:** https://campers-sage-six.vercel.app/

## Lighthouse

| Метрика | Оцінка |
| --- | --- |
| Performance | 90 |
| Accessibility | 95 |
| Best Practices | 100 |
| SEO | 100 |

## Функції

- Домашня сторінка з банером і закликом до дії
- Каталог кемперів із фільтрацією за локацією, типом кузова, двигуном і трансмісією (фільтрація на бекенді через query-параметри)
- Пагінація у форматі Load More (+4 картки за клік, з урахуванням активних фільтрів) через `useInfiniteQuery` з TanStack Query
- Сторінка деталей кемпера (відкривається в новій вкладці):
  - Галерея зображень на Swiper з навігацією через мініатюри
  - Відгуки користувачів із рейтингом у форматі п'яти зірок
  - Форма бронювання з валідацією (Formik + Yup) і нотифікацією про успішне відправлення
- Лоадери під час усіх асинхронних запитів
- Стан помилки з можливістю повторити запит
- Іконки з React Icons

## Технології

- [Next.js](https://nextjs.org/) 16 (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/) 19
- CSS Modules
- [TanStack Query](https://tanstack.com/query/latest)
- [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Swiper](https://swiperjs.com/)
- [React Spinners](https://www.davidhu.io/react-spinners/)

## Сторінки

| Маршрут | Опис |
| --- | --- |
| `/` | Домашня сторінка з банером і кнопкою переходу в каталог |
| `/catalog` | Каталог кемперів із фільтрами та пагінацією Load More |
| `/catalog/[camperId]` | Деталі кемпера: галерея, характеристики, відгуки, форма бронювання |

## Встановлення та запуск

### Вимоги

- Node.js 20 або новіше
- npm

### Кроки

1. Клонуйте репозиторій:

```bash
git clone https://github.com/FlowMaster83/campers.git
cd campers
```

2. Встановіть залежності:

```bash
npm install
```

3. Створіть файл `.env.local` у корені проєкту (він у `.gitignore`, тому відсутній у репозиторії) зі змінною:

```bash
NEXT_PUBLIC_API_URL=https://campers-api.goit.study
```

4. Запустіть застосунок у режимі розробки:

```bash
npm run dev
```

5. Відкрийте [http://localhost:3000](http://localhost:3000) у браузері.

### Змінні середовища

| Змінна | Обов'язкова | Опис |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | Так | Базовий URL бекенду, з якого застосунок отримує кемпери, фільтри, відгуки та надсилає заявки на бронювання |

### Скрипти

| Команда | Опис |
| --- | --- |
| `npm run dev` | Запуск сервера розробки |
| `npm run build` | Збірка продакшн-версії |
| `npm run start` | Запуск продакшн-сервера (після `build`) |
| `npm run lint` | Перевірка коду ESLint |

## API

Застосунок працює з референсним API:

- Базовий URL: `https://campers-api.goit.study`
- Документація: `https://campers-api.goit.study/docs`

Використані ендпоінти:

- `GET /campers` — пагінований і фільтрований список кемперів
- `GET /campers/filters` — доступні варіанти фільтрів (тип кузова, трансмісія, двигун)
- `GET /campers/:id` — повна інформація про кемпер
- `GET /campers/:id/reviews` — відгуки про кемпер
- `POST /campers/:id/booking-requests` — відправлення заявки на бронювання

## Деплой

Застосунок задеплоєний на [Vercel](https://vercel.com/): https://campers-sage-six.vercel.app/

При деплої змінна середовища `NEXT_PUBLIC_API_URL` задається в налаштуваннях проєкту на платформі.

## Автор

**FLWMSTR**
GitHub: [github.com/FlowMaster83](https://github.com/FlowMaster83)