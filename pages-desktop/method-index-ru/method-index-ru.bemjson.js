({
 "block": "b-page",
 "title": "method-index-ru",
 "favicon": "/favicon.ico",
 "head": [
  {
   "elem": "css",
   "url": "_method-index-ru.css",
   "ie": false
  },
  {
   "elem": "css",
   "url": "_method-index-ru",
   "ie": true
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "description",
    "value": "method-index-ru"
   }
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "keywords",
    "value": "method-index-ru"
   }
  }
 ],
 "content": [
  {
   "block": "header",
   "content": [
    {
     "block": "b-link",
     "mix": [
      {
       "block": "header",
       "elem": "logo"
      }
     ],
     "url": "/"
    },
    [
     {
      "block": "b-menu-horiz",
      "mods": {
       "layout": "normal"
      },
      "mix": [
       {
        "block": "nav",
        "mods": {
         "type": "main"
        }
       }
      ],
      "js": false,
      "content": [
       {
        "elem": "item",
        "content": {
         "block": "b-link",
         "url": "/method/",
         "content": "Methodology"
        }
       }
      ]
     }
    ]
   ]
  },
  {
   "block": "content",
   "content": [
    {
     "block": "b-text",
     "content": [
      {
       "elem": "p",
       "content": [
        "Обычно при вёрстке и программировании сайта разработчики опираются на допущение, что дизайн и технические требования к странице не изменятся в процессе разработки."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Дизайнер, верстальщик и программист каждый работает в своей области, часто не пересекаясь друг с другом:"
       ]
      },
      {
       "elem": "ol",
       "content": [
        {
         "elem": "li",
         "content": [
          "Дизайнер создаёт дизайн в виде набора макетов"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Из этих макетов делается статическая HTML/CSS вёрстка"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Она передаётся программисту для создания шаблонов на каком-то серверном языке и оживлении сайта с помощью JavaScript"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Такой подход хорошо работает только в том случае, если дизайн сайта остаётсся неизменным всё время его жизни и изменения только добавляют контент."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Но обычно так не происходит, сайт начинает жить своей жизнью и развиваться. Дизайн страниц постепенно меняется, добавляются новые страницы или новые блоки на них."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Если в код сайта не заложена определённая структура, если он делается не по фиксированным правилам, то постепенно его становится всё сложнее и сложнее разрабатывать, код сайта становится неподвластным разработчикам."
       ]
      },
      {
       "elem": "p",
       "content": [
        "При БЭМ-подходе все люди, принимающие участие в разработке сайта, работают с единым кодом и общаются в одних и тех же терминах, на одном языке:"
       ]
      },
      {
       "elem": "ol",
       "content": [
        {
         "elem": "li",
         "content": [
          "Дизайн сайта может измениться в любой момент, надо быть к этому готовым"
         ]
        },
        {
         "elem": "li",
         "content": [
          "HTML/CSS разметка развивается вместе с дизайном, готова к его изменению"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Программист вместе в верстальщиком работают над кодом сайта, дополняя код друг друга"
         ]
        }
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Usloviyapoyavleniyametodologii"
       },
       "content": [
        "Условия появления методологии"
       ]
      },
      {
       "elem": "p",
       "content": [
        "БЭМ-методология была разработана в ",
        {
         "block": "b-link",
         "url": "http://company.yandex.ru",
         "content": [
          "Яндексе"
         ]
        },
        " при разработке большого количества сервисов для решения следующих задач:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Типовые проекты должны разрабатываться быстро, но жить долго",
          {
           "tag": "br"
          },
          "\n   Нужно уметь за короткий срок создать проект, архитектура которого позволит без\n   труда поддерживать и развивать его долгие годы."
         ]
        },
        {
         "elem": "li",
         "content": [
          "Над проектом работает много людей",
          {
           "tag": "br"
          },
          "\n   Нужно уметь эффективно организовывать работу команд, как из двух разработчиков,\n   так и из десятков."
         ]
        },
        {
         "elem": "li",
         "content": [
          "Масштабируемость команд",
          {
           "tag": "br"
          },
          "\n   Добавление новых людей в команду должно улучшать производительность команды.\n   Необходима возможность быстро вводить новых разработчиков в курс дела и выделять им\n   собственные зоны ответственности.",
          {
           "tag": "br"
          },
          "\n   Для того, чтобы с одним и тем же кодом можно было работать долгое время и разным\n   составом команды, код должен быть хорошо структурирован."
         ]
        },
        {
         "elem": "li",
         "content": [
          "Повторное использование кода",
          {
           "tag": "br"
          },
          "\n   Каждый новый проект или элемент интерфейса не должны писаться с нуля. Если где-то внутри\n   компании уже выполнялась похожая задача, нужно максимально повторно использовать\n   полученный в результате код. У кода не должно быть контекстной зависимости, его нужно\n   уметь легко переносить в другое место."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Мы искали решения возникающих перед нами проблем. Начиная с какого-то момента эти решения составили ",
        {
         "tag": "tt",
         "content": [
          "методологию БЭМ"
         ]
        },
        "."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Chitatydalyshe"
       },
       "content": [
        "Читать дальше"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "definitions/",
           "content": [
            "Определения"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "filesystem/",
           "content": [
            "Организация файловой системы"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "history/",
           "content": [
            "История создания"
           ]
          }
         ]
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "block": "footer"
  }
 ]
})