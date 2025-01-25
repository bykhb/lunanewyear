$(document).ready(function() {
    // 선물상자 클릭 이벤트
    $('.gift-wrapper').click(function() {
        $('.gift-wrapper').not(this).removeClass('active'); // 다른 선물상자들은 닫기
        $(this).toggleClass('active');
    });

    // 선택하기 버튼 클릭 이벤트
    $('.select-btn').click(function(e) {
        e.stopPropagation(); // 선물상자 클릭 이벤트 전파 중지
        const company = $(this).data('company');
        selectCompany(company, e);
    });
});

function selectCompany(company, event) {
    event.stopPropagation();
    const companies = {
        'nvidia': {
            name: '엔비디아',
            ceo: 'nvidia_ceo.jpeg',
            logo: 'nvidia.png'
        },
        'apple': {
            name: '애플',
            ceo: 'apple_ceo.webp',
            logo: 'apple.jpg'
        },
        'tesla': {
            name: '테슬라',
            ceo: 'tesla_ceo.jpeg',
            logo: 'tesla.png'
        }
    };

    const selectedCompany = companies[company];
    
    // confirm 대신 단순 alert 사용
    alert(`다인이가 ${selectedCompany.name}를 선택했어요! 🎉`);
    
    // 알림창이 닫히면 바로 페이지 전환
    $('.container, h1').fadeOut(1000, function() {
        // 새로운 콘텐츠로 페이지 변경
        $('body').html(`
            <div class="final-page">
                <img src="${selectedCompany.logo}" alt="${selectedCompany.name} 로고" class="final-logo">
                <img src="${selectedCompany.ceo}" alt="CEO 이미지" class="ceo-image">
                <h1 class="final-message">${selectedCompany.name}의 주가를<br>올리겠습니다!!</h1>
            </div>
        `);
        
        // 새 콘텐츠를 페이드인
        $('.final-page').hide().fadeIn(1000);
    });
} 