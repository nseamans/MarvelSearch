<template lang="html">
    <div >

        <h5 id="resultsection"></h5>

        <div class="row" id='avglist'>

                <div class="col-sm-2"></div>

                <div class="col-sm-2">

                    <table class="table-bordered">

                        <tr>
                            <th>Avengers Example Data</th>
                        </tr>

                        <tr v-for="char in character">
                            <td> {{char}} </td>
                        </tr>

                    </table>

                </div>

                <div class="col-sm-6" style="text-align: left;">
                    <h4>
                        About 
                    </h4>
                    
                    <p>
                       The Marvel Character Bible functions as a search engine for the Marvel Character API.
                    </p>

                    <h4>
                        How to use
                    </h4>

                    <p>
                        The search function returns names based on the search result given, clicking the clear button empties the search results. 
                        The full list provides all the characters in the Marvel extended universe sorted by letter. Clicking a name in either option
                        will provide a summary of the character. 
                    </p>

                    <h4>
                        Some notes and limitations of the Marvel API
                    </h4>

                    <p>
                        First, it is important to note that there are several restrictions in how data can be called from the API. Requests can only contain 100 results
                        (in otherwords, 100 characters can be called at a time). Second, Marvel limits an account to 3,000 calls a day. Retriving all of the names 
                        and performing searches on the database quickly ranks up the amount of requests made. I ask you to use other means fdor now to research marvel 
                        and to just view this site as an extention to my portfolio.
                    </p>

                </div>

                <div class="col-sm-2"></div>

        </div>

        

    </div> 
    
</template> 

<script>

    import axios from 'axios'

    export default {

        name: 'character',

        data(){

            return{
                character: []
            }

        },

        mounted(){
            this.start();

        },

        methods :{

            linkCode: function(id){
                var charName = name;
                var charId = id;
                var info = '';
                
                var arrayLength = charId.length;

                for (var i = 0; i < arrayLength; i++) {

                    axios.get('https://gateway.marvel.com:443/v1/public/characters/' + charId[i] + 
                              '?apikey=19fe13a0b0fa0ca0574ec10a9458cbda')

                        .then((result) => {

                            result.data.data.results.forEach((item) => {
                                info = " " + item.name ;
                                this.character.push(info);
                            });
                            
                        })

                        .catch((error) => {
                            console.log("ERROR")
                            console.log(error)

                            document.getElementById("resultsection").innerHTML = "Sorry, the amount of searches to the Marvel database" 
                                                                   + " allowed in one day have been exceeded by this site.";
                            document.getElementById("navfeatures").style.visibility = "hidden";
                            document.getElementById("avglist").style.visibility = "hidden";
                        })

                }                
            },

            start: function(){

                var displayarray = [];

                var Avengersid = [
                        "1010338", "1009220", "1009664", "1009351",
                        "1009338", "1009187", "1009610", "1009282",
                        "1010801", "1010991", "1009297", "1009697",
                        "1009562", "1010733", "1010763", "1010735",
                        "1010744", "1011026", "1010365"
                        ];

                   this.linkCode(Avengersid);
                
            }
        }
    }

</script>

<style lang="css">

    

    #navbar {
        background-color: aqua;
    }

    td {
        text-align: left;
    }

    div.navfeatures{
        background-color: aqua;
    }

</style>