<template>
    <div>
        <h1>Greetings, {{ username }}</h1>
        <router-link :to="{name: 'home'}">
            <button @click="logout">Logout</button>
        </router-link>
        
        <router-link :to="{name: 'invoices'}">
            <button>Invoices</button>

        </router-link>
    </div>
</template>

<script>
import {useRouter, useRoute} from 'vue-router'
import {ref} from 'vue'

export default {
    setup () {
        const username = ref(window.user)

        const logout = () => {
            window.user = null;
        }

        return {username, logout}
    }
}


</script>