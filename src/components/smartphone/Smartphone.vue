<template>
    <div class="justify-content-evenly row">
        <div class="col-4 each-smartphone" v-for="(eachSmartphone, i) in smartphoneInfo" :key="i">
            <img :src="getImageUrl(eachSmartphone.name, eachSmartphone.mainImage)" class=" rounded d-block mx-auto" alt="">
            <h4 class="text-center mt-2 mb-3">{{ eachSmartphone.name }} | {{eachSmartphone.model}}</h4>
            <div>
                <div class="float-start">
                    <button class="btn btn-light">{{eachSmartphone.price}}</button>
                </div>
                <div class="float-end">
                    <router-link
                        :to="{
                            name: 'Info',
                            params: { smartphoneName: eachSmartphone.name, smartphoneFileId: eachSmartphone.fileNumber, pageTitle: eachSmartphone.model}
                        }">
                        <button class="btn btn-primary">Xem Chi Tiết</button>
                    </router-link>
                </div>
            </div>
        </div>
        
        <nav aria-label="...">
        <ul class="pagination float-end">
            <li class="page-item disabled">
            <span class="page-link"><i class="fa-solid fa-backward-step"></i></span>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item" aria-current="page">
                <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
            <a class="page-link" href="#"><i class="fa-solid fa-forward-step"></i></a>
            </li>
        </ul>
        </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    data() {
        return {
            smartphoneInfo: this.$attrs.smartphoneData,
        }
    },
    methods: {
        getImageUrl(folderName, imageName){
            let image = require.context('../../assets/');
            return image('./' + folderName +'/' + imageName) 
        }
    }
  }
  </script>
  
  <style>
    .each-smartphone {
        padding: 10px;
        margin-bottom: 10px;
        border: 10px solid rgb(196, 193, 193);
    }
    .each-smartphone > img {
        width: 300px;
        height: 300px;
    }
  </style>