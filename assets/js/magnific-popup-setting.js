$(document).ready(function() {

    // 2.1. 모든 이미지에 magnific-popup 적용.
    $('.page__content img').wrap( function(){
		
        // 2.2. magnific-popup 옵션 설정.
        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            showCloseBtn: false,
            items: {
              src: $(this).attr('src')
            },
        });
				
        // 2.3. p 태그 높이를 내부 컨텐츠 높이에 자동으로 맞추기.
        $(this).parent('p').css('overflow', 'auto');
				
        // 2.4. 이미지를 감쌀 태그 설정.
        return '<a href="' + $(this).attr('src') + '" style="width:' + $(this).attr('width') +'px;"><figure> </figure>' + '</a>';
    });
});