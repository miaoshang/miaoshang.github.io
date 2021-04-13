//导航栏js
layui.use('element', function(){
  var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块

  //监听导航点击
  element.on('nav(demo)', function(elem){
    //console.log(elem)
    layer.msg(elem.text());
  });
});
//轮播图js
layui.use(['carousel', 'form'], function(){
  var carousel = layui.carousel
  ,form = layui.form;

  //常规轮播
  carousel.render({
    elem: '#test1'
    ,arrow: 'always'
  });

  //改变下时间间隔、动画类型、高度
  carousel.render({
    elem: '#test2'
    ,interval: 1800
    ,anim: 'fade'
    ,height: '120px'
  });

  //设定各种参数
  var ins3 = carousel.render({
    elem: '#test3'
  });
  //图片轮播
  carousel.render({
    elem: '#test10'
    ,width: '1000px'
    ,height: '600px'
    ,interval: 5000
  });

  //事件
  carousel.on('change(test4)', function(res){
    console.log(res)
  });

  var $ = layui.$, active = {
    set: function(othis){
      var THIS = 'layui-bg-normal'
      ,key = othis.data('key')
      ,options = {};

      othis.css('background-color', '#5FB878').siblings().removeAttr('style');
      options[key] = othis.data('value');
      ins3.reload(options);
    }
  };

  //监听开关
  form.on('switch(autoplay)', function(){
    ins3.reload({
      autoplay: this.checked
    });
  });

  $('.demoSet').on('keyup', function(){
    var value = this.value
    ,options = {};
    if(!/^\d+$/.test(value)) return;

    options[this.name] = value;
    ins3.reload(options);
  });

  //其它示例
  $('.demoTest .layui-btn').on('click', function(){
    var othis = $(this), type = othis.data('type');
    active[type] ? active[type].call(this, othis) : '';
  });
});
//折叠面板
layui.use(['dropdown', 'util', 'layer'], function(){
  var element = layui.element;
  var layer = layui.layer;

  //监听折叠
  element.on('collapse(test)', function(data){
    layer.msg('展开状态：'+ data.show);
  });
});