<template>
  <div>
    <sx-icon-card-content :title="'村情简介'">
      <profile/>
    </sx-icon-card-content>
    <!-- 基本情况 -->
    <sx-icon-card-content :title="titleList[0].name">
      <BasicDeatil />
    </sx-icon-card-content>
    <sx-icon-card-content :title="'未来乡村建设'">
      <tab-button :tabs-data="btnData" :current-type="btnTypeName" @change-tab-name = "changebtn"></tab-button>
      <carousel :data="tabData" style="margin-bottom: 16px"></carousel>
      <context :data="contentData"></context>
    </sx-icon-card-content>
  </div>
</template>
<script>
import BasicDeatil from './basic-detail/BasicDetail.vue'

import Profile from './Village-profile/index.vue'
import SxIconCardContent from '@/components/sx-icon-card-content'
import TabButton from '@/views/components/tabButton'
import Context from '@/views/components/context/textTab.vue'
import carousel from '@/views/components/carousel/index.vue'

export default {
  components:{
    SxIconCardContent,
    Profile,
    TabButton,
    Context,
    carousel,
    BasicDeatil,
  },
  data(){
    return{
      btnTypeName:'',
      titleList: [
        {
          name: "基本情况",
          select: true,
        }
      ],
      btnData:[
        {name:'打造未来邻里场景'},
        {name:'打造未来文化场景'},
        {name:'打造未来产业场景'},
        {name:'打造未来风貌场景'},
        {name:'打造未来治理场景'},
        {name:'打造未来党建场景'},
      ],
      textData:[
        [
          {
            content:'建设邻里和睦、生活幸福的乡村生活圈。升级党群服务中心，投资250余万元，打造秀南村样板场所，将更多空间留给党员群众，完善党员教育、理论宣讲、志愿服务、营商服务、一站式便民服务、办事代理、政策咨询、社会保障等功能，全方位、综合性地展示秀南村党建工作的风采和成果。聚焦生活配套设施，将集体资金和征地补偿费用等资金集中用于商贸服务设施建设，投资500余万元升级建设菜场、配套道路等设施；投资450万元，建成秀南综合服务楼，为职工提供租赁宿舍并在一楼开设“南浦超市”。坚持以人为本，依托箬跳民生小铺和“我的家”联络点，打造“新居民之家”服务阵地；对箬跳民生小铺提档升级，提供就业援助、生活援助等服务；打造托管服务品牌，扩建“我的家”联络点，积极走访困难家庭和新居民家庭，为新居民子女提供课后学习、休闲的场所，有效解决“四点钟难题”；积极开展残疾人换证、空巢老人、低保户、低保边缘户的救助帮扶等工作，做好劳动就业服务和便民利民服务。保证老年人福利，为60岁以上的老人每月发放100-360元不等的生活补助，为老年人生活提供基本保障；推出“我的家”老年版，投资250余万元，持续推进秀南村老年协会项目建设，进一步升级石井潭老年协会家宴中心，解决南浦村民组老年协会无活动场地难题，形成集老年协会与自产自销点为一体的建设方案；开展“银龄互助”活动，以低龄老人与中龄老人或高龄老人以结对帮扶的方式，形成一种可持续性的社会服务。打造志愿服务积分体系，通过志愿活动计时、积分兑换奖励等措施，有效调动群众志愿服务积极性，打造建设邻里和睦、生活幸福的乡村生活圈。'
          }
        ],
        [
          {
            content:'打造秀南名片，建设秀山“南客厅”。完善文化广场建设，通过石雕、宣传墙和连廊等展现形式，以生动活泼的方式向群众普及廉政文化知识，有机融合历史文化和地域文化，通过读廉文、看实物、品廉韵的方式，营造出浓烈的亲民廉政氛围。开展老年法律知识讲座，使辖区老年人在日常生活中懂得如何运用相应法律来保护自己的权益，强化居民学法、懂法、守法的法律观念和意识。以秀南村老年协会项目为据点，建设秀南村老年电大场所，配全设施设备，举办各类讲座、文体演出，使老年电大教育健康有序地开展，构建“学习型社会”。开展“最美秀山人”、“最美家庭”评选，进一步挖掘“清廉倡议先锋”、“最美网格员”等模范带头人物，深层次提炼红、廉、孝、清、洁、雅等本土历史名人和文化中的文化元素及资源并加以传播，营造浓郁的文化氛围。积极开展文明户、文明家庭评选，破除封建陋习，营造文明乡风。'
          }
        ],
        [
          {
            content:'持续推进乡村产业融合发展。促进第一产业持续发展，持续完善农村用地承包机制，将秀南村近百亩土地出租给岱山常石农业发展有限公司等企业作为大棚蔬菜种植基地，有效利用农村闲置土地。大力发展制造业，凭着独特的交通地理环境优势，充分开发利用沿海丰富的港口资源，做好企业服务工作；帮扶下游产业链持续发展，在常石大型船舶修造基地项目、原野船厂先后落户我村的基础上，吸引七十余家企业入驻我村。积极发展第三产业，依靠大型企业带来的消费需求，大力发展服务业，投资400余万元，建设商铺六十余间，聚焦职工生活服务。不断发展壮大村级集体经济，牢牢抓住大型项目落户后的大好发展机遇，从秀南村实际出发，挖掘新的经济增长点，以商铺出租、农贸市场及房屋宿舍租赁为渠道增收，实现村集体经济翻几番，每年收入270余万元，发展壮大村集体经济实力。'
          }
        ],
        [
          {
            content:'打造具有秀南特色的未来乡村风貌。结合当地特色，针对村庄景观门户、重要节点、街巷、水系等实施微改造，打造亮点工程。投资1200余万元，建设常石樱花园项目，打造各色晚樱齐聚，步移而色变的景观效果；投资40余万元，不断优化河渠建设，提升农村水系功能品质；优化基础设施，建设智慧停车场，以常石商业街为据点，投资500万，用地面积5000平方，着力解决群众停车难的问题。'
          }
        ],
        [
          {
            content:'大力推动三治融合，以群众自治为基础、以法治建设为保障、道德建设与法治建设刚柔相济、不断推动三治融合，集聚力量、凝聚人心，营造共商共建共治共享新局面。开展普法活动，积极评选“最美秀山人”等道德楷模人物，营造积极向上的乡村氛围。升级村级党群服务中心，完善法律服务室、警务室建设，打造志愿服务站，大力发展东海渔嫂公益服务组织，打通基层治理最后一公里。 健全完善矛盾纠纷排查化解机制，建设“统战一家”矛盾化解平台，积极运用群众力量，积极敦促村民之间协商洽谈，做到小事不出村、矛盾不上交。提升服务效率，深化第一责任人制度，做到“最多跑一次”。健全防洪防汛机制，制定抗台安全路线并张贴宣传，定期检查水闸水库等抗台基础设施，保障群众生命财产安全。'
          }
        ],
        [
          {
            content:'加强基层党组织和基层政权建设，强化基层党组织领导核心地位。扎实配合开展“整乡推进，整县提升”活动，助力实施“支部亮星”、“服务亮效”等行动，力促党组织运行、党员队伍、干部服务、基层保障质量规范提升，不断增强“整乡推进、整县提升”工作的职责能力。精心打造秀南“民生小铺”示范窗口，助推“两学一做”学习教育。加强班子建设，全面提高党员干部整体素质。党总支和支部活动以多种方式组织党员干部深入学习准则和条例。坚持“三会一课”制度，每月20日组织支部党员进行民主生活会、开展批评与自我批评，通过学习先进理论、先进人物，让支部党员思想认识统一到中央重大的决策和要求上来。'
          }
        ],
      ],
      contentData:'',
      data:[
        [
          require('assets/images/重点工作/未来邻里场景1.jpg'),
          require('assets/images/重点工作/未来邻里场景2.jpg'),
        ],
        [
          require('assets/images/重点工作/未来文化场景1.jpg'),
          require('assets/images/重点工作/未来文化场景2.jpg'),
        ],
        [
          require('assets/images/重点工作/未来产业场景1.jpg'),
          require('assets/images/重点工作/未来产业场景2.jpg'),
        ],
        [
          require('assets/images/重点工作/未来风貌场景1.jpg'),
          require('assets/images/重点工作/未来风貌场景2.jpg'),
        ],
        [
          require('assets/images/重点工作/未来治理1.jpg'),
          require('assets/images/重点工作/未来治理2.jpg'),
        ],
        [
          require('assets/images/重点工作/未来党建1.jpg'),
          require('assets/images/重点工作/未来党建2.jpg'),
        ],
      ],
      tabData:'',
    }
  },
  mounted() {
    this.btnTypeName = this.btnData[0].name;
    this.contentData=this.textData[0];
    this.tabData=this.data[0];
  },
  watch:{
    contentData:{
      handler(newVal, oldVal){
        this.changebtn(name);
      }
    },
    tabData:{
      handler(newVal, oldVal){
        this.changebtn(name);
      }
    }
  },
  methods:{
    changebtn(name){
      let index = this.btnData.findIndex(ele => ele.name === name);
      this.btnTypeName = this.btnData[index].name;
      this.contentData=this.textData[index];
      this.tabData=this.data[index];
    }
  },
}
</script>
