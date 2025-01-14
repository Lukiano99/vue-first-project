<script setup>
import logo from '@/assets/images/logo.png'
import { paths } from '@/router/paths';
import { RouterLink, useRoute } from 'vue-router';


const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath
}

</script>

<template>
    <nav class="bg-green-700 border-b border-green-500">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="flex h-20 items-center justify-between">
                <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <!-- Logo -->
                    <RouterLink class="flex flex-shrink-0 items-center mr-4 transition-all" :to="paths.home">
                        <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
                        <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
                    </RouterLink>
                    <div class="md:ml-auto">
                        <div class="flex space-x-2">
                            <RouterLink :to="paths.home"
                                :class="[isActiveLink('/') ? 'bg-green-900' : 'hover:bg-gray-900', 'text-white hover:text-white rounded-md px-3 py-2 transition-all']">
                                Home</RouterLink>
                            <RouterLink :to="paths.jobs"
                                :class="[isActiveLink('/jobs') ? 'bg-green-900' : 'hover:bg-gray-900', 'text-white hover:text-white rounded-md px-3 py-2 transition-all']">
                                Jobs
                            </RouterLink>
                            <RouterLink :to="paths.addJob"
                                :class="[isActiveLink('/jobs/add') ? 'bg-green-900' : 'hover:bg-gray-900', 'text-white hover:text-white rounded-md px-3 py-2 transition-all']">
                                Add
                                Job</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>