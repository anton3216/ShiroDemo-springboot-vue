<template>
  <div class="layout">
    <Layout>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                用户管理
              </template>
              <MenuItem name="1-1" to="queryAllUser">用户列表</MenuItem>
              <MenuItem name="1-2" to="addUser">用户添加</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                角色管理
              </template>
              <MenuItem name="2-1" to="queryAllRole">角色列表</MenuItem>
              <MenuItem name="2-2" to="addRole">角色添加</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                权限管理
              </template>
              <MenuItem name="3-1">权限列表</MenuItem>
              <MenuItem name="3-2">权限添加</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {

  }
</script>
