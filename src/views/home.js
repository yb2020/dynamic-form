import RenderPage from "@/components/render-page";
import '@/assets/css/themes.styl';
import formApi from "@/api/form"

export default {
  name: "home",
  data() {
    return {
      pageData: null
    }
  },
  methods: {
    async initPage() {
      if (!this.pageData) return;
      this.BUS.setPageData(this.pageData);
      document.title = this.pageData.title;
      this.$util.initScript(this.pageData.statsCode, 'initjscode');  //添加第三方统计代码
    },
    async getPageData() {
      // 获取数据优先级： url参数id > 本地 sessionStorage > postMessage监听
      // 获取url参数id（已经保存的页面）
      let id = this.$util.getUrlParam('id');
      // 根据id调接口获取后台数据
      console.log(id);
      const result = await formApi.form.define.getById(id)
      if(result.status === 1) {
        console.log(result)
        this.pageData = JSON.parse(result.data.elementDefine)
        this.initPage()
      }

      // 本地 sessionStorage获取（实时预览的时候刷新页面）
      // let sPageData = this.$util.getSessionStorage("pageData");
      // console.log(sPageData)
      // if (sPageData) {
      //   this.pageData = sPageData;
      //   return this.initPage();
      // }

      // postMessage监听（实时预览）
      // window.addEventListener('message', event => {
      //   if (event.origin !== this.$api.postMsgoOrigin()) return;
      //   if (Object.prototype.toString.call(event.data) === '[object Object]') {
      //     if (event.data.list) {
      //       event.source.postMessage('Received', this.$api.postMsgoUrl());
      //       this.pageData = event.data;
      //       this.initPage()
      //       return this.$util.setSessionStorage("pageData", event.data);
      //     }
      //   }
      // }, false);
    }
  },
  created() {
    this.getPageData();
  },
  render() {
    if (!this.pageData) return null;
    const wrapStyle = {
      ...this.$util.formatStyle(this.pageData.style),
      backgroundImage: `url(${this.pageData.style.backgroundImage})`
    }
    return (
      <div
        class={['wrapper', this.pageData.theme]}
        style={wrapStyle}
      >
        <RenderPage
          list={this.pageData.list}
          fixedTop={this.pageData.fixedTop}
          fixedBottom={this.pageData.fixedBottom}
          fixedCustom={this.pageData.fixedCustom}
        />
      </div>
    )
  }
};