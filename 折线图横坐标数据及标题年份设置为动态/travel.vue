<template>
  <div>
    <div class="sx-title-display">
      <div class="titleBg">
        <div class="sx-name14black">住宿单位接待国内过夜游客(万人次)</div>
        <div class="sx_disply">
          <div class="sx-numberblue">25.09</div>
          <!--          <img src="@/assets/images/老人信息/老人信息_补贴项目.png" class="sx-old-img"/>-->
        </div>
      </div>
      <div class="titleBg">
        <div class="sx-name14black">住宿单位接待入境过夜游客（人）</div>
        <div class="sx_disply">
          <div class="sx-numberblue">5310</div>
          <!--          <img src="@/assets/images/老人信息/老人信息_补贴老人.png" class="sx-old-img"/>-->
        </div>
      </div>
      <div class="titleBg" style="margin-right: 0px">
        <div class="sx-name14black">国内游客人均消费（元）</div>
        <div class="sx_disply">
          <div class="sx-numberblue">1430</div>
          <!--          <img src="@/assets/images/老人信息/老人信息_补贴订单.png" class="sx-old-img"/>-->
        </div>
      </div>
    </div>
    <div style="display: flex; height: 390px; margin-top: 20px">
      <div style="width: 50%; padding-right: 20px; height: 390px">
        <div class="sx-organ-box">
          <div class="sx-organ-title">{{this.before}}-{{this.after}}年旅游人数（万人次）</div>
          <div
            style="
              width: 100%;
              height: 1px;
              background: #e5e5e5;
              margin: 20px 0px;
            "
          ></div>
          <div ref="mychart1" style="height: 300px; width: 100%"></div>
        </div>
      </div>
      <div style="width: 50%; height: 390px">
        <div class="sx-organ-box">
          <div class="sx-organ-title">{{this.before}}-{{this.after}}年旅游收入（亿元）</div>
          <div
            style="
              width: 100%;
              height: 1px;
              background: #e5e5e5;
              margin: 20px 0px;
            "
          ></div>
          <div ref="mychart2" style="height: 300px; width: 100%"></div>
        </div>
      </div>
    </div>
    <div style="display: flex; margin-top: 20px">
      <div class="sx-organ-box">
        <div class="sx-organ-title">岱山县主要景区景点信息</div>
        <div
          style="
            width: 100%;
            height: 1px;
            background: #e5e5e5;
            margin: 20px 0px;
          "
        ></div>
        <div style="display: flex; height: 500px; padding: 0px 20px 20px 20px">
          <div style="width: 20%">
            <Button
              style="
                margin-top: 20px;
                height: 50px;
                width: 200px;
                font-size: 18px;
              "
              v-for="(item, index) in views"
              :key="index"
              :type="item.isselect ? 'primary' : null"
              @click="selectview(index)"
              >{{ item.name }}</Button
            >
          </div>
          <div style="width: 40%; padding: 20px">
            <img
              :src="selectbean.img"
              style="width: 100%; height: 300px; margin-top: 30px"
            />
          </div>
          <div style="width: 40%">
            <div style="text-align: center; font-size: 18px; color: #333333">
              {{ selectbean.name }}{{ selectbean.address }}
            </div>
            <div
              style="
                text-align: left;
                font-size: 16px;
                color: #666666;
                margin-top: 15px;
              "
            >
              {{ selectbean.introduce }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getFullYear} from '@/util'
