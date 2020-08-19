import serviceAPI from '@/utils/serviceAPI'

const serviceId = '/MICROSERVICE-ACL'

export default {
  form: {
    define: {
      getById(id) {
        return serviceAPI({
          url: serviceId + '/form/define/getById/' + id,
          method: 'post'
        })
      },
      isExsit(data) {
        return serviceAPI({
          url: serviceId + '/form/define/isExsit',
          method: 'post',
          data
        })
      },
      list(data) {
        return serviceAPI({
          url: serviceId + '/form/define/list',
          method: 'post',
          data
        })
      },
      search(data) {
        return serviceAPI({
          url: serviceId + '/form/define/search',
          method: 'post',
          data
        })
      },
      saveOrUpdate(data) {
        return serviceAPI({
          url: serviceId + '/form/define/saveOrUpdate',
          method: 'post',
          data
        })
      },
      saveElementDefine(data) {
        return serviceAPI({
          url: serviceId + '/form/define/saveElementDefine',
          method: 'post',
          data
        })
      },
      getListByParentId(params) {
        return serviceAPI({
          url: serviceId + '/form/define/getListByParentId',
          method: 'post',
          params: params
        })
      },
      toggleDisableById(id) {
        return serviceAPI({
          url: serviceId + '/form/define/toggleDisableById/' + id,
          method: 'post'
        })
      },
      toggleDeleteById(id) {
        return serviceAPI({
          url: serviceId + '/form/define/toggleDeleteById/' + id,
          method: 'post'
        })
      },
      deleteByIds(data) {
        return serviceAPI({
          url: serviceId + '/form/define/deleteByIds',
          method: 'post',
          data
        })
      },
      disableByIds(data) {
        return serviceAPI({
          url: serviceId + '/form/define/disableByIds',
          method: 'post',
          data
        })
      },
      removeByIds(data) {
        return serviceAPI({
          url: serviceId + '/form/define/removeByIds',
          method: 'post',
          data
        })
      }
    },
    formElement: {
      getById(id) {
        return serviceAPI({
          url: serviceId + '/form/element/getById/' + id,
          method: 'post'
        })
      },
      saveOrUpdate(data) {
        return serviceAPI({
          url: serviceId + '/form/element/saveOrUpdate',
          method: 'post',
          data
        })
      }
    }
  }
}
