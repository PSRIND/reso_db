const menuItems = document.querySelectorAll('.menu-item');
const sectionLabel = document.getElementById('current-section-label');
const sectionValue = document.getElementById('current-section-value');
const sectionDesc = document.getElementById('current-section-desc');

const sectionInfo = {
  characters: {
    label: '현재 메뉴',
    title: '캐릭터 DB',
    desc: '캐릭터 능력치, 속성, 역할별로 검색하고 필터링할 수 있는 데이터베이스입니다.'
  },
  equipment: {
    label: '현재 메뉴',
    title: '장비 DB',
    desc: '무기 / 방어구 / 특수 장비 정보를 정리한 데이터베이스입니다. (구현 예정)'
  },
  items: {
    label: '현재 메뉴',
    title: '아이템 DB',
    desc: '소모품 / 재료 / 기타 아이템 정보를 정리할 예정입니다.'
  },
  tools: {
    label: '현재 메뉴',
    title: '도구 & 계산기',
    desc: '빌드 시뮬레이터 / 재화 계산기 / 파밍 루트 플래너 등 유틸리티 도구를 모아둘 영역입니다.'
  }
};

function setSection(section) {
  menuItems.forEach(btn => {
    const sec = btn.getAttribute('data-section');
    btn.classList.toggle('active', sec === section);
  });

  const info = sectionInfo[section];
  if (!info) {
    return;
  }

  sectionLabel.textContent = info.label;
  sectionValue.textContent = info.title;
  sectionDesc.textContent = info.desc;
}

menuItems.forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.getAttribute('data-section');
    setSection(section);
  });
});

setSection('characters');
