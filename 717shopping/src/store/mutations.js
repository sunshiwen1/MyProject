let mutations = {
    updata_cart (state, data) {
        // state.cart_list.push(data);
        let flag = true;
        state.cart_list.map(item => {
            if (item.id === data.id) {
                flag = false;
                ++item.count;
            }
            return item;
        });
        if (flag) {
            state.cart_list.unshift(data);
        }
        console.log(state.cart_list);
    },
    // 全选
    change_all (state, data) {
        state.all_checked = data;
        state.cart_list.forEach(item => {
            item.checked = data;
        });
    },
    // 单选
    change_checked (state, data) {
        let flag = true;
        state.cart_list.forEach((item, idx) => {
            if (item.id === data.id) {
                item.checked = data.checked;
            }
        });
        // 判断单选是否全部选中
        state.cart_list.forEach((v, i) => {
            if (!v.checked) {
                flag = false;
            }
        });
        state.all_checked = flag;
    },
    // 商品个数，增加or减少
    change_count (state, data) {
        state.cart_list.forEach((item) => {
            if (item.id === data.id) {
                item.count = data.count;
            }
        });
    },
    // 计算总价
    change_total_price (state) {
        let sum = 0;
        state.cart_list.forEach(item => {
            if (item.checked) {
                sum += item.count * item.goods_price
            }
        });
        state.total_price = sum.toFixed(2);
    },
    add_shipping_address (state, data) {
        state.addressList = data;
    },
    del_shipping_address (state, data) {
        state.addressList = data;
    }
};
export default mutations;