import img1 from "@/assets/images/img_11.png";
import img2 from "@/assets/images/img_12.png";
import img3 from "@/assets/images/img_13.png";
import img4 from "@/assets/images/img_14.png";
import img5 from "@/assets/images/img_15.png";
import img6 from "@/assets/images/img_16.png";
export default {
  name: "live",

  props: {
    fullWidth: {
      type: Number,
      default: document.documentElement.clientWidth,
    },
  },
  data() {
    return {
      before: '',
      after: '',
      classOption: {
        limitMoveNum: 3,
        // singleHeight: 80,
        waitTime: 0,
        step: 0.2,
        hoverStop: false,
      },
      selectbean: {},
      views: [
        {
          isselect: true,
          name: "观音山景区",
          address: "（岱山县衢山镇观音山景区）",
          introduce:
            "观音山，峰峦高耸，山势险峻，四周群山环抱，数峰连环似莲花，面积约4平方公里。最高处天灯山，视野开阔，蓝天碧海，一览无余。该景区环境清幽，冬暖如春，夏凉若秋。山之顶峰，常有云雾缭绕，若隐若现，时浓时淡，故名“观音驾雾”。该景区主要以观音山为中心，由观音山上的上中下3大寺、11层高的白色石塔和三星国际灯塔及沙滩所组成，进区有两条路直到，一是公路，从码头直通山顶；另一条为上山游步道，也通到山顶。目前，进出岛的交通也很方便，已开通了至岱山岛、定海、宁波、嵊泗等航线。该景区的主调为：以佛教文化为背景，山景、海景相衬托的避暑胜地。",
          img: img1,
        },
        {
          isselect: false,
          name: "鹿栏晴沙景区",
          address: "（岱山县岱东镇海坛路1号）",
          introduce:
            "鹿栏晴沙全长3.6公里，沙滩呈南北走向，东西宽150米，淹水部分纵宽200米以上，是江浙沿海最长一条沙滩。沙滩坡平， 纵宽大，几百米外海水才及胸，涨潮时浪大，回声响，气势宏大；退潮时潮水平静、安宁。沙色呈铁灰色，沙质细腻偏硬，沙质中含有多种矿物质，对皮肤病具有一定疗效。由于沙质硬，沙滩上可行驶汽车，被冠以“万步铁板沙”美称。沙滩三面秀峰环抱，中间有“滩中小屿”——泥螺山，四周礁石各异。其近处有一“鸡冠礁”，因形似公鸡冠而得名。清晨，站在沙滩透过“鸡冠礁”观东海日出， 一轮红日破海而出，霞彩缤纷，别有一番情趣。清代诗人刘梦兰曾有诗赞曰：“一带平沙绕海隅，鹿栏山下亦名区，好将白地光明锦， 写出潇湘落雁图。”",
          img: img2,
        },
        {
          isselect: false,
          name: "东沙古渔镇景区",
          address: "（岱山县东沙镇山咀头一路70号）",
          introduce:
            "岱山境内的东沙镇是一个古老渔镇，也是舟山群岛历史上的著名渔港，更是清朝民国时期东部沿海的繁华商埠。\n" +
            "三百多年前，清廷海禁重开，凭借濒临岱衢洋盛产大黄鱼这一得天独厚的优越条件，东沙镇以渔盐兴市，带动商贸业的高度发展，民国二十二年（1933）《申报》记载：“东沙角一隅，居民三千，大小店铺四百余号，其商业密度实为罕见”。\n" +
            "至上个世纪中叶，随着大黄鱼资源的急剧衰落，冻结了东沙镇的时空，在大街小巷留下了为数众多的百年建筑。在今天，踏入东沙古镇，一条条悠悠的石板小巷，一处处古色古香的四合院，一间间留着古商号印迹的街旁店铺，让你穿越时空，感受到东沙昔日浓郁的渔镇风情。\n" +
            "中国海洋渔业博物馆位于以“大黄鱼故乡”而闻名的东沙古镇，共展出“海洋是生命摇篮”、“舟山渔场”、“渔船与作业”等十大系列的陈列内容，展品多达1600余件。中国海洋渔业博物馆是一部中国渔业发展的历史书，是陆地上的海洋生物馆，是文化的使者，是知识的海洋。",
          img: img3,
        },
        {
          isselect: false,
          name: "磨心山景区",
          address: "（岱山县高亭镇磨心山景区）",
          introduce:
            "位于岱山本岛东南部的高亭镇北面，距县城2.2公里，占地约6平方公里，三面环山，一面临海，山岗绵延叠翠。该景区以佛教文化为主体，徐福求仙为背景，海上千岛相映衬，山上慈云极乐禅寺依山而建，历史悠久，规模恢弘，是缅甸国寺的姐妹寺。磨心山其它主要景点还包括白峰积雪、华藏世界、茶园晓雾、现龙井、玉佛宝塔、碧波亭、望海亭、超果寺、静修庵、崇福庙、徐福广场等，是观赏海上千岛美景，礼佛祈福的理想场所\n" +
            "位于岱山本岛北部的鹿栏山下，并由此得名。该景区为“蓬莱十景”之一，是天然的大型海滨浴场及海滩活动中心，距县城高亭镇14公里。整个景区由鹿栏晴沙沙滩、徐福亭、泥螺山、沙滩观海平台及规划中的祭海台组成。鹿栏晴沙全长3.6公里，沙滩呈南北走向，东西宽300米，是江浙沿海最长一条沙滩，沙滩坡平，纵宽大，涨潮时浪大，回声响彻，气势宏伟，退潮时潮水平静、安宁。沙色呈铁灰色，沙质细腻偏硬，沙滩上可行驶汽车，被冠以“万步铁板沙”美称。",
          img: img4,
        },
        {
          isselect: false,
          name: "双合石壁景区",
          address: "（岱山县岱西镇小岙村）",
          introduce:
            "双合山有双合洞壁景点，即“蓬莱十景”的“石壁残照”，这是数百年来石工开采石板、石条留下的石景，共50处，分布在岗上、山坡、山脚等处。其大小不一、形态各异，按形态称为石壁、石洞、石宫、石潭。洞中碧水清幽，若夕阳投影石壁更为壮观，是岛上一个别有洞天的景点",
          img: img5,
        },
        {
          isselect: false,
          name: "秀山岛滑泥主题公园",
          address: "（岱山县秀山乡秀北村凉帽山海兰中路505号）",
          introduce:
            "位于岱山岛南部以秀山岛为中心，共有35个大小岛屿组成，陆地面积23平方公里，全岛海岸线长40公里，多礁石、沙滩、泥涂，秀山岛山清水秀，绿色覆盖率达73%以上，为岱山风景名胜区的重要组成部分。该景区有众多的自然景观和人文景观，主要有位于岛东部的九子、三礁等三块首尾相连的沙滩群形成的天然五里金沙，遍布岛四周的造型独特礁石群，高约50米的狮子岩，岩壁上留有唐代名人罗隐题留的“书仕岩”石刻，宋代大文豪苏东坡当年在游览该景区时曾写下“兰山摇动秀山舞，小白桃花半吞吐”的著名诗句。此外，景区根据自身的独特条件还开展多种形式的带海味特色项目，如滑泥、海上作业、海鲜烧烤、海洋特种养殖垂钓场等。\n" +
            "中国首家真正的泥主题公园，是一座集休闲娱乐，美容保健等功能于一体的特色主题公园，它依托秀山岛丰富而独特的滩涂海泥资源，创新立意，强烈刺激现代人挑剔的出游动机，置身其中，惊险刺激，乐趣无限。",
          img: img6,
        },
      ],
      pieDatatotal: 0,
      minScreen: 1400,
      data1: [
        {
          value: 231,
          name: '',
          color: "#1388F4",
          itemStyle: {
            color: "#1388F4",
          },
        },
        {
          value: 264,
          name: '',
          color: "#1388F4",
          itemStyle: {
            color: "#1388F4",
          },
        },
        {
          value: 295.7,
          name:'',
          color: "#1388F4",
          itemStyle: {
            color: "#1388F4",
          },
        },
        {
          value: 334.5,
          name: '',
          color: "#1388F4",
          itemStyle: {
            color: "#1388F4",
          },
        },
        {
          value: 398,
          name: '',
          color: "#1388F4",
          itemStyle: {
            color: "#1388F4",
          },
        },
        {
          value: 458.8,
          name:'',
          color: "#1388F4",
          itemStyle: {
            color: "#1388F4",
          },
        },
        {
          value: 552,
          name: '',
          color: "#1388F4",
          itemStyle: {
            color: "#1388F4",
          },
        },
        {
          value: 648,
          name: '',
          color: "#1388F4",
          itemStyle: {
            color: "#1388F4",
          },
        },
        {
          value: 746,
          name: '',
          color: "#1388F4",
          itemStyle: {
            color: "#1388F4",
          },
        },
        {
          value: 800.56,
          name:'',
          color: "#1388F4",
          itemStyle: {
            color: "#1388F4",
          },
        },
      ],
      data2: [
        {
          value: 22.1,
          name: '',
          color: "#3BA272",
          itemStyle: {
            color: "#3BA272",
          },
        },
        {
          value: 25.52,
          name: '',
          color: "#3BA272",
          itemStyle: {
            color: "#3BA272",
          },
        },
        {
          value: 29.04,
          name: '',
          color: "#3BA272",
          itemStyle: {
            color: "#3BA272",
          },
        },
        {
          value: 33.04,
          name: '',
          color: "#3BA272",
          itemStyle: {
            color: "#3BA272",
          },
        },
        {
          value: 54.2,
          name: '',
          color: "#3BA272",
          itemStyle: {
            color: "#3BA272",
          },
        },
        {
          value: 65.2,
          name: '',
          color: "#3BA272",
          itemStyle: {
            color: "#3BA272",
          },
        },
        {
          value: 78.77,
          name: '',
          color: "#3BA272",
          itemStyle: {
            color: "#3BA272",
          },
        },
        {
          value: 92.5,
          name: '',
          color: "#3BA272",
          itemStyle: {
            color: "#3BA272",
          },
        },
        {
          value: 106.8,
          name: '',
          color: "#3BA272",
          itemStyle: {
            color: "#3BA272",
          },
        },
        {
          value: 114.6,
          name: '',
          color: "#3BA272",
          itemStyle: {
            color: "#3BA272",
          },
        },
      ],
    };
  },
  methods: {
//设置时间为动态
    update(){
        var Data = getFullYear(10);
        this.data1.forEach((ele,index) =>{
          ele.name = Data[index];
          console.log('jjjj',ele.name)
        })
        this.before = Data[0];
        this.after = Data[Data.length - 1];
        console.log('llll',this.before);
        console.log('llll2',this.after);
        console.log('llll11',Data);
    }
    ,
    selectview(index) {
      this.views.forEach((item) => {
        item.isselect = false;
      });
      this.views[index].isselect = true;
      this.selectbean = this.views[index];
    },
    getChart() {
      let echarts = require("echarts");
      let myChart1 = echarts.init(this.$refs.mychart1);
      let myChart2 = echarts.init(this.$refs.mychart2);

      let xdata1 = [];
      this.data1.forEach((item) => {
        xdata1.push(item.name);
      });
      let option1 = {
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "15%",
          top: "5%",
          containLabel: true,
        },
        legend: {
          // orient: 'vertical',
          // bottom: 'top',
        },
        // color:['#3BA272'],
        toolbox: {
          // feature: {
          //     saveAsImage: {}
          // }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: xdata1,
          axisLabel: {
            rotate: -45,
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            // name: '七岁以下',
            type: "line",
            // stack: '七岁以下',
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#1388F4",
                },
              },
            },
            data: this.data1,
          },
        ],
      };

      let xdata2 = [];
      this.data1.forEach((item) => {
        xdata2.push(item.name);
      });
      let option2 = {
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "15%",
          top: "5%",
          containLabel: true,
        },
        legend: {
          // orient: 'vertical',
          // bottom: 'top',
        },
        // color:['#3BA272'],
        toolbox: {
          // feature: {
          //     saveAsImage: {}
          // }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: xdata1,
          axisLabel: {
            rotate: -45,
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            // name: '七岁以下',
            type: "line",
            // stack: '七岁以下',
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#3BA272",
                },
              },
            },
            data: this.data2,
          },
        ],
      };

      myChart1.setOption(option1);
      myChart2.setOption(option2);
      window.onresize = function () {
        myChart1.resize();
        myChart2.resize();
      };
    },
  },
  mounted() {
    this.selectbean = this.views[0];
    this.update();
    this.getChart();
   
  },
};
</script>

<style lang="less" scoped>
.sx-organ-box {
  width: 100%;
  background: #fff;
  border-radius: 5px;
}

.sx-organ-title {
  padding: 13px 20px 0px 20px;
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #262626;
}

.line {
  height: 1px;
  width: 100%;
  margin-top: 13px;
  background: #e5e5e5;
}

.sx-item-commun {
  width: 80%;
  height: 95px;
  background: #fff;
  border-radius: 6px;
}

.sx-top-name {
  font-size: 14px;
  font-weight: bold;
  color: #000;
  text-align: center;
  line-height: 55px;
}

.sx-bottom-num {
  font-weight: bold;
  font-size: 18px;
  color: #000;
  text-align: center;
}

.scroll-content {
  height: 500px;
  overflow: hidden;
}

.scroll-title {
  width: 33%;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #262626;
}

.singleline {
  width: 33%;
  font-size: 16px;
  color: #262626;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
