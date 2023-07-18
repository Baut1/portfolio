<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <kinesis-container h-screen flex flex-col justify-center text-xs font-500 class="main-container">
        
        <div flex flex-col>
            <h2 text-5xl font-700>{{ t('contact.title') }}</h2>
            <div flex justify-around>
                
                <kinesis-element :strength="15" axis="y">
                    <a href="https://www.linkedin.com/in/juanbautistaiglesias/" target="_blank" rel="noreferrer">
                        <img src="/src/assets/linkedin.png" class="btn-link" />
                    </a>
                </kinesis-element>
                <kinesis-element :strength="15" axis="y">
                    <a href="https://github.com/Baut1" target="_blank" rel="noreferrer">
                        <img src="/src/assets/github.png" class="btn-link" />
                    </a>
                </kinesis-element>
            </div>                
            
            <div flex flex-col text-center text-justify mt-6 class="description-container">
                <kinesis-element :strength="15" axis="y" w-xs my-2 self-center>{{ t('contact.p1') }}
                </kinesis-element>
                <kinesis-element :strength="18" axis="y" w-xs my-2 self-center>{{ t('contact.p2') }}
                    <a href="https://veride.netlify.app/" target="_blank" rel="noreferrer" color="blue">{{ t('contact.this') }}</a>
                    {{ t('contact.p3') }}
                    <a href="https://angular-deploy-ng-wallers.vercel.app/login" target="_blank" rel="noreferrer" color="blue">
                    {{ t('contact.This') }}</a> {{ t('contact.p4') }}
                </kinesis-element>
                <kinesis-element :strength="18" axis="y" w-xs my-2 self-center>{{ t('contact.p5') }}
                    <a href="https://s4-02-t-python-frontend-n2k5b3mav-s4-02-t-python-frontend.vercel.app/" target="_blank" rel="noreferrer" color="blue">{{ t('contact.ONG') }}</a>,
                    <a href="https://github.com/No-Country/s3-03-t-front" target="_blank" rel="noreferrer" color="blue">{{ t('contact.rental') }}</a>.
                    {{ t('contact.p6') }}
                </kinesis-element>
                <kinesis-element :strength="15" axis="y" w-xs my-2 self-center>{{ t('contact.p7') }}
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" color="blue">TypeScript</a>,
                    <a href="https://angular.io/" target="_blank" rel="noreferrer" color="blue">Angular</a>,
                    <a href="https://react.dev/" target="_blank" rel="noreferrer" color="blue">React</a>,
                    <a href="https://nodejs.org/" target="_blank" rel="noreferrer" color="blue">Node</a>,
                    {{ t('contact.p8') }}
                </kinesis-element>
            </div>

        </div>
    </kinesis-container>
</template>

<style>
.btn-link {
    height: 100px;
    width: auto;
}

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