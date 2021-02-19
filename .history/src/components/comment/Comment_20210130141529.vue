<template>
  <div class="commentpage">
    <div class="commentitems">
      <i class="iconfont">&#xe6cc;</i>
      <span class="comment">真不错呀</span>
      <div class="clearfix">
        <span class="user">张三</span><span class="datetime">2010-10-10</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.commentpage {
  padding: 20px 0px 0px 40px;
}

.commentitems {
  height: 70px;
  margin-top: 20px;
  border-bottom: 1px solid grey;
}

.comment {
  font-size: 14px;
}

.commentitems > .iconfont {
  margin-right: 50px;
  font-size: 30px;
}

.user {
  float: left;
  font-size: 16px;
}

.datetime {
  float: right;
  font-size: 14px;
}
</style>