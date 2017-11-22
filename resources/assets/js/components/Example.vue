<template>
    <div class="container">
        <div class="row" style="padding: 80px;margin-top:80px;">
            <div class="col-md-8 col-md-offset-2">
                <h1 style="color:white;" >Email Address Authentication check</h1>
                <div class="search-container" style="background-color: #000000ab;color:white;padding:20px;" >
                    <form v-on:submit.prevent="addValidate">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-9">
                                    <input class="form-control" style="height:50px;font-size:18px;" placeholder="Enter Email Address Here" v-model="items.email" type="email" required>
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-lg btn-danger" type="submit"><i class="fa fa-alt"></i> Search</button>
                                </div>
                            </div>
                        </div> 
                    </form><br/>
                    <center><router-link :to="{ name: 'EmailList' }" class="btn btn-primary">View Checked Lists</router-link></center><br/>
                    <div v-if="status" class="alert alert-success">
                        Successfully added!
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
                return{
                items:{},
                status: false
            }
        },
        methods: {
            addValidate(){
                let uri = 'http://localhost:8000/create-email';
                this.axios.post(uri, this.items).then((response) => {
                    this.$router.push({name: 'Example'});
                    this.status = true;
                }).catch(e => {

                });
            }
        }
    }
</script>
