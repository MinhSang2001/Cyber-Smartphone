<template>
  <div class="each-smartphone-info mt-5">
    <div class="justify-content-evenly row">
        <div class=" col-12 col-md-2">
      <div class="card px-2">
        <h2 class="text-center">Filter by</h2>
        <hr>
        <h4>Price:</h4>
        <div class="card-body">
          <form id="price-range-form">
            <label for="min-price" class="form-label">Min price: </label>
            <span id="min-price-txt">0 đ</span>
            <input type="range" class="form-range" min="0" max="99999999" id="min-price" step="1" value="0">
            <label for="max-price" class="form-label">Max price: </label>
            <span id="max-price-txt">100.000.000 đ</span>
            <input type="range" class="form-range" min="1" max="100000000" id="max-price" step="1" value="100000000">
          </form>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-10 d-flex flex-wrap" id="display-items-div">
        <div class="col-4 each-smartphone" v-for="(eachSmartphone, i) in getSmartphoneInfo" :key="i">
            <img :src="getImageUrl(eachSmartphone.name, eachSmartphone.mainImage)" class=" rounded d-block mx-auto" alt="">
            <h4 class="text-center mt-2 mb-3">{{ eachSmartphone.name }} | {{eachSmartphone.model}}</h4>
            <div>
                <div class="float-start">
                    <button class="btn btn-light">{{eachSmartphone.price}} đ</button>
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
    </div>
    </div>
  </div>
</template>

<script>
import getSmartphonesJson from '../../json/smartphones.json'
export default {
    name: 'EachSmartphone',
    data() {
        return {
            mySmartphoneDetails: getSmartphonesJson,
            smartphoneType: this.$route.params.smartphoneType,
        }
    },
    computed: {
        getSmartphoneInfo() {
            let smartphoneData = [];
                for(let i = 0; i< this.mySmartphoneDetails.length; i++) {
                    if(this.mySmartphoneDetails[i].name == this.smartphoneType) {
                        smartphoneData.push(this.mySmartphoneDetails[i]);
                    }
                }
            return smartphoneData;
        }
    },
    methods: {
        getImageUrl(folderName, imageName){
            let image = require.context('../../assets/');
            return image('./' + folderName +'/' + imageName) 
        },
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