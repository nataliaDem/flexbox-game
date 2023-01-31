const STATUSES = {
  'CREATED': 'CREATED',
  'ACTIVE': 'ACTIVE',
  'NOT_FOUND': 'NOT_FOUND',
  'FINISHED': 'FINISHED'
}

var levels = [
  {
    "name": "justify-content 1",
    "instructions": {
      "en": "<p>Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the frog to the right. <img src=\"https://code.org/api/hour/begin_flexbox_froggy.png\"></p>",
      "ru": "<p>Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям, написав CSS код! Направь этого лягушонка на лилию справа, используя свойство <code>justify-content</code>, которое выравнивает элементы горизонтально и принимает следующие значения:</p><ul><li><code>flex-start</code>: элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: элементы отображаются с одинаковыми отступами вокруг них.</li></ul><p>Например, <code>justify-content: flex-end;</code> сдвинет лягушонка вправо.</p>"
    },
    "board": "g",
    "style": {
      "justify-content": "flex-end"
    },
    "before": "#pond {\n  display: flex;\n",
    "after": "}"
  },
  // {
  //   "name": "justify-content 2",
  //   "instructions": {
  //     "en": "<p>Use <code>justify-content</code> again to help these frogs get to their lilypads. Remember that this CSS property aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>",
  //     "ru": "<p>Используй <code>justify-content</code> ещё раз, чтобы помочь этим лягушатам попасть на их лилии. Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:</p><ul><li><code>flex-start</code>: элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: элементы отображаются с одинаковыми отступами вокруг них.</li></ul>"
  //   },
  //   "board": "gy",
  //   "style": {
  //     "justify-content": "center"
  //   },
  //   "before": "#pond {\n  display: flex;\n",
  //   "after": "}"
  // },
  {
    "name": "justify-content 3",
    "instructions": {
      "en": "<p>Help all three frogs find their lilypads just by using <code>justify-content</code>. This time, the lilypads have lots of space all around them.</p><p>If you find yourself forgetting the possible values for a property, you can click on the property name to view them. Try clicking on <code>justify-content</code>.</p>",
      "ru": "<p>Помоги всем трём лягушатам найти их лилии, просто используя <code>justify-content</code>. В этот раз у лилий много пространства вокруг.</p><p>Если ты чувствуешь, что забыл возможные значения свойства, ты можешь навести курсор на название свойства, чтобы посмотреть их. Попробуй навести курсор на <code>justify-content</code>.</p>"
    },
    "board": "gyr",
    "style": {
      "justify-content": "space-around"
    },
    "before": "#pond {\n  display: flex;\n",
    "after": "}"
  },
  // {
  //   "name": "justify-content 4",
  //   "instructions": {
  //     "en": "<p>Now the lilypads on the edges have drifted to the shore, increasing the space between them. Use <code>justify-content</code>. This time, the lilypads have equal spacing between them.</p>",
  //     "ru": "<p>Теперь лилии по краям уплыли к берегам, увеличив пространство между ними. Используй <code>justify-content</code>. В этот раз у лилий одинаковое расстояние между ними.</p>"
  //   },
  //   "board": "gyr",
  //   "style": {
  //     "justify-content": "space-between"
  //   },
  //   "before": "#pond {\n  display: flex;\n",
  //   "after": "}"
  // },
  {
    "name": "align-items 1",
    "instructions": {
      "en": "<p>Now use <code>align-items</code> to help the frogs get to the bottom of the pond. This CSS property aligns items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>",
      "ru": "<p>Теперь используй <code>align-items</code>, чтобы помочь лягушатам добраться до нижней части пруда. Это свойство CSS выравнивает элементы вертикально и принимает следующие значения:</p><ul><li><code>flex-start</code>: элементы выравниваются по верхнему краю контейнера.</li><li><code>flex-end</code>: элементы выравниваются по нижнему краю контейнера.</li><li><code>center</code>: элементы выравниваются вертикально по центру контейнера.</li><li><code>baseline</code>: элементы отображаются на базовой линии контейнера.</li><li><code>stretch</code>: эЭлементы растягиваются, чтобы заполнить контейнер.</li></ul>"
    },
    "board": "gyr",
    "style": {
      "align-items": "flex-end"
    },
    "before": "#pond {\n  display: flex;\n",
    "after": "}"
  },
  // {
  //   "name": "align-items 2",
  //   "instructions": {
  //     "en": "<p>Lead the frog to the center of the pond using a combination of <code>justify-content</code> and <code>align-items</code>.</p>",
  //     "ru": "<p>Направь лягушонка в центр пруда, используя <code>justify-content</code> и <code>align-items</code> вместе.</p>"
  //   },
  //   "board": "g",
  //   "style": {
  //     "justify-content": "center",
  //     "align-items": "center"
  //   },
  //   "before": "#pond {\n  display: flex;\n",
  //   "after": "}"
  // },
  {
    "name": "align-items 3",
    "instructions": {
      "en": "<p>The frogs need to cross the pond again, this time for some lilypads with plenty of space around them. Use a combination of <code>justify-content</code> and <code>align-items</code>.</p>",
      "ru": "<p>Лягушатам снова нужно пересечь пруд. В этот раз к лилиям, с достаточно большим пространством вокруг них. Используй комбинацию <code>justify-content</code> и <code>align-items</code>.</p>"
    },
    "board": "gyr",
    "style": {
      "justify-content": "space-around",
      "align-items": "flex-end"
    },
    "before": "#pond {\n  display: flex;\n",
    "after": "}"
  },
  {
    "name": "flex-direction 1",
    "instructions": {
      "en": "<p>The frogs need to get in the same order as their lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>",
      "ru": "<p>Лягушатам нужно выстроиться в том же порядке, что и лилии, используя <code>flex-direction</code>. Это свойство CSS задает направление, в котором будут расположены элементы в контейнере, и принимает следующие значения:</p><ul><li><code>row</code>: элементы размещаются по направлению текста.</li><li><code>row-reverse</code>: элементы отображаются в обратном порядке к направлению текста.</li><li><code>column</code>: элементы располагаются сверху вниз.</li><li><code>column-reverse</code>: элементы располагаются снизу вверх.</li></ul>"
    },
    "board": "gyr",
    "style": {
      "flex-direction": "row-reverse"
    },
    "before": "#pond {\n  display: flex;\n",
    "after": "}"
  },
  // {
  //   "name": "flex-direction 2",
  //   "instructions": {
  //     "en": "<p>Help the frogs find their column of lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>",
  //     "ru": "<p>Помоги лягушатам расположиться на своих лилиях, используя <code>flex-direction</code>. Это свойство CSS задает направление, в котором располагаются элементы в контейнере, и принимает следующие значения:</p><ul><li><code>row</code>: элементы размещаются по направлению текста.</li><li><code>row-reverse</code>: элементы отображаются в обратном порядке к направлению текста.</li><li><code>column</code>: элементы распологаются сверху вниз.</li><li><code>column-reverse</code>: элементы распологаются снизу вверх.</li></ul>"
  //   },
  //   "board": "gyr",
  //   "style": {
  //     "flex-direction": "column"
  //   },
  //   "before": "#pond {\n  display: flex;\n",
  //   "after": "}"
  // },
  // {
  //   "name": "flex-direction 3",
  //   "instructions": {
  //     "en": "<p>Help the frogs get to their own lilypads. Although they seem close, it will take both <code>flex-direction</code> and <code>justify-content</code> to get them there.</p><p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>",
  //     "ru": "<p>Помоги лягушатам попасть на свои лилии. Хоть и кажется, что они почти на своих местах, всё же придётся применить и <code>flex-direction</code>, и <code>justify-content</code>, чтобы поместить их на свои лилии.</p><p>Заметь, что когда ты устанавливаешь направление в обратном порядке для ряда или колонки, начало (start) и конец (end) тоже меняются местами.</p>"
  //   },
  //   "board": "gyr",
  //   "style": {
  //     "flex-direction": "row-reverse",
  //     "justify-content": "flex-end"
  //   },
  //   "before": "#pond {\n  display: flex;\n",
  //   "after": "}"
  // },
  // {
  //   "name": "flex-direction 4",
  //   "instructions": {
  //     "en": "<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p><p>Notice that when the flex direction is a column, <code>justify-content</code> changes to the vertical and <code>align-items</code> to the horizontal.</p>",
  //     "ru": "<p>Помоги лягушатам найти их лилии с помощью <code>flex-direction</code> и <code>justify-content</code>.</p><p>Заметь, когда в качестве направления выбрана колонка, то <code>justify-content</code> влияет на вертикальное выравнивание, а <code>align-items</code> — на горизонтальное.</p>"
  //   },
  //   "board": "gyr",
  //   "style": {
  //     "flex-direction": "column",
  //     "justify-content": "flex-end"
  //   },
  //   "before": "#pond {\n  display: flex;\n",
  //   "after": "}"
  // },
  {
    "name": "flex-direction 5",
    "instructions": {
      "en": "<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p>",
      "ru": "<p>Помоги лягушатам найти их лилии с помощью <code>flex-direction</code> и <code>justify-content</code>.</p>"
    },
    "board": "gyr",
    "style": {
      "flex-direction": "column-reverse",
      "justify-content": "space-between"
    },
    "before": "#pond {\n  display: flex;\n",
    "after": "}"
  },
  {
    "name": "flex-direction 6",
    "instructions": {
      "en": "<p>Help the frogs find their lilypads using <code>flex-direction</code>, <code>justify-content</code>, and <code>align-items</code>.</p>",
      "ru": "<p>Помоги лягушатам найти их лилии с помощью <code>flex-direction</code>, <code>justify-content</code> и <code>align-items</code>.</p>"
    },
    "board": "gyr",
    "style": {
      "flex-direction": "row-reverse",
      "justify-content": "center",
      "align-items": "flex-end"
    },
    "before": "#pond {\n  display: flex;\n",
    "after": "}"
  },
  {
    "name": "order 1",
    "instructions": {
      "en": "<p>Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <code>order</code> property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).</p><p>Use the <code>order</code> property to reorder the frogs according to their lilypads.</p>",
      "ru": "<p>Иногда изменения порядка отображения элементов в контейнере недостаточно. В таких случаях мы можем применить свойство <code>order</code> для конкретных элементов. По умолчанию, значение этого свойства у элементов равно 0, но мы можем задать положительное или отрицательное целое число этому свойству.</p><p>Используй свойство <code>order</code>, чтобы разместить лягушат на своих лилиях.</p>"
    },
    "board": "gyr",
    "selector": "> :nth-child(2)",
    "classes": {
      "#pond, #background": "wrap"
    },
    "style": {
      "order": "2"
    },
    "before": "#pond {\n  display: flex;\n}\n\n.yellow {\n",
    "after": "}"
  },
  {
    "name": "order 2",
    "instructions": {
      "en": "<p>Use the <code>order</code> property to send the red frog to his lilypad.</p>",
      "ru": "<p>Используй свойство <code>order</code>, чтобы отправить красного лягушонка на его лилию.</p>"
    },
    "board": "gggrg",
    "selector": "> :nth-child(4)",
    "classes": {
      "#pond, #background": "wrap"
    },
    "style": {
      "order": "-1"
    },
    "before": "#pond {\n  display: flex;\n}\n\n.red {\n",
    "after": "}"
  },
  {
    "name": "align-self 1",
    "instructions": {
      "en": "<p>Another property you can apply to individual items is <code>align-self</code>. This property accepts the same values as <code>align-items</code> and its value for the specific item.</p>",
      "ru": "<p>Ещё одно свойство, которое ты можешь применить к определенному элементу — это <code>align-self</code>. Это свойство принимает те же значения, что и <code>align-items</code>.</p>"
    },
    "board": "ggygg",
    "selector": "> :nth-child(3)",
    "style": {
      "align-self": "flex-end"
    },
    "before": "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    "after": "}"
  },
  // {
  //   "name": "align-self 2",
  //   "instructions": {
  //     "en": "<p>Combine <code>order</code> with <code>align-self</code> to help the frogs to their destinations.</p>",
  //     "ru": "<p>Используй <code>order</code> и <code>align-self</code> вместе, чтобы помочь лягушатам добраться к своим целям.</p>"
  //   },
  //   "board": "ygygg",
  //   "selector": "> .yellow",
  //   "style": {
  //     "align-self": "flex-end",
  //     "order": "2"
  //   },
  //   "before": "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
  //   "after": "}"
  // },
  {
    "name": "flex-wrap 1",
    "instructions": {
      "en": "<p>Oh no! The frogs are all squeezed onto a single row of lilypads. Spread them out using the <code>flex-wrap</code> property, which accepts the following values:</p><ul><li><code>nowrap</code>: Every item is fit to a single line.</li><li><code>wrap</code>: Items wrap around to additional lines.</li><li><code>wrap-reverse</code>: Items wrap around to additional lines in reverse.</li></ul>",
      "ru": "<p>О нет! Лягушат сплющило на одном ряду лилий. Раздвинь их с помощью свойства <code>flex-wrap</code>, которое принимает следующие значения:</p><ul><li><code>nowrap</code>: размеры элементов устанавливаются автоматически, чтобы они поместились в один ряд.</li><li><code>wrap</code>: элементы автоматически переносятся на новую строку.</li><li><code>wrap-reverse</code>: элементы автоматически переносятся на новую строку, но строки расположены в обратном порядке.</li></ul>"
    },
    "board": "ygggggr",
    "style": {
      "flex-wrap": "wrap"
    },
    "before": "#pond {\n  display: flex;\n",
    "after": "}"
  },
  {
    "name": "flex-wrap 2",
    "instructions": {
      "en": "<p>Help this army of frogs form three orderly columns using a combination of <code>flex-direction</code> and <code>flex-wrap</code>.</p>",
      "ru": "<p>Помоги этой армии лягушат выстроиться в три колонки с помощью комбинации <code>flex-direction</code> и <code>flex-wrap</code>.</p>"
    },
    "board": "gggggrrrrryyyyy",
    "style": {
      "flex-direction": "column",
      "flex-wrap": "wrap"
    },
    "before": "#pond {\n  display: flex;\n",
    "after": "}"
  },
  {
    "name": "flex-flow 1",
    "instructions": {
      "en": "<p>The two properties <code>flex-direction</code> and <code>flex-wrap</code> are used so often together that the shorthand property <code>flex-flow</code> was created to combine them. This shorthand property accepts the value of the two properties separated by a space.</p><p>For example, you can use <code>flex-flow: row wrap</code> to set rows and wrap them.</p><p>Try using <code>flex-flow</code> to repeat the previous level.</p>",
      "ru": "<p>Два свойства <code>flex-direction</code> и <code>flex-wrap</code> используются так часто вместе, что было создано свойство <code>flex-flow</code> для их комбинирования. Это свойство принимает их значения, разделённые пробелом.</p><p>Например, ты можешь использовать <code>flex-flow: row wrap</code>, чтобы элементы располагались в ряд и автоматически переносились на новую строку.</p><p>Попробуй использовать <code>flex-flow</code>, чтобы повторить предыдущий уровень.</p>"
    },
    "board": "gggggrrrrryyyyy",
    "style": {
      "flex-flow": "column wrap"
    },
    "before": "#pond {\n  display: flex;\n",
    "after": "}"
  },
  {
    "name": "align-content 1",
    "instructions": {
      "en": "<p>The frogs are spread all over the pond, but the lilypads are bunched at the top. You can use <code>align-content</code> to set how multiple lines are spaced apart from each other. This property takes the following values:</p><ul><li><code>flex-start</code>: Lines are packed at the top of the container.</li><li><code>flex-end</code>: Lines are packed at the bottom of the container.</li><li><code>center</code>: Lines are packed at the vertical center of the container.</li><li><code>space-between</code>: Lines display with equal spacing between them.</li><li><code>space-around</code>: Lines display with equal spacing around them.</li><li><code>stretch</code>: Lines are stretched to fit the container.</li></ul><p>This can be confusing, but <code>align-content</code> determines the spacing between lines, while <code>align-items</code> determines how the items as a whole are aligned within the container. When there is only one line, <code>align-content</code> has no effect.</p>",
      "ru": "<p>Лягушат раскидало по всему пруду, но лилии сгруппированы в верхней части. Ты можешь использовать <code>align-content</code>, чтобы указать, как несколько рядов должны отделяться друг от друга. Данное свойство принимает следующие значения:</p><ul><li><code>flex-start</code>: ряды группируются в верхней части контейнера.</li><li><code>flex-end</code>: ряды группируются в нижней части контейнера.</li><li><code>center</code>: ряды группируются вертикально по центру контейнера.</li><li><code>space-between</code>: ряды отображаются с одинаковыми расстояниями между ними.</li><li><code>space-around</code>: ряды отображаются с одинаковыми расстояниями вокруг них.</li><li><code>stretch</code>: ряды растягиваются, чтобы заполнить контейнер равномерно.</li></ul><p>Это может запутать, но <code>align-content</code> отвечает за расстояние между рядами, в то время как <code>align-items</code> отвечает за то, как элементы в целом будут выровнены в контейнере. Когда только один ряд, <code>align-content</code> ни на что не влияет.</p>"
    },
    "board": "ggggggggggggggg",
    "classes": {
      "#pond, #background": "wrap"
    },
    "style": {
      "align-content": "flex-start"
    },
    "before": "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    "after": "}"
  },
  // {
  //   "name": "align-content 2",
  //   "instructions": {
  //     "en": "<p>Now the current has bunched the lilypads at the bottom. Use <code>align-content</code> to guide the frogs there.</p>",
  //     "ru": "<p>Теперь течение сгруппировало лилии в нижней части. Используй <code>align-content</code>, чтобы направить лягушат туда.</p>"
  //   },
  //   "board": "ggggggggggggggg",
  //   "classes": {
  //     "#pond, #background": "wrap"
  //   },
  //   "style": {
  //     "align-content": "flex-end"
  //   },
  //   "before": "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
  //   "after": "}"
  // },
  {
    "name": "align-content 3",
    "instructions": {
      "en": "<p>The frogs have had a party, but it is time to go home. Use a combination of <code>flex-direction</code> and <code>align-content</code> to get them to their lilypads.</p>",
      "ru": "<p>Лягушата были на вечеринке, но уже пора возвращаться домой. Используй комбинацию <code>flex-direction</code> и <code>align-content</code>, чтобы отправить их к своим лилиям.</p>"
    },
    "board": "rgggyrgggyrgggy",
    "classes": {
      "#pond, #background": "wrap"
    },
    "style": {
      "flex-direction": "column-reverse",
      "align-content": "center"
    },
    "before": "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    "after": "}"
  },
  {
    "name": "align-content 4",
    "instructions": {
      "en": "<p>Bring the frogs home one last time by using the CSS properties you've learned:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src=\"https://code.org/api/hour/finish_flexbox_froggy.png\"></li></ul>",
      "ru": "<p>Доставь лягушат домой в последний раз, используя свойства CSS, которые ты выучил:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>"
    },
    "board": "rggggyy",
    "style": {
      "flex-direction": "column-reverse",
      "flex-wrap": "wrap-reverse",
      "align-content": "space-between",
      "justify-content": "center"
    },
    "before": "#pond {\n  display: flex;\n",
    "after": "}"
  }
];


