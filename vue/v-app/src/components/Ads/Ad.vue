<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
       <v-card v-if="!loading">
         <v-card-media
          :src="ad.imageSrc"
          height="300px"
         >

         </v-card-media>
         <v-card-text>
          <h1 class="text--primary">{{ad.title}}</h1>
           <p>{{ad.description}}</p>
         </v-card-text>
         <v-card-actions>
           <v-spacer></v-spacer>
           <addEditAdModal :ad="ad" v-if="isOwner">

           </addEditAdModal>
           <app-buy-modal :ad="ad"></app-buy-modal>
         </v-card-actions>
       </v-card>
        <div v-else class="text-xs-center">
          <v-progress-circular
            :size="100"
            :width="4"
            color="purple"
            indeterminate
          ></v-progress-circular>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import EditAdModal from './EditAdModal'

  export default {
    props: ['id'],
    computed: {
      ad () {
        const id = this.id
        return this.$store.getters.adById(id)
      },
      loading () {
        return this.$store.getters.loading
      },
      isOwner () {
        return this.ad.ownerID === this.$store.getters.user.id
      }
    },
    comments: {
      addEditAdModal: EditAdModal
    }
  }
</script>

<style scoped>

</style>