// 复制微信号功能
async function copyWechat(wechatId) {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(wechatId);
            showMessage('微信号已复制，请打开微信添加好友吧！');
        } else {
             备用方案
            const textArea = document.createElement('textarea');
            textArea.value = wechatId;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showMessage('微信号已复制，请打开微信添加好友吧！');
        }
    } catch (err) {
        console.error('复制失败', err);
        showMessage(`复制失败，请手动记录微信号 ${wechatId}`);
    }
}

 显示提示消息
function showMessage(message) {
     移除已存在的提示
    const existingMessage = document.querySelector('.message-toast');
    if (existingMessage) {
        existingMessage.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'message-toast';
    toast.textContent = message;
    toast.style.cssText = `
        position fixed;
        top 50%;
        left 50%;
        transform translate(-50%, -50%);
        background rgba(0, 0, 0, 0.8);
        color white;
        padding 15px 25px;
        border-radius 8px;
        z-index 1000;
        font-size 1rem;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() = {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 3000);
}

 页面加载完成后添加一些交互效果
document.addEventListener('DOMContentLoaded', function() {
     为蛋糕卡片添加点击效果
    const cakeCards = document.querySelectorAll('.cake-card');
    cakeCards.forEach(card = {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('contact-btn')) {
                this.style.transform = 'scale(0.98)';
                setTimeout(() = {
                    this.style.transform = '';
                }, 150);
            }
        });
    });
});