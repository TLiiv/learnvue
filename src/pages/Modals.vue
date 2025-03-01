<script setup>
import { ref } from 'vue';
import ImageModal from '../components/ImageModal.vue';
import Modal from '../components/Modal.vue';
const modalActive = ref(false);
const modalActive2 = ref(false);
const modalActive3 = ref(false);
</script>

<template>
    
        <div class="buttons">
            <button class="button is-primary" @click="modalActive = true">Open Modal</button>
            <button class="button is-primary" @click="modalActive2 = true">Open Modal2</button>
            <button class="button is-primary" @click="modalActive3 = true">Open Modal3</button>
        </div>

    <ImageModal :active="modalActive" @close="modalActive = false" url="https://picsum.photos/seed/kaspar/1280/960"></ImageModal>
    <ImageModal :active="modalActive2" @close="modalActive2 = false" url="https://picsum.photos/seed/martin/1280/960"></ImageModal>
    <Modal :active="modalActive3" @close="modalActive3 = false">
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/assets/images/placeholders/1280x960.png" alt="Placeholder image" />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="https://bulma.io/assets/images/placeholders/96x96.png" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">@johnsmith</p>
                    </div>
                </div>

                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                    iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
                    <a href="#">#responsive</a>
                    <br />
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </div>
    </Modal>
</template>