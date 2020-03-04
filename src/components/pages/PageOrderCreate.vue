<template>
  <context-order-create
    v-slot="{ schema, order, v, getComponent, filteredComponents, getFilteredFields }"
  >
    <div class="page-order-create">
      <layout-one-plus-scroll>
        <template #header>
          <div class="page-order-create__header">
            <p class="page-order-create__header-title">page-order-create__header</p>
          </div>
        </template>
        <template #column-1>
          <ul class="page-order-create__sidebar-list">
            <x-create-order-sidebar-item
              v-for="(body, component, idx) in filteredComponents"
              :key="idx"
              :name="component"
            />
          </ul>
        </template>
        <template #column-2>
          <div class="page-order-create__content">
            <component
              v-for="(body, component, idx) in filteredComponents"
              :key="idx"
              :fields="getFilteredFields(body.fields)"
              :name="component"
              :is="getComponent(component)"
            />
          </div>
        </template>
      </layout-one-plus-scroll>
    </div>
  </context-order-create>
</template>

<script>
import LayoutOnePlusScroll from '@/components/layouts/LayoutOnePlusScroll';
import ContextOrderCreate from '@/components/contexts/ContextOrderCreate';
import XCreateOrderSidebarItem from '@/components/business-components/XCreateOrderSidebarItem';

export default {
  name: 'page-order-create',

  components: {
    LayoutOnePlusScroll,
    ContextOrderCreate,
    XCreateOrderSidebarItem,
    XOrderCreateProducts: () => import('@/components/business-components/XOrderCreateProducts'),
    XOrderCreateGeneralDetails: () => import('@/components/business-components/XOrderCreateGeneralDetails'),
    XOrderCreateDefaultSection: () => import('@/components/business-components/XOrderCreateDefaultSection'),
  },
}
</script>

<style lang="scss" scoped>
.page-order-create {
  $this: &;

  &__header {
    background: #fff;
    text-align: center;
    font-weight: 600;
    height: 64px;
  }

  &__sidebar-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  &__header-title {
    margin: 0;
    padding-top: 20px;
  }
}
</style>
