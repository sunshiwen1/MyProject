import '../http/axios.js';
let actions = {
    get_user_address ({commit}) {
        this.$http.post('/user/getAddress').then(res => {
            commit('add_shipping_address', res.data.list);
        });
    }
}
export default actions;