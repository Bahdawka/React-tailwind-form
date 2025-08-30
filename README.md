# React Tailwind Form
- Deploy link on Vercel: 

## English [UA version below]

### Project Goal
This project demonstrates a comprehensive form implementation using React, Formik, and Tailwind CSS. It showcases reusable form components with proper validation, type safety with TypeScript, and modern styling with Tailwind CSS.

### Features
- **Reusable Form Components**: Input, Textarea, Select, Radio buttons, Checkboxes, Date picker
- **Form Validation**: Using Formik and Yup for robust validation
- **Type Safety**: Full TypeScript implementation
- **Modern Styling**: Responsive design with Tailwind CSS
- **Component Architecture**: Well-structured, modular components
- **Date Handling**: React DatePicker with localization support

### Project Structure
```
src/
├── components/
│   ├── FormComponents/
│   │   ├── Button.tsx          # Reusable button component
│   │   ├── CheckboxButton.tsx  # Checkbox group component
│   │   ├── DatePicker.tsx      # Date picker component
│   │   ├── FormikControl.tsx   # Main form control dispatcher
│   │   ├── input.tsx           # Input field component
│   │   ├── RadioButton.tsx     # Radio button group component
│   │   ├── Select.tsx          # Select dropdown component
│   │   ├── Textarea.tsx        # Textarea component
│   │   └── TextError.tsx       # Error message component
│   └── FormikContainer.tsx     # Main form container
├── types/
│   ├── baseFormControlProps.ts    # Base form control properties
│   ├── BaseInputProps.ts          # Base input properties
│   ├── controlType.ts             # Form control types
│   ├── option.interface.ts        # Option interface for selects/radios
│   └── optionsControl.interface.ts # Options control properties
├── App.tsx                     # Main application component
└── main.tsx                    # Application entry point
```

### Installation and Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-tailwind-form
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### 🎮 Usage
The form includes the following controls:
- **Email Input** - Email validation
- **Textarea** - Multi-line text input
- **Select Dropdown** - Single selection from options
- **Radio Buttons** - Single choice from group
- **Checkboxes** - Multiple selections
- **Date Picker** - Date selection with localization

All fields include proper validation and error handling.

---

## Українська

### Мета Проекту
Цей проект демонструє комплексну реалізацію форми за допомогою React, Formik та Tailwind CSS. Він показує багаторазово використовувані компоненти форми з належною валідацією, типобезпекою з TypeScript та сучасним стилізуванням з Tailwind CSS.

### Особливості
- **Багаторазові Компоненти Форми**: Input, Textarea, Select, Radio кнопки, Checkboxes, Date picker
- **Валідація Форми**: Використання Formik та Yup для надійної валідації
- **Типобезпека**: Повна реалізація TypeScript
- **Сучасне Стилізування**: Адаптивний дизайн з Tailwind CSS
- **Архітектура Компонентів**: Добре структуровані, модульні компоненти
- **Робота з Датами**: React DatePicker з підтримкою локалізації

### Структура Проекту
```
src/
├── components/
│   ├── FormComponents/
│   │   ├── Button.tsx          # Багаторазовий компонент кнопки
│   │   ├── CheckboxButton.tsx  # Компонент групи чекбоксів
│   │   ├── DatePicker.tsx      # Компонент вибору дати
│   │   ├── FormikControl.tsx   # Головний диспетчер форм-контролів
│   │   ├── input.tsx           # Компонент поля вводу
│   │   ├── RadioButton.tsx     # Компонент групи радіо-кнопок
│   │   ├── Select.tsx          # Компонент випадаючого списку
│   │   ├── Textarea.tsx        # Компонент текстової області
│   │   └── TextError.tsx       # Компонент повідомлення про помилку
│   └── FormikContainer.tsx     # Головний контейнер форми
├── types/
│   ├── baseFormControlProps.ts    # Базові властивості форм-контролю
│   ├── BaseInputProps.ts          # Базові властивості вводу
│   ├── controlType.ts             # Типи форм-контролів
│   ├── option.interface.ts        # Інтерфейс опцій для select/radio
│   └── optionsControl.interface.ts # Властивості контролю опцій
├── App.tsx                     # Головний компонент додатку
└── main.tsx                    # Точка входу додатку
```

### Встановлення та Налаштування

1. **Клонувати репозиторій**
   ```bash
   git clone <repository-url>
   cd react-tailwind-form
   ```

2. **Встановити залежності**
   ```bash
   npm install
   # або
   yarn install
   ```

3. **Запустити сервер розробки**
   ```bash
   npm run dev
   # або
   yarn dev
   ```

### Використання
Форма включає наступні елементи управління:
- **Email Input** - Валідація електронної пошти
- **Textarea** - Багаторядковий текстовий ввід
- **Select Dropdown** - Одиночний вибір з опцій
- **Radio Buttons** - Один вибір з групи
- **Checkboxes** - Множинний вибір
- **Date Picker** - Вибір дати з локалізацією

Всі поля включають належну валідацію та обробку помилок.