var levelWin = {
  name: 'win',
  instructions: {
    'en': '<p>You win! Thanks to your mastery of flexbox, you were able to help all of the frogs to their lilypads. Just look how hoppy they are!</p><p>If you found this ribbeting, be sure to visit <a href="https://codepip.com/games/grid-garden/">Grid Garden</a> to learn about another powerful new feature of CSS layout. You can also find other coding games over at <a href="https://codepip.com/">Codepip</a>. And be sure to share Flexbox Froggy with your friends!</p>',
    'ru': '<p>Ты выиграл! Благодарим тебя за мастерство flexbox, ты смог помочь всем лягушатам добраться до своих лилий. Просто взгляни, как они счастливы!</p><p>Если тебе понравилось, зацени мои другие проекты в моем <a href="https://thomaspark.co">блоге</a> или <a href="https://twitter.com/thomashpark">твитере</a>, и не забудь поделиться этой игрой со своими друзьями!</p>'
  },
  board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
  classes: {'#pond, #background': 'wrap'},
  style: {},
  before: "#pond {\n  display: flex;\n",
  after: "}"
};

var docs = {
  'align-content': {
    'en': '<p>Aligns a flex container\'s lines within the flex container when there is extra space on the cross-axis.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>space-evenly</code> <code>stretch (default)</code>',
    'ru': '<p>Выравнивает ряды flex-контейнера внутри него (работает только, если элементы расположены больше чем в один ряд).</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>space-evenly</code> <code>stretch (default)</code>'
  },
  'align-items': {
    'en': '<p>Aligns flex items along the cross axis.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch (default)</code>',
    'ru': '<p>Выравнивает flex-элементы вдоль пересекаемой оси.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch (default)</code>'
  },
  'align-self': {
    'en': '<p>Aligns a flex item along the cross axis, overriding the <code>align-items</code> value.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>',
    'ru': '<p>Выравнивает flex-элемент вдоль пересекаемой оси, перекрывая значения свойства <code>align-items</code>.</p><code>flex-start</code> <code>flex-end</code> <code>center</code> <code>baseline</code> <code>stretch</code>'
  },
  'flex-direction': {
    'en': '<p>Defines the direction of the main axis.</p><code>row (default)</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>',
    'ru': '<p>Задает направление основной оси.</p><code>row (default)</code> <code>row-reverse</code> <code>column</code> <code>column-reverse</code>'
  },
  'flex-flow': {
    'en': '<p>Shorthand property for <code>flex-direction</code> and <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>',
    'ru': '<p>Свойство для быстрой записи <code>flex-direction</code> и <code>flex-wrap</code>.</p><code>&lt;flex-direction&gt; &lt;flex-wrap&gt;</code>'
  },
  'flex-wrap': {
    'en': '<p>Specifies whether flex items are forced on a single line or can be wrapped on multiple lines.</p><code>nowrap (default)</code> <code>wrap</code> <code>wrap-reverse</code>',
    'ru': '<p>Указывает, нужно ли чтоб элементы принудительно находились в одном ряду или автоматически переносились.</p><code>nowrap (default)</code> <code>wrap</code> <code>wrap-reverse</code>'
  },
  'justify-content': {
    'en': '<p>Aligns flex items along the main axis.</p><code>flex-start (default)</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>space-evenly</code>',
    'ru': '<p>Выравнивает flex-элементы вдоль главной оси.</p><code>flex-start (default)</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code> <code>space-evenly</code>'
  },
  'order': {
    'en': '<p>Specifies the order of the flex item.</p><code>&lt;integer&gt; (... -1, 0 (default), 1, ...)</code>',
    'ru': '<p>Указывает порядок flex-элемента.</p><code>&lt;integer&gt; (... -1, 0 (default), 1, ...)</code>'
  }
};

