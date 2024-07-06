<script setup>
import Dark from './components/Dark.vue';
import 'animate.css';
import dayjs from 'dayjs';
import { ref, onMounted } from 'vue';


import duration from 'dayjs/plugin/duration';
import localizedFormat from 'dayjs/plugin/localizedFormat';

// расширяем функциональность dayjs при помощи плагина duration
dayjs.extend(duration);
dayjs.extend(localizedFormat);

import 'dayjs/locale/ru';
dayjs.locale('ru');


const testH1 = ref('');
const selected = ref('');

const isAnimation = ref(false);

// Установленная дата
const date1 = dayjs('2017-01-01');
const date3 = dayjs();

// Создаем реактивную переменную для хранения разницы во времени
const timeDifference = ref('');

// Функция для обновления разницы во времени
function updateDifference() {
  try {
    const date2 = dayjs(); // Текущее время

    // Вычислите разницу в миллисекундах
    const diff = date2.diff(date1);

    // Переведите разницу в человекочитаемый формат
    const dur = dayjs.duration(diff);

    const days = Math.floor(dur.asDays());
    const hours = dur.hours();
    const minutes = dur.minutes();
    const seconds = dur.seconds();

    timeDifference.value = `${days} дн, ${hours} ч, ${minutes} мин, ${seconds} сек`;
  } catch (e) {
    console.error('Ошибка в updateDifference функции:', e);
  }
}

// Обновляйте разницу каждую секунду
onMounted(() => {
  updateDifference(); // Вызовите функцию сразу для первоначальной установки значения
  setInterval(updateDifference, 1000);
  // console.dir(timeDifference);
});

const testUp = () => {
  console.log('test');
  console.log(selected);
  console.log(testH1);
  testH1.value.className += (' animate__animated animate__tada');
  setTimeout(() => {
    testH1.value.className = ('mb-4 mt-5 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl');
  }, 1000);
}

</script>

<template>
  


<Dark />
  

<section class="bg-white dark:bg-gray-900 animate__animated animate__fadeInDown">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
      <h1 class="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-8xl dark:text-white">ППР 2024. <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">18 цех.</mark></h1>
    </div>
</section>




  <section class="bg-slate-50 dark:bg-gray-800 rounded-xl w-full testPhoto animate__animated animate__fadeInRight">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">

        <h1 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">Проверяем <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">оснастку</span> уже</h1>

        
        <h1 class="animate__animated animate__pulse animate__infinite mb-4 mt-5 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{{ timeDifference }}</span></h1>
        <h1 class="text-5xl font-extrabold dark:text-white"><small class="ms-2 font-semibold text-gray-500 dark:text-gray-400">{{ date1.format('LL') }} - {{ date3.format('LL') }}</small></h1>

      </div>
  </section>



  <section class="bg-slate-50 dark:bg-gray-800 rounded-xl w-full testPhoto mt-10 animate__animated animate__fadeInLeft">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">

        <h1 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">Кол-во <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">оснастки</span> по месяцам</h1>

        <h1 ref="testH1" class="mb-4 mt-5 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{{ selected }}</span></h1>

        

        <form class="max-w-sm mx-auto mt-10" @submit.prevent>
          <select v-model="selected" v-on:change="testUp" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
           <option disabled value="">Выбрать месяц:</option>
            <option value="195">Июль</option>
            <option value="144">Сентябрь</option>
            <option value="164">Октябрь</option>
          </select>
        </form>

      </div>
  </section>


  <section class="bg-slate-50 dark:bg-gray-800 rounded-xl w-full testPhoto mt-10 animate__animated animate__fadeInLeft">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">

        <h1 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">Контакты <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"></span></h1>
        <div class="contacts mt-5">
          <div class="contacts-2 animate__animated animate__pulse animate__infinite">
            <a href="#"><img class="w-16 h-16 rounded" src="/src/assets/edgar.jpg" alt="Default avatar"></a>
            <p class="mt-2"><a href="https://api.whatsapp.com/send?phone=79534050382">Эдгар(ссылка)</a></p>
          </div>
          <div class="contacts-2">
            <a href="#"><img class="w-16 h-16 rounded" src="/src/assets/dimos.jpeg" alt="Default avatar"></a>
            <p class="mt-2"><a href="https://api.whatsapp.com/send?phone=79655853316">Димос(ссылка)</a></p>
          </div>
        </div>
      </div>
  </section>









<!-- <section class="bg-center bg-no-repeat bg-[url('src/assets/ppr2.png')] bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1 class="mb-4 text-5xl font-extrabold leading-none tracking-tight text-white md:text-6xl lg:text-8xl dark:text-white">ППР 2024 <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">18 цех</mark></h1>

      <h1 class="text-5xl font-extrabold dark:text-white"><small class="ms-2 font-semibold text-white dark:text-gray-400">{{ date1.format('LL') }} - {{ date3.format('LL') }}</small></h1>

        <h1 class="mb-4 mt-5 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{{ timeDifference }}</span></h1>

    </div>
</section> -->














</template>

<style scoped>


/* .testPhoto {
  background-image: url('src/assets/ppr2.png');
  
} */


.contacts {
  display: flex;
  justify-content: space-evenly;
  align-items: center
}

.contacts-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.doPhoto {
  display: flex;
  flex-direction: column;
  align-items: center;
}



.count {
  display: inline-block;
  position: relative;
  bottom: 40px;
}

.photo {
  width: 20%;
  height: auto;
  border-radius: 50%;
}

</style>
