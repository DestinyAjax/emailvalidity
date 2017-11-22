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
                    <form class="form form-login" :submit.prevent="login">
                        <center><h2 class="form_title">Dashboard login</h2></center>

                        <div class="info info-error" v-if="infoError">Login failed. Please try again.</div>

                        <div :class="{'is-waiting': loader}">
                            <div class="form-group">
                                <input v-model.trim="email" class="form-control" name="email" type="email" placeholder="E-mail address"
                                    required>
                            </div>
                            <div class="form-group form_actions">
                                <router-link to="/password-reset">Lost your password?</router-link>
                                <button class="btn btn-primary form_submit">Login</button>
                            </div>
                        </div>
                    </form>
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
                password: '',
                email: '',
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
