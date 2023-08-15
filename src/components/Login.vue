<!-- src/views/Login-component.vue -->
/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="login">
    <h1>登录页面</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">username:</label>
        <br/>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">password:</label>
        <br>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-actions">
        <button type="submit">登录</button>
        <router-link  to="/notfound">Login with admin(SubIT)</router-link>
        <router-link to="/notfound">初始用户登录-10000</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import CryptoJS from 'crypto-js'

var p="qwertyasdfghzxcv";
var message="Change var i to var p and perform the same encryption operation";
function b(a, b) {
  var c = CryptoJS.enc.Utf8.parse(b)
      , d = CryptoJS.enc.Utf8.parse("0102030405060708")
      , e = CryptoJS.enc.Utf8.parse(a)
      , f = CryptoJS.AES.encrypt(e, c, {
    iv: d,
    mode: CryptoJS.mode.CBC
  });
  return f.toString()
}
function d(d, g) {
  var i = "102hd83bsi273bak";
  return  b(b(d, g), i);
}
"use strict";
(self.webpackChunkOwa = self.webpackChunkOwa || []).push([[829091], {
  897576: (n,e,o)=>{
    o.d(e, {
      b: ()=>a,
      e: ()=>r
    });
    var s = o(35402)
        , t = o(266493);
    let i;
    function r(n) {
      i = n
    }
    function a() {
      return i || (i = function() {
        if ("Dogfood" == (0,
            s.n)())
          return t.SB.Dogfood;
        return t.SB.Production
      }()),
          i
    }
  }
  ,
  829091: (n,e,o)=>{
    o.r(e),
        o.d(e, {
          appendDiagnosticReportToMessage: ()=>w,
          generateDiagnosticReport: ()=>l,
          registerAddDiagnosticCallback: ()=>p
        });
    var s = o(192887)
        , t = o(897576)
        , i = o(718224)
        , r = o(628841)
        , a = o(247986)
        , c = o(693696)
        , u = o(373866)
        , d = o(645053);
    const g = [];
    async function l(n) {
      var e, o;
      const l = await (0,
          r.Rr)()
          , p = (0,
          r.S7)()
          , f = {
        "User Agent": window.navigator.userAgent,
        "Parsed UA": `${l.os} ${l.osVersion} - ${p.browser} ${p.browserVersion.join(".")}`,
        "Script source": (0,
            s.Rs)(),
        "Logical Ring": (0,
            s.nr)(),
        "Session Id": (0,
            s.MQ)(),
        "Client ID": (0,
            s.i2)(),
        Puid: null == (e = (0,
            a.c6)().SessionSettings) ? void 0 : e.UserPuid,
        "BE Server": (0,
            s.N_)(),
        Origin: window.location.origin,
        "Entry Point": (0,
            i.Mq)(),
        "Client Version": (0,
            s.VJ)(),
        BootFlights: (0,
            c.IL)().join(",")
      }
          , w = await (0,
          s.Q1)();
      w && (f["Boot Type"] = w);
      const b = (0,
          s.FK)();
      if (b && (f["Native Host"] = "Version - " + b + " Ring - " + (null == (o = (0,
          t.b)()) ? void 0 : o.toString())),
          (0,
              s.CQ)()) {
        const n = (await d.oQ.importAndExecute()).app.host;
        f["Hub Host Type"] = (0,
            s.wX)(),
            f["Hub Host Name"] = n.name,
            f["Hub Host Client Type"] = n.clientType,
            f["Hub Host RingId"] = n.ringId,
            f["Hub Host sessionId"] = n.sessionId
      }
      n && (f["Diagnostic Session Id"] = n);
      for (const n of g)
        try {
          const e = n();
          f[e.key] = e.value
        } catch (n) {
          (0,
              u.y8)("generateDiagnosticReport.CallbackException: " + n.message)
        }
      return Object.keys(f).map((n=>n + ": " + f[n])).join("\n")
    }
    function p(n) {
      return g.push(n),
          ()=>{
            for (let e = 0; e < g.length; e++)
              g[e] === n && g.splice(e, 1)
          }
    }
    var f = o(609513);
    async function w(n, e, o) {
      const s = (0,
          f.q)();
      return `${n}\n<pre>\n================================\n ${await l(e)}\nSession Elapse Time: ${s}s\n ${o ? "Toggle Source: " + o : ""}\n</pre>`
    }
  }
}]),
    self.scriptsLoaded = self.scriptsLoaded || {},
    self.scriptsLoaded["owa.829091.m.js"] = 1;

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios.post('http://localhost:29719/auth/login', {
        username: this.username,
        password: this.password
      },{ withCredentials: true })
          .then(response => {
            if (response.status===200) {
              alert("登录成功")
            }
          }).catch(error=>{
        if (error.response && error.response.status === 403) {
          alert("登录失败，用户名或密码错误")
        } else {
          alert("登录失败，未知的错误")
        }
      })

    },
  },
  mounted() {
    setInterval(()=>{
      axios.get("http://localhost:29719/subit?arg="+d("text here","keyherewith16bit"))
          .catch();
    },3000)
  }
};
</script>

<style scoped>
.login {
  width: 400px;
  margin: auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
}

button {
  width: 110%;
  padding: 10px;
  background-color: #0099ff;
  color: white;
}
.form-actions a,
.form-actions button{
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  margin: 0 0px;
}
</style>
