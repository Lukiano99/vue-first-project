<script setup>
import { paths } from '@/router/paths';
import { RouterLink } from 'vue-router';

</script>
<template>
    <section>
        <div class="container m-auto py-6 px-6">
            <RouterLink :to="paths.home"
                class="w-fit text-green-500 hover:text-green-600 flex items-center transition-all">
                <i class="pi pi-chevron-left mr-2" />
                Back to Job Listings
            </RouterLink>
        </div>
    </section>
</template>