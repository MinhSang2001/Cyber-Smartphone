<template>
  <div class="home row mt-5">
    <div class="col-7">
        <div class="">
            <img 
                v-if="mainImageIs.length < 1 ? mainImageIs = getImageUrl(getSmartphoneInfo.name, getSmartphoneInfo.mainImage) : mainImageIs"
                :src="mainImageIs" class="rounded mx-auto d-block mainImage w-100" alt="">
        </div>
        <div class="justify-content-center row">
            <img 
                v-for="(eachSmartphoneImage, x) in getSmartphoneInfo.images" 
                :key="x" 
                :src="getImageUrl(getSmartphoneInfo.name, eachSmartphoneImage)" 
                class="rounded mx-auto d-block thumbnailImage" 
                alt=""
                @click = "mainImageIs = getImageUrl(getSmartphoneInfo.name, eachSmartphoneImage)">
        </div>
    </div>
    <div class="col-5">
        <h2>{{ getSmartphoneInfo.model }} {{ getSmartphoneInfo.fileNumber}}</h2>
        <p>{{ getSmartphoneInfo.description }}</p>
        <p>Uploaded On: {{ getSmartphoneInfo.uploadedOn}}</p>

    </div>
  </div>
</template>

<script>
import getSmartphoneInfo from '../../json/smartphones.json'

export default {
    name: 'Info',
    data() {
        return {
            mySmartphoneDetails: getSmartphoneInfo,
            smartphoneName: this.$route.params.smartphoneName,
            smartphoneFileId: this.$route.params.smartphoneFileId,
            mainImageIs: "",
        }
    },
    methods: {
        getImageUrl(folderName, imageName){
            let image = require.context('../../assets/');
            return image('./' + folderName +'/' + imageName) 
        }
    },
    computed: {
        getSmartphoneInfo() {
            let smartphoneData = "";
                for(let i = 0; i< this.mySmartphoneDetails.length; i++) {
                    if(this.mySmartphoneDetails[i].fileNumber == this.smartphoneFileId) {
                        smartphoneData = this.mySmartphoneDetails[i];
                        break;
                    }
                }
            return smartphoneData;
        }
    }
}
</script>

<style>
    .mainImage {
        width: 600px;
        height: 650px;
        border: 4px solid #eee;
        margin-bottom: 30px;
    }
    .thumbnailImage {
        width: 100px;
        height: 130px;
        border: 4px solid #eee;
    }
</style>