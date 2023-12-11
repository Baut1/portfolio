<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <kinesis-container h-screen flex flex-col justify-center text-xs font-500 class="main-container">
        
        <div flex flex-col>
            <h2 text-5xl font-700>{{ t('education.title') }}</h2>
            <div flex justify-around>
                <kinesis-element :strength="15" axis="y" w-xs self-center>{{ t('education.degree-name') }}
                </kinesis-element>
                <kinesis-element :strength="15" axis="y" w-xs self-center>Lorem ipsum dolor sit amet.
                </kinesis-element>
                <kinesis-element :strength="15" axis="y">
                    <a href="https://ifts16.com/" target="_blank" rel="noreferrer">
                        {{ t('education.degree-study-plan') }}
                    </a>
                </kinesis-element>
            </div>                
            
            <div flex justify-around mt-6>
                <kinesis-element :strength="15" axis="y" w-xs self-center>{{ t('education.degree-name') }}
                </kinesis-element>
                <kinesis-element :strength="15" axis="y" w-xs self-center>Lorem ipsum dolor sit amet.
                </kinesis-element>
                <kinesis-element :strength="15" axis="y">
                    <a href="https://ifts16.com/" target="_blank" rel="noreferrer">
                        {{ t('education.degree-study-plan') }}
                    </a>
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