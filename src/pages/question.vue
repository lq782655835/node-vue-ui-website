<template>
    <div class="g-sort">
        <side-bar :items="CptRoutes" />
        <div class="g-content"><router-view></router-view></div>
    </div>
</template>

<script>
import SideBar from '@/components/sidebar.vue'
import Routes from '@/router/routes'

export default {
    data () {
        const CptRoutes = Routes.find(r => r.path === '/question')
        return {
            CptRoutes: CptRoutes.children
        }
    },
    components: {
        SideBar
    }
}
</script>

<style lang="scss"></style>
