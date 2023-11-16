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
        <a-menu-item key="8">
          <ClusterOutlined class="!text-2xl pr-2" />
          <router-link to="/managers">
            <span>Quản lý cán bộ</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <TeamOutlined class="!text-2xl pr-2" />
          <router-link to="/student">
            <span>Quản lý học viên</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="5">
          <ToolOutlined class="!text-2xl pr-2" />
          <router-link to="/devicemanager">
            <span>Trang thiết bị HL</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="6">
          <SolutionOutlined class="!text-2xl pr-2" />
          <router-link to="/trainingplan">
            <span>Kế hoạch HL</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="7">
          <ScheduleOutlined class="!text-2xl pr-2" />
          <router-link to="/implementtrainingplans">
            <span>TH kế hoạch HL</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content class="p-4 m-2 h-full bg-white">
        <div :style="{  background: '#fff', minHeight: '360px' }">
          <RouterView></RouterView>
        </div>
      </a-layout-content>
      <a-layout-footer class="!p-0 !h-12 !bg-gray-400">
        <div class="flex justify-center items-center text-center h-full">
          QLHL ©2023 Created by NGUYỄN TRỌNG HIỀN
        </div>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" src="./MainView.ts"></script>
