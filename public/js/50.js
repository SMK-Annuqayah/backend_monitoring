"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50],{1050:(a,t,e)=>{e.r(t),e.d(t,{default:()=>l});var s=e(9669),r=e.n(s),o=e(6455),n=e.n(o);const i={mounted:function(){var a=document.querySelector("body");a.style.backgroundImage="url(/img/wilayah.png)",a.style.backgroundRepeat="no-repeat",a.style.backgroundSize="cover"},data:function(){return{name:"",email:"",password:""}},methods:{registerUser:function(){var a=this,t=new FormData;t.append("name",this.name),t.append("email",this.email),t.append("password",this.password),r().post("http://surat-desa.surabayawebtech.com/api/auth/register",t).then((function(t){console.log(t.data),n().fire({icon:"success",title:"Pendaftaran berhasil!",text:"Anda telah berhasil mendaftar.",confirmButtonText:"OK"}).then((function(){a.$router.push("/")}))})).catch((function(a){if(console.error(a),a.response&&a.response.data&&a.response.data.errors){var t=a.response.data.errors,e="";Object.keys(t).forEach((function(a){e+="".concat(t[a],"\n")})),n().fire({icon:"error",title:"Oops...",text:e})}else n().fire({icon:"error",title:"Oops...",text:"Terjadi kesalahan saat mendaftar."})}))}}};const l=(0,e(1900).Z)(i,(function(){var a=this,t=a._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"card o-hidden border-0 shadow-lg my-5"},[t("div",{staticClass:"card-body p-0"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-5 d-none d-lg-block bg-register-image"}),a._v(" "),t("div",{staticClass:"col-lg-7"},[t("div",{staticClass:"p-5"},[a._m(0),a._v(" "),t("form",{staticClass:"user",on:{submit:function(t){return t.preventDefault(),a.registerUser.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"name"}],staticClass:"form-control form-control-user",attrs:{type:"text",id:"name","aria-describedby":"name",placeholder:"Masukkan Nama"},domProps:{value:a.name},on:{input:function(t){t.target.composing||(a.name=t.target.value)}}}),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.email,expression:"email"}],staticClass:"form-control form-control-user",attrs:{type:"email",id:"email","aria-describedby":"email",placeholder:"Masukkan Email"},domProps:{value:a.email},on:{input:function(t){t.target.composing||(a.email=t.target.value)}}})]),a._v(" "),t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.password,expression:"password"}],staticClass:"form-control form-control-user",attrs:{type:"password",id:"exampleInputPassword",placeholder:"Masukkan Password"},domProps:{value:a.password},on:{input:function(t){t.target.composing||(a.password=t.target.value)}}})]),a._v(" "),t("button",{staticClass:"btn btn-primary btn-user btn-block",attrs:{type:"submit"}},[a._v("\n                Daftar\n              ")])]),a._v(" "),t("hr"),a._v(" "),t("div",{staticClass:"text-center"},[t("router-link",{staticClass:"small",attrs:{to:"/lupa-password"}},[a._v("Lupa Password?")])],1),a._v(" "),t("div",{staticClass:"text-center"},[t("router-link",{staticClass:"small",attrs:{to:"/"}},[a._v("Sudah punya akun? Login!")])],1)])])])])])])}),[function(){var a=this._self._c;return a("div",{staticClass:"text-center"},[a("h1",{staticClass:"h4 text-gray-900 mb-4"},[this._v("Buat Akun!")])])}],!1,null,null,null).exports}}]);