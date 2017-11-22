<template>
    <div class="container">
        <div class="row" style="padding: 80px;margin-top:80px;">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-body">
                    <center>
                        <img src="img/loader.gif" v-if="loading" />
                        <div v-if="errors && errors.length" class="alert alert-danger">
                            <p >{{errors}}</p>
                        </div>
                    </center>
                    <table class="table table-hover" v-if="items && items.length">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Email</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in items">
                                <td>{{ item.id }}</td>
                                <td>{{ item.email }}</td>
                                <td><button class="btn btn-danger" v-on:click="deleteItem(item.id)">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <center><router-link :to="{ name: 'Example' }" class="btn btn-primary">Return Back</router-link></center>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                items:{},
                loading: false,
                errors: []
            }
        },
        created: function(){
            this.fetchEmails();
        },
        methods: {
            fetchEmails()
            {
              let uri = 'http://localhost:8000/email-lists';
              this.loading = true;
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
                  this.loading = false;
              }).catch(e => {
                  this.errors = "No Connection establsihed!";
                  this.loading = false;
              });
            },
            deleteItem(id)
            {
              let uri = `http://localhost:8000/items/${id}`;
              this.items.splice(id, 1);
              this.axios.delete(uri);
            }
        }
    }
</script>
