<script setup lang="ts">
const { t } = useI18n()

const studyPlanLink = 'https://agenciadeaprendizaje.bue.edu.ar/wp-content/DTS/TS%20Desarrollo%20de%20Software.pdf'
const campusLink = 'https://ifts16.com/'
const organizationLink = 'https://agenciadeaprendizaje.bue.edu.ar/curso/tecnicatura-superior-en-desarrollo-de-software/'
</script>

<template>
  <kinesis-container h-screen flex flex-col justify-center text-xs font-500 class="main-container">
    <div flex flex-col>
      <h2 text-5xl font-700>
        {{ t('education.title') }}
      </h2>

      <div flex justify-around mt-6>
        <kinesis-element :strength="15" axis="y" w-4xl self-center>
          <o-card :title="t('education.degree-name')" description="IFTS N° 16 - Ciudad Autónoma de Buenos Aires" divider shadow="always">
            {{ t('education.graduate-profile') }}

            <template #actions>
              <div flex justify-around>
                <o-link type="primary">
                  <a :href="organizationLink" target="_blank" rel="noreferrer">
                    {{ t('education.degree-overview') }}
                  </a>
                </o-link>
                <o-link type="primary">
                  <a :href="campusLink" target="_blank" rel="noreferrer">
                    {{ t('education.degree-institution') }}
                  </a>
                </o-link>
                <o-link type="primary">
                  <a :href="studyPlanLink" target="_blank" rel="noreferrer">
                    {{ t('education.degree-study-plan') }}
                  </a>
                </o-link>
              </div>
            </template>
          </o-card>
        </kinesis-element>
      </div>

      <div flex justify-around mt-6>
        <kinesis-element :strength="15" axis="y" w-3xl self-center>
          <o-card title="Lorem ipsum" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit" divider shadow="always">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt laboriosam culpa vero voluptatem atque quis quae voluptatibus, reiciendis dolorum, in, deleniti quasi praesentium. Velit, quaerat dicta reiciendis asperiores consectetur minima?
          </o-card>
        </kinesis-element>
      </div>
    </div>
  </kinesis-container>
</template>

<style>
.main-container {
    font-size: 0.6rem !important;
}

@media (min-width: 700px) {
    .main-container {
        font-size: 1rem !important;
    }
    .description-container {
        display: grid !important;
        grid-template-columns: 1fr 1fr;
        justify-items: center !important;
    }
}
</style>
