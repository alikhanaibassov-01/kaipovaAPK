export type ResourceCategory =
  | "all"
  | "interactive"
  | "tests"
  | "presentations"
  | "practical";

export const categoryLabels: Record<Exclude<ResourceCategory, "all">, string> = {
  interactive: "Интерактивные уроки",
  tests: "Тесты / квизы",
  presentations: "Презентации",
  practical: "Практические задания",
};

export const filterTabs: { id: ResourceCategory; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "interactive", label: "Уроки" },
  { id: "tests", label: "Тесты" },
  { id: "presentations", label: "Презентации" },
  { id: "practical", label: "Практика" },
];

export interface Resource {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: Exclude<ResourceCategory, "all">;
  icon: string;
}

export const resources: Resource[] = [
  {
    id: "program-pm02",
    title: "Авторская программа ПМ 02",
    description:
      "Полная программа модуля: 80 часов, 3 тематических раздела, концептуальный и методический блоки.",
    fullDescription:
      "Авторская программа учебного модуля ПМ 02 направлена на формирование профессиональных знаний в области подготовки, обработки и воспроизведения графической информации.",
    category: "presentations",
    icon: "ПМ",
  },
  {
    id: "textbook",
    title: "Учебное пособие",
    description: "Электронная версия пособия «Воспроизведение изобразительной информации».",
    fullDescription:
      "Охватывает виды изображений, цветовые модели RGB и CMYK, растровую и векторную графику, технологии обработки и допечатной подготовки.",
    category: "interactive",
    icon: "УП",
  },
  {
    id: "presentations",
    title: "Презентационные материалы",
    description: "Слайды для аудиторных занятий по всем разделам модуля.",
    fullDescription:
      "Презентации: теоретические основы, инструменты графических редакторов, этапы допечатной подготовки и контроль качества.",
    category: "presentations",
    icon: "ПР",
  },
  {
    id: "test-section-1",
    title: "Контроль: Раздел 1",
    description: "Тестирование основ изобразительной информации и её обработки.",
    fullDescription:
      "Форматы файлов, разрешение, цветовые модели, композиция, растровая и векторная графика.",
    category: "tests",
    icon: "Т1",
  },
  {
    id: "test-section-2",
    title: "Контроль: Раздел 2",
    description: "Тестирование технологий обработки и воспроизведения изображений.",
    fullDescription:
      "Цветокоррекция, ретушь, векторизация, работа со слоями и эффектами, подготовка для печати и веб.",
    category: "tests",
    icon: "Т2",
  },
  {
    id: "test-section-3",
    title: "Контроль: Раздел 3",
    description: "Тестирование допечатной подготовки и контроля качества.",
    fullDescription:
      "Этапы prepress-подготовки, настройка параметров файлов, цветовые профили, устранение типичных ошибок.",
    category: "tests",
    icon: "Т3",
  },
  {
    id: "cases",
    title: "Практические кейсы",
    description: "Кейсы по обработке и воспроизведению изображений.",
    fullDescription:
      "Анализ профессиональных ситуаций: обработка изображений, подготовка макетов, выбор способов воспроизведения контента.",
    category: "interactive",
    icon: "КС",
  },
  {
    id: "practical-tasks",
    title: "Сборник практических заданий",
    description: "Задания по CorelDraw, Illustrator и Photoshop.",
    fullDescription:
      "Работа с инструментами рисования, текстом, эффектами, цветокоррекцией и ретушированием.",
    category: "practical",
    icon: "ПЗ",
  },
  {
    id: "method-recommendations",
    title: "Методические рекомендации",
    description: "Рекомендации для проведения практических занятий.",
    fullDescription:
      "Организация практических занятий, творческих и проектных работ, критерии оценивания.",
    category: "presentations",
    icon: "МР",
  },
  {
    id: "creative-projects",
    title: "Творческие проекты",
    description: "Логотип, афиша, визитка, этикетка, обложка журнала.",
    fullDescription:
      "Проектные работы обучающихся в CorelDraw и Adobe Illustrator по тематическому плану модуля.",
    category: "practical",
    icon: "ТП",
  },
  {
    id: "work-program",
    title: "Рабочая программа",
    description: "Учебно-тематический план: 44 + 38 + 12 часов.",
    fullDescription:
      "Структурированный план по трём разделам модуля с распределением теории, практики и СРСП.",
    category: "presentations",
    icon: "РП",
  },
];
