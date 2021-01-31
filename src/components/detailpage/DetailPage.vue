<template>
  <div class="detailpage">
    <div class="detailpage-fr">
      <ul class="productitems">
        <h3>产品参数</h3>
        <li>
          <span class="keyname">适用部位:</span
          ><span class="keyvalue">脸部</span>
        </li>
        <li>
          <span class="keyname">适用部位:</span
          ><span class="keyvalue">脸部</span>
        </li>
        <li>
          <span class="keyname">适用部位:</span
          ><span class="keyvalue">脸部</span>
        </li>
        <li>
          <span class="keyname">适用部位:</span
          ><span class="keyvalue">脸部</span>
        </li>
      </ul>
    </div>
    <div class="detailpage-sr">
      <img src="../../../static/img/testImg/detail1.jpg" alt="详情页图片" />
    </div>
  </div>
</template>
<style>
.detailpage-fr {
  height: 120px;
  padding: 20px 0px 0px 20px;
}

.productitems li {
  float: left;
  width: 33%;
  height: 40px;
  line-height: 40px;
  /* border: 1px solid red; */
  text-align: center;
}

.productitems li .keyname {
  margin-right: 20px;
}

.detailpage-sr {
  text-align: center;
}
</style>