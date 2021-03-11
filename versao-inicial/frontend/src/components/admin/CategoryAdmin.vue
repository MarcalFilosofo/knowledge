<template>
    <div class="category-admin">
        <b-form>
            <input id="category-id" type="hidden" v-model="category.id" />
            <b-row>
                <b-col xs="12">
                    <b-form-group label="Nome:" label-for="user-name">
                        <b-form-input id="category-name" type="text"
                            v-model="category.name" required
                            :readonly="mode === 'remove'"
                            placeholder="Informe o nome da categoria"/>
                    </b-form-group>
                </b-col>
                <b-col xs="12">
                    <b-form-group label="E-mail:" label-for="user-email">
                        <b-form-input id="category-email" type="email"
                            v-model="category.email" required
                            :readonly="mode === 'remove'"
                            placeholder="Informe o email da categoria"/>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row v-show="mode === 'save'">
                <b-col xs="12">
                    <b-form-group label="Senha:" label-for="user-password">
                        <b-form-input id="category-password" type="password"
                            v-model="category.password" required
                            placeholder="Informe a senha da categoria"/>
                    </b-form-group>
                </b-col>
                <b-col xs="12">
                    <b-form-group label="Confirme a senha:" label-for="user-confirm-password">
                        <b-form-input id="category-confirm-password" type="password"
                            v-model="category.confirmPassword" required
                            placeholder="Confirme a senha da categoria"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-button variant="primary" v-if="mode === 'save'"
                    @click="save">
                    Salvar    
                </b-button>
                <b-button variant="Danger" v-if="mode === 'remove'"
                    @click="remove">
                    Excluir    
                </b-button>
                <b-button class="ml-2" @click="reset">
                    Cancelar    
                </b-button>
            </b-row>
        </b-form>
        <hr>
        <b-table hover striped :items="users" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadUser(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadUser(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@global'
import axios from 'axios'

export default {
    name: 'CategoryAdmin',
    data: function(){
        return {
            mode: 'save',
            user: {},
            users: [],
            fields: [
                {key: 'id', label: 'Código', sortaable: true},
                {key: 'name', label: 'Nome', sortaable: true},
                {key: 'email', label: 'E-mail', sortaable: true},
                {key: 'admin', label: 'Administrador', sortaable: true, 
                    formatter: value => value ? 'Sim' : 'Não'},
                {key: 'actions', label: 'Ações'}
    
            ]
        }
    },
    methods: {
        loadUsers(){
            const url = `${baseApiUrl}/users`
            axios.get(url).then(res => {
                this.users = res.data
            })
        },
        reset(){
            this.mode = "save"
            this.user = {}
            this.loadUsers()
        },
        save(){
            const method = this.user.id ? 'put' : 'post'
            const id = this.user.id ? `/${this.user.id}` : ''
            axios[method](`${baseApiUrl}/users/${id}`, this.user)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        remove(){
            const id = this.user.id
            axios.delete(`${baseApiUrl}/users/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        loadUser(user, mode = 'save'){
            this.mode = mode
            this.user = { ...user}

        }
    },
    mounted(){
        this.loadUsers()
    }
}
</script>

<style>

</style>