<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

const { t } = useI18n()

// data
const projectsList = [
    {
        title: 'Alkybank',
        imgSrc: 'https://i.ibb.co/sgbrqNH/alkybank.png',
        content: 'E-Wallet que permite integrar en el Homebanking de los clientes de AlkyBank y facilitar sus transacciones.',
        description: 'Angular, Typescript, Angular Material',
        githubUrl: 'https://github.com/Baut1/Bootcamp-Crisalis-Finnegans',
        deployUrl: 'https://angular-deploy-ng-wallers.vercel.app/login'
    },
    {
        title: 'Veride',
        imgSrc: 'https://i.ibb.co/34n5sYd/veride.png',
        content: 'Veridē es un restaurante e-commerce cuyo diferenciador es ofrecer platillos vegano-vegetarianos saludables.',
        description: 'React, JavaScript, Sass',
        githubUrl: 'https://github.com/No-Country/C4-30-front',
        deployUrl: 'https://veride.netlify.app/'
    },
    {
        title: 'Share',
        imgSrc: 'https://i.ibb.co/nBqbTsQ/share.png',
        content: 'Compañero ideal es una app para alquilar departamentos o habitaciones para estudiantes.',
        description: 'Angular, TypeScript, Sass',
        githubUrl: 'https://github.com/No-Country/s3-03-t-front',
        deployUrl: 'https://share-your-room.herokuapp.com/'
    },
    {
        title: 'Hermes',
        imgSrc: 'https://i.ibb.co/YbfThMb/hermes.png',
        content: 'Servicio online que permite donar medicamentos.',
        description: 'React, JavaScript, Bootstrap',
        githubUrl: 'https://github.com/No-Country/s4-02-t-python-frontend',
        deployUrl: 'https://s4-02-t-python-frontend-n2k5b3mav-s4-02-t-python-frontend.vercel.app/'
    }
    
];

// breakpoints
const breakpoints = {
  700: {
    itemsToShow: 1.5,
  },
  // 1000 and up
  1000: {
    itemsToShow: 2,
  },
  1200: {
    itemsToShow: 3
  }
}
</script>

<template>
    <Carousel :items-to-show="1.5" :wrap-around="true" :breakpoints="breakpoints">
        <Slide v-for="slide in projectsList" :key="slide">
        <div flex flex-col class="carousel__item">
          <o-card
          :cover="`${slide.imgSrc}`"
          :title="`${slide.title}`"
          :description="`${slide.description}`"
          :content="`${slide.content}`"
          divider
          class="not-selectable"
          >
            <template #actions>
              <div fbc un-children="flex items-center gap-2">
                <div gap-4>
                  <div o-info>
                    <o-button :to="slide.githubUrl" target=”_blank”>
                      <o-icon o-primary name="i-carbon-logo-github"></o-icon>
                      Repo
                    </o-button>
                  </div>
                  <div o-info>
                    <o-button :to="slide.deployUrl" target=”_blank”>
                      <o-icon o-primary name="i-carbon-application-web"></o-icon>
                      Deploy
                    </o-button>
                  </div>
                </div>
              </div>
            </template>
          </o-card>
        </div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
    </Carousel>

    <div w-xs ma>
      <o-alert type="primary" light :description="t('button.drag')" center closable />
    </div>
</template>

<style>
.carousel__item {
  min-height: 200px;
  max-width: 500px;
  border: 3px solid;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.85);
}

.carousel__slide--prev {
  opacity: 0.5;
  transform: rotateY(-20deg) scale(0.85);
}

.carousel__slide--next {
  opacity: 0.5;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}

.not-selectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>