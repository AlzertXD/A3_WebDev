var button = document.getElementById('seeMoreBtn');
    var image = document.getElementById('Cheif-pic');
    
    // 保存原始图片的URL
    var originalImageSrc = image.src;
    
    // 当按钮被按下时更换图片
    button.addEventListener('mousedown', function() {
      image.src = 'img/Food 1.png'; // 替换为新图片的URL
    });
    
    // 当按钮被松开时恢复原始图片
    button.addEventListener('mouseup', function() {
      image.src = originalImageSrc;
    });