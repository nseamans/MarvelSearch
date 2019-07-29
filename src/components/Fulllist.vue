<template lang="html">
    <div>
            <div>
                <div class="row">

                <div class="col-sm-1"></div>

                <div class="col-sm-10">
                    <img src="../images/universe.png" alt="Logo" class="all">

                    <table>

                        <tr>
                            <th class="searchinfo">0 - 9</th>
                            <th class="searchinfo">A - D</th>
                            <th class="searchinfo">E - H</th>
                            <th class="searchinfo">I - L</th>
                            <th class="searchinfo">M - P</th>
                            <th class="searchinfo">Q - T</th>
                            <th class="searchinfo">U - X</th>
                            <th class="searchinfo">Y - Z</th>
                        </tr>

                        <tr style="vertical-align:top; font-size: 14px;">
                            
                            <td>
                                <div class='flist'>
                                    <div v-for="character in characters09" ><span class="mark">| </span>
                                        <router-link :to="{ name: 'character', 
                                        params: {id: character.id} }"> {{character.name}} 
                                        </router-link>
                                    </div>
                                </div>
                            </td>
                            
                            <td>
                                <div class='flist'>
                                    <div v-for="character in charactersad" ><span class="mark">| </span>
                                        <router-link :to="{ name: 'character', 
                                        params: {id: character.id} }">{{character.name}} 
                                        </router-link>
                                    </div>
                                </div>
                            </td>
                            
                            <td>
                                <div class='flist'>
                                    <div v-for="character in characterseh" ><span class="mark">| </span>
                                        <router-link :to="{ name: 'character', 
                                        params: {id: character.id} }">{{character.name}} 
                                        </router-link>
                                    </div>
                                </div>
                            </td>
                            
                            <td>
                                <div class='flist'>
                                    <div v-for="character in charactersil" ><span class="mark">| </span>
                                        <router-link :to="{ name: 'character', 
                                        params: {id: character.id} }">{{character.name}} 
                                        </router-link>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class='flist'>
                                    <div v-for="character in charactersmp" ><span class="mark">| </span>
                                        <router-link :to="{ name: 'character', 
                                        params: {id: character.id} }">{{character.name}} 
                                        </router-link>
                                    </div>
                                </div>  
                            </td>

                            <td>
                                <div class='flist'>
                                    <div v-for="character in charactersqt" ><span class="mark">| </span>
                                        <router-link :to="{ name: 'character', 
                                        params: {id: character.id} }">{{character.name}} 
                                        </router-link>
                                    </div>
                                </div>   
                            </td>

                            <td>
                                <div class='flist'>
                                    <div v-for="character in charactersux" ><span class="mark">| </span>
                                        <router-link :to="{ name: 'character', 
                                        params: {id: character.id} }">{{character.name}} 
                                        </router-link>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class='flist'>
                                    <div v-for="character in charactersyz" ><span class="mark">| </span>
                                        <router-link :to="{ name: 'character', 
                                        params: {id: character.id} }">{{character.name}} 
                                        </router-link>
                                    </div>
                                </div>
                            </td>
                            
                        </tr>

                    </table>

                </div>

                <div class="col-sm-1"></div>

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
            characters09:[],
            charactersad: [],
            characterseh: [],
            charactersil: [],
            charactersmp: [],
            charactersqt: [],
            charactersux: [],
            charactersyz: [],
            toggleState: 0,
            txtInput: ''
        }
    },

    mounted(){
        this.start(15);
    },

    methods :{

    /** start()
     *  Retrives the records for the full list from the marvel api
     * * @param cycles theamount of records to search, each cycle is 100 records
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
            })
    },
  
    /** getCharacters() 
     * getCharacters obtains a list of character objects from the marvel
     * api and distrubutes the data by alphapetical order
     * @param offset the records to serach from in the marvel api 
    */
    getCharacters: function(offset){
      var address =  "http://gateway.marvel.com/v1/public/characters?apikey=19fe13a0b0fa0ca0574ec10a9458cbda&limit=100&offset="
                    + offset;
      var letter = "";

      console.log(address);

      axios.get(address)
        .then((result) => {

                result.data.data.results.forEach((item) => {
                    letter = item.name.charAt(0);


                    this.characters.push(item);
                    
                    if (letter == 0 || letter == 1 || letter == 2 || letter == 3 || letter == 4 
                     || letter == 5 || letter == 6 || letter == 7 || letter == 8 || letter == 9 ){
                        this.characters09.push(item);
                    }

                    if ( letter == "A" || letter == "B" || letter == "C" || letter == "D" ){
                        this.charactersad.push(item);
                    }

                    if (letter == "E" || letter == "F" || letter == "G" || letter == "H"){
                        this.characterseh.push(item);
                    }

                    if (letter == "I" || letter == "J" || letter == "K" || letter == "L"){
                        this.charactersil.push(item);
                    }

                    if (letter == "M" || letter == "N" || letter == "O" || letter == "P"){
                        this.charactersmp.push(item);
                    }

                    if (letter == "Q" || letter == "R" || letter == "S" || letter == "T"){
                        this.charactersqt.push(item);
                    }

                    if (letter == "U" || letter == "V" || letter == "W" || letter == "X"){
                        this.charactersux.push(item);
                    }

                    if (letter == "Y" || letter == "Z"){
                        this.charactersyz.push(item);
                    }

                    this.characters.push(item);
                });

            })
            .catch((error) => {

                console.log(error)
            })          
    }

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

    div.flist {
        width: 200px; 
        text-align: left;
    }
    span.mark {
        background-color: #FDFDFD;
        color: #ED1D24;
        opacity: 0.5;
    }
    img.all{
        opacity: 0.5;
        height: 15em;
    }

</style>