<template>
  <div class="login">
      <header class="header">
          <i class="iconfont l">&#xe6df;</i>
          <span>会员注册</span>
          <span class="register" @click="go_to_login">登录</span>
      </header>
      <section class="section">
          <div class="login-box">
              <div class="userbox">
                  <i class="iconfont">&#xe647;</i>
                  <input type="text" placeholder="请输入您的手机号" v-model.trim="username">
              </div>
              <div class="pwdbox">
                  <i class="iconfont">&#xe710;</i>
                  <input type="password" placeholder="请输入您的密码" v-model.trim="password">
              </div>
          </div>
          <div class="btn-box">
              <button @click="register">确定</button>
          </div>
      </section>
  </div>
</template>

<script>
export default {
    name: 'login',
    data: () => {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        go_to_login () {
            this.$router.push('/login');
        },
        register () {
            this.$http.post('/admin/user/register', {
                name: this.username,
                pwd: this.password
            }).then(res => {
                console.log(res.data);
            });
        }
    }
};
</script>

<style scoped lang="scss">
.login{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .2rem;
        background: #fff;
        border-bottom: 1px solid #ccc;
        flex-shrink: 0;
        .l{
            width: .56rem;
        }
        .register{
            color: #fc4141;
        }
    }
    .section{
        width: 100%;
        flex:1;
        flex-shrink: 1;
        overflow-y: auto;
        .login-box{
            width: 100%;
            background: #fff;
            padding: 0 .2rem;
            margin-top: .2rem;
            .userbox{
                width: 100%;
                height: 1rem;
                display: flex;
                align-items: center;
                i{
                    font-size: .4rem;
                    padding: 0 .1rem;
                }
                input{
                    flex: 1;
                    height: 100%;
                    border-bottom: 1px solid #ccc;
                }
            }
            .pwdbox{
                width: 100%;
                height: 1rem;
                display: flex;
                align-items: center;
                i{
                    font-size: .6rem;
                }
            }
        }
        .btn-box{
            width: 100%;
            padding: .8rem .8rem;
            button{
                width: 100%;
                height: 1.2rem;
                background: #fc4141;
                color: #fff;
                border: none;
                outline: none;
                border-radius: .6rem; 
            }
        }
    }
}
</style>