var messages = {
  languageActive: {
    'en': 'English',
    'ru': 'Русский'
  },
  next: {
    'en': 'Next',
    'ru': 'Следующий'
  },
  labelFooter: {
    'en': 'Flexbox Froggy is created by',
    'ru': 'Игра Flexbox Froggy создана'
  },
  labelLevel: {
    'en': 'Level',
    'ru': 'Уровень'
  },
  labelOf: {
    'en': 'of',
    'ru': 'из'
  },
  title: {
    'en': 'Flexbox Froggy - A game for learning CSS flexbox',
    'ru': 'Flexbox Froggy - игра для изучения CSS flexbox'
  },
  labelReset: {
    'en': 'Reset',
    'ru': 'Сбросить'
  },
  warningReset: {
    'en': 'Are you sure you want to reset the game?\n\nYour saved progress will be lost and you\'ll be sent to the start of the game.',
    'ru': 'Вы действительно хотите сбросить игру?\n\nВаш прогресс будет потерян и вы вернетесь к началу игры.'
  },
  labelLanguage: {
    'en': 'Language',
    'ru': 'Язык'
  },
  labelSettings: {
    'en': 'Settings',
    'ru': 'Настройки'
  },
  labelDifficulty: {
    'en': 'Difficulty',
    'ru': 'Сложность'
  },
  labelColorblind: {
    'en': 'Colorblind Mode',
    'ru': 'Режим для дальтоников'
  },
  labelColorblindOff: {
    'en': 'Off',
    'ru': 'Выключен'
  },
  labelColorblindOn: {
    'en': 'On',
    'ru': 'Включён'
  },
  labelDifficultyEasy: {
    'en': 'Beginner',
    'ru': 'Новичок'
  },
  labelDifficultyMedium: {
    'en': 'Intermediate - No Directions',
    'ru': 'Средняя — без подсказок'
  },
  labelDifficultyHard: {
    'en': 'Expert - No Directions & Random Levels',
    'ru': 'Эксперт — без подсказок и случайные уровни'
  }
};
