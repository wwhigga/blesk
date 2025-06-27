export const cleaningData = {
  general: {
    title: 'Что входит в генеральную уборку?',
    services: {
      kitchen: [
        { name: 'Мойка фасадов кухонного гарнитура', included: true },
        { name: 'Мойка стеновых панелей', included: true },
      ],
      rooms: [
         { name: 'Влажная уборка полов и плинтусов', included: true },
         { name: 'Сухая очистка стен от пыли и паутины', included: true },
      ],
      bathrooms: [
         { name: 'Чистка кухонных рабочих поверхностей', included: true },
         { name: 'Сухая очистка потолка от пыли и паутины', included: true },
      ]
    }
  },
  deep: {
    title: 'Что входит в уборку запущенных квартир?',
    services: {
      kitchen: [
        { name: 'Глубокая чистка всех поверхностей с сильными средствами', included: true },
        { name: 'Удаление жира и нагара с плиты и духовки', included: true },
      ],
      rooms: [
         { name: 'Химчистка ковров и мебели', included: true },
         { name: 'Выведение сложных пятен', included: true },
      ],
      bathrooms: [
         { name: 'Удаление ржавчины и известкового налета', included: true },
         { name: 'Дезинфекция сантехники', included: true },
      ]
    }
  },
  maintenance: {
    title: 'Что входит в поддерживающую уборку?',
    services: {
      kitchen: [
        { name: 'Протирка всех доступных поверхностей', included: true },
        { name: 'Мытье посуды', included: true },
      ],
      rooms: [
         { name: 'Уборка пылесосом', included: true },
         { name: 'Заправка кроватей', included: true },
      ],
      bathrooms: [
         { name: 'Чистка зеркал и стеклянных поверхностей', included: true },
         { name: 'Вынос мусора', included: true },
      ]
    }
  },
  professional: {
    title: 'Что входит в профессиональную уборку?',
    services: {
      kitchen: [
        { name: 'Обработка парогенератором', included: true },
        { name: 'Полировка металлических поверхностей', included: true },
      ],
      rooms: [
         { name: 'Очистка воздуха спец. оборудованием', included: true },
         { name: 'Мытье окон и рам', included: true },
      ],
      bathrooms: [
         { name: 'Уничтожение плесени и грибка', included: true },
         { name: 'Нанесение защитных покрытий на поверхности', included: true },
      ]
    }
  }
}; 