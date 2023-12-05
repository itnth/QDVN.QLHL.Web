<template>
  <div>
    <BaseList
      :columns="columns"
      @reload_Click="loadData"
      :dataBinding="data"
      @delete_Click="confirmDelete_Click"
      @add_Click="addArmyUnit_Click"
      @edit_Click="editArmyUnit_Click"
    />
  </div>
  <ManagersDetail @SaveSuccess="SaveSuccessDetail" ref="managersDetail" />
</template>
<script lang="ts" src="./ManagersList.ts" />
