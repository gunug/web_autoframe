# web_autoframe

AutoFrame(안드로이드 디지털 액자 앱) 랜딩 페이지.

순수 HTML / CSS / JS. 빌드 도구·프레임워크 없음.

## 구조

```
index.html      영어 랜딩 페이지 (기본)
privacy.html    영어 개인정보 처리방침
terms.html      영어 이용약관
ko/index.html   한국어 랜딩 페이지
ko/privacy.html 한국어 개인정보 처리방침
ko/terms.html   한국어 이용약관
en/*.html       옛 영어 주소 → 루트로 보내는 리다이렉트 스텁
css/style.css   공용 스타일 (라이트/다크 테마, 반응형)
js/main.js      공용 스크립트 (테마 토글, 스크롤 리빌, 히어로 슬라이드쇼, FAQ)
assets/         로고·OG 이미지
```

영어가 기본 언어입니다. OAuth 심사가 루트 주소를 영어로 읽기 때문에 루트를 영어로 두고
한국어를 `ko/` 아래로 내렸습니다.

두 언어는 같은 CSS/JS를 공유하고, 상단 `KO / EN` 토글로 서로 이동합니다.
기능 섹션은 **기본 기능(무료)** 과 **프리미엄 기능** 하위 섹션으로 나뉩니다.

## 실행

파일을 그대로 열거나, 로컬 서버로:

```bash
python -m http.server 8000
# http://localhost:8000
```

## 배포

GitHub Pages(`main` 브랜치 루트)로 배포됩니다. 커스텀 도메인은 `CNAME` 파일에 있습니다.

- English: https://autoframe.onethelab.com/
- 한국어: https://autoframe.onethelab.com/ko/
- 개인정보 처리방침(영): https://autoframe.onethelab.com/privacy.html
- 이용약관(영): https://autoframe.onethelab.com/terms.html
- 개인정보 처리방침(한): https://autoframe.onethelab.com/ko/privacy.html
- 이용약관(한): https://autoframe.onethelab.com/ko/terms.html

## 앱

- Google Play: `com.onethelab.autoframe`
