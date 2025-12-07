// 获取DOM元素
const indicators = document.querySelectorAll('.indicator');
const imgs = document.querySelectorAll('.carousel img');
let currentIndex = 0;

// 定义更新轮播状态的函数
function updateCarousel(index) {
    // 移除所有指示器的active类
    indicators.forEach(i => i.classList.remove('active'));
    // 给当前指示器添加active类
    indicators[index].classList.add('active');

    // 隐藏所有图片
    imgs.forEach(img => img.style.display = 'none');
    // 显示当前图片
    imgs[index].style.display = 'block';
}

// 初始化显示第一张图片
updateCarousel(currentIndex);

// 点击指示器切换图片
indicators.forEach((item, index) => {
    item.onclick = () => {
        currentIndex = index;
        updateCarousel(currentIndex);
    };
});

// 自动轮播
setInterval(() => {
    currentIndex = (currentIndex + 1) % indicators.length;
    updateCarousel(currentIndex);
}, 3000);
var map = new AMap.Map('container', {
    viewMode: '2D', // 默认使用 2D 模式，如果希望使用带有俯仰角的 3D 模式，请设置 viewMode: '3D'
    zoom: 11, // 初始化地图层级
    center: [116.397428, 39.90923] // 初始化地图中心点
});

// 切换分类内容显示/隐藏
function toggleCategory(categoryId) {
    const targetEl = document.getElementById(categoryId);
    if (targetEl) {
        // 切换active类实现显示/隐藏
        targetEl.classList.toggle('active');
    }
}

// 为卡片添加点击反馈效果
document.querySelectorAll('.nav-card').forEach(card => {
    card.addEventListener('click', function () {
        this.style.transform = 'translateY(-3px)';
        setTimeout(() => {
            this.style.transform = 'translateY(-5px)';
        }, 150);
        // 点击后恢复样式
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
});
function dialPhone(phoneNumber) {
    // 格式化号码（去除空格/横线）
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    // 拼接 tel 协议（加中国区号+86）
    const telUrl = `tel:+86${cleanNumber}`;

    // 尝试跳转拨号
    try {
        window.location.href = telUrl;
        // PC 端兼容提示
        setTimeout(() => {
            // 判断是否是移动端（简单判断）
            const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
            if (!isMobile) {
                alert('当前设备不支持拨号，请手动拨打：' + cleanNumber);
            }
        }, 500);
    } catch (e) {
        alert('拨号功能异常，请手动拨打：' + cleanNumber);
    }
}