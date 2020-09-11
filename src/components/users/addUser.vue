<template>
  <Form :model="user" :label-width="80">
    <FormItem label="姓名">
      <Input v-model="user.name" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem label="密码">
      <Input type="password" v-model="user.password"></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" long @click="handleSubmit">添加用户</Button>
    </FormItem>
  </Form>
</template>
<script>
  export default {
    data() {
      return {
        user: {
          name: '',
          password:''
        }
      }
    },
    methods: {
      background(type,msg) {
        this.$Message[type]({
          background: true,
          content: msg
        });
      },
      handleSubmit() {
        //将输入的用户信息转换成json
        var formData = JSON.stringify(this.user)
        console.log(formData);
        this.$ajax.post('http://localhost:8080/addUser', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          if (res) {
            this.background('success','添加成功')
            this.$router.push({
              path: '/index'
            })
          }
        }).catch(err =>
          this.background('error','添加失败')
        )
      }
    }
  }
</script>
