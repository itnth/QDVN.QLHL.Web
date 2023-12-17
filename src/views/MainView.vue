<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="2">
          <AreaChartOutlined class="!text-2xl pr-2" />
          <router-link to="/statistical">
            <span>Thống kê</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <DeploymentUnitOutlined class="!text-2xl pr-2" />
          <router-link to="/armyunit">
            <span class="f-s">Quản lý đơn vị</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <ClusterOutlined class="!text-2xl pr-2" />
          <router-link to="/managers">
            <span>Quản lý cán bộ</span>
          </router-link>
        </a-menu-item>
        <!-- <a-menu-item key="5">
          <HomeOutlined class="!text-2xl pr-2" />
          <router-link to="/class">
            <span>Quản lý lớp học</span>
          </router-link>
        </a-menu-item> -->
        <a-menu-item key="6">
          <TeamOutlined class="!text-2xl pr-2" />
          <router-link to="/student">
            <span>Quản lý học viên</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="7">
          <ToolOutlined class="!text-2xl pr-2" />
          <router-link to="/devicemanager">
            <span>Trang thiết bị HL</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="8">
          <ReadOutlined class="!text-2xl pr-2" />
          <router-link to="/subject">
            <span>Nội dung HL</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="9">
          <SolutionOutlined class="!text-2xl pr-2" />
          <router-link to="/trainingplan">
            <span>Kế hoạch HL</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="10">
          <ScheduleOutlined class="!text-2xl pr-2" />
          <router-link to="/implementtrainingplans">
            <span>TH kế hoạch HL</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="11">
          <TeamOutlined class="!text-2xl pr-2" />
          <router-link to="/users">
            <span>Quản lý tài khoản</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content class="p-4 m-2 h-full bg-white">
        <div :style="{ background: '#fff', minHeight: '360px' }">
          <RouterView></RouterView>
        </div>
      </a-layout-content>
      <a-layout-footer class="!p-0 !h-12 !bg-gray-400">
        <div class="flex justify-center items-center text-center h-full">
          QLHL ©2023 Created by NGUYỄN TRỌNG HIỀN
        </div>
      </a-layout-footer>
    </a-layout>
    <a-modal
      :destroyOnClose="true"
      width="300px"
      class="h-2/3"
      v-model:open="showLogin"
      :footer="null"
      :closable="false"
      centered
      :maskClosable="false"
    >
      <h1 class="text-center font-bold text-lg uppercase">Đăng nhập</h1>
      <a-row class="mt-4">
        <a-col :span="24">
          <a-form-item name="Username" label="Tên đăng nhập:">
            <a-input v-model:value="loginInfo.Username" placeholder="Tên đăng nhập" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item name="Pasword" label="Mật khẩu:">
            <a-input-password v-model:value="loginInfo.Password" placeholder="Mật khẩu" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-button type="primary" class="w-full" @click="login">Đăng nhập</a-button>
        </a-col>
      </a-row>
    </a-modal>
  </a-layout>
</template>
<script lang="ts" src="./MainView.ts"></script>
