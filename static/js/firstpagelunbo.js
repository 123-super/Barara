  function lunbo() {
      var index = 0;
      var setTime;
      // 自动播放
      autoNextPage();

      function autoNextPage() {
          setTime = setInterval(function() {
              nextButton(true);
          }, 3000);
      }
      // 鼠标移入，停止自动播放
      $(".lunbolist").mouseover(function() {
          // console.log('hah');
          clearInterval(setTime);
      });
      // 鼠标移出，开始自动播放
      $(".lunbolist").mouseout(function() {
              autoNextPage();
              // console.log('hihi');
          })
          // 上一页
      $(".sbutton-prev").click(function() {
              clearInterval(setTime);
              nextButton(false);
          })
          // 下一页
      $(".sbutton-next").click(function() {
          clearInterval(setTime);
          nextButton(true);
      })


      var buttonnum = $('.spagination a');
      //    分页器点击事件
      buttonnum.on('click', function() {
          console.log($(this).attr('index'))
          clearInterval(setTime)
          var j = $(this).attr('index') - 1
          var leftlength = -1226 * j;
          f(leftlength)
          $(this).attr('class', 'active')
              // 置当前点击的小圆点的类名为active
      })

      // 分页器每个小圆点都失去active类与对应图片显示
      function f(leftlength) {
          for (var i = 0; i < 5; i++) {
              $('.spagination a').eq(i).attr('class', '')
          }
          $('.swrapper').animate({
              left: leftlength + 'px'
          });
      }

      // 判断是要上一页还是下一页
      function nextButton(next) {
          var leftlength = 0;
          if (next) {
              // 往后走
              if (index == 5) {
                  leftlength = 0;
                  index = 1;
              } else {
                  // console.log("调用了4");
                  index++;
              }
              leftlength = -1226 * (index - 1);
          } else {
              // 往前走
              if (index == 1) {
                  index = 5;
              } else {
                  index--;
              }
              leftlength = -1226 * (index - 1);
          }
          f(leftlength)
          $('.spagination a').eq(index - 1).attr('class', 'active')
      }
  }
  export {
      lunbo
  }