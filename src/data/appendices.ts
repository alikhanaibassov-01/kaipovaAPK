export interface Appendix {
  id: string;
  letter: string;
  title: string;
  subtitle: string;
  description: string;
  qrImage: string;
  url: string;
}

export const appendices: Appendix[] = [
  {
    id: "appendix-a",
    letter: "А",
    title: "Приложение А",
    subtitle: "Электронная версия учебного пособия",
    description:
      "Комплексное учебное пособие «Воспроизведение изобразительной информации» — теория, практика и иллюстрации по всем разделам модуля ПМ 02.",
    qrImage: "/images/qr/appendix-a.png",
    url: "https://placeholder.link/appendix-a",
  },
  {
    id: "appendix-b",
    letter: "Б",
    title: "Приложение Б",
    subtitle: "Итоговый контроль",
    description:
      "Контрольно-оценочные материалы: тестирование по разделу «Основы изобразительной информации и её обработки».",
    qrImage: "/images/qr/appendix-b.png",
    url: "https://placeholder.link/appendix-b",
  },
  {
    id: "appendix-v",
    letter: "В",
    title: "Приложение В",
    subtitle: "Практические кейсы",
    description:
      "Кейсовые задания для анализа профессиональных ситуаций в области обработки и воспроизведения изображений.",
    qrImage: "/images/qr/appendix-v.png",
    url: "https://placeholder.link/appendix-v",
  },
  {
    id: "appendix-g",
    letter: "Г",
    title: "Приложение Г",
    subtitle: "База стоковых ресурсов",
    description:
      "Шаблоны, иконки, шрифты и графические элементы для выполнения практических заданий обучающихся.",
    qrImage: "/images/qr/appendix-g.png",
    url: "https://placeholder.link/appendix-g",
  },
];
