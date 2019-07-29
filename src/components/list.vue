<template lang="html">
    <div>
            <div>
                <h5 id="resultsection"></h5>

                <div class="row" id="resulttable">

                <div class="col-sm-1"></div>

                <div class="col-sm-10">

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
                                    <div v-for="character in characters09" id="resultsection"><span class="mark">| </span>
                                        <router-link :to="{ name: 'character', 
                                        params: {id: character.id} }"> {{character.name}} 
                                        </router-link>
                                    </div>
                                </div>
                            </td>
                            
                            <td>
                                <div class='flist'>
                                    <div v-for="character in charactersad" id="resultsection"><span class="mark">| </span>
                                        <router-link :to="{ name: 'character', 
                                        params: {id: character.id} }">{{character.name}} 
                                        </router-link>
                                    </div>
                                </div>
                            </td>
                            
                            <td>
                                <div class='flist'>
                                    <div v-for="character in characterseh" id="resultsection"><span class="mark">| </span>
                                        <router-link :to="{ name: 'character', 
                                        params: {id: character.id} }">{{character.name}} 
                                        </router-link>
                                    </div>
                                </div>
                            </td>
                            
                            <td>
                                <div class='flist'>
                                    <div v-for="character in charactersil" id="resultsection"><span class="mark">| </span>
                                        <router-link :to="{ name: 'character', 
                                        params: {id: character.id} }">{{character.name}} 
                                        </router-link>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class='flist'>
                                    <div v-for="character in charactersmp" id="resultsection"><span class="mark">| </span>
                                        <router-link :to="{ name: 'character', 
                                        params: {id: character.id} }">{{character.name}} 
                                        </router-link>
                                    </div>
                                </div>  
                            </td>

                            <td>
                                <div class='flist'>
                                    <div v-for="character in charactersqt" id="resultsection"><span class="mark">| </span>
                                        <router-link :to="{ name: 'character', 
                                        params: {id: character.id} }">{{character.name}} 
                                        </router-link>
                                    </div>
                                </div>   
                            </td>

                            <td>
                                <div class='flist'>
                                    <div v-for="character in charactersux" id="resultsection"><span class="mark">| </span>
                                        <router-link :to="{ name: 'character', 
                                        params: {id: character.id} }">{{character.name}} 
                                        </router-link>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class='flist'>
                                    <div v-for="character in charactersyz" id="resultsection"><span class="mark">| </span>
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
        this.start(20);
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

                console.log(error);
                document.getElementById("resultsection").innerHTML = "Sorry, the amount of searches to the Marvel database" 
                                                                   + " allowed in one day have been exceeded by this site.";
                document.getElementById("resulttable").style.visibility = "hidden";
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