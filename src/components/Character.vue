<template lang="html">
    <div >

        <div class="container">

            <h4>   
                <router-link to="/list">Full List</router-link> |
                <router-link to="/search">Search</router-link>
            </h4>

            <div v-for="char in Character" class="col-sm-12">

                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="des"> {{char.name}} </h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-3">
                        <img :src="url" alt= "No Image" align="left" />
                    </div>

                    <div class="col-sm-9">
                        <p class="des">{{char.description}}</p>

                    </div>

                </div>

            </div>

        </div>
    
    </div> 
    
</template> 

<script>
var public_key = '19fe13a0b0fa0ca0574ec10a9458cbda'
import axios from 'axios'
export default {

    name: 'Character',

    data(){

        return{
            Character: [],
            url: '',
            size: '/standard_amazing.jpg',
        }
    },

    mounted(){

        this.getCharacter();
    },

    methods: {

        getCharacter: function(){
            var characterId = this.$route.params.id;

            axios.get('https://gateway.marvel.com:443/v1/public/characters/' + characterId + 
                '?apikey=19fe13a0b0fa0ca0574ec10a9458cbda')

                .then((result) => {

                    console.log("RESULT")
                    console.log(result)

                    result.data.data.results.forEach((item) => {

                        this.Character.push(item)

                        this.url = item.thumbnail.path + this.size;

                        console.log("URL: " +  this.url);
                    });
                })
                .catch((error) => {
                    console.log("ERROR")
                    console.log(error)
                })

        }

    }
}
</script>

<style lang="css">

    p.des {
        text-align: left;
    }

    h2.des {
        text-align: left;
        text-decoration: overline;
    }

</style>


