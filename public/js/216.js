"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[216],{9216:(a,t,e)=>{e.r(t),e.d(t,{default:()=>n});var r=e(9669),s=e.n(r);function i(a){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},i(a)}function l(a,t,e){return(t=function(a){var t=function(a,t){if("object"!==i(a)||null===a)return a;var e=a[Symbol.toPrimitive];if(void 0!==e){var r=e.call(a,t||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(a)}(a,"string");return"symbol"===i(t)?t:String(t)}(t))in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}const o={data:function(){var a;return{form:(a={nama:"",jenis_surat:""},l(a,"nama",""),l(a,"nik",""),l(a,"ttl",""),l(a,"jenis_kelamin",""),l(a,"warganegara",""),l(a,"agama",""),l(a,"pekerjaan",""),l(a,"alamat",""),l(a,"status",""),l(a,"bukti_diri",""),l(a,"keperluan",""),l(a,"tujuan",""),l(a,"berlaku_mulai",""),l(a,"keterangan",""),l(a,"user_id",""),a),user_id:""}},methods:{handleSubmit:function(){var a=this,t=new FormData;t.append("nama",this.form.nama),t.append("jenis_surat",this.form.jenis_surat),t.append("nik",this.form.nik),t.append("ttl",this.form.ttl),t.append("jenis_kelamin",this.form.jenis_kelamin),t.append("warganegara",this.form.warganegara),t.append("agama",this.form.agama),t.append("pekerjaan",this.form.pekerjaan),t.append("alamat",this.form.alamat),t.append("status",this.form.status),t.append("bukti_diri",this.form.bukti_diri),t.append("keperluan",this.form.keperluan),t.append("tujuan",this.form.tujuan),t.append("berlaku_mulai",this.form.berlaku_mulai),t.append("keterangan",this.form.keterangan),t.append("user_id",this.user_id),s().post("https://surat-desa.surabayawebtech.com/api/auth/pengajuan-surat",t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(t){a.showAlert()})).catch((function(a){console.error(a)}))},showAlert:function(){var a=this;this.$swal("Data Berhasil di inputkan!!").then((function(){a.$router.push("/user-surat")}))}},created:function(){var a=this;s().get("https://surat-desa.surabayawebtech.com/api/auth/me",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(t){a.user_id=t.data.id;var e=t.data.role,r=localStorage.getItem("token"),s=localStorage.getItem("expires_in");!r||!s||new Date>new Date(s)?(localStorage.removeItem("token"),localStorage.removeItem("expires_in"),a.$router.push("/")):"user"!==e?a.$router.push("/unauthorized"):console.log("success")})).catch((function(t){console.error(t),a.$router.push("/")}))}};const n=(0,e(1900).Z)(o,(function(){var a=this,t=a._self._c;return t("div",{attrs:{id:"wrapper"}},[t("sidebar"),a._v(" "),t("div",{staticClass:"d-flex flex-column",attrs:{id:"content-wrapper"}},[t("div",{attrs:{id:"content"}},[t("navbar"),a._v(" "),t("h1",{staticClass:"text-center customMargin h3"},[a._v("Form Pengajuan Surat Pengnatar")]),a._v(" "),t("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),a.handleSubmit.apply(null,arguments)}}},[t("div",{staticClass:"headerNote"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-1"}),a._v(" "),t("div",{staticClass:"col-sm-10"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"jenis_surat"}},[a._v("Jenis Surat")]),a._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:a.form.jenis_surat,expression:"form.jenis_surat"}],staticClass:"form-select",attrs:{"aria-label":"Default select example"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.form,"jenis_surat",t.target.multiple?e:e[0])}}},[t("option",{attrs:{disabled:"",value:""}},[a._v("Pilih")]),a._v(" "),t("option",{attrs:{value:"Pengantar Umum"}},[a._v("Pengantar Umum")]),a._v(" "),t("option",{attrs:{value:"Pengantar SKCK"}},[a._v("Pengantar SKCK")])])])]),a._v(" "),t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"nama"}},[a._v("Nama")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.nama,expression:"form.nama"}],staticClass:"form-control",attrs:{type:"text",id:"nama",placeholder:"masukkan nama"},domProps:{value:a.form.nama},on:{input:function(t){t.target.composing||a.$set(a.form,"nama",t.target.value)}}})])])]),a._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"nik"}},[a._v("NIK")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.nik,expression:"form.nik"}],staticClass:"form-control",attrs:{type:"number",id:"no_nik",placeholder:"masukkan nik"},domProps:{value:a.form.nik},on:{input:function(t){t.target.composing||a.$set(a.form,"nik",t.target.value)}}})])]),a._v(" "),t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"ttl"}},[a._v("Tempat, Tanggal Lahir")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.ttl,expression:"form.ttl"}],staticClass:"form-control",attrs:{type:"text",id:"ttl",placeholder:"masukkan tempat tanggal lahir"},domProps:{value:a.form.ttl},on:{input:function(t){t.target.composing||a.$set(a.form,"ttl",t.target.value)}}})])])]),a._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"jenis_kelamin"}},[a._v("Jenis Kelamin")]),a._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:a.form.jenis_kelamin,expression:"form.jenis_kelamin"}],staticClass:"form-select",attrs:{"aria-label":"Default select example"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.form,"jenis_kelamin",t.target.multiple?e:e[0])}}},[t("option",{attrs:{disabled:"",value:""}},[a._v("Pilih")]),a._v(" "),t("option",{attrs:{value:"Laki-laki"}},[a._v("Laki-laki")]),a._v(" "),t("option",{attrs:{value:"Perempuan"}},[a._v("Perempuan")])])])]),a._v(" "),t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"warganegara"}},[a._v("Warganegara")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.warganegara,expression:"form.warganegara"}],staticClass:"form-control",attrs:{type:"text",id:"warganegara",placeholder:"masukkan warganegara"},domProps:{value:a.form.warganegara},on:{input:function(t){t.target.composing||a.$set(a.form,"warganegara",t.target.value)}}})])])]),a._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"agama"}},[a._v("Agama")]),a._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:a.form.agama,expression:"form.agama"}],staticClass:"form-select",attrs:{"aria-label":"Default select example"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.form,"agama",t.target.multiple?e:e[0])}}},[t("option",{attrs:{disabled:"",value:""}},[a._v("Pilih")]),a._v(" "),t("option",{attrs:{value:"Islam"}},[a._v("Islam")]),a._v(" "),t("option",{attrs:{value:"Kristen"}},[a._v("Kristen")]),a._v(" "),t("option",{attrs:{value:"Hindu"}},[a._v("Hindu")]),a._v(" "),t("option",{attrs:{value:"Budha"}},[a._v("Budha")]),a._v(" "),t("option",{attrs:{value:"Konghucu"}},[a._v("Konghucu")])])])]),a._v(" "),t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"pekerjaan"}},[a._v("Pekerjaan")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.pekerjaan,expression:"form.pekerjaan"}],staticClass:"form-control",attrs:{type:"text",id:"pekerjaan",placeholder:"masukkan pekerjaan"},domProps:{value:a.form.pekerjaan},on:{input:function(t){t.target.composing||a.$set(a.form,"pekerjaan",t.target.value)}}})])])]),a._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"alamat"}},[a._v("Alamat")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.alamat,expression:"form.alamat"}],staticClass:"form-control",attrs:{type:"text",id:"alamat",placeholder:"masukkan alamat"},domProps:{value:a.form.alamat},on:{input:function(t){t.target.composing||a.$set(a.form,"alamat",t.target.value)}}})])]),a._v(" "),t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"status"}},[a._v("Status")]),a._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:a.form.status,expression:"form.status"}],staticClass:"form-select",attrs:{"aria-label":"Default select example"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){return"_value"in a?a._value:a.value}));a.$set(a.form,"status",t.target.multiple?e:e[0])}}},[t("option",{attrs:{disabled:"",value:""}},[a._v("Pilih")]),a._v(" "),t("option",{attrs:{value:"Kawin"}},[a._v("Kawin")]),a._v(" "),t("option",{attrs:{value:"Belum"}},[a._v("Belum")])])])])]),a._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"bukti_diri"}},[a._v("Bukti Diri")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.bukti_diri,expression:"form.bukti_diri"}],staticClass:"form-control",attrs:{type:"text",id:"bukti_diri",placeholder:"masukkan bukti diri"},domProps:{value:a.form.bukti_diri},on:{input:function(t){t.target.composing||a.$set(a.form,"bukti_diri",t.target.value)}}})])]),a._v(" "),t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"keperluan"}},[a._v("Keperluan")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.keperluan,expression:"form.keperluan"}],staticClass:"form-control",attrs:{type:"text",id:"keperluan",placeholder:"masukkan keperluan"},domProps:{value:a.form.keperluan},on:{input:function(t){t.target.composing||a.$set(a.form,"keperluan",t.target.value)}}})])])]),a._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"tujuan"}},[a._v("Tujuan")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.tujuan,expression:"form.tujuan"}],staticClass:"form-control",attrs:{type:"text",id:"tujuan",placeholder:"masukkan tujuan"},domProps:{value:a.form.tujuan},on:{input:function(t){t.target.composing||a.$set(a.form,"tujuan",t.target.value)}}})])]),a._v(" "),t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"berlaku_mulai"}},[a._v("Berlaku Mulai")]),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.form.berlaku_mulai,expression:"form.berlaku_mulai"}],staticClass:"form-control",attrs:{type:"date",id:"berlaku_mulai",placeholder:"masukkan berlaku_mulai"},domProps:{value:a.form.berlaku_mulai},on:{input:function(t){t.target.composing||a.$set(a.form,"berlaku_mulai",t.target.value)}}})])])]),a._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"form-floating"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:a.form.keterangan,expression:"form.keterangan"}],staticClass:"form-control",staticStyle:{height:"100px"},attrs:{placeholder:"masukkan keterangan tambahan",id:"keterangan"},domProps:{value:a.form.keterangan},on:{input:function(t){t.target.composing||a.$set(a.form,"keterangan",t.target.value)}}}),a._v(" "),t("label",{attrs:{for:"keterangan"}},[a._v("Keterangan Tambahan")])])]),a._v(" "),t("div",{staticClass:"row mt-3"},[t("div",{staticClass:"col-6"},[t("router-link",{staticClass:"btn btn-danger btn-block mb-5",staticStyle:{width:"100px"},attrs:{to:"/user-note"}},[a._v("\n                Kembali\n              ")])],1),a._v(" "),a._m(0)])]),a._v(" "),t("div",{staticClass:"col-sm-1"})])])])],1),a._v(" "),t("footer")])],1)}),[function(){var a=this._self._c;return a("div",{staticClass:"col-6"},[a("button",{staticClass:"btn btn-primary btn-block",staticStyle:{width:"100px",float:"right"},attrs:{type:"submit"}},[this._v("\n                Kirim\n              ")])])}],!1,null,null,null).exports}}]);