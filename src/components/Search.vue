<template lang="html">
    <div>

            <h5 id="resultsection"></h5>

            <div class="row" id="resulttext">
                <div class="col-sm-3"></div>

                <div class="col-sm-6">
                    <p class="infotext">
                        This page contains the records of all Marvel characters referenced in the Marvel API. Clicking a characters name will 
                        Open a display giving the characters name, description, and a thumbnail if avalible for the character. 
                    </p>
                    <p class="infotext">
                        Note: Marvel's api has a dailey limit on the amount of calls that can be made. This means that when my daily call amount has been exhausted
                        no more results will be displayed. 
                    </p>
                </div>

                <div class="col-sm-3"></div>

            </div>

            <div >
            
                <div class="row" id="resulttable">
                <div class="col-sm-2"></div>

                <div class="col-sm-8">
                    <div class="form-group">
                        <table class="table table-bordered table-striped mb-0">
                            <tr>
                                <th><label for="search">Search Characters:</label></th>
                                <td>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" id="search">
                                        <div class="input-group-append">
                                            <button class="btn btn-success" type="submit" v-on:click="startSearch(20);">Display Results</button> 
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>Results:</th>
                                <td> 
                                    <div style="height:120px;width:360px; overflow:auto;">
                                        <div v-for="character in searchResults" id="charInfo" >
                                            <router-link :to="{ name: 'character', 
                                            params: {id: character.id} }"> {{character.name}} 
                                            </router-link>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table> 
                    </div>
                </div>

                <div class="col-sm-2"></div>

                </div>


            </div>

    </div>

</template>

<script>
import {public_key, secret_key} from '../marvel';
import axios from 'axios'

export default {
    name: 'Characters',
    size: 0,
 
    data(){

        return{
            searchResults: [],
            characters: [],
            txtInput: ''
        }
    },

    mounted(){
        //this.start(15);
    },

    methods :{

    /** start()
     *  Retrives the records for the full list from the marvel api
     * @param cycles theamount of records to search, each cycle is 100 records
     */
    start: function(cycles){
        var i = 0;
        var offset = 0;

        for (i = 0; i < cycles; i++) {
            this.getCharacters(offset);
            offset = offset + 100;
        }
    },    

    /** toggle()
     *  Toggles between the search function and the full recovered list
     */
    toggle: function(){

        if (this.toggleState == 0){
            document.getElementById("searchmth").innerHTML = "Use Search Bar";
            this.toggleState = 1;
            return 1;
        }

        if (this.toggleState == 1){
            document.getElementById("searchmth").innerHTML = "View List";
            this.toggleState = 0;
            return 0;
        }

    },

    /** startSearch()
     *  Initiates the searchCharacter object until all offset cycles are done.
     *  The marvel api allows only up to 100 results per request
     * @param cycles theamount of records to search, each cycle is 100 records
     */
    startSearch: function(cycles){
        var i = 0;
        var offset = 0;
        var searchbinfo = document.getElementById("search").value;
        //this.searchResults = "";

        for (i = 0; i < cycles; i++) {
            this.searchCharacter(offset, searchbinfo);
            offset = offset + 100;
        }
    },    

    /** searchCharacter()
     * searchCharacters searches the marvel api for results based on a string of data 
     * gathered from the search text input. 
     * @param offset the records to serach from in the marvel api
     * @param searchbinfo information gathered from the search text box
     */
    searchCharacter: function(offset, searchbinfo){
        var address =  "http://gateway.marvel.com/v1/public/characters?apikey=19fe13a0b0fa0ca0574ec10a9458cbda&limit=100&offset="
                    + offset;

        axios.get(address)

        .then((result) => {

                result.data.data.results.forEach((item) => {

                    if (item.name.includes(searchbinfo)){
                       this.searchResults.push(item);
                    } 
 
                });

            })
            .catch((error) => {

                console.log(error)
                document.getElementById("resultsection").innerHTML = "Sorry, the amount of searches to the Marvel database" 
                                                                   + " allowed in one day have been exceeded by this site.";
                document.getElementById("resulttable").style.visibility = "hidden";
                document.getElementById("resulttext").style.visibility = "hidden";
            })
    },
  
  }

}

</script>

<style lang="css">

    th.searchinfo {
        text-align: left;
        text-decoration: overline;
        background-color: #ED1D24;
        color: #FDFDFD;
    }

    td {
        text-align: left;
        text-size-adjust: 25%;
    }

    p.infotext {
        text-align: left;
    }
    
</style>


