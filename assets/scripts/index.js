//Code
//------------------------------------------------------------------------------
'use strict';

const chapters = $('.menu__navigation-int');
const chaptersContent = $('.content__book');
const chapterIntro = $('.content__intro');

const chapterName = $('.content__caption');

const prevButton = $('.content__paginator-icon_arrow-left');
const nextButton = $('.content__paginator-icon_arrow-right');
const homeButton = $('.content__paginator-icon_home');

function hiddenChapters() {
  for (let i = 0; i < chapters.length + 1; i++) {
    if ( !($(chapters[i]).hasClass('disabled')) ) {
      $(chaptersContent[i]).addClass('disabled');
    }
  }
}

function searchCurrentChapter() {
  for (let i = 0; i < chaptersContent.length; i++) {
    if ( !($(chaptersContent[i]).hasClass('disabled')) ) {
      return i;
    }
  }
}

function showPrevChapter() {
  let currentChapter = searchCurrentChapter();
  
  if ( !(currentChapter <= 0) ) {
    hiddenChapters();
    
    currentChapter--;
    $(chaptersContent[currentChapter]).removeClass('disabled');
  
    showChapterName();
  }
}

function showNextChapter() {
  let currentChapter = searchCurrentChapter();
  
  if ( !(currentChapter === chaptersContent.length - 1) ) {
    hiddenChapters();
    
    currentChapter++;
    $(chaptersContent[currentChapter]).removeClass('disabled');
  
    showChapterName();
  }
}

function showHomeChapter() {
  hiddenChapters();
  chapterIntro.removeClass('disabled');
  
  showChapterName();
}

function showChapter(chapterNum) {
  hiddenChapters();
  
  $(chaptersContent[chapterNum]).removeClass('disabled');
  
  showChapterName();
}

function showChapterName() {
  let currentChapter = searchCurrentChapter();
  
  switch (currentChapter) {
    default:
      $(chapterName).html(' ');
      break;
    case 1:
      $(chapterName).html('Введение');
      break;
    case 2:
      $(chapterName).html('Применение и устройство ручной ножовки');
      break;
    case 3:
      $(chapterName).html('Подготовка к работе ножовкой. Положение рабочего');
      break;
    case 4:
      $(chapterName).html('Резка ножовкой круглого, квадратного и листового металла');
      break;
    case 5:
      $(chapterName).html('Основные виды технических средств обучения и их классификация');
      break;
    case 6:
      $(chapterName).html('Экранные средства обучения и воспитания');
      break;
    case 7:
      $(chapterName).html('Технические устройства экранной статической проекции');
      break;
    case 8:
      $(chapterName).html('Современные технические средства обучения');
      break;
    case 9:
      $(chapterName).html('Заключение');
      break;
    case 10:
      $(chapterName).html('Список использованных источников');
      break;
  }
}

$(prevButton).on('click', showPrevChapter);
$(nextButton).on('click', showNextChapter);
$(homeButton).on('click', showHomeChapter);

$(chapters[0]).on('click', () => { showChapter(1)  });
$(chapters[1]).on('click', () => { showChapter(2)  });
$(chapters[2]).on('click', () => { showChapter(3)  });
$(chapters[3]).on('click', () => { showChapter(4)  });
$(chapters[4]).on('click', () => { showChapter(5)  });
$(chapters[5]).on('click', () => { showChapter(6)  });
$(chapters[6]).on('click', () => { showChapter(7)  });
$(chapters[7]).on('click', () => { showChapter(8)  });
$(chapters[8]).on('click', () => { showChapter(9)  });
$(chapters[9]).on('click', () => { showChapter(10) });