<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';
import SimplePagination from '../components/SimplePagination.vue';
import PagedPagination from '../components/PagedPagination.vue';

const pagination = ref({});
const characters = ref([]);
const currentPage = ref(1);
const searchValue = ref('');
let searchTimeout = null;


getCharacters();

async function getCharacters() {
    let response = await axios.get('https://rickandmortyapi.com/api/character', {
        params: {
            page: currentPage.value,
            name: searchValue.value
        }
    });
    pagination.value = response.data.info;
    characters.value.push(...response.data.results);
}

async function next() {
    currentPage.value++;
    getCharacters();
}
async function prev() {
    currentPage.value--;
    getCharacters();
}

async function page(page) {
    currentPage.value = page;
    getCharacters();
}
//debounce
async function search() {
    clearTimeout(searchTimeout); 
    searchTimeout = setTimeout(() => {
        currentPage.value = 1;
        characters.value = [];
        getCharacters();
    }, 600);
}

onMounted(()=> {
    document.addEventListener('scroll', () => {

        if(window.scrollY + window.innerHeight > document.body.clientHeight - 300 && pagination.value.next){
            next();
        }
    });

});

</script>
<template>
    <div class="field has-addons">
        <div class="control is-expanded">
            <input @input="search" class="input" type="text" placeholder="Seach" v-model="searchValue">
        </div>
        <div class="control">
            <button @click="search" class="button is-primary">
                Search
            </button>
        </div>
    </div>
    <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="character in characters">
            <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>
    <section v-if="!pagination.next" class="section is-large content has-text-centered">
        <h1>No more Characters</h1>
    </section>
</template>