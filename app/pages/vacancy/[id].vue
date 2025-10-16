<script setup lang="ts">
const items = ["Повна зайнятість", "В офісі/на місці"];
</script>

<template>
  <div class="w-full text-(--Text_Color) text-xl flex justify-center">
    <div class="w-full flex flex-col gap-5 container px-35 py-10">
      <div class="w-[85%] border border-(--Primary_Color) rounded-[15px]">
        <div
          class="w-full p-4 flex justify-between bg-(--Secondary_Color_Opacity) border-b border-b-(--Primary_Color) border-dashed"
        >
          <div class="flex items-center gap-1.5 cursor-pointer">
            <Icon name="material-symbols:arrow-back-rounded" /> Повернутись
          </div>
          <div class="flex gap-2.5 items-center">
            <div
              class="p-2.5 border border-(--Primary_Color) rounded-[15px] hover:bg-(--Secondary_Color) transition-colors cursor-pointer"
            >
              Відгукнутись
            </div>
            <div class="flex items-center text-3xl cursor-pointer">
              <Icon name="material-symbols:star-outline" />
            </div>
            <div class="flex items-center text-3xl cursor-pointer">
              <Icon name="line-md:thumbs-down" />
            </div>
          </div>
        </div>
        <div class="w-full p-4.5 flex flex-col gap-2.5">
          <div class="text-5xl">TITLE fdfDFFDfdfdfddfdFDFDfdfd</div>
          <div
            class="flex items-center gap-2 text-sm text-(--Text_Muted_Color)"
          >
            <div>20 годин тому</div>
            <Icon name="mdi:rhombus" />
            <div>Укрпошта</div>
            <Icon name="mdi:rhombus" />
            <div>Київ</div>
          </div>
          <CommonRubricsComponent
            :items="items"
            :other="false"
            route-style="mt-0!"
            button-style="text-sm! px-2! rounded-[8px]!"
          />
        </div>
        <div class="px-4">
          «Укрпошта» - національний оператор поштового зв'язку, надійний та
          відповідальний роботодавець. Сьогодні команда «Укрпошти» - це фахівці,
          які руйнують стереотипи, щоденно працюють над підвищенням ефективності
          логістичних процесів, вдосконаленням якості сервісу та зручності для
          Клієнта. Команда, яка завжди готова до нових викликів та виконання
          важливих місій! Саме зараз ми шукаємо Front-end-розробника (Angular
          2+) Основні обов’язки: Участь в розробці інтернет-магазину компанії,
          сайту Верстка та програмування веб-сторінок і інтерфейсів Інтеграція з
          бекенд Верстка / адаптація шаблонів згідно дизайну Успішний кандидат
          відповідає наступним вимогам: Освіта — вища (ІТ) JavaScript, jQuery,
          Bootstrap Знання HTML / HTML5, CSS3 Досвід роботи з RESTful
          веб-сервісами з використанням AJAX, JSON, XML запитів Досвід розробки
          з використанням, Angular, Vue, React — від 1 року Досвід роботи з LESS
          / SASS / Stylus Досвід роботи з PHP — бажано GitHub / GitLab MS SQL /
          MySQL / PostgreSQL Розуміння кросбраузерну, адаптивної, респонсівноі
          верстки та семантичної html-розмітки Досвід роботи з API соц. мереж,
          API Google Англійська мова на рівні роботи з технічною документацією
          Комунікативні навички, командний гравець, орієнтованість на результат
          Ми пропонуємо: Офіційне працевлаштування у великій компанії, що
          розвивається Стабільну заробітну плату Премію за виконання планових
          показників Навчання та професійний розвиток Можливості кар’єрного
          зростання Прикріпляй та відправляй своє резюме нижче за посиланням. З
          УКРПОШТОЮ РАЗОМ ДО ПЕРЕМОГИ!
        </div>
        <div
          class="w-full p-4 mt-2 flex justify-between bg-(--Secondary_Color_Opacity) border-t border-t-(--Primary_Color) border-dashed"
        >
          <div
            class="p-2.5 border border-(--Primary_Color) rounded-[15px] hover:bg-(--Secondary_Color) transition-colors cursor-pointer"
          >
            Відгукнутись
          </div>
          <div class="flex gap-2.5 items-center">
            <div class="flex items-center text-3xl cursor-pointer">
              <Icon name="material-symbols:star-outline" />
            </div>
            <div class="flex items-center text-3xl cursor-pointer">
              <Icon name="line-md:thumbs-down" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-[85%] border border-(--Primary_Color) rounded-[15px] p-4 flex justify-between cursor-pointer"
      >
        <div class="flex flex-col gap-1.5 text-2xl">
          <div class="text-5xl text-(--Primary_Color)">Укрпошта</div>
          <div class="text-(--Text_Muted_Color)">Транспорт та логістика</div>
          <div>
            <span class="text-(--Primary_Color)">Більше 500</span>
            співробітників
          </div>
          <div>
            <span class="text-(--Primary_Color)">З 2016 року</span> на ринку
          </div>
        </div>
        <NuxtImg
          src="/pochta.png"
          width="250"
          class="max-w-[250px] max-h-[100px]"
        />
      </div>
    </div>
  </div>
</template>
