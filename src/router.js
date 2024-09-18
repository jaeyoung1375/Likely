import { createWebHistory, createRouter } from "vue-router";
import QnA from "./components/QnA.vue";
import Knowledge from "./components/Knowledge.vue";
import Community from "./components/Community.vue";
import Event from "./components/Event.vue";
import Training from "./components/Training.vue";
import Jobs from "./components/Jobs.vue";
import Notice from "./components/Notice.vue";
import Mypage from "./components/Mypage.vue";
import Login from "./components/Login.vue";
const routes = [ 
  {
    path: "/questions",
    component: QnA,
  },
  {
    path: "/knowledge",
    component: Knowledge,
  },
  {
    path: "/community",
    component: Community,
  },
  {
    path: "/events",
    component: Event,
  },
  {
    path: "/trainings",
    component: Training,
  },
  {
    path: "/jobs",
    component: Jobs,
  },
  {
    path: "/notice",
    component: Notice,
  },
  {
    path: "/mypage",
    component: Mypage,
  },
  {
    path: "/login",
    component: Login,
  },
 

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 