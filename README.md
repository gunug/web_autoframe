# web_autoframe

AutoFrame(안드로이드 디지털 액자 앱) 랜딩 페이지.

순수 HTML / CSS / JS. 빌드 도구·프레임워크 없음.

## 구조

```
index.html      한국어 랜딩 페이지
en/index.html   영어 랜딩 페이지
css/style.css   공용 스타일 (라이트/다크 테마, 반응형)
js/main.js      공용 스크립트 (테마 토글, 스크롤 리빌, 히어로 슬라이드쇼, FAQ)
assets/         로고·OG 이미지
```

두 페이지는 같은 CSS/JS를 공유하고, 상단 `KO / EN` 토글로 서로 이동합니다.
기능 섹션은 **기본 기능(무료)** 과 **프리미엄 기능** 하위 섹션으로 나뉩니다.

## 실행

파일을 그대로 열거나, 로컬 서버로:

```bash
python -m http.server 8000
# http://localhost:8000
```

## 배포

정적 호스팅(GitHub Pages, Cloudflare Pages 등)에 루트 그대로 올리면 됩니다.

## 앱

- Google Play: `com.onethelab.autoframe`
