document.addEventListener('scroll',function(){

    //�������߶�+�Ӵ��߶� = �ɼ�����ײ��߶�
    var visibleBottom = window.scrollY + document.documentElement.clientHeight;
    //�ɼ����򶥲��߶�
    var visibleTop = window.scrollY;
    // ��ȡ��ҳ��ť����
    var pagination = document.getElementById('pagination');
    // ��ȡλ�ü���������˴�����������
    var eventlistner = document.getElementById('post-comment');
    if (eventlistner&&pagination){
    var centerY = eventlistner.offsetTop+(eventlistner.offsetHeight/2);
    if(centerY>visibleTop&&centerY<visibleBottom){
      pagination.style.display = 'flex';
    }else{
      pagination.style.display = 'none';
    }
  }
})