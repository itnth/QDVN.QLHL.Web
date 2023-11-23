<template>
  <BaseList :columns="columns"  @reload_Click="loadData" :innerColumns="innerColumns" :dataBinding="data" @delete_Click="confirmDelete_Click" @add_Click="addArmyUnit_Click" @edit_Click="editArmyUnit_Click" :showChildrens="true"/>
  <ArmyUnitDetail @SaveSuccess="SaveSuccessDetail" :isShow="showDetail" ref="armyUnitDetail" />
</template>
<script lang="ts" src="./ArmyUnit.ts" />
