import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3000
})

Vue.toasted.resgister(
    'defaultSuccess',
    payload => !payload.msg ? 'Operação realizado com sucesso!' : payload.msg,
    {type: 'success', icon: 'check'}
)

Vue.toasted.resgister(
    'defaultError',
    payload => !payload.msg ? 'Opss... Erro inesperado.' : payload.msg,
    {type: 'error', icon: 'times'}